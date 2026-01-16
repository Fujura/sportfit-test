# Sportfit Landing Page

A modern, responsive landing page built with React Router v7, featuring server-side rendering, TypeScript, and Tailwind CSS v4.

## 🚀 Tech Stack

- **Framework**: React Router v7 with SSR
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite 7
- **Runtime**: React 19

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🛠️ Installation

```bash
# Install dependencies
npm install
```

## 🏃 Development

```bash
# Start development server with HMR
npm run dev

# Type checking
npm run typecheck

# Build for production
npm run build

# Start production server
npm start
```

The development server will be available at `http://localhost:5173`

## 📁 Project Structure

```
app/
├── layout/           # Layout components (Header, etc.)
├── routes/           # Route pages and components
│   └── home/        # Home page with sections
├── shared/          # Shared utilities and components
│   ├── components/  # Reusable UI components
│   └── helpers/     # Utility functions
└── app.css          # Global styles and Tailwind config
```

## 🎨 Features

- ✅ Server-side rendering (SSR)
- ✅ Responsive design (mobile-first)
- ✅ Interactive carousel component
- ✅ Smooth animations and transitions
- ✅ Type-safe with TypeScript
- ✅ Path aliases (`~/*`, `@/*`)
- ✅ Custom font integration (Play)

## 📝 Available Scripts

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start development server     |
| `npm run build`     | Build for production         |
| `npm run start`     | Start production server      |
| `npm run typecheck` | Run TypeScript type checking |

## 🔧 Configuration

- **TypeScript**: `tsconfig.json`
- **Vite**: `vite.config.ts`
- **React Router**: `react-router.config.ts`
- **Tailwind**: Configured in `app/app.css`

## 📚 Documentation

- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)

## 🏗️ Architecture

The project follows a feature-based architecture with clear separation of concerns:

- **Routes**: Page-level components and route-specific logic
- **Shared Components**: Reusable UI components (Button, Carousel)
- **Layout**: Global layout components
- **Helpers**: Utility functions and business logic

## 📄 License

Private project
