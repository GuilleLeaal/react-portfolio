# Guillermo Leal · Portfolio

Portfolio personal en React 19, TypeScript y Vite. Contenido en español e inglés, proyectos filtrables, experiencia profesional, GWeb y CV descargable.

## Desarrollo

```sh
npm ci
npm run dev
```

## Validación

```sh
npm run lint
npm run build
npm run preview
```

La compilación genera `dist/`. No requiere variables de entorno, credenciales ni servicios de backend. El contacto abre el cliente de correo; no envía formularios ni almacena información de visitantes. La preferencia de idioma se conserva localmente cuando el navegador lo permite.

## Actualizar contenido

- `src/data.ts`: proyectos, experiencia, enlaces de contacto y ruta del CV. Los textos de los proyectos y la experiencia tienen versiones `es` y `en`.
- `src/components/`: textos de cada sección mediante `useLanguage().t(es, en)`.
- `public/Guillermo_Leal_CV.pdf`: CV actual en español. Si cambia el nombre, actualizar `profile.cv` y el enlace de `noscript` en `index.html`.
- `public/images/`: versiones WebP de las capturas y del retrato. Los originales existentes se conservan en `src/assets/`.
- `src/index.css`: identidad visual, estilos responsive y movimiento reducido.
- `index.html`, `public/robots.txt` y `public/sitemap.xml`: metadatos y dominio público. Revisar los tres si cambia la URL de publicación.
- `public/social-preview.png`: imagen para compartir en redes (1200 × 630).

Las ilustraciones de proyectos sin captura son composiciones gráficas; no representan pantallas de las aplicaciones. En la galería de Pallotti, la autoría de las entregas corresponde a los estudiantes; el trabajo presentado es la plataforma y su integración.

## Accesibilidad

Navegación por anclas, enlace para saltar al contenido, menú móvil con Escape, filtros con estado accesible y detalles de proyecto en un diálogo nativo con foco contenido, cierre con Escape y retorno al disparador. Las animaciones respetan `prefers-reduced-motion`.

Las fuentes se solicitan a Google Fonts con `display=swap` y alternativas del sistema. La identidad de Git y el usuario de credenciales de este checkout deben permanecer configurados localmente para la cuenta personal `GuilleLeaal`.
