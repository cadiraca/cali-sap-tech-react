# Cali SAP Tech Community Website

A modern, responsive landing page for the SAP technical community in Cali, Colombia. Built with Next.js and featuring a vibrant design that celebrates the rhythm and energy of Valle del Cauca.

## 🌟 About

**Cali SAP Tech** is a vibrant community for SAP professionals in Valle del Cauca, Colombia. We explore, innovate, and share knowledge with the rhythm and energy of our city. This website serves as our digital home, showcasing our community, events, and the passionate founders who drive our mission forward.

### Community Focus
- **SAP Technical Research & Development**
- **Knowledge Sharing & Collaboration**
- **Professional Networking**
- **Innovation in Enterprise Solutions**
- **Local Tech Ecosystem Growth**

## 🚀 Technology Stack

### Core Framework
- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Full type safety implementation

### Styling & UI
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Custom Design System** - Cali-themed color palette and components
- **Lucide React** - Modern icon library
- **React Type Animation** - Dynamic text animations

### Development Tools
- **ESLint 9** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Deployment
- **Cloud Foundry** - Enterprise-grade deployment platform
- **Vercel Compatible** - Alternative deployment option

## 🏗️ Project Structure

```
cali-sap-tech/
├── public/                     # Static assets
│   ├── cali-illustration.png   # Hero section artwork
│   ├── cali-stamp.png         # Branding elements
│   └── *.svg                  # Icons and graphics
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── SiteHeader.tsx
│   │   │   └── SiteFooter.tsx
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.tsx       # Hero section with animations
│   │   │   ├── PastEvent.tsx  # Event showcase
│   │   │   ├── Founders.tsx   # Community founders
│   │   │   └── Cta.tsx        # Call-to-action
│   │   └── ui/                # Reusable UI components
│   │       ├── Avatar.tsx
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Container.tsx
│   │       └── Modal.tsx
│   ├── data/                  # Static data
│   │   ├── events.ts          # Event information
│   │   └── founders.ts        # Community founders
│   ├── lib/                   # Utilities
│   │   └── cn.ts              # Class name utility
│   └── types/                 # TypeScript definitions
│       └── index.ts
├── manifest.yml               # Cloud Foundry deployment
└── Configuration files        # Next.js, Tailwind, ESLint, etc.
```

## 🎨 Design System

### Color Palette (Cali-themed)
- **Pacifico Blue** - Primary brand color
- **Salsa Red** - Accent color representing Cali's salsa culture
- **Chontaduro Gold** - Highlight color
- **Charcoal** - Primary text color
- **Warm White** - Background color

### Typography
- **Bebas Neue** - Display headings
- **Inter** - Body text and UI elements

### Components
- Responsive design with mobile-first approach
- Consistent spacing using Tailwind's spacing scale
- Custom animations and transitions
- Accessible UI components following WCAG guidelines

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/cadiraca/cali-sap-tech-react.git
cd cali-sap-tech-react

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🏢 Community Founders

Our community was founded by passionate SAP professionals:
- Carlos Diego Ramírez
- Jhon Freddy Montaño
- Carlos Alexander Gonzalez
- Carlos Andres Gonzalez
- Yamit Alejandro Huertas
- Carlos Eduardo Cortes
- Mateo Cañas

## 🎯 Key Features

### Dynamic Hero Section
- Animated typing effect showcasing community focus areas
- Responsive design with Cali-themed illustrations
- Call-to-action driving engagement

### Event Showcase
- Display of past and upcoming community events
- Integration with local venues (Globant Site Cali)
- Event type categorization

### Founder Profiles
- Interactive modal system for founder information
- Placeholder avatar generation with initials
- Expandable for future detailed profiles

### Performance Optimizations
- Next.js Image optimization
- Server-side rendering for SEO
- Client-side hydration for interactivity
- Efficient code splitting

## 🚀 Deployment

### Cloud Foundry
The application is configured for Cloud Foundry deployment with the included `manifest.yml`.

```bash
# Build and deploy
npm run build
cf push
```

### Vercel (Alternative)
```bash
# Deploy to Vercel
vercel --prod
```

## 🤝 Contributing

We welcome contributions from the SAP community! Please see our [WORKFLOW.md](./WORKFLOW.md) for detailed technical guidelines on:
- Development workflow and standards
- Component development patterns
- Build and deployment processes
- Code review requirements

## 📄 License

This project is private and maintained by the Cali SAP Tech community.

## 🌐 Community Links

- **Website**: [Coming Soon]
- **LinkedIn**: [Community Group]
- **GitHub**: [Repository](https://github.com/cadiraca/cali-sap-tech-react)

---

Built with ❤️ by the Cali SAP Tech community in Valle del Cauca, Colombia 🇨🇴
