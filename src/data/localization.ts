import type { LanguageCode, LocalizedText } from "./contentTypes";

export const defaultLanguage: LanguageCode = "en";
const languageStorageKey = "chaos-field-queue-language";

export function isLanguageCode(value: string | null): value is LanguageCode {
  return value === "en" || value === "zh";
}

export function resolveText(value: LocalizedText, language: LanguageCode): string {
  return value[language] ?? value.en;
}

export function resolveOptionalText(
  value: LocalizedText | undefined,
  language: LanguageCode,
): string | undefined {
  if (!value) {
    return undefined;
  }

  return resolveText(value, language);
}

export function nextLanguage(language: LanguageCode): LanguageCode {
  return language === "en" ? "zh" : "en";
}

export function languageToggleLabel(language: LanguageCode): string {
  return language === "en" ? "EN / 中" : "中 / EN";
}

export function readStoredLanguage(): LanguageCode {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey);
    return isLanguageCode(storedLanguage) ? storedLanguage : defaultLanguage;
  } catch {
    return defaultLanguage;
  }
}

export function persistLanguage(language: LanguageCode) {
  if (typeof window === "undefined") {
    return;
  }

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.language = language;

  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {
    // Local storage is optional; navigation should still preserve in-memory state.
  }
}

export function projectAssetPath(slug: string, filename: string): string {
  return `/src/assets/projects/${slug}/${filename}`;
}
