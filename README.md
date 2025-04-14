- [Matthieu Vagnon - Personal Website](#matthieu-vagnon---personal-website)
  - [🚀 Features](#-features)
  - [📋 Prerequisites](#-prerequisites)
  - [🛠️ Installation](#️-installation)
  - [🚀 Getting Started](#-getting-started)
  - [🔧 Available Scripts](#-available-scripts)
  - [📦 Project Structure](#-project-structure)
  - [Getting Started](#getting-started)
  - [Learn More](#learn-more)
  - [Deploy on Vercel](#deploy-on-vercel)
  - [🌐 Internationalization](#-internationalization)
  - [🎨 Styling](#-styling)
  - [👨‍💻 Author](#-author)
  - [🙏 Acknowledgements](#-acknowledgements)

# Matthieu Vagnon - Personal Website

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.2.2-black)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Personal web application developed with Next.js, React and TypeScript.

## 🚀 Features

- **Modern Interface** - Responsive design with Tailwind CSS
- **Multi-language** - Support for multiple languages with next-intl
- **Accessibility** - Accessible components using Radix UI
- **Themes** - Support for light and dark modes
- **Animations** - Smooth animations with Framer Motion
- **Performance** - Optimized with Vercel Speed Insights

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn

## 🛠️ Installation

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/matthieu-vagnon-web.git
   cd matthieu-vagnon-web
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables
   ```bash
   cp .env.example .env.local
   ```
   Edit the `.env.local` file to configure your environment variables.

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🔧 Available Scripts

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Builds the application for production
- `npm run start` - Starts the application in production mode
- `npm run lint` - Runs ESLint to check code quality

## 📦 Project Structure

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🌐 Internationalization

This project uses `next-intl` for translation management. Translation files are located in the `messages/` folder.

## 🎨 Styling

- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Tailwind Merge](https://github.com/dcastil/tailwind-merge) for conditional class management
- [Class Variance Authority](https://cva.style/docs) for components with variants

## 👨‍💻 Author

- [Matthieu Vagnon](https://mvagnon.dev)

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [Radix UI](https://www.radix-ui.com/)
- And all other contributors and libraries used in this project
