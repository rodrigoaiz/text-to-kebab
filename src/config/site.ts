export const SITE_NAME = 'Text to Kebab Case';
export const DEFAULT_TITLE = 'Text to Kebab Case — Convierte texto a kebab-case (soporte español)';
export const DEFAULT_DESCRIPTION = 'Convierte texto a kebab-case respetando acentos, eñes y caracteres especiales en español. Genera slugs y nombres de archivos listos para producción.';
export const DEFAULT_KEYWORDS = 'kebab-case, slug, slugify, español, acentos, ñ, nombres de archivo, urls, texto a kebab';
export const DEFAULT_ROBOTS = 'index,follow';
export const DEFAULT_AUTHOR = 'Rodrigo Aizpuru';
// Opcional: URL pública del autor (perfil personal, portfolio)
export const DEFAULT_AUTHOR_URL = 'https://example.com/author/rodrigo-aizpuru';
// Opcional: array de URLs de redes sociales para JSON-LD sameAs
export const DEFAULT_AUTHOR_SAMEAS: string[] = [
  'https://twitter.com/tu_usuario',
  'https://github.com/tu_usuario'
];

export function defaultImage(site?: string) {
  if (site) return new URL('/og-image.svg', site).toString();
  return '/og-image.svg';
}

export function defaultCanonical(site?: string) {
  return site || 'https://example.com/';
}
