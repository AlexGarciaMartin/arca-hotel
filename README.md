# ARCA-∅ — Donde el tiempo se detiene

Web del resort ficticio de la novela **Arca-∅**, de **A. Riven**. La edición editorial permanece en el **14 de julio de 2026**. Sin backend, pagos, formularios de envío ni analítica. Spotify se carga únicamente al pulsar su botón en la experiencia sonora.

- Sitio: https://arca-hotel.com
- Repositorio: https://github.com/AlexGarciaMartin/arca-hotel
- Stack: Vite + React + TypeScript + React Router.

## Ejecutar en local

Requiere Node.js 22 o superior.

```bash
npm ci
npm run dev
```

Abrir la dirección que muestra Vite, con la base `/arca-hotel/`.

```bash
npm run build
npm run preview
```

## Textos y variables

Todos los textos editoriales y alternativos están en `src/locales/es.json` y `src/locales/en.json`. Mantener las mismas claves en ambos. El idioma inicial procede del navegador; el selector cambia el contenido sin recargar. La preferencia solo dura durante la visita, sin cookies ni localStorage.

Configurar `site.config.json`:

| Variable | Uso | Valor inicial |
| --- | --- | --- |
| `basePath` | Única variable para la base de Vite, imágenes, favicon y página 404 | `/arca-hotel/` |
| `siteOrigin` | Origen absoluto para canonical, OpenGraph y sitemap | `https://alexgarciamartin.github.io` |
| `fundName` | Nombre junto al símbolo azul marino del fondo | `[NOMBRE DEL FONDO]` |
| `bookUrl` | URL definitiva de compra o información del libro | Vacío |
| `reservationEmail` | Destinatario de los enlaces mailto | `reservas@arca-hotel.book` |
| `imageRevision` | Versión de las URLs de imagen y sus precargas; actualizar al sustituir fotos | `aurora-alzado` |

El correo `reservas@arca-hotel.book` forma parte de la ficción del sitio; no hay un buzón de reservas configurado. Sustituirlo si más adelante se desea usar un correo real. Hasta recibir la URL del libro, el pie enlaza al aviso legal y muestra «Información del libro próximamente», sin inventar una página de venta. Al definir `bookUrl`, el enlace aparece automáticamente.

Las rutas están centralizadas en `src/main.tsx`. Estilos en `src/styles.css`. Logotipo y favicon SVG en `public/`. El mapa y el esquema de niveles son SVG accesibles hechos a medida, no mapas de navegación.

## Rutas: HashRouter

Se utiliza **HashRouter**, por ejemplo `/arca-hotel/#/suites`. El servidor recibe únicamente `/arca-hotel/`, de modo que una recarga o un enlace directo no requieren reescrituras del servidor. Es la opción más robusta en GitHub Pages.

Una ruta desconocida del cliente (`#/no-existe`) muestra la página 404 editorial. También se genera `dist/404.html`: una URL inexistente sin hash regresa a la ruta `#/404`, con las rutas de recursos correctas. El servidor responde 404 a la petición inexistente antes de la redirección del cliente.

La contrapartida es que los fragmentos no se indexan como páginas independientes. El sitio tiene metadatos sociales estáticos para la portada y actualiza título/descripción al navegar. No contiene schema.org Hotel.

## Imágenes y tipografía

17 conjuntos de imágenes generadas expresamente. Los exteriores comparten una referencia arquitectónica corregida: hotel de escala pequeña y Aurora rectangular con el suelo a la altura de la planta principal; el zócalo sostiene su mitad izquierda y la derecha queda en voladizo sin apoyos. Portada, Cómo llegar y OpenGraph derivan de la fotografía maestra de sol de medianoche; invierno usa esa misma arquitectura. Los interiores se conservan. Cada conjunto tiene variantes WebP de 480, 960 y 1600 píxeles: 51 archivos, aproximadamente 5.3 MB en total. `Photo` implementa `srcset`, `sizes`, dimensiones y carga diferida; el hero tiene prioridad de descarga. OpenGraph dispone de su propia imagen.

Inventario y dirección de los prompts: `IMAGE_PROMPTS.md`. Los originales de generación no son necesarios para construir la web; las versiones WebP finales están incluidas en el repositorio.

Cormorant Garamond y Manrope son familias de Google Fonts distribuidas mediante Fontsource y servidas desde el propio sitio. El navegador no conecta con Google para descargarlas.

## Detalles de comportamiento

