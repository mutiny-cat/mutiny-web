// Utilidades de internacionalización (i18n)
import { ui, defaultLang } from "./ui";

// Extrae el código de idioma del primer segmento de la URL
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// Devuelve una función de traducción con fallback al idioma por defecto
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
