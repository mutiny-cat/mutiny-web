// Datos de configuración del menú de navegación
import { ui, defaultLang } from "../i18n/ui";

// Tipo que representa las claves de traducción disponibles
type LabelKey = keyof (typeof ui)[typeof defaultLang];

// Interfaz para un hijo del menú (puede tener subhijos o ser un separador)
export interface MenuChild {
  labelKey: LabelKey;
  href?: string;
  children?: MenuChild[];
  separator?: boolean;
  keyIndex?: number; // Posición del carácter a resaltar como tecla de acceso rápido
}

// Interfaz para una opción de primer nivel del menú
export interface TopMenuItem {
  labelKey: LabelKey;
  href?: string;
  keyIndex: number;
  children?: MenuChild[];
}

// Estructura jerárquica de las opciones del header
export const headerMenuOptions: TopMenuItem[] = [
  {
    labelKey: "nav.projectes",
    href: "/projects",
    keyIndex: 0,
  },
  {
    labelKey: "nav.serveis",
    href: "/serveis",
    keyIndex: 0,
  },
  {
    labelKey: "nav.sobre",
    keyIndex: 0,
    // Submenú "Sobre" con biografía, cronología, CV, referentes
    children: [
      {
        labelKey: "nav.sobre.biografia",
        href: "/about#biografia",
        keyIndex: 0,
      },
      {
        labelKey: "nav.sobre.cronologia",
        href: "/about#cronologia",
        keyIndex: 0,
      },
      { labelKey: "nav.sobre.cv", href: "/about#cv", keyIndex: 0 },
      { separator: true, labelKey: "" as LabelKey },
      {
        labelKey: "nav.sobre.referents",
        href: "/about#referents",
        keyIndex: 0,
      },
    ],
  },
  {
    labelKey: "nav.recursos",
    href: "/recursos",
    keyIndex: 0,
  },
  {
    labelKey: "nav.contacte",
    href: "/contact",
    keyIndex: 0,
  },
  {
    labelKey: "nav.legal",
    keyIndex: 0,
    // Submenú "Legal" con aviso, privacidad, cookies, accesibilidad, créditos
    children: [
      { labelKey: "nav.legal.avis", href: "/legal/avis", keyIndex: 0 },
      {
        labelKey: "nav.legal.privacitat",
        href: "/legal/privacitat",
        keyIndex: 0,
      },
      { labelKey: "nav.legal.cookies", href: "/legal/cookies", keyIndex: 0 },
      { separator: true, labelKey: "" as LabelKey },
      {
        labelKey: "nav.legal.accessibilitat",
        href: "/legal/accessibilitat",
        keyIndex: 0,
      },
      { separator: true, labelKey: "" as LabelKey },
      { labelKey: "nav.legal.credits", href: "/legal/credits", keyIndex: 0 },
    ],
  },
];
