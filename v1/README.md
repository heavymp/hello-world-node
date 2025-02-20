# TypeScript Express Hello World (v1)

Basic Hello World implementation with Express.js and TypeScript.

## Features
- Express.js web server
- TypeScript support
- Docker containerization
- Automatic deployment via Coolify

## Project Structure
\`\`\`
v1/
├── src/
│   └── index.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
└── tsconfig.json
\`\`\`

## Development
\`\`\`bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Run in production mode
npm start
\`\`\`

## Deployment
Automatically deployed to Coolify when changes are pushed to the master branch.

## Access
The application is accessible at: http://os48wos4gw0ww4c040k4co84.145.223.80.149.sslip.io/
