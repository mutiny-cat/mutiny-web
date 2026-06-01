import { ui, defaultLang } from "../i18n/ui";

type LabelKey = keyof typeof ui[typeof defaultLang];

export interface MenuChild {
  labelKey: LabelKey;
  href?: string;
  children?: MenuChild[];
  separator?: boolean;
  keyIndex?: number;
}

export interface TopMenuItem {
  labelKey: LabelKey;
  href?: string;
  keyIndex: number;
  children?: MenuChild[];
}

export const headerMenuOptions: TopMenuItem[] = [
  {
    labelKey: "nav.projectes",
    keyIndex: 0,
    children: [
      {
        labelKey: "nav.projectes.web",
        href: "/projects",
        keyIndex: 0,
      },
      {
        labelKey: "nav.projectes.uxui",
        href: "/projects",
        keyIndex: 0,
      },
      {
        labelKey: "nav.projectes.grafic",
        href: "/projects",
        keyIndex: 0,
      },
      {
        separator: true,
        labelKey: "" as LabelKey,
      },
      {
        labelKey: "nav.veureTots",
        href: "/projects",
        keyIndex: 0,
      },
    ],
  },
  {
    labelKey: "nav.serveis",
    keyIndex: 0,
    children: [
      { labelKey: "nav.serveis.web", href: "/contact", keyIndex: 0 },
      { labelKey: "nav.serveis.consultoria", href: "/contact", keyIndex: 0 },
      { labelKey: "nav.serveis.formacio", href: "/contact", keyIndex: 0 },
      { labelKey: "nav.serveis.disseny", href: "/contact", keyIndex: 0 },
    ],
  },
  {
    labelKey: "nav.recursos",
    keyIndex: 0,
    children: [
      { labelKey: "nav.recursos.iniciarse", href: "/recursos", keyIndex: 0 },
      { labelKey: "nav.recursos.eines", href: "/recursos", keyIndex: 0 },
      { labelKey: "nav.recursos.tutorials", href: "/recursos", keyIndex: 0 },
    ],
  },
  {
    labelKey: "nav.referents",
    href: "/referents",
    keyIndex: 0,
  },
  {
    labelKey: "nav.sobre",
    href: "/about",
    keyIndex: 0,
  },
  {
    labelKey: "nav.contacte",
    keyIndex: 0,
    children: [
      { labelKey: "nav.contact.form", href: "/contact", keyIndex: 0 },
      { labelKey: "nav.contact.pressupost", href: "/contact", keyIndex: 0 },
      { separator: true, labelKey: "" as LabelKey },
      { labelKey: "nav.contact.github", href: "https://github.com/mutiny-cat", keyIndex: 0 },
      { labelKey: "nav.contact.linkedin", href: "#", keyIndex: 0 },
      { labelKey: "nav.contact.codepen", href: "#", keyIndex: 0 },
    ],
  },
  {
    labelKey: "nav.legal",
    keyIndex: 0,
    children: [
      { labelKey: "nav.legal.avis", href: "#", keyIndex: 0 },
      { labelKey: "nav.legal.privacitat", href: "#", keyIndex: 0 },
      { labelKey: "nav.legal.cookies", href: "#", keyIndex: 0 },
      { labelKey: "nav.legal.accessibilitat", href: "#", keyIndex: 0 },
      { labelKey: "nav.legal.credits", href: "#", keyIndex: 0 },
    ],
  },
];
