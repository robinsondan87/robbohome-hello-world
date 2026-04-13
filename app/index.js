const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'unknown';

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RobboHome Hello World</title>
  <style>
    body { font-family: monospace; background: #0d1117; color: #c9d1d9; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    .card { text-align: center; border: 1px solid #30363d; border-radius: 8px; padding: 2rem 3rem; }
    h1 { font-size: 1.4rem; color: #58a6ff; margin: 0 0 1rem; }
    .version { font-size: 2.5rem; font-weight: bold; color: #3fb950; }
    .label { font-size: 0.75rem; color: #8b949e; margin-top: 0.5rem; }
    .env { margin-top: 1.5rem; font-size: 0.85rem; color: #8b949e; }
  </style>
</head>
<body>
  <div class="card">
    <h1>RobboHome Hello World</h1>
    <div class="version">v${VERSION}</div>
    <div class="label">current version</div>
    <div class="env">env: ${process.env.NODE_ENV || 'development'}</div>
  </div>
</body>
</html>`);
});

app.get('/healthz', (req, res) => res.json({ status: 'ok', version: VERSION }));

app.listen(PORT, () => console.log(`Running on port ${PORT} — v${VERSION}`));
