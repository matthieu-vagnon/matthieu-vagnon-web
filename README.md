- [Matthieu Vagnon Web - Personal Website](#matthieu-vagnon-web---personal-website)
  - [💻 Gallery](#-gallery)
  - [🚀 Features](#-features)
  - [🛠️ Installation](#️-installation)
    - [Prerequisites](#prerequisites)
    - [Set Up Local Repository](#set-up-local-repository)
    - [Run the App](#run-the-app)
  - [🔧 Available Scripts](#-available-scripts)
  - [📦 Project Structure](#-project-structure)
  - [🌐 Internationalization](#-internationalization)
  - [🎨 Styling](#-styling)
  - [👨‍💻 Author](#-author)

# Matthieu Vagnon Web - Personal Website

![Version](https://img.shields.io/badge/version-1.2.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.2.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

Personal portfolio web application developed with React, Next.js, TypeScript, Tailwind CSS and Framer Motion. The goal is to let people watch my case studies, my profile, contact me and access my links in a simple way on mobile and desktop. This app is deployed on Vercel.

## 💻 Gallery

Further explaination of the project as well as images from the software are available [here](https://www.mvagnon.dev/case-studies/matthieu-vagnon).

## 🚀 Features

- **Modern Interface** - Responsive design with Tailwind CSS
- **Multi-language** - Support for multiple languages with next-intl
- **Accessibility** - Accessible components using Radix UI
- **Themes** - Support for multiple color modes
- **Animations** - Smooth animations with Framer Motion
- **Performance** - Optimized with Vercel Speed Insights
- **SEO** - Excellent SEO using Next.js metadatas management

## 🛠️ Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Set Up Local Repository

1. Clone the repository

   ```bash
   git clone https://github.com/matthieu-vagnon/matthieu-vagnon-web.git
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

### Run the App

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

## 🌐 Internationalization

This project uses `next-intl` for translation management. Translation files are located in the `messages/` folder.

## 🎨 Styling

- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Tailwind Merge](https://github.com/dcastil/tailwind-merge) for conditional class management
- [Class Variance Authority](https://cva.style/docs) for components with variants

## 👨‍💻 Author

- [Matthieu Vagnon](https://mvagnon.dev)
