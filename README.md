# 📝 Text to Kebab Case

Una herramienta simple y eficaz para convertir texto a kebab-case con **soporte completo para español**.

## ✨ Características

- 🇪🇸 **Soporte completo para español**: Maneja correctamente acentos, ñ, y otros caracteres especiales
- ⚡ **Conversión en tiempo real**: Ve los resultados mientras escribes
- 📋 **Copiar al portapapeles**: Un clic para copiar el resultado
- 🎨 **Interfaz moderna**: Diseño limpio y fácil de usar
- 🌙 **Tema oscuro**: Cómodo para la vista

## 🎯 Casos de uso

Perfecto para crear nombres de archivos, URLs, slugs, y más:

```
"Año Nuevo"              → "ano-nuevo"
"Niño con piñata"        → "nino-con-pinata"
"Menú del día"           → "menu-del-dia"
"¿Cómo estás?"           → "como-estas"
"Configuración avanzada" → "configuracion-avanzada"
```

## 🚀 Uso

### Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

### Build para producción

```bash
npm run build
npm run preview
```

## 🛠️ Tecnologías

- [Astro](https://astro.build) - Framework web
- TypeScript - Para type safety
- CSS moderno - Estilos nativos

## 📖 Cómo funciona

La función de conversión:

1. **Normaliza caracteres españoles**: Convierte á→a, é→e, í→i, ó→o, ú→u, ü→u, ñ→n
2. **Convierte a minúsculas**: Todo el texto se normaliza
3. **Reemplaza espacios**: Los espacios y guiones bajos se convierten en guiones
4. **Limpia caracteres especiales**: Elimina todo excepto letras, números y guiones
5. **Normaliza guiones**: Elimina guiones duplicados y los del inicio/final

## 📝 Licencia

MIT

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un bug o tienes una sugerencia, por favor abre un issue.

## 🔧 SEO y configuración de Open Graph

Por defecto la página usa `import.meta.env.SITE` para generar la URL canonical y la ruta de la imagen Open Graph. Para configurar esto en tu entorno de producción, establece la variable SITE en tu entorno de despliegue (por ejemplo en Vercel/Netlify) con la URL pública de tu sitio.

- Si trabajas localmente y no defines `SITE`, la app usará `https://example.com/` como canonical y `/og-image.svg` como imagen por defecto.
- Para reemplazar la imagen Open Graph, edita `public/og-image.svg` o coloca tu propia imagen en `public/` y actualiza la propiedad `image` en la página (por ejemplo `src/pages/index.astro`).

Ejemplo para Netlify/Vercel: define la variable `SITE` con `https://tu-dominio.com`.

## 📡 Robots y sitemap

He incluido un `public/robots.txt` por defecto (permite indexación) y un endpoint dinámico `src/pages/sitemap.xml.ts` que sirve `sitemap.xml` en runtime.

- En Vercel configura la variable de entorno `SITE` con la URL que Vercel te asigna (por ejemplo `https://your-app.vercel.app`) para que canonical y las URLs del sitemap sean absolutas.
- Una vez desplegado, puedes enviar `https://<tu-app>.vercel.app/sitemap.xml` a Google Search Console.

Ejemplo: en Vercel -> Settings -> Environment Variables -> add `SITE` = `https://your-app.vercel.app` (o tu dominio personalizado cuando lo tengas).

## 👤 Autor y perfiles

La configuración incluye un autor por defecto (`Rodrigo Aizpuru`). Puedes personalizar la URL del autor y las redes sociales editando `src/config/site.ts`:

- `DEFAULT_AUTHOR_URL`: enlace al perfil o portfolio del autor.
- `DEFAULT_AUTHOR_SAMEAS`: array con URLs de redes sociales (se usarán en JSON-LD `sameAs`).

Actualiza esos valores con tus enlaces reales para que los motores de búsqueda y las tarjetas sociales muestren la información correcta.