- Reloj en `Arctic/Longyearbyen`, con horario de verano/invierno gestionado por Intl. Desde la apertura avanza a razón de 59 segundos por cada minuto monotónico transcurrido; al recargar se recalibra. Usa la hora del dispositivo, no una consulta de red.
- Aurora Cam: imagen inmóvil con último fotograma 14/07/2026 11:02; el indicador sigue parpadeando.
- El fundido del hero puede pausarse y respeta `prefers-reduced-motion`. El indicador de la cámara deja de animarse con esa preferencia.
- Menú y ampliación de galería usan diálogos nativos: Escape, contención y retorno de foco. Hay enlace de salto al contenido y foco visible.
- Motor de reservas visible pero completamente desactivado; sin envío ni procesamiento de pagos.
- Único mensaje de la aplicación en consola: `Donde el tiempo se detiene.`
- El aviso superior mantiene la actualización visible en móvil y permite desplegar el texto completo.

## Publicación automática

`.github/workflows/pages.yml` ejecuta en cada push a `main`:

1. Instalación reproducible con `npm ci`.
2. TypeScript y compilación Vite.
3. Playwright: todas las rutas, imágenes, recarga, idiomas, menú, galería, reservas desactivadas, 404, desbordamiento horizontal y axe WCAG A/AA en móvil y escritorio.
4. Lighthouse móvil con un umbral **superior a 90** en rendimiento, accesibilidad, buenas prácticas y SEO.
5. Despliegue oficial con GitHub Actions a Pages.
6. Repetición de las pruebas sobre la URL pública.

Los informes y capturas se guardan en los artefactos `quality-reports` y `public-verification` de cada ejecución. Las comprobaciones automatizadas no constituyen por sí solas una certificación exhaustiva WCAG.

Si Pages no está configurado: **Settings → Pages → Build and deployment → Source → GitHub Actions**. No hace falta elegir una rama de publicación.

## Conectar un dominio propio más adelante

No hay dominio ni fichero CNAME configurados actualmente. Ejemplo con `hotel.example` (sustituir por el dominio real).

1. Verificar la propiedad del dominio en **GitHub → Settings → Pages** si se desea protegerlo frente a suplantaciones; seguir el registro TXT indicado por GitHub.
2. En el repositorio: **Settings → Pages → Custom domain**, escribir `hotel.example` y guardar. Hacer esto antes de cambiar el DNS.
3. Editar únicamente `basePath` para pasar de `/arca-hotel/` a `/`. Cambiar también `siteOrigin` a `https://hotel.example` para los metadatos absolutos (no controla el enrutamiento).
4. Si se desea dejar constancia en el proyecto, crear `public/CNAME` con una única línea:

   ```text
   hotel.example
   ```

   Vite lo copiará a `dist/CNAME`. **Con el despliegue mediante GitHub Actions, GitHub ignora ese archivo para configurar el dominio:** la configuración efectiva es el paso 2. Se documenta por compatibilidad y para una futura publicación desde rama.
5. Crear estos registros en el proveedor DNS:

   | Tipo | Nombre | Destino |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | alexgarciamartin.github.io |

   No añadir `/arca-hotel/`, `https://` ni rutas al destino CNAME. Eliminar registros incompatibles para esos mismos nombres. No usar comodines. Para un subdominio como `arca.tudominio.com`, crear CNAME `arca` → `alexgarciamartin.github.io` y usar ese subdominio en los pasos 2–4; los A solo son para el dominio raíz.
6. Hacer commit y push a `main` para reconstruir con la nueva base y el nuevo origen.
7. Esperar la propagación DNS y el certificado (puede tardar hasta 24 horas). En **Settings → Pages**, activar **Enforce HTTPS** cuando esté disponible.
8. Comprobar inicio, `#/suites`, recarga, imágenes, OpenGraph y 404 en el dominio nuevo. El workflow toma la URL publicada de Pages para las pruebas finales.

Fuentes oficiales para la configuración:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

## Seguridad de expediciones y ficción

La nota de expediciones se ha redactado como política del resort con guías armados y medios de disuasión, sin afirmar que la ley exige universalmente un guía armado para toda persona. Referencia: https://www.sysselmesteren.no/en/weapon/

Los nombres y la cita NORD / JOURNAL forman parte de la ficción. El aviso legal explica el carácter narrativo, la generación de imágenes y la inexistencia de una oferta real de alojamiento.

## Experiencia sonora para la novela

https://arca-hotel.com/musica redirige a `/#/musica`, sin cambiar el HashRouter. Contiene Prólogo y capítulos 01–29, con un único embed de Spotify, navegación y memoria local del último capítulo. En Vite preview, usar `/musica/` para probar el archivo de redirección. El inventario, la integración, las limitaciones y las comprobaciones están en [SOUNDTRACK.md](SOUNDTRACK.md). El build rechaza playlists vacías o repetidas. Las pruebas de música también se ejecutan sobre la web publicada mediante el workflow existente.
