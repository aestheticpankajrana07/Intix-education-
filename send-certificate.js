// ═══════════════════════════════════════════
//  INTIX EDUCATION — Certificate Email Sender
//  Netlify Function using Nodemailer
// ═══════════════════════════════════════════

const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const { studentName, studentEmail, courseName, certId, certDate } = JSON.parse(event.body);

    if (!studentEmail || !studentName) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const emailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>INTIX Certificate</title>
</head>
<body style="margin:0;padding:0;background:#07090f;font-family:'DM Sans',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#0b0f19;border:1px solid rgba(59,130,246,0.2);border-radius:20px;overflow:hidden;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#1a2040,#0f1629);padding:40px;text-align:center;border-bottom:1px solid rgba(59,130,246,0.15);">
      <div style="font-size:36px;margin-bottom:8px">∞</div>
      <h1 style="font-size:24px;font-weight:800;color:#f0f4ff;letter-spacing:0.1em;margin:0">INTIX EDUCATION</h1>
      <p style="color:#8892a4;font-size:13px;margin:8px 0 0;letter-spacing:0.1em">INDIA'S FUTURISTIC LEARNING PLATFORM</p>
    </div>

    <!-- Main Content -->
    <div style="padding:48px 40px;text-align:center;">
      <div style="font-size:48px;margin-bottom:20px">🏆</div>
      <h2 style="color:#f0f4ff;font-size:26px;font-weight:800;margin:0 0 12px">Congratulations!</h2>
      <p style="color:#8892a4;font-size:15px;line-height:1.7;margin:0 0 32px">
        You've earned your verified INTIX certificate!
      </p>

      <!-- Certificate Preview Box -->
      <div style="background:linear-gradient(135deg,rgba(59,130,246,0.08),rgba(139,92,246,0.08));border:1px solid rgba(59,130,246,0.2);border-radius:16px;padding:32px;margin:0 0 32px;text-align:center;">
        <p style="color:#8892a4;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 12px">This certifies that</p>
        <h3 style="background:linear-gradient(135deg,#3b82f6,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:32px;font-weight:800;margin:0 0 16px">${studentName}</h3>
        <p style="color:#8892a4;margin:0 0 8px;font-size:14px">has successfully completed</p>
        <h4 style="color:#f0f4ff;font-size:18px;font-weight:700;margin:0 0 24px">${courseName}</h4>
        <div style="display:inline-block;background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.2);border-radius:100px;padding:8px 20px;font-size:12px;font-weight:700;color:#3b82f6;letter-spacing:0.08em;">⬡ INTIX 2026 VERIFIED</div>
      </div>

      <!-- Certificate Details -->
      <div style="display:flex;justify-content:center;gap:32px;margin:0 0 32px;flex-wrap:wrap;">
        <div style="text-align:center;">
          <p style="color:#4b5567;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 4px">Certificate ID</p>
          <p style="color:#3b82f6;font-weight:700;font-size:13px;margin:0">${certId}</p>
        </div>
        <div style="text-align:center;">
          <p style="color:#4b5567;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 4px">Date Earned</p>
          <p style="color:#f0f4ff;font-weight:700;font-size:13px;margin:0">${certDate}</p>
        </div>
        <div style="text-align:center;">
          <p style="color:#4b5567;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 4px">Authorized By</p>
          <p style="color:#f0f4ff;font-weight:700;font-size:13px;margin:0;font-style:italic">Pushkar Rana</p>
        </div>
      </div>

      <!-- CTA Button -->
      <a href="https://intixeducation.netlify.app/courses.html" style="display:inline-block;background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;text-decoration:none;padding:14px 32px;border-radius:12px;font-weight:700;font-size:15px;">
        Continue Learning 🚀
      </a>
    </div>

    <!-- Footer -->
    <div style="padding:24px 40px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
      <p style="color:#4b5567;font-size:12px;margin:0 0 8px">© 2026 INTIX EDUCATION. All rights reserved.</p>
      <p style="color:#4b5567;font-size:12px;margin:0">
        <a href="https://intixeducation.netlify.app" style="color:#3b82f6;text-decoration:none">intixeducation.netlify.app</a>
        · India's Futuristic Learning Platform 🇮🇳
      </p>
    </div>
  </div>
</body>
</html>
    `;

    await transporter.sendMail({
      from: `"INTIX EDUCATION" <${process.env.EMAIL_USER}>`,
      to: studentEmail,
      subject: `🏆 INTIX EDUCATION — Your Certificate for ${courseName}`,
      html: emailHTML,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    console.error('Email error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Email failed', message: error.message })
    };
  }
};
