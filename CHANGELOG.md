# Changelog

All notable changes to this project will be documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.0.3] - 2026-04-13
### Changed
- Split CI/CD into two workflows: ci.yml (quality gates) and deploy.yml (build+deploy)
- Merges to main now automatically trigger build and deploy
- deploy.yml no longer runs quality gate checks (enforced at PR stage via ci.yml)

## [1.0.2] - 2026-04-13
### Added
- Branch naming convention enforced in CI (v<major>.<minor>.<patch>-<description>)
- PR-only merges to main — direct pushes blocked
- Branch protection requiring check-changelog to pass

## [1.0.1] - 2026-04-13
### Changed
- Updated GitHub Actions to Node.js 24
- Fixed npm install flag (--omit=dev)
- Fixed Docker port binding for Cloudflare tunnel access

## [1.0.0] - 2026-04-13
### Added
- Initial hello-world Express app
- Docker + docker-compose setup
- GitHub Actions CI/CD pipeline
- Cloudflare tunnel integration
