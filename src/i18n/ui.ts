export const languages = {
  ca: "CAT",
  es: "ESP",
  en: "ENG",
};

export const defaultLang = "ca";

import { ca } from "@translations/ca";
import { es } from "@translations/es";
import { en } from "@translations/en";

export const ui = {
  ca,
  es,
  en,
} as const;
