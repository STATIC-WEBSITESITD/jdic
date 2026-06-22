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
  const {
    shipperContactName,
    shipperEmail,
    shipperMobile,
    shipperCountry,
    shipperState,
    shipperCity,
    shipperZip,
    shipperAddress,
    estimatedWeight,
    pickupDate,
    productType,
    consigneeContactName,
    consigneeEmail,
    consigneeMobile,
    consigneeCountry,
    consigneeState,
    consigneeCity,
    consigneeZip,
    consigneeAddress,
  } = req.body;

  console.log('Form Data Received:', {
    shipperContactName,
    shipperEmail,
    shipperMobile,
    shipperCountry,
    shipperState,
    shipperCity,
    shipperZip,
    shipperAddress,
    estimatedWeight,
    pickupDate,
    productType,
    consigneeContactName,
    consigneeEmail,
    consigneeMobile,
    consigneeCountry,
    consigneeState,
    consigneeCity,
    consigneeZip,
    consigneeAddress,
  });

  // Nodemailer transporter setup after form data received
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Pickup Request - ${shipperContactName}`,
      html: `
      <h2>New Pickup Request</h2>
      <h3>1. Pickup Location (Shipper)</h3>
      <p><strong>Contact Name:</strong> ${shipperContactName}</p>
      <p><strong>Email:</strong> ${shipperEmail}</p>
      <p><strong>Mobile:</strong> ${shipperMobile}</p>
      <p><strong>Country:</strong> ${shipperCountry}</p>
      <p><strong>State:</strong> ${shipperState}</p>
      <p><strong>City:</strong> ${shipperCity}</p>
      <p><strong>Zip / Postal Code:</strong> ${shipperZip}</p>
      <p><strong>Address:</strong> ${shipperAddress}</p>
      <p><strong>Estimated Weight (kg):</strong> ${estimatedWeight}</p>
      <p><strong>Pickup Date:</strong> ${pickupDate}</p>
      <p><strong>Product Type:</strong> ${productType}</p>
      <h3>2. Drop Off Location (Consignee)</h3>
      <p><strong>Contact Name:</strong> ${consigneeContactName}</p>
      <p><strong>Email:</strong> ${consigneeEmail}</p>
      <p><strong>Mobile:</strong> ${consigneeMobile}</p>
      <p><strong>Country:</strong> ${consigneeCountry}</p>
      <p><strong>State:</strong> ${consigneeState}</p>
      <p><strong>City:</strong> ${consigneeCity}</p>
      <p><strong>Zip / Postal Code:</strong> ${consigneeZip}</p>
      <p><strong>Address:</strong> ${consigneeAddress}</p>
    `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: shipperEmail,
      subject: 'Thank You for Your Pickup Request - JD International Courier',
      html: `
      <h2>Thank You</h2>
      <p>Dear ${shipperContactName},</p>

      <p>We have received your pickup request.</p>

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
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
    });
  }
}