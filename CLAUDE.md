# CLAUDE.md - Thanh Tan Industrial Cluster

## Project Overview

**Project Name:** Thanh Tan Industrial Cluster
**Type:** React Single-Page Application (SPA)
**Purpose:** B2B sales platform for attracting Foreign Direct Investment (FDI) to Thai Binh, Vietnam
**Multi-language Support:** Vietnamese (vi), English (en), Chinese (zh)
**Origin:** Generated via Google AI Studio, deployed as a modern web application

This is a professional landing page showcasing an industrial cluster's infrastructure, location advantages, FDI statistics, services, and contact information for international investors.

---

## Tech Stack

### Core Technologies
- **React** `^19.2.0` - UI library (latest version)
- **TypeScript** `~5.8.2` - Type safety and developer experience
- **Vite** `^6.2.0` - Build tool and development server
- **Tailwind CSS** (via CDN) - Utility-first CSS framework with custom configuration

### Supporting Libraries
- **lucide-react** `^0.554.0` - Icon library (20+ icons used throughout)
- **@vitejs/plugin-react** `^5.0.0` - React integration for Vite

### Development Tools
- **@types/node** `^22.14.0` - Node.js TypeScript definitions
- **ES Modules** - Modern JavaScript module system

---

## Directory Structure

```
/home/user/indecon_thanhtan/
├── .git/                          # Git repository
├── .gitignore                     # Git ignore rules
├── index.html                     # HTML entry point (Tailwind CDN + custom config)
├── index.tsx                      # React DOM entry point
├── App.tsx                        # Root React component (language state management)
├── types.ts                       # TypeScript type definitions (Language, ContentData)
├── constants.ts                   # Multi-language content & constants (CONTENT object)
├── vite.config.ts                 # Vite build configuration
├── tsconfig.json                  # TypeScript compiler configuration
├── package.json                   # Dependencies & npm scripts
├── metadata.json                  # Project metadata for AI Studio
├── README.md                      # Setup & deployment instructions
│
├── components/                    # React components (all .tsx files)
│   ├── NavBar.tsx                 # Navigation with language switcher & mobile menu
│   ├── Hero.tsx                   # Hero section with background image & CTA
│   ├── StatsSection.tsx           # FDI statistics with animated counters
│   ├── MapSection.tsx             # Strategic location map (dual view: master plan + Google Maps)
│   ├── InfrastructureSection.tsx  # Infrastructure details, utilities, pricing
│   ├── ServicesSection.tsx        # Services timeline & permit process
│   └── ContactSection.tsx         # Contact form & footer
│
└── Assets (Images - in root)
    ├── hero.jpg                   # Hero background (224 KB)
    ├── logo.png                   # Company logo (62 KB)
    ├── map_vn.png                 # Vietnamese market map (1.9 MB)
    ├── map_en.png                 # English market map (1.9 MB)
    ├── map_zh.png                 # Chinese market map (1.9 MB)
    └── photo_2025-11-19_*.jpg     # Additional photos (514 KB)
```

**Key Characteristics:**
- **Flat component structure** - All components in single `/components` directory
- **Assets in root** - No separate `/assets` or `/public` folder
- **No CSS files** - All styling via Tailwind utility classes
- **Type-safe content** - All text content centralized in `constants.ts`

---

## Development Workflows

### Setup & Installation

```bash
# Install dependencies
npm install

# Start development server (runs on port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

The project references `GEMINI_API_KEY` in `vite.config.ts` but it's currently unused in the codebase. If you need to add API functionality:

1. Create `.env.local` file in root
2. Add `GEMINI_API_KEY=your_api_key_here`
3. Access via `process.env.GEMINI_API_KEY` in code

### Development Server

- **Port:** 3000
- **Host:** 0.0.0.0 (accessible from network)
- **Hot Module Replacement (HMR):** Enabled via Vite
- **Fast Refresh:** Enabled for React components

---

## Code Conventions and Patterns

### TypeScript Conventions

#### 1. Type Definitions (`types.ts`)

All shared types are defined in `types.ts`:

```typescript
export type Language = 'vi' | 'en' | 'zh';

