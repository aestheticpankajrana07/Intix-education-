// ═══════════════════════════════════════════
//  INTIX EDUCATION — Netlify Function
//  Telegram Notification System
// ═══════════════════════════════════════════

exports.handler = async function(event, context) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { message } = JSON.parse(event.body);
    if (!message) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Message required' }) };
    }

    // Get credentials from environment variables
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8779827418:AAFSmE_GF3-smxhf9J6D8HOkWYn7kPrQTro';
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '7649201511';

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    const result = await response.json();

    if (!result.ok) {
      console.error('Telegram API error:', result);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Telegram API error', details: result })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message_id: result.result?.message_id })
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal error', message: error.message })
    };
  }
};
