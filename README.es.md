# mutiny-web

El sitio web oficial de [Mutiny](https://mutiny.cat), un estudio digital de inspiración retro-informática. Construido con una estética nostálgica de la era DOS que recuerda a Turbo Pascal y los IDE de Borland, inspirado en la serie *Halt and Catch Fire* (AMC).

## Stack tecnológico

- **[Astro 5](https://astro.build)** — generación de sitios estáticos
- **TypeScript** — modo estricto, alias de rutas
- **CSS vanilla** — cascada `@layer`, anidamiento nativo, propiedades lógicas
- **Perfect DOS VGA 437** — tipografía bitmap monoespaciada
- **Sin JavaScript en cliente** — cero JS en runtime

## Primeros pasos

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Previsualizar build de producción
pnpm preview
```

## Estructura del proyecto

```
src/
├── assets/          # Fuentes, iconos e imágenes
├── components/      # Componentes Astro reutilizables
│   └── ui/          # Primitivas de interfaz
├── data/            # Datos estáticos (menús de navegación)
├── i18n/            # Diccionarios de traducción y utilidades
├── layouts/         # Envoltorios de maquetación
├── pages/           # Rutas basadas en archivos
│   ├── en/          # Localización en inglés
│   └── es/          # Localización en español
└── styles/          # CSS global
```

## Internacionalización

El sitio soporta tres idiomas: **catalán** (por defecto), **español** e **inglés**. Cada localización tiene su propio prefijo de ruta (`/`, `/es/`, `/en/`) con réplicas completas de páginas. Las traducciones se gestionan en `src/i18n/ui.ts` mediante un sistema i18n ligero y propio — sin librerías externas.

## Licencia

[CC0 1.0 Universal](LICENSE) — Dedicación al Dominio Público

Traducciones disponibles: [English](README.md) · [Català](README.ca.md)

---

<sub>Hecho con ❤️ en Catalunya</sub>
