# My Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcase your work, experience, and skills with an elegant and interactive design.

## Features

- **Hero Section** - Engaging introduction with a call-to-action
- **Projects Showcase** - Display your best work with detailed project cards
- **Experience Timeline** - Highlight your professional background and achievements
- **Tech Stack** - Showcase the technologies and tools you work with
- **Contact Form** - Get in touch section with email integration and reCAPTCHA protection
- **Responsive Design** - Fully mobile-optimized for all devices
- **Smooth Animations** - Polished transitions and interactive elements
- **Dark/Light Mode Ready** - Built with Tailwind CSS for easy theme customization

## Tech Stack

- **Frontend Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form
- **Email Service**: EmailJS
- **Validation**: Zod
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js & npm (or Bun)
- Git

### Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd my-portfolio-react
```

2. Install dependencies:
```sh
npm install
# or with bun
bun install
```

3. Start the development server:
```sh
npm run dev
# or with bun
bun run dev
```

The application will be available at `http://localhost:8080`

## Building for Production

To create an optimized production build:

```sh
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build locally:

```sh
npm run preview
```

## Customization

### Update Personal Information

Edit the component files in `src/components/` to add your:
- Name and tagline (Hero.tsx)
- Projects (Projects.tsx)
- Professional experience (Experience.tsx)
- Technical skills (TechStack.tsx)
- Contact details (Contact.tsx)

### Email Configuration

Set up EmailJS integration in `src/services/emailService.ts` with your credentials to enable the contact form.

### reCAPTCHA Setup

Add your reCAPTCHA site key to the environment configuration for form protection.

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── ...          # Feature components
├── pages/           # Page components
├── services/        # External services (email, etc.)
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
└── lib/             # Library helpers
```

## Development

### Running Linter

```sh
npm run lint
```

### Build in Development Mode

```sh
npm run build:dev
```

## Deployment

This portfolio can be deployed to any static hosting platform:

- **Vercel**: Push to GitHub and deploy directly
- **Netlify**: Connect your repository for automatic deployments
- **GitHub Pages**: Configure GitHub Actions for CI/CD
- **AWS S3 + CloudFront**: Manual deployment option

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on the repository.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