export interface ContentData {
  nav: { home: string; location: string; /* ... */ };
  hero: { title: string; subtitle: string; /* ... */ };
  // ... other sections
}
```

**Rules:**
- Use `type` for unions and primitives
- Use `interface` for object shapes
- Export all types for reusability
- Keep interfaces aligned with `constants.ts` structure

#### 2. Component Props Pattern

Every component follows this pattern:

```typescript
interface ComponentNameProps {
  content: any;  // Or specific type like ContentData['hero']
  // Additional props...
}

export const ComponentName: React.FC<ComponentNameProps> = ({ content, ...props }) => {
  // Component logic
};
```

**Important:**
- Always use `React.FC<Props>` type
- Destructure props in function parameters
- Props are passed down from `App.tsx`

#### 3. State Management Pattern

```typescript
const [state, setState] = useState<Type>(initialValue);

// Examples from codebase:
const [lang, setLang] = useState<Language>('vi');
const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
```

**Rules:**
- Explicit type annotations when TypeScript can't infer
- Descriptive state variable names
- Boolean states use `is` or `has` prefix

### File Naming Conventions

- **Components:** PascalCase with `.tsx` extension (`NavBar.tsx`, `Hero.tsx`)
- **Configuration:** lowercase or camelCase with file type (`vite.config.ts`, `tsconfig.json`)
- **Utilities:** camelCase with `.ts` extension (`types.ts`, `constants.ts`)
- **Assets:** lowercase with underscores (`hero.jpg`, `map_vn.png`)

### Import Conventions

```typescript
// 1. React imports first
import React, { useState, useEffect } from 'react';

// 2. Third-party libraries
import { Menu, X, Globe } from 'lucide-react';

// 3. Local types
import { Language } from '../types';

// 4. Constants
import { CONTENT } from '../constants';

// 5. Components
import { NavBar } from './components/NavBar';
```

**Path Aliases:**
- `@/*` resolves to project root (configured in `tsconfig.json` and `vite.config.ts`)
- Example: `import { Language } from '@/types'` (works from any nested file)

---

## Component Architecture

### Component Composition (App.tsx)

The application follows a **single-page, section-based layout**:

```typescript
<App>
  <NavBar lang={lang} setLang={setLang} content={content} />
  <main>
    <Hero content={content} />
    <StatsSection content={content} />
    <MapSection content={content} />
    <InfrastructureSection content={content} />
    <ServicesSection content={content} />
    <ContactSection content={content} />
  </main>
  <FloatingActionButton /> {/* Mobile only */}
</App>
```

**Key Principles:**
- Each section is self-contained and reusable
- Content is passed via props (no prop drilling beyond App.tsx)
- Language state managed in `App.tsx` and distributed down
- Sections have semantic `id` attributes for anchor navigation

### Component Patterns

#### 1. Nested Component Pattern

Several components define **nested sub-components** within the same file:

**Example: `ServicesSection.tsx`**
```typescript
// Nested components for local reuse
const TimelineCard = ({ title, days }: { title: string; days: string }) => (
  // Card implementation
);

const SimpleCard = ({ title, variant }: { title: string; variant: string }) => (
  // Card implementation
);

// Main component
export const ServicesSection: React.FC<Props> = ({ content }) => {
  return (
    <>
      <TimelineCard title={...} days={...} />
      <SimpleCard title={...} variant={...} />
    </>
  );
};
```

**When to use:**
- Component is only used within parent component
- Component is small and doesn't warrant separate file
- Component enhances code organization and readability

#### 2. Custom Hooks Pattern

**Example: `useCountUp` in `StatsSection.tsx`**
```typescript
const useCountUp = (end: number, duration: number = 2000, trigger: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration, trigger]);

  return count;
};
```

**Purpose:**
- Smooth number animations using `requestAnimationFrame`
- Reusable across multiple counters
- Triggered by Intersection Observer

#### 3. Intersection Observer Pattern

Used for scroll-triggered animations:

```typescript
const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    },
    { threshold: 0.1 }
  );

  if (sectionRef.current) observer.observe(sectionRef.current);

  return () => observer.disconnect();
}, []);

