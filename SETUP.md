# Local Setup Guide

This guide will help you set up and run the portfolio project locally on your machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js, or use your preferred package manager (yarn, pnpm)
- **Git**: For version control ([Download](https://git-scm.com/))

Verify installations:
```bash
node --version
npm --version
git --version
```

## Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd portfolio
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using pnpm:
```bash
pnpm install
```

Or using yarn:
```bash
yarn install
```

## Running the Project

### Development Server

Start the development server which runs on `http://localhost:3001`:

```bash
npm run dev
```

The application will automatically reload when you make changes to the code.

### Production Build

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
portfolio/
├── app/                          # Next.js app directory
│   ├── components/              # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── ...
│   ├── staticData/              # Static data and content
│   │   └── data.ts
│   ├── styles/                  # SCSS modules
│   │   └── style.module.scss
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/                  # Reusable UI components
│   ├── ui/                      # Radix UI components
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   └── ...
│   └── theme-provider.tsx       # Theme provider setup
├── lib/                         # Utility functions
│   └── utils.ts
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [SCSS](https://sass-lang.com/) - CSS preprocessing
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Animation library
- **Icons**: [Lucide React](https://lucide.dev/) - Icon library
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support
- **Analytics**: 
  - [Vercel Analytics](https://vercel.com/analytics)
  - [Vercel Speed Insights](https://vercel.com/speed-insights)

## Environment Setup

Currently, this project does not require environment variables. If you need to add them in the future:

1. Create a `.env.local` file in the root directory
2. Add your environment variables in the format: `NEXT_PUBLIC_VARIABLE_NAME=value`
3. Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
4. Restart the dev server to apply changes

## Troubleshooting

### Port Already in Use

If port 3001 is already in use, the dev server will automatically try the next available port. To explicitly specify a different port:

```bash
npm run dev -- -p 3002
```

### Node Modules Issues

If you encounter issues with node_modules, try:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Ensure TypeScript version is correct:

```bash
npm list typescript
```

Should be 5.1.6 or compatible version.

### Build Failures

Check for linting errors first:

```bash
npm run lint
```

Clear Next.js cache:

```bash
rm -rf .next
npm run build
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/), the platform created by the Next.js team.

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com/) and sign up
3. Import your repository
4. Configure settings and deploy

For detailed deployment instructions, see [Next.js Deployment Documentation](https://nextjs.org/docs/deployment).

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)

## Support

For issues or questions:

1. Check the troubleshooting section above
2. Review the official Next.js documentation
3. Open an issue on GitHub with details about your problem
