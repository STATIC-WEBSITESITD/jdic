import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // TEMP LOGS FOR DEBUGGING ENV
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  const { name, email, mobile, subject, message } = req.body;

  console.log('Form Data Received:', {
    name,
    email,
    mobile,
    subject,
    message,
  });

  // Nodemailer transporter setup after form data received
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
    subject: `New Enquiry - ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank You for Contacting JD International Courier',
    html: `
      <h2>Thank You</h2>
      <p>Dear ${name},</p>
  
      <p>We have received your enquiry.</p>
  
      <p>Our team will contact you shortly.</p>
  
      <br>
  
      <p>Regards,</p>
      <p>JD International Courier</p>
    `,
  });

  return res.status(200).json({
    success: true,
    message: 'Form data received successfully',
  });
}