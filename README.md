# Next.js Boilerplate

## 🚀 Modern Next.js 15 Boilerplate with TypeScript

A production-ready, ultra-clean boilerplate built with modern web technologies, featuring sophisticated animations and Apple-inspired design principles.

### ✨ Features

- **⚡ Next.js 15** with App Router and Turbopack
- **🎨 TypeScript** for type safety
- **💅 Styled Components** for styling
- **🌍 Internationalization** with next-intl
- **🌙 Theme Support** with Zustand state management
- **📱 Responsive Design** with clamp() functions
- **🎭 Sophisticated Animations** with anime.js
- **🔍 ESLint + Prettier** for code quality
- **📦 pnpm** for efficient package management
- **🎯 Production Optimized** build configuration

### 🛠️ Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Styled Components with theme support
- **Animation**: anime.js for smooth interactions
- **State Management**: Zustand
- **Internationalization**: next-intl
- **Package Manager**: pnpm
- **Linting**: ESLint with Airbnb config
- **Formatting**: Prettier

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/kaankucukx/nextjs-boilerplate.git

# Navigate to project directory
cd nextjs-boilerplate

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### 🏗️ Project Structure

```
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx
│       └── page.tsx
├── components/
│   ├── HomePage.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   ├── LanguageSwitch.tsx
│   └── QueryProvider.tsx
├── constants/
│   └── app.ts
├── i18n/
│   ├── config.ts
│   └── locales/
│       ├── en.json
│       └── tr.json
├── lib/
│   ├── queryClient.ts
│   └── StyledComponentsRegistry.tsx
├── stores/
│   ├── index.ts
│   └── themeStore.ts
├── styles/
│   ├── GlobalStyles.ts
│   └── themes.ts
├── types/
│   ├── styled.d.ts
│   └── theme.ts
└── middleware.ts
```

### 🎨 Design Philosophy

This boilerplate follows ultra-clean design principles inspired by Apple and Swiss design:

- **Minimalist Typography**: Using Unbounded font for modern aesthetics
- **Sophisticated Animations**: Subtle, purposeful motion design
- **Clean Layouts**: Spacious, breathable designs
- **Accessibility First**: WCAG compliant components
- **Performance Optimized**: Lazy loading and code splitting

### 🌐 Internationalization

Built-in support for multiple languages:

- English (en)
- Turkish (tr)

Add new languages by creating locale files in `src/i18n/locales/`

### 🎭 Animation System

Powered by anime.js with custom easing functions:

- **Smooth Entrance**: Elegant page load animations
- **Micro Interactions**: Subtle hover and focus states
- **Performance Optimized**: GPU-accelerated transforms
- **Customizable**: Easy to modify timing and easing

### 📱 Responsive Design

Mobile-first approach with:

- **Fluid Typography**: Using clamp() for scalable text
- **Flexible Layouts**: CSS Grid and Flexbox
- **Touch Optimized**: 44px+ touch targets
- **Cross-browser Compatible**: Modern browser support

### 🚀 Deployment

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Docker

```bash
# Build image
docker build -t nextjs-boilerplate .

# Run container
docker run -p 3000:3000 nextjs-boilerplate
```

### 📝 Scripts

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Format code
pnpm format

# Type check
pnpm type-check
```

### 🔧 Configuration

#### Environment Variables

Create a `.env.local` file:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="TrendyAI"

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

#### Theme Customization

Modify `src/styles/themes.ts` to customize:

- Colors
- Typography scales
- Spacing system
- Border radius
- Shadows

### 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

### 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Styled Components](https://styled-components.com/)
- [anime.js](https://animejs.com/)
- [next-intl](https://next-intl-docs.vercel.app/)

### 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for seamless deployment
- **styled-components** for CSS-in-JS
- **anime.js** for smooth animations

---

**Built with ❤️ by [Kağan Küçük](https://github.com/kaankucukx)**

_Software Engineering Manager | System Architect | Technology Strategist_
