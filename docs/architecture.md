# Architecture Overview

## Project Structure
- src/modules: feature modules
- src/common: shared utilities
- src/config: environment & configuration
- prisma/: database schema and migrations
- test/: e2e and unit tests

## Technology Stack
- Node.js, TypeScript, NestJS
- PostgreSQL (via Prisma)
- Docker & Docker Compose

## CI/CD
- GitHub Actions workflow: .github/workflows/ci.yml