// Use in JSX
<section ref={sectionRef} className={isVisible ? 'animate-in' : ''}>
```

**Best Practices:**
- Always cleanup observer on unmount
- Set appropriate threshold (0.1 = 10% visible)
- Use `setIsVisible(true)` only (no reset to prevent re-animations)

#### 4. Image Error Handling Pattern

```typescript
const [imgError, setImgError] = useState(false);

<img
  src="hero.jpg"
  onError={() => setImgError(true)}
  className={imgError ? 'opacity-0' : ''}
/>
{imgError && <FallbackComponent />}
```

**Applied in:**
- `Hero.tsx` (hero background image)
- `NavBar.tsx` (logo with text fallback)

---

## Styling Guidelines

### Tailwind CSS Configuration

Tailwind is loaded via **CDN** in `index.html` with custom configuration:

```html
<script>
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          brand: {
            50: 'rgb(240, 253, 244)',
            // ... custom green palette
            950: 'rgb(5, 46, 22)'
          }
        },
        animation: {
          'fade-in': 'fadeIn 0.8s ease-out',
          'slide-up': 'slideUp 0.8s ease-out',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'grow-bar': 'growBar 1.5s ease-out forwards',
          'shimmer': 'shimmer 2.5s linear infinite'
        },
        keyframes: {
          fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
          slideUp: { from: { transform: 'translateY(2rem)', opacity: '0' }, to: { transform: 'translateY(0)', opacity: '1' } },
          growBar: { from: { width: '0%' }, to: { width: 'var(--target-width)' } },
          shimmer: { /* gradient animation */ }
        }
      }
    }
  }
</script>
```

### Color System

**Brand Colors (Green):**
- `brand-50` to `brand-950` - Custom green palette for primary elements
- Primary use: CTAs, accents, highlights

**Neutral Colors (Slate):**
- `slate-50` to `slate-950` - Grays for backgrounds and text
- Dark theme base: `slate-950`
- Default text: `slate-100` to `slate-300`

**Usage:**
```jsx
<div className="bg-slate-950 text-slate-100">        {/* Dark background, light text */}
<button className="bg-brand-600 hover:bg-brand-500"> {/* Brand green button */}
<div className="border-slate-800">                   {/* Subtle border */}
```

### Animation Classes

**Available Animations:**
- `animate-fade-in` - Fade in (0.8s)
- `animate-slide-up` - Slide up with fade (0.8s, use with delays)
- `animate-pulse-slow` - Slow pulse (4s loop)
- `animate-grow-bar` - Bar chart growth animation
- `animate-shimmer` - Shimmer/shine effect for buttons

**Delays:**
- Use `delay-100`, `delay-200`, `delay-300` for staggered animations

**Example:**
```jsx
<h1 className="animate-fade-in">Title</h1>
<p className="animate-slide-up delay-100">Paragraph</p>
<div className="animate-pulse-slow">Pulsing element</div>
```

### Responsive Design

**Breakpoints:**
- `sm:` - 640px and up
- `md:` - 768px and up (commonly used for desktop layouts)
- `lg:` - 1024px and up

**Mobile-First Approach:**
```jsx
// Default = mobile, then override for desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>

<nav className="md:hidden">Mobile menu</nav>
<nav className="hidden md:flex">Desktop menu</nav>
```

### Common Styling Patterns

#### 1. Card Component
```jsx
<div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-brand-600 transition-all">
  {/* Card content */}
</div>
```

#### 2. Button Styles
```jsx
{/* Primary CTA */}
<button className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-brand-500/50">

{/* Secondary Button */}
<button className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-md transition-colors">
```

#### 3. Section Container
```jsx
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Section content */}
  </div>
</section>
```

#### 4. Gradient Overlays
```jsx
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950">
```

### Dark Mode

The project uses **class-based dark mode** (configured in Tailwind):

```jsx
{/* Always dark - no light mode toggle implemented */}
<div className="dark:bg-slate-950 dark:text-slate-100">
```

**Current Implementation:**
- No light mode toggle
- Dark theme is default and constant
- If adding light mode, use `dark:` prefix for dark-specific styles

---

## State Management

### Global State (App-Level)

**Language State:**
```typescript
// In App.tsx
const [lang, setLang] = useState<Language>('vi');
const content = CONTENT[lang];

