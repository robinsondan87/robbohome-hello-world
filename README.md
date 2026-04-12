# robbohome-hello-world

A simple Node.js/Express app serving as the foundation of the RobboHome SDLC pipeline.

## Local dev

```bash
make dev          # starts at http://localhost:3000
```

## Release

```bash
make bump-patch   # 1.0.0 → 1.0.1
git push && git push --tags   # triggers CI/CD
```

## Endpoints

- `GET /` — version + env info
- `GET /health` — health check
