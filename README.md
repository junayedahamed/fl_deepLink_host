# juna 🌊

A lightweight Express server for hosting Android Digital Asset Links (`assetlinks.json`), designed for seamless deployment on Vercel.

## Features

- 🚀 **Express Server:** Simple and efficient routing.
- 📱 **Android App Links:** Serves `/.well-known/assetlinks.json` for deep linking verification.
- ⚡ **Bun Runtime:** Optimized for speed using the Bun JavaScript runtime.
- ☁️ **Vercel Ready:** Pre-configured for serverless deployment via `vercel.json`.

## Getting Started

### Prerequisites

You'll need [Bun](https://bun.sh/) installed on your machine.

### Installation

Clone the repository and install dependencies:

```bash
bun install
```

### Local Development

To start the development server:

```bash
bun dev
```

The server will be available at `http://localhost:3000`. You can verify the asset links at:
`http://localhost:3000/.well-known/assetlinks.json`

## Deployment

### Deploying to Vercel

This project is configured to work out-of-the-box with Vercel.

1. Install the Vercel CLI: `npm install -g vercel`
2. Run `vercel` in the project root to deploy.

## Project Structure

- `index.js`: Main server entry point and Express application.
- `assetlinks.json`: The Digital Asset Links file used by Android.
- `vercel.json`: Vercel deployment configuration.
- `package.json`: Project metadata and dependencies.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/junayedahamed/fl_deepLink_host/blob/main/LICENSE) file for details.