// Passed to all components
<NavBar lang={lang} setLang={setLang} content={content} />
<Hero content={content} />
```

**State Flow:**
1. `lang` state lives in `App.tsx`
2. `setLang` function passed to `NavBar` for language switching
3. `content` object derived from `lang` and passed to all sections
4. When `setLang` is called, React re-renders entire tree with new content

### Local Component State

Each component manages its own UI state:

**NavBar.tsx:**
```typescript
const [isOpen, setIsOpen] = useState(false);         // Mobile menu
const [scrolled, setScrolled] = useState(false);     // Scroll detection
const [langMenuOpen, setLangMenuOpen] = useState(false); // Language dropdown
```

**StatsSection.tsx:**
```typescript
const [isVisible, setIsVisible] = useState(false);   // Intersection Observer trigger
const count = useCountUp(50, 2000, isVisible);       // Custom hook with state
```

**MapSection.tsx:**
```typescript
const [viewMode, setViewMode] = useState<'master' | 'google'>('master');
```

### No External State Library

**Why no Redux/Zustand/Context?**
- Simple state requirements (only language selection)
- State doesn't need to be shared across distant components
- Props drilling is minimal (only 1 level deep)
- Performance is not impacted

**When to add external state management:**
- User authentication state
- Shopping cart or complex forms
- Real-time data synchronization
- Deep component nesting (3+ levels)

---

## Multi-language Support

### Content Structure

All content is centralized in `constants.ts`:

```typescript
import { Language, ContentData } from './types';

export const CONTENT: Record<Language, ContentData> = {
  vi: {
    nav: { home: 'Trang Chủ', /* ... */ },
    hero: { title: 'Cụm Công Nghiệp Thanh Tân', /* ... */ },
    // ... all Vietnamese content
  },
  en: {
    nav: { home: 'Home', /* ... */ },
    hero: { title: 'Thanh Tan Industrial Cluster', /* ... */ },
    // ... all English content
  },
  zh: {
    nav: { home: '首页', /* ... */ },
    hero: { title: '清潭工业区', /* ... */ },
    // ... all Chinese content
  }
};
```

### Adding New Content

**Steps to add new content:**

1. **Update `types.ts`** - Add new field to `ContentData` interface:
```typescript
export interface ContentData {
  // ... existing fields
  newSection: {
    title: string;
    description: string;
  };
}
```

2. **Update `constants.ts`** - Add content for all 3 languages:
```typescript
export const CONTENT: Record<Language, ContentData> = {
  vi: {
    // ... existing content
    newSection: { title: 'Tiêu đề mới', description: 'Mô tả...' }
  },
  en: {
    // ... existing content
    newSection: { title: 'New Title', description: 'Description...' }
  },
  zh: {
    // ... existing content
    newSection: { title: '新标题', description: '描述...' }
  }
};
```

3. **Use in component:**
```typescript
export const NewSection: React.FC<{ content: ContentData }> = ({ content }) => {
  return (
    <div>
      <h2>{content.newSection.title}</h2>
      <p>{content.newSection.description}</p>
    </div>
  );
};
```

### Language Switching

**Implementation in NavBar.tsx:**
```typescript
const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
];

<button onClick={() => setLang(language.code)}>
  {language.flag} {language.label}
</button>
```

**Language-Specific Assets:**
```typescript
// In MapSection.tsx
const mapImage = content.map.mapImage; // e.g., 'map_vn.png', 'map_en.png', 'map_zh.png'
<img src={mapImage} alt="Market Map" />
```

### Default Language

Default language is **Vietnamese (`vi`)** as defined in `App.tsx:16`:
```typescript
const [lang, setLang] = useState<Language>('vi');
```

**To change default language:**
```typescript
const [lang, setLang] = useState<Language>('en'); // Change to English
```

---

## Build and Deployment

### Build Process

```bash
# Development build (with HMR)
npm run dev

# Production build (optimized, minified)
npm run build
```

**Build Output:**
- Directory: `dist/`
- Entry point: `dist/index.html`
- Assets: `dist/assets/` (JS, CSS chunks)
- Images: Copied to `dist/` (from root directory)

### Vite Configuration

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',  // Accessible from network
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),  // Root alias
    }
  }
});
```

