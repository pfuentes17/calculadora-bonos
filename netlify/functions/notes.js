exports.handler = async () => {
  try {
    const r = await fetch('https://data912.com/live/arg_notes', { signal: AbortSignal.timeout(8000) });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const data = await r.json();
    return { statusCode: 200, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify(data) };
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ error: e.message }) };
  }
};
