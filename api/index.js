
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzzFW8f0-Ag6LsLed4sSh9eirOCrfmETg9Ytlj_g9KNXB978Kb_pYapdU4gUxQESBy_YA/exec';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (!['GET', 'POST'].includes(req.method)) {
    return res.status(405).json({ ok: false, message: 'Method tidak disokong.' });
  }

  try {
    const url = new URL(APPS_SCRIPT_URL);

    if (req.method === 'GET') {
      for (const [key, value] of Object.entries(req.query || {})) {
        if (Array.isArray(value)) value.forEach(v => url.searchParams.append(key, v));
        else if (value != null) url.searchParams.set(key, value);
      }
    }

    const options = { method: req.method, redirect: 'follow' };

    if (req.method === 'POST') {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = typeof req.body === 'string'
        ? req.body
        : JSON.stringify(req.body || {});
    }

    const response = await fetch(url.toString(), options);
    const text = await response.text();

    res.status(response.status);
    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/json; charset=utf-8');
    return res.send(text);
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message || String(error) });
  }
};