### Production Deployment Checklist

1. **Environment Variables:**
   - Ensure `GEMINI_API_KEY` is set if using AI features
   - Check `.env.local` is not committed to Git

2. **Build Optimization:**
   - Vite automatically handles code splitting
   - Tree-shaking for unused imports
   - Minification of JS/CSS

3. **Asset Optimization:**
   - Consider compressing large images (`map_*.png` are ~2MB each)
   - Use `.webp` format for better compression
   - Implement lazy loading for below-fold images

4. **Deployment Platforms:**
   - **Vercel:** `vercel --prod` (recommended for React SPAs)
   - **Netlify:** Connect Git repository, auto-deploy on push
   - **GitHub Pages:** Requires base path configuration in `vite.config.ts`
   - **Traditional hosting:** Upload `dist/` folder to web server

### Static Hosting Configuration

**For subdirectory deployment** (e.g., `example.com/thanh-tan/`):

```typescript
// vite.config.ts
export default defineConfig({
  base: '/thanh-tan/',  // Add base path
  // ... other config
});
```

**For custom domain:** No configuration needed (base: '/' is default)

---

## Key Files Reference

### Core Application Files

| File | Purpose | Key Exports |
|------|---------|-------------|
| `index.html` | HTML entry, Tailwind config, animations | - |
| `index.tsx` | React DOM mounting | - |
| `App.tsx` | Root component, language state | `App` (default) |
| `types.ts` | TypeScript definitions | `Language`, `ContentData` |
| `constants.ts` | Multi-language content | `CONTENT` |

### Configuration Files

| File | Purpose | Key Settings |
|------|---------|--------------|
| `package.json` | Dependencies, scripts | `dev`, `build`, `preview` |
| `tsconfig.json` | TypeScript compiler | `target: ES2022`, `jsx: react-jsx`, path aliases |
| `vite.config.ts` | Build tool config | `port: 3000`, React plugin, path alias |
| `metadata.json` | AI Studio metadata | Project name, description |

### Component Files

| Component | Responsibility | State | Notable Features |
|-----------|----------------|-------|------------------|
| `NavBar.tsx` | Navigation, language switcher | `isOpen`, `scrolled`, `langMenuOpen` | Scroll detection, mobile menu |
| `Hero.tsx` | Hero section | `imgError` | Image fallback, CTA button |
| `StatsSection.tsx` | FDI statistics | `isVisible` | Animated counters, Intersection Observer |
| `MapSection.tsx` | Location map | `viewMode` | Dual map view (master plan + Google Maps) |
| `InfrastructureSection.tsx` | Infrastructure details | - | Pricing, utilities, land use chart |
| `ServicesSection.tsx` | Services & timeline | - | Permit process, fast-track info |
| `ContactSection.tsx` | Contact form & footer | - | Form inputs, social links |

---

## Development Best Practices

### Adding New Components

1. **Create component file** in `/components` directory:
```typescript
// components/NewSection.tsx
import React from 'react';

interface NewSectionProps {
  content: any; // Or specific type
}

export const NewSection: React.FC<NewSectionProps> = ({ content }) => {
  return (
    <section id="new-section" className="py-20">
      {/* Component content */}
    </section>
  );
};
```

2. **Import and add to App.tsx:**
```typescript
import { NewSection } from './components/NewSection';

// In render:
<NewSection content={content} />
```

3. **Add content to `constants.ts`** for all languages

4. **Update `types.ts`** if adding new content structure

### Code Quality Guidelines

**TypeScript:**
- Enable strict mode checks
- Avoid `any` type (use specific types or `unknown`)
- Define interfaces for all props
- Use type inference where possible

**React:**
- Use functional components (no class components)
- Prefer `const` over `let` for component declarations
- Extract repeated logic into custom hooks
- Keep components focused and single-responsibility

**Performance:**
- Use `React.memo()` for expensive re-renders (not currently needed)
- Avoid inline function definitions in JSX (can cause re-renders)
- Use `useCallback` and `useMemo` sparingly (only when necessary)

