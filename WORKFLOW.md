# Cali SAP Tech - Technical Workflow Guide

This document outlines the technical architecture, development workflow, and contribution guidelines for the Cali SAP Tech community website.

## 📋 Table of Contents

- [Project Architecture](#project-architecture)
- [Development Environment](#development-environment)
- [Component Development](#component-development)
- [Code Standards](#code-standards)
- [Build & Deployment](#build--deployment)
- [Contribution Workflow](#contribution-workflow)
- [Performance Guidelines](#performance-guidelines)
- [Testing Strategy](#testing-strategy)

## 🏗️ Project Architecture

### Framework Architecture
The application follows Next.js 15 App Router architecture with the following patterns:

#### Server Components (Default)
- **Location**: All components are server components by default
- **Purpose**: SEO optimization, reduced JavaScript bundle size
- **Usage**: Static content, data fetching, layout components

```typescript
// Example: src/app/page.tsx
export default function Page() {
  return (
    <main>
      <Hero variant="formal" />
      <PastEvent />
      <Founders />
      <CommunityNotes />
      <Projects />
      <Cta />
    </main>
  );
}
```

#### Client Components
- **Identifier**: `"use client"` directive
- **Purpose**: Interactive features, animations, state management
- **Usage**: Hero animations, modals, interactive UI

```typescript
// Example: src/components/sections/Hero.tsx
"use client";
import { TypeAnimation } from "react-type-animation";
```

### Directory Structure Standards

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (Server Component)
│   ├── page.tsx           # Home page (Server Component)
│   ├── globals.css        # Global styles and Tailwind imports
│   └── favicon.ico        # Application favicon
├── components/
│   ├── layout/            # Layout-specific components
│   │   ├── SiteHeader.tsx # Global navigation
│   │   └── SiteFooter.tsx # Global footer
│   ├── sections/          # Page section components
│   │   ├── Hero.tsx       # Hero section with animations
│   │   ├── PastEvent.tsx  # Event display section
│   │   ├── Founders.tsx   # Founder profiles section
│   │   ├── CommunityNotes.tsx  # Learning topics calendar
│   │   ├── Projects.tsx   # Project showcase section
│   │   └── Cta.tsx        # Call-to-action section
│   └── ui/                # Reusable UI components
│       ├── Avatar.tsx     # User avatar component
│       ├── Badge.tsx      # Status/category badges
│       ├── Button.tsx     # Button variants
│       ├── Card.tsx       # Content cards
│       ├── Container.tsx  # Layout container
│       └── Modal.tsx      # Modal dialogs
├── data/                  # Static data and content
│   ├── events.ts          # Event data structure
│   ├── founders.ts        # Founder information
│   ├── projects.ts        # Project showcase data
│   └── communityTopics.ts # AI learning topics/initiatives
├── lib/                   # Utility functions
│   └── cn.ts              # className utility (clsx + tailwind-merge)
└── types/                 # TypeScript type definitions
    └── index.ts           # Shared interfaces and types
```

### Component Architecture Patterns

#### Composition Pattern
Components follow a composition-over-inheritance pattern:

```typescript
// Container wrapper for consistent layout
export default function Container({ 
  children, 
  className 
}: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4", className)}>
      {children}
    </div>
  );
}
```

#### Variant Pattern
Components support multiple variants through props:

```typescript
interface HeroProps {
  variant?: "default" | "formal";
}

export default function Hero({ variant = "default" }: HeroProps) {
  return (
    <Image
      className={cn(
        "shadow-xl",
        variant === "formal" ? "rounded-full grayscale" : "rounded-lg"
      )}
    />
  );
}
```

## 🛠️ Development Environment

### Prerequisites
- **Node.js**: 18.x or higher
- **Package Manager**: npm (lockfile committed)
- **IDE**: VSCode recommended with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - ESLint

### Environment Setup

```bash
# 1. Clone repository
git clone https://github.com/cadiraca/cali-sap-tech-react.git
cd cali-sap-tech-react

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Verify setup
curl http://localhost:3000
```

### Development Scripts

```json
{
  "scripts": {
    "dev": "next dev",           // Development server with HMR
    "build": "next build",       // Production build with optimization
    "start": "next start",       // Production server
    "lint": "next lint"          // ESLint code analysis
  }
}
```

## 🧩 Component Development

### Creating New Components

#### 1. UI Components (`src/components/ui/`)
For reusable interface elements:

```typescript
// src/components/ui/NewComponent.tsx
import { cn } from "@/lib/cn";

interface NewComponentProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function NewComponent({ 
  variant = "primary",
  size = "md",
  children,
  className 
}: NewComponentProps) {
  return (
    <div className={cn(
      // Base styles
      "inline-flex items-center justify-center rounded-md",
      // Variant styles
      {
        "bg-pacifico-blue text-white": variant === "primary",
        "bg-gray-100 text-charcoal": variant === "secondary",
      },
      // Size styles
      {
        "px-3 py-1 text-sm": size === "sm",
        "px-4 py-2 text-base": size === "md",
        "px-6 py-3 text-lg": size === "lg",
      },
      className
    )}>
      {children}
    </div>
  );
}
```

#### 2. Section Components (`src/components/sections/`)
For page-specific content sections:

```typescript
// src/components/sections/NewSection.tsx
import Container from "@/components/ui/Container";

interface NewSectionProps {
  title: string;
  data: SectionData[];
}

export default function NewSection({ title, data }: NewSectionProps) {
  return (
    <section className="py-16 bg-warm-white">
      <Container>
        <h2 className="text-3xl font-bebas font-bold text-charcoal mb-8">
          {title}
        </h2>
        {/* Section content */}
      </Container>
    </section>
  );
}
```

### Animation Implementation

Using `react-type-animation` for text effects:

```typescript
import { TypeAnimation } from "react-type-animation";

<TypeAnimation
  sequence={[
    "Research", 2000,
    "Development", 2000,
    "Exploration", 2000,
    "Collaboration", 2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-pacifico-blue"
/>
```

### Image Optimization

Using Next.js Image component for optimal performance:

```typescript
import Image from "next/image";

<Image
  src="/cali-illustration.png"
  alt="Descriptive alt text"
  width={600}
  height={600}
  className="rounded-lg shadow-xl"
  priority // For above-the-fold images
/>
```

## 📏 Code Standards

### TypeScript Guidelines

#### Type Definitions
All interfaces should be defined in `src/types/index.ts`:

```typescript
// src/types/index.ts
export interface Founder {
  name: string;
  role: string;
  avatarUrl: string;
  bio?: string;
}

export interface PastEvent {
  title: string;
  date: string;
  location: string;
  type: string;
  description?: string;
}
```

#### Component Props
Always define explicit prop interfaces:

```typescript
interface ComponentProps {
  // Required props
  title: string;
  data: DataType[];
  
  // Optional props with defaults
  variant?: "default" | "compact";
  showDescription?: boolean;
  
  // React-specific props
  children?: React.ReactNode;
  className?: string;
}
```

### Styling Guidelines

#### Tailwind CSS Usage
- **Custom Colors**: Use theme colors defined in `tailwind.config.js`
- **Responsive Design**: Mobile-first approach with `md:`, `lg:` prefixes
- **Component Variants**: Use conditional classes with `cn()` utility

```typescript
// Custom color usage
className="text-pacifico-blue bg-warm-white border-chontaduro-gold"

// Responsive design
className="text-base md:text-lg lg:text-xl"

// Conditional styling
className={cn(
  "base-styles",
  {
    "variant-styles": condition,
    "another-variant": anotherCondition,
  },
  className
)}
```

#### CSS Custom Properties
For complex animations or theme variations:

```css
/* globals.css */
:root {
  --color-pacifico-blue: #0ea5e9;
  --color-salsa-red: #ef4444;
  --color-chontaduro-gold: #f59e0b;
}
```

### File Naming Conventions
- **Components**: PascalCase (`Hero.tsx`, `SiteHeader.tsx`)
- **Utilities**: camelCase (`cn.ts`, `formatDate.ts`)
- **Data Files**: camelCase (`events.ts`, `founders.ts`)
- **Types**: camelCase (`index.ts`)

## 🚀 Build & Deployment

### Production Build Process

```bash
# 1. Clean previous builds
rm -rf .next

# 2. Run production build
npm run build

# 3. Verify build output
npm run start
```

### Build Optimization

#### Next.js Configuration (`next.config.ts`)
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features
  experimental: {
    optimizeCss: true,
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
```

### Cloud Foundry Deployment

#### Manifest Configuration (`manifest.yml`)
```yaml
---
applications:
  - name: cali-sap-tech-web
    path: .
    buildpack: nodejs_buildpack
    command: npm run start
    memory: 256M
    random-route: false
    routes:
      - route: cali-sap-tech.cfapps.io
```

#### Deployment Commands
```bash
# 1. Build application
npm run build

# 2. Deploy to Cloud Foundry
cf push

# 3. Verify deployment
cf logs cali-sap-tech-web --recent
```

### Alternative Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Set environment variables
vercel env add NEXT_PUBLIC_SITE_URL production
```

## 🔄 Contribution Workflow

### Git Workflow

#### Branch Strategy
```bash
main                    # Production-ready code
├── develop            # Integration branch
├── feature/hero-animations    # Feature development
├── feature/event-management   # Feature development
└── hotfix/modal-fix          # Critical fixes
```

#### Commit Convention
Follow conventional commits:

```bash
feat: add event registration modal
fix: resolve mobile navigation overflow
docs: update component API documentation
style: apply consistent spacing to cards
refactor: extract common modal logic
test: add unit tests for Button component
```

### Pull Request Process

#### 1. Pre-Pull Request Checklist
```bash
# Run linting
npm run lint

# Build without errors
npm run build

# Test in development
npm run dev
```

#### 2. Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Local development testing
- [ ] Production build testing
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile responsiveness testing

## Screenshots/Videos
[Include visual changes]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] No console.log statements
- [ ] TypeScript errors resolved
```

#### 3. Code Review Guidelines

**Reviewers should check:**
- **Functionality**: Feature works as intended
- **Performance**: No unnecessary re-renders or large bundles
- **Accessibility**: ARIA labels, keyboard navigation
- **TypeScript**: Proper type definitions and usage
- **Responsive Design**: Mobile and desktop compatibility
- **Code Quality**: DRY principles, clear naming

### Code Review Checklist

#### Technical Review
- [ ] TypeScript types are properly defined
- [ ] Components follow established patterns
- [ ] No hardcoded values (use constants or props)
- [ ] Proper error handling implemented
- [ ] Performance optimizations applied
- [ ] Accessibility standards met

#### Design Review
- [ ] Matches design specifications
- [ ] Responsive across device sizes
- [ ] Consistent with design system
- [ ] Proper color usage (theme colors)
- [ ] Typography follows guidelines

## ⚡ Performance Guidelines

### Next.js Optimization Strategies

#### Image Optimization
```typescript
// Optimize images with proper sizing
<Image
  src="/hero-image.jpg"
  alt="Description"
  width={1200}
  height={800}
  priority={isAboveFold}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

#### Code Splitting
```typescript
// Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Client-side only if needed
});
```

#### Bundle Analysis
```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

### Performance Monitoring

#### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

#### Optimization Techniques
- Minimize JavaScript bundle size
- Optimize images (WebP format)
- Implement proper caching headers
- Use service workers for offline functionality
- Lazy load non-critical components

## 🧪 Testing Strategy

### Unit Testing Setup

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

### Component Testing Example

```typescript
// __tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from '@/components/ui/Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(<Button variant="secondary">Test</Button>);
    const button = screen.getByText('Test');
    expect(button).toHaveClass('bg-gray-100');
  });
});
```

### E2E Testing Considerations

For future implementation:
- **Playwright** for cross-browser testing
- **Cypress** for user flow testing
- **Lighthouse CI** for performance regression testing

## 🔧 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Clear node_modules if persistent issues
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript Errors
```bash
# Restart TypeScript server in VSCode
Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"

# Check for type mismatches
npx tsc --noEmit
```

#### Styling Issues
```bash
# Restart Tailwind CSS compilation
npm run dev

# Clear browser cache
# Check for class name conflicts in browser DevTools
```

### Development Server Issues

#### Port Conflicts
```bash
# Check what's running on port 3000
lsof -ti:3000

# Kill process if needed
kill -9 $(lsof -ti:3000)

# Use alternative port
npm run dev -- -p 3001
```

#### Module Resolution
```bash
# Verify path mapping in tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Production Deployment Issues

#### Cloud Foundry Troubleshooting
```bash
# Check application logs
cf logs cali-sap-tech-web --recent

# Check application status
cf apps

# Restart application
cf restart cali-sap-tech-web

# Check buildpack compatibility
cf buildpacks
```

#### Memory Issues
```bash
# Monitor memory usage
cf app cali-sap-tech-web

# Increase memory allocation in manifest.yml
memory: 512M  # Increase from 256M if needed
```

## 🎓 Community Features

### Learning Topics

The website includes a Learning Topics section (`src/components/sections/CommunityNotes.tsx`) where community members can propose and contribute to AI-focused learning initiatives.

#### Key Features:
- **Interactive Calendar**: Browse topics by date
- **Clickable Topics**: Each topic opens a detailed modal with full information
- **AI-Focused Content**: Topics cover Claude API, RAG, prompt engineering, and more
- **HTML Vibe Coding**: Topics support rich HTML content for creative presentations

#### Adding New Topics:
See [COMMUNITY_TOPICS_GUIDE.md](./COMMUNITY_TOPICS_GUIDE.md) for detailed instructions on:
- Proposing new learning initiatives
- Using the "Propose Topic" form in the UI
- HTML content patterns and best practices
- AI-assisted topic generation

#### Data Structure:
```typescript
// src/data/communityTopics.ts
export type CommunityTopic = {
  id: string;
  date: string; // ISO format: YYYY-MM-DD
  title: string;
  author: string;
  content: string; // HTML content
  tags?: string[];
};
```

## 📞 Support & Resources

### Internal Resources
- **Primary Maintainer**: Carlos Diego Ramírez
- **Community Slack**: #cali-sap-tech-dev
- **Issue Tracking**: GitHub Issues
- **Learning Topics Guide**: [COMMUNITY_TOPICS_GUIDE.md](./COMMUNITY_TOPICS_GUIDE.md)

### External Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Cloud Foundry Documentation](https://docs.cloudfoundry.org/)
- [Anthropic API Documentation](https://docs.anthropic.com/)

### Recommended Learning Resources
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Next.js Learn Course](https://nextjs.org/learn)
- [Tailwind CSS UI Components](https://tailwindui.com/)

---

**Last Updated**: April 2026
**Document Version**: 1.1

For questions or suggestions regarding this workflow, please create an issue in the repository or reach out to the development team through our community channels.
