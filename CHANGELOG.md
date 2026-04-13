# Changelog

All notable changes to this project will be documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

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
