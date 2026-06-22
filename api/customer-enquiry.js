import nodemailer from 'nodemailer';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatPackagesTable(packages) {
  if (!Array.isArray(packages) || !packages.length) {
    return '<p>No package details provided.</p>';
  }

  const rows = packages
    .map(
      (pkg, index) => `
        <tr>
          <td style="border:1px solid #ddd;padding:8px;">${index + 1}</td>
          <td style="border:1px solid #ddd;padding:8px;">${escapeHtml(pkg.qty)}</td>
          <td style="border:1px solid #ddd;padding:8px;">${escapeHtml(pkg.actual_weight)}</td>
          <td style="border:1px solid #ddd;padding:8px;">${escapeHtml(pkg.volumetric_weight)}</td>
        </tr>
      `
    )
    .join('');

  return `
    <table style="border-collapse:collapse;width:100%;max-width:640px;">
      <thead>
        <tr>
          <th style="border:1px solid #ddd;padding:8px;text-align:left;">#</th>
          <th style="border:1px solid #ddd;padding:8px;text-align:left;">Packages</th>
          <th style="border:1px solid #ddd;padding:8px;text-align:left;">Actual Weight</th>
          <th style="border:1px solid #ddd;padding:8px;text-align:left;">Volumetric Weight</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  const {
    date,
    customer_name,
    contact_number,
    company_name,
    pickup_location,
    pickup_zip_code,
    destination,
    destination_zip_code,
    contents,
    remarks,
    packages,
  } = req.body;

  if (!customer_name || !contact_number || !pickup_location || !destination) {
    return res.status(400).json({
      success: false,
      message: 'Required fields are missing.',
    });
  }

  try {
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
      subject: `New Customer Enquiry - ${customer_name}`,
      html: `
        <h2>New Customer Enquiry</h2>
        <p><strong>Date:</strong> ${escapeHtml(date)}</p>
        <p><strong>Customer Name:</strong> ${escapeHtml(customer_name)}</p>
        <p><strong>Contact Number:</strong> ${escapeHtml(contact_number)}</p>
        <p><strong>Company Name:</strong> ${escapeHtml(company_name)}</p>
        <p><strong>Pickup Location:</strong> ${escapeHtml(pickup_location)}</p>
        <p><strong>Pickup Zip Code:</strong> ${escapeHtml(pickup_zip_code)}</p>
        <p><strong>Destination:</strong> ${escapeHtml(destination)}</p>
        <p><strong>Destination Zip Code:</strong> ${escapeHtml(destination_zip_code)}</p>
        <p><strong>Contents/HSN Code:</strong> ${escapeHtml(contents)}</p>
        <p><strong>Remarks:</strong> ${escapeHtml(remarks)}</p>
        <h3>Package Details</h3>
        ${formatPackagesTable(packages)}
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Customer enquiry submitted successfully',
    });
  } catch (error) {
    console.error('Customer enquiry form error:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to submit enquiry. Please try again.',
    });
  }
}
