# Reymart Militante Portfolio

A personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Local Setup

### Prerequisites

- **Node.js**: Version 18.x or higher ([Download](https://nodejs.org/))
- **npm**: Included with Node.js
- **Git**: For version control ([Download](https://git-scm.com/))

Verify your installations:

```bash
node --version
npm --version
git --version
```

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd portfolio
npm install
```

You can also use `pnpm install` or `yarn install` if preferred.

### Development

Start the development server:

```bash
npm run dev
```

The application runs at [http://localhost:3001](http://localhost:3001).

### Production

Build and start the production application:

```bash
npm run build
npm start
```

Run the linter with:

```bash
npm run lint
```

## Project Structure

```text
portfolio/
├── app/                 # Next.js app directory and page sections
├── components/         # Shared UI components
├── lib/                 # Utility functions
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## Technology Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Vercel Analytics](https://vercel.com/analytics)

## Environment Variables

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages directly from the browser. From the project root, copy `.env.local.example` to `.env.local` and replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

PowerShell:

```powershell
Copy-Item .env.local.example .env.local
```

Configure the EmailJS template to deliver messages to `martmorbos@gmail.com`. The template receives these variables:

- `from_name`
- `from_email`
- `company`
- `message`
- `to_email`

Restart the development server after changing environment variables. EmailJS public keys are intended for browser use, but private credentials should never be added to `.env.local` or exposed to the client.

## Troubleshooting

If port `3001` is already in use, start the development server on another port:

```bash
npm run dev -- -p 3002
```

If dependencies need to be reinstalled:

```bash
rm -rf node_modules package-lock.json
npm install
```

On Windows PowerShell, remove the dependencies with:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

To clear the Next.js build cache:

```bash
rm -rf .next
npm run build
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Confirm the project settings.
4. Deploy the application.

See the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for additional details.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
