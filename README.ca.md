# mutiny-web

El lloc web oficial de [Mutiny](https://mutiny.cat), un estudi digital d'inspiració retro-informàtica. Construït amb una estètica nostàlgica de l'era DOS que recorda a Turbo Pascal i els IDE de Borland, inspirat en la sèrie *Halt and Catch Fire* (AMC).

## Stack tecnològic

- **[Astro 5](https://astro.build)** — generació de llocs estàtics
- **TypeScript** — mode estricte, àlies de rutes
- **CSS vanilla** — cascada `@layer`, niuament natiu, propietats lògiques
- **Perfect DOS VGA 437** — tipografia bitmap monospaiada
- **Sense JavaScript en client** — zero JS en runtime

## Primers passos

```bash
# Instal·lar dependències
pnpm install

# Iniciar servidor de desenvolupament
pnpm dev

# Construir per a producció
pnpm build

# Previsualitzar build de producció
pnpm preview
```

## Estructura del projecte

```
src/
├── assets/          # Fonts, icones i imatges
├── components/      # Components Astro reutilitzables
│   └── ui/          # Primitives d'interfície
├── data/            # Dades estàtiques (menús de navegació)
├── i18n/            # Diccionaris de traducció i utilitats
├── layouts/         # Embolcalls de maquetació
├── pages/           # Rutes basades en fitxers
│   ├── en/          # Localització en anglès
│   └── es/          # Localització en espanyol
└── styles/          # CSS global
```

## Internacionalització

El lloc suporta tres idiomes: **català** (per defecte), **espanyol** i **anglès**. Cada localització té el seu propi prefix de ruta (`/`, `/es/`, `/en/`) amb rèpliques completes de pàgines. Les traduccions es gestionen a `src/i18n/ui.ts` mitjançant un sistema i18n lleuger i propi — sense llibreries externes.

## Llicència

[CC0 1.0 Universal](LICENSE) — Dedicació al Domini Públic

Traduccions disponibles: [English](README.md) · [Español](README.es.md)

---

<sub>Fet amb ❤️ a Catalunya</sub>
