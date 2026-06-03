import { ui, defaultLang } from "../i18n/ui";

type LabelKey = keyof (typeof ui)[typeof defaultLang];

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
