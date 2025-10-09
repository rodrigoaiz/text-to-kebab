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