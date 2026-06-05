export default async function handler(req, res) {
  try {
    const r = await fetch('https://rendimientos.co/api/cer-precios', { signal: AbortSignal.timeout(8000) });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(502).json({ error: e.message });
  }
};
