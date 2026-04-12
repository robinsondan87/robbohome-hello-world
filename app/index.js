const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'unknown';

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from RobboHome!',
    version: VERSION,
    env: process.env.NODE_ENV || 'development'
  });
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Running on port ${PORT} — v${VERSION}`));