**Accessibility:**
- Use semantic HTML (`<nav>`, `<section>`, `<main>`)
- Add `alt` attributes to all images
- Ensure keyboard navigation works
- Maintain sufficient color contrast (WCAG AA: 4.5:1 for text)

### Git Workflow

**Current Branch:** `claude/claude-md-mi5aosff8vze5er7-01TcWBDdVVRyQ4whLpbjSW6E`

**Commit Message Guidelines:**
```bash
# Feature addition
git commit -m "feat: Add investor testimonials section"

# Bug fix
git commit -m "fix: Resolve mobile menu not closing on link click"

# Enhancement
git commit -m "enhance: Improve animation performance on scroll"

# Documentation
git commit -m "docs: Update CLAUDE.md with component guidelines"
```

**Pushing Changes:**
```bash
# Always push to the current claude/* branch
git push -u origin claude/claude-md-mi5aosff8vze5er7-01TcWBDdVVRyQ4whLpbjSW6E
```

---

## Common Development Tasks

### Task 1: Add a New Section

**Example: Add "Testimonials" section**

1. **Update `types.ts`:**
```typescript
export interface ContentData {
  // ... existing fields
  testimonials: {
    title: string;
    items: Array<{
      name: string;
      company: string;
      quote: string;
    }>;
  };
}
```

2. **Update `constants.ts`:**
```typescript
vi: {
  // ... existing content
  testimonials: {
    title: 'Đánh Giá Từ Khách Hàng',
    items: [
      { name: 'Nguyễn Văn A', company: 'ABC Corp', quote: '...' }
    ]
  }
},
// Repeat for 'en' and 'zh'
```

3. **Create `components/TestimonialsSection.tsx`:**
```typescript
import React from 'react';
import { ContentData } from '../types';

interface TestimonialsSectionProps {
  content: ContentData;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ content }) => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">{content.testimonials.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {content.testimonials.items.map((item, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-lg">
              <p className="text-slate-300 mb-4">"{item.quote}"</p>
              <p className="font-bold">{item.name}</p>
              <p className="text-sm text-slate-400">{item.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

4. **Add to `App.tsx`:**
```typescript
import { TestimonialsSection } from './components/TestimonialsSection';

// In render (after ServicesSection):
<TestimonialsSection content={content} />
```

### Task 2: Change Color Theme

**From green to blue:**

1. **Update `index.html` Tailwind config:**
```javascript
// Replace brand colors with blue palette
colors: {
  brand: {
    50: 'rgb(239, 246, 255)',
    100: 'rgb(219, 234, 254)',
    // ... use blue color values
    900: 'rgb(30, 58, 138)',
    950: 'rgb(23, 37, 84)'
  }
}
```

2. **Update any hardcoded colors** in components (search for `green-` or `rgb(34, 197, 94)`)

### Task 3: Add Google Analytics

1. **Add to `index.html` before `</head>`:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

2. **Replace `GA_MEASUREMENT_ID`** with your actual ID

### Task 4: Optimize Images

```bash
# Install image optimization tool
npm install -D vite-plugin-image-optimizer

# Update vite.config.ts
import imageOptimizer from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    imageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
    })
  ]
});
```

### Task 5: Add Contact Form Backend

**Example: EmailJS integration**

1. **Install EmailJS:**
```bash
npm install @emailjs/browser
```

2. **Update `ContactSection.tsx`:**
```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'PUBLIC_KEY')
    .then(() => alert('Message sent!'))
    .catch(() => alert('Error sending message'));
};

<form onSubmit={handleSubmit}>
  {/* Form fields */}
