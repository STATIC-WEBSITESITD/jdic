import busboy from 'busboy';
import nodemailer from 'nodemailer';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/octet-stream',
]);

const ALLOWED_EXTENSIONS = new Set(['.pdf', '.doc', '.docx']);

function isAllowedResume({ mimeType, filename }) {
  const ext = filename?.toLowerCase().match(/\.[^.]+$/)?.[0];
  if (!ext || !ALLOWED_EXTENSIONS.has(ext)) return false;

  if (mimeType === 'application/octet-stream') return true;
  return ALLOWED_MIME_TYPES.has(mimeType);
}

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function readRawBody(req) {
  if (Buffer.isBuffer(req.body)) {
    return Promise.resolve(req.body);
  }

  if (typeof req.body === 'string') {
    return Promise.resolve(Buffer.from(req.body, 'binary'));
  }

  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function parseMultipart(headers, rawBody) {
  return new Promise((resolve, reject) => {
    const fields = {};
    let resume = null;

    const parser = busboy({
      headers,
      limits: { fileSize: MAX_FILE_SIZE, files: 1 },
    });

    parser.on('field', (name, value) => {
      fields[name] = value;
    });

    parser.on('file', (fieldname, file, info) => {
      const chunks = [];

      file.on('data', (chunk) => chunks.push(chunk));

      file.on('limit', () => {
        file.resume();
        reject(new Error('Resume file exceeds the 5 MB size limit.'));
      });

      file.on('end', () => {
        resume = {
          fieldname,
          filename: info.filename,
          mimeType: info.mimeType,
          buffer: Buffer.concat(chunks),
        };
      });
    });

    parser.on('error', reject);
    parser.on('finish', () => resolve({ fields, resume }));

    parser.end(rawBody);
  });
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  try {
    const rawBody = await readRawBody(req);

    if (!rawBody?.length) {
      return res.status(400).json({
        success: false,
        message: 'Request body is empty.',
      });
    }

    const { fields, resume } = await parseMultipart(req.headers, rawBody);

    const full_name = fields.full_name?.trim();
    const email = fields.email?.trim();
    const mobile = fields.mobile?.trim();
    const designation = fields.designation?.trim();

    if (!full_name || !email || !mobile || !designation) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    if (!resume?.buffer?.length) {
      return res.status(400).json({
        success: false,
        message: 'Resume file is required.',
      });
    }

    if (!isAllowedResume(resume)) {
      return res.status(400).json({
        success: false,
        message: 'Resume must be a PDF, DOC, or DOCX file.',
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Career Application - ${designation}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Full Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Resume:</strong> ${resume.filename} (attached)</p>
      `,
      attachments: [
        {
          filename: resume.filename,
          content: resume.buffer,
          contentType: resume.mimeType,
        },
      ],
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Applying to JD International Courier',
      html: `
        <h2>Thank You</h2>
        <p>Dear ${full_name},</p>

        <p>We have received your application for the <strong>${designation}</strong> position.</p>

        <p>Our HR team will review your resume and contact you if your profile matches our requirements.</p>

        <br>

        <p>Regards,</p>
        <p>JD International Courier</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Application submitted successfully',
    });
  } catch (error) {
    console.error('Careers form error:', error);

    const message =
      error.message === 'Resume file exceeds the 5 MB size limit.'
        ? error.message
        : 'Failed to submit application. Please try again.';

    return res.status(500).json({
      success: false,
      message,
    });
  }
}
