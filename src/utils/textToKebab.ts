/**
 * Convierte texto a kebab-case con soporte completo para caracteres españoles
 * - Convierte acentos a sus equivalentes sin acento (á → a, é → e, etc.)
 * - Convierte ñ → n
 * - Maneja diéresis (ü → u)
 * - Elimina caracteres especiales
 * - Convierte espacios y guiones bajos a guiones
 */
export type CaseFormat = 'kebab' | 'snake' | 'camel' | 'pascal' | 'lower' | 'upper';

export interface TransformOptions {
  // Si true, se eliminarán artículos, preposiciones y conjunciones comunes en español
  removeStopwords?: boolean;
  // Formato de salida a aplicar
  case?: CaseFormat;
  // Si true (por defecto), convierte a ASCII (quita acentos y ñ→n). Si false, preserva diacríticos.
  ascii?: boolean;
}

// Mapa de caracteres especiales españoles a sus equivalentes ASCII
const charMap: Record<string, string> = {
  'á': 'a', 'Á': 'a',
  'é': 'e', 'É': 'e',
  'í': 'i', 'Í': 'i',
  'ó': 'o', 'Ó': 'o',
  'ú': 'u', 'Ú': 'u',
  'ü': 'u', 'Ü': 'u',
  'ñ': 'n', 'Ñ': 'n',
};

// Lista de stopwords comunes en español (artículos, preposiciones, conjunciones)
const STOPWORDS_ES = new Set([
  'el','la','los','las','lo','un','una','unos','unas',
  'de','del','al','a','ante','bajo','cabe','con','contra','desde','durante',
  'en','entre','hacia','hasta','para','por','segun','sin','so','sobre','tras',
  'mediante','versus','vs','via',
  'y','e','o','u','ni'
]);

function stripDiacriticsASCII(input: string): string {
  if (!input) return '';
  const noDiacritics = input.normalize('NFD').replace(/[\u0300-\u036f]+/g, '');
  return noDiacritics
    .split('')
    .map((ch) => charMap[ch] || ch)
    .join('');
}

function normalizeSpanish(input: string, ascii: boolean): string {
  if (!input) return '';
  if (!ascii) return input; // preserva caracteres
  return stripDiacriticsASCII(input);
}

function tokenize(input: string, ascii: boolean): string[] {
  const base = normalizeSpanish(input, ascii).toLowerCase();
  // Cuando ascii=true permitimos solo [a-z0-9]; si no, permitimos también letras españolas comunes
  const cleaned = ascii
    ? base.replace(/[^a-z0-9]+/g, ' ').trim()
    : base.replace(/[^a-z0-9áéíóúüñ]+/gi, ' ').trim();
  if (!cleaned) return [];
  return cleaned.split(/\s+/);
}

function capitalize(word: string): string {
  return word ? word.charAt(0).toUpperCase() + word.slice(1) : '';
}

function isStopword(word: string): boolean {
  // Comparamos en ascii-lower para que sea acento-insensible
  const key = stripDiacriticsASCII(word.toLowerCase());
  return STOPWORDS_ES.has(key);
}

export function toKebab(input: string, opts?: { removeStopwords?: boolean; ascii?: boolean }): string {
  const ascii = opts?.ascii ?? true;
  const words = tokenize(input, ascii).filter((w) => (opts?.removeStopwords ? !isStopword(w) : true));
  return words.join('-');
}

export function toSnake(input: string, opts?: { removeStopwords?: boolean; ascii?: boolean }): string {
  const ascii = opts?.ascii ?? true;
  const words = tokenize(input, ascii).filter((w) => (opts?.removeStopwords ? !isStopword(w) : true));
  return words.join('_');
}

export function toCamel(input: string, opts?: { removeStopwords?: boolean; ascii?: boolean }): string {
  const ascii = opts?.ascii ?? true;
  const words = tokenize(input, ascii).filter((w) => (opts?.removeStopwords ? !isStopword(w) : true));
  if (words.length === 0) return '';
  return words[0] + words.slice(1).map(capitalize).join('');
}

export function toPascal(input: string, opts?: { removeStopwords?: boolean; ascii?: boolean }): string {
  const ascii = opts?.ascii ?? true;
  const words = tokenize(input, ascii).filter((w) => (opts?.removeStopwords ? !isStopword(w) : true));
  return words.map(capitalize).join('');
}

export function toLower(input: string, opts?: { ascii?: boolean }): string {
  const ascii = opts?.ascii ?? true;
  const words = tokenize(input, ascii); // ya está lowercased
  return words.join(' ');
}

export function toUpper(input: string, opts?: { ascii?: boolean }): string {
  const ascii = opts?.ascii ?? true;
  const words = tokenize(input, ascii);
  return words.join(' ').toUpperCase();
}

/**
 * Conversión general con opciones
 */
export function transformText(text: string, options: TransformOptions = {}): string {
  const fmt: CaseFormat = options.case ?? 'kebab';
  const remove = options.removeStopwords ?? false;
  const ascii = options.ascii ?? true;

  switch (fmt) {
    case 'kebab':
      return toKebab(text, { removeStopwords: remove, ascii });
    case 'snake':
      return toSnake(text, { removeStopwords: remove, ascii });
    case 'camel':
      return toCamel(text, { removeStopwords: remove, ascii });
    case 'pascal':
      return toPascal(text, { removeStopwords: remove, ascii });
    case 'lower':
      return toLower(text, { ascii });
    case 'upper':
      return toUpper(text, { ascii });
    default:
      return toKebab(text, { removeStopwords: remove, ascii });
  }
}

/**
 * Compat: mantiene la API existente de textToKebab
 */
export function textToKebab(text: string): string {
  return toKebab(text);
}

/**
 * Ejemplos de uso:
 * textToKebab("Hola Mundo") → "hola-mundo"
 * textToKebab("Año Nuevo") → "ano-nuevo"
 * textToKebab("Niño con piñata") → "nino-con-pinata"
 * textToKebab("Menú del día") → "menu-del-dia"
 * textToKebab("¿Cómo estás?") → "como-estas"
 */