</form>
```

---

## Testing Considerations

**Current State:** No testing framework configured

### Recommended Testing Setup

**1. Unit Testing (Vitest):**
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

**2. E2E Testing (Playwright):**
```bash
npm install -D @playwright/test
```

**3. Add test scripts to `package.json`:**
```json
"scripts": {
  "test": "vitest",
  "test:e2e": "playwright test"
}
```

### What to Test

**Unit Tests:**
- Custom hooks (`useCountUp`)
- Utility functions
- Component rendering with different props
- Language switching logic

**Integration Tests:**
- Navigation between sections
- Form submission
- Language switcher updates all content
- Map view mode switching

**E2E Tests:**
- Full user journey (landing → reading content → contact form)
- Mobile menu functionality
- Cross-browser compatibility

---

## Performance Considerations

### Current Optimizations

1. **Vite Build Tool:**
   - Fast HMR for development
   - Automatic code splitting
   - Tree-shaking for production

2. **CSS via Tailwind CDN:**
   - Quick setup, no build step for styles
   - **Trade-off:** Larger initial payload (~50KB CDN)

3. **requestAnimationFrame for Animations:**
   - Smooth 60fps animations
   - GPU-accelerated where possible

4. **Intersection Observer:**
   - Lazy trigger for expensive animations
   - Prevents off-screen calculations

### Potential Improvements

**1. Replace Tailwind CDN with PostCSS:**
```bash
# Install Tailwind locally
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Remove CDN from index.html
# Create src/index.css with @tailwind directives
```
**Benefit:** Smaller CSS bundle (only used classes), better caching

**2. Image Optimization:**
- Convert `.png` to `.webp` (60-80% smaller)
- Implement responsive images with `srcset`
- Add lazy loading: `<img loading="lazy" />`

**3. Code Splitting:**
```typescript
// Lazy load heavy components
const MapSection = React.lazy(() => import('./components/MapSection'));

<Suspense fallback={<Spinner />}>
  <MapSection content={content} />
</Suspense>
```

**4. Bundle Analysis:**
```bash
npm install -D rollup-plugin-visualizer

# Add to vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';
plugins: [react(), visualizer()]
```

**5. CDN for Heavy Assets:**
- Host large images on CDN (Cloudinary, Imgix)
- Enable auto-format and compression

---

## Troubleshooting

### Common Issues

**1. "Module not found" errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**2. Vite dev server not accessible on network:**
```typescript
// Ensure host is 0.0.0.0 in vite.config.ts
server: {
  host: '0.0.0.0',  // Not 'localhost'
  port: 3000
}
```

**3. Images not loading in production:**
- Ensure images are in `/public` folder or imported in components
- Check base path in `vite.config.ts` for subdirectory deployments

**4. TypeScript errors after adding new content:**
- Verify `ContentData` interface matches all language objects in `CONTENT`
- Run `npx tsc --noEmit` to check for type errors

**5. Styles not applying:**
- Check Tailwind CDN is loaded in `index.html`
- Verify class names match Tailwind conventions
- Use browser DevTools to inspect computed styles

---

## Future Enhancement Ideas

### Feature Roadmap

1. **Blog/News Section:**
   - Add CMS integration (Contentful, Sanity)
   - Dynamic content fetching

2. **Interactive 3D Map:**
   - Mapbox GL JS for interactive map
   - Custom markers for infrastructure

3. **Virtual Tour:**
   - 360° panoramas of industrial park
   - Embedded video walkthrough

4. **Investor Dashboard:**
   - User authentication
   - Document downloads (permits, regulations)
   - Application tracking

5. **Live Chat:**
   - Intercom or Tawk.to integration
   - Multi-language support

6. **Performance Metrics:**
   - Real-time FDI data from API
   - Dynamic charts (Chart.js, Recharts)

### Technical Debt

1. **Type Safety:**
   - Replace `content: any` with specific types
   - Add stricter TypeScript checks

2. **Accessibility:**
   - Add ARIA labels
   - Keyboard navigation improvements
   - Screen reader testing

3. **Testing:**
   - Set up test framework
   - Write unit tests for critical components
   - E2E tests for main user flows

4. **Documentation:**
   - Add JSDoc comments to complex functions
   - Component storybook for design system

---

## Resources

### Documentation Links

- **React:** https://react.dev/
- **TypeScript:** https://www.typescriptlang.org/docs/
- **Vite:** https://vite.dev/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Lucide Icons:** https://lucide.dev/icons/

### Related Files

- **AI Studio App:** https://ai.studio/apps/drive/1vbeiElWq_HOH2WkDxwlz6JoQhAccAom3
- **GitHub Repository:** (Add your repo URL here)

### Contact

For questions or contributions, please refer to the contact section on the live website or create an issue in the GitHub repository.

---

**Last Updated:** 2025-11-19
**Version:** 1.0.0
**Maintained by:** AI Assistant (Claude)
