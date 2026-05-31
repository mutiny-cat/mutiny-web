# mutiny-web

The official website for [Mutiny](https://mutiny.cat), a retro-computing inspired digital studio. Built with a nostalgic DOS-era aesthetic reminiscent of Turbo Pascal and Borland IDEs, inspired by the TV series *Halt and Catch Fire* (AMC).

## Tech Stack

- **[Astro 5](https://astro.build)** — static site generation
- **TypeScript** — strict mode, path aliases
- **Vanilla CSS** — `@layer` cascade, native nesting, logical properties
- **Perfect DOS VGA 437** — bitmap monospace font
- **No client-side JavaScript** — zero runtime JS

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── assets/          # Fonts, icons, and images
├── components/      # Reusable Astro components
│   └── ui/          # Small UI primitives
├── data/            # Static data (navigation menus)
├── i18n/            # Translation dictionaries and utilities
├── layouts/         # Page layout wrappers
├── pages/           # File-based routes
│   ├── en/          # English locale
│   └── es/          # Spanish locale
└── styles/          # Global CSS
```

## Internationalization

The site supports three languages: **Catalan** (default), **Spanish**, and **English**. Each locale has its own route prefix (`/`, `/es/`, `/en/`) with complete page mirrors. Translations are managed in `src/i18n/ui.ts` via a custom lightweight i18n system — no external libraries.

## License

[CC0 1.0 Universal](LICENSE) — Public Domain Dedication

Translations available: [Español](LICENSE.es.md) · [Català](LICENSE.ca.md)

---

<sub>Made with ❤️ in Catalonia</sub>
