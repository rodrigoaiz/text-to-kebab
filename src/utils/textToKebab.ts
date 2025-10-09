/**
 * Convierte texto a kebab-case con soporte completo para caracteres españoles
 * - Convierte acentos a sus equivalentes sin acento (á → a, é → e, etc.)
 * - Convierte ñ → n
 * - Maneja diéresis (ü → u)
 * - Elimina caracteres especiales
 * - Convierte espacios y guiones bajos a guiones
 */
export function textToKebab(text: string): string {
  if (!text) return '';
  
  // Mapa de caracteres especiales españoles a sus equivalentes
  const charMap: Record<string, string> = {
    'á': 'a', 'Á': 'a',
    'é': 'e', 'É': 'e',
    'í': 'i', 'Í': 'i',
    'ó': 'o', 'Ó': 'o',
    'ú': 'u', 'Ú': 'u',
    'ü': 'u', 'Ü': 'u',
    'ñ': 'n', 'Ñ': 'n',
  };
  
  return text
    // Reemplazar caracteres especiales españoles
    .split('')
    .map(char => charMap[char] || char)
    .join('')
    // Convertir a minúsculas
    .toLowerCase()
    // Reemplazar espacios, guiones bajos y múltiples guiones con un solo guión
    .replace(/[\s_]+/g, '-')
    // Eliminar caracteres que no sean letras, números o guiones
    .replace(/[^a-z0-9-]/g, '')
    // Eliminar guiones duplicados
    .replace(/-+/g, '-')
    // Eliminar guiones al inicio y al final
    .replace(/^-+|-+$/g, '');
}

/**
 * Ejemplos de uso:
 * textToKebab("Hola Mundo") → "hola-mundo"
 * textToKebab("Año Nuevo") → "ano-nuevo"
 * textToKebab("Niño con piñata") → "nino-con-pinata"
 * textToKebab("Menú del día") → "menu-del-dia"
 * textToKebab("¿Cómo estás?") → "como-estas"
 */
