# TypeScript Express Examples

A collection of Express.js examples using TypeScript, deployed on Coolify.

## Projects

### [v3 - Space Theme]
Advanced React application featuring:
- Animated space background with stars and clouds
- Typing animation with glowing text effect
- Docker containerization with health checks
- Full TypeScript implementation
- Vite for fast development and building
- Proper production configuration

### [v2 - React App]
React application demonstrating:
- Basic React setup with TypeScript
- Vite configuration
- Docker deployment
- Production optimizations

### [v1 - Hello World]
Basic Hello World application demonstrating:
- Express.js setup with TypeScript
- Docker containerization
- Coolify deployment
- Basic endpoint (`GET /`)

## Deployment

### Current Deployments
- v3 (Space Theme): http://os48wos4gw0ww4c040k4co84.145.223.80.149.sslip.io/
- v1 (Hello World): http://os48wos4gw0ww4c040k4co84.145.223.80.149.sslip.io/

### Technical Details
- Port: 4173
- Health Check: Enabled via Docker
- Environment: Production
- Node Version: 20-alpine
- Build Tool: Vite
- Framework: React with TypeScript

### Accessing the Application
- The application runs on port 4173
- Accessible via both desktop and mobile browsers
- If experiencing mobile access issues:
  1. Ensure you're using the correct URL
  2. Try using HTTPS instead of HTTP
  3. Clear browser cache and cookies
  4. Check if your mobile network allows access to the port

### Troubleshooting
If you cannot access the application on mobile:
1. Verify the URL is correct
2. Check if your mobile network/firewall is blocking the connection
3. Try accessing via mobile data instead of WiFi (or vice versa)
4. Ensure you're using the latest version of your mobile browser

## Version Features

### V3 Features
- Space-themed background with animated stars and clouds
- Typing animation with glowing text effect
- Proper Docker health checks
- Full-screen responsive layout
- Optimized build configuration
- TypeScript strict mode
- Production-ready setup

### V2 Features
- React implementation
- TypeScript integration
- Docker containerization
- Vite configuration

### V1 Features
- Basic Express setup
- Simple endpoint
- Docker basics
- TypeScript configuration

## Development

### Quick Start
1. Clone the repository
2. Install dependencies with `npm install`
3. Start development server with `npm run dev`
4. Build for production with `npm run build`
5. Start production server with `npm start`

### Docker Development
1. Build image: `docker build -t hello-world-node-v3 .`
2. Run container: `docker run -p 4173:4173 hello-world-node-v3`
