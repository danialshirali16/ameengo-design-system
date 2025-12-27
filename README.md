# Ameengo Design System

A modern, production-ready design system built with **Next.js 15**, **Tailwind CSS v4**, and **shadcn/ui**.

![Design System](https://img.shields.io/badge/Design_System-v1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)

## Features

- 🎨 **Design Tokens** - Comprehensive color, typography, spacing, and effect tokens
- 🧱 **Component Library** - Built on shadcn/ui with 46+ accessible components
- 🌙 **Dark Mode** - Full dark mode support with CSS variables
- 🌍 **RTL Support** - Full right-to-left language support (Arabic, Hebrew, Persian, etc.)
- 🔗 **Figma Code Connect** - Seamless design-to-code workflow
- ⚡ **Next.js 15** - Latest Next.js with App Router
- 📱 **Responsive** - Mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/ameengo-design-system.git

# Navigate to project
cd ameengo-design-system

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the design system.

## Project Structure

```
ameengo/
├── src/
│   ├── app/                    # Next.js App Router
│   ├── components/
│   │   └── ui/                 # shadcn/ui components (46 total)
│   ├── lib/                    # Utility functions
│   └── styles/
│       └── tokens/             # Design tokens
│           ├── colors.css      # Color palette
│           ├── typography.css  # Typography scale
│           ├── spacing.css     # Spacing system
│           ├── effects.css     # Shadows, animations
│           └── rtl.css         # RTL support
├── .figma/                     # Figma Code Connect files
├── docs/                       # Documentation
│   └── RTL.md                  # RTL guide
├── public/                     # Static assets
└── components.json             # shadcn/ui configuration
```

## Design Tokens

### Colors

The design system uses OKLCH color space for perceptually uniform colors:

- **Gray** - Zinc-based neutral palette
- **Primary** - Blue accent color
- **Success** - Green for positive states
- **Warning** - Amber for caution states
- **Error** - Red for error states
- **Info** - Cyan for informational states

### Typography

- **Font Family**: Geist Sans / Geist Mono
- **Scale**: 12px to 128px (modular 1.25 ratio)
- **Weights**: 100-900

### Spacing

- **Base Unit**: 4px
- **Scale**: 0.25rem to 24rem

## RTL Support

All 46 components support right-to-left languages out of the box. See [RTL Documentation](docs/RTL.md) for details.

**Quick start:**
```tsx
// In layout.tsx
<html lang="ar" dir="rtl">
```

## Components

**All 46 shadcn/ui components included:**

| Component | Description |
|-----------|-------------|
| Button | Primary actions with 6 variants |
| Input | Text input with validation states |
| Card | Container with header/content/footer |
| Badge | Status indicators and labels |
| Avatar | User profile images with fallbacks |
| Select | Dropdown selection |
| Dialog | Modal dialogs |
| Sheet | Slide-out panels |
| Tabs | Tabbed navigation |
| Tooltip | Contextual information |

## Figma Code Connect

This project supports [Figma Code Connect](https://www.figma.com/developers/code-connect) for seamless design-to-code workflow.

### Setup

1. Update the Figma component URLs in `.figma/components/*.figma.tsx`
2. Run the parse command to verify:
   ```bash
   npm run figma:parse
   ```
3. Publish to Figma:
   ```bash
   npm run figma:connect
   ```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript type checking |
| `npm run figma:connect` | Publish to Figma Code Connect |
| `npm run figma:parse` | Parse Figma Connect files |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

Built with ❤️ using [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com)
