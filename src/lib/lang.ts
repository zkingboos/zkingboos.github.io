export type LocalizedText = { en: string; pt: string };

export function useLang(lang: string | undefined): "en" | "pt" {
  return lang?.startsWith("pt") ? "pt" : "en";
}