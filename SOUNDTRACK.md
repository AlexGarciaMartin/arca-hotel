# Experiencia sonora · Arca-∅

URL para imprimir: https://arca-hotel.com/musica

La estructura confirmada por el autor es Prólogo + capítulos 01–29. Las 30 listas se recuperaron de su biblioteca de Spotify y se verificaron con oEmbed el 12/10/2026: todas responden HTTP 200 y su título coincide exactamente. No hay capítulos ausentes, IDs repetidos ni nombres ambiguos en este conjunto. El ID antiguo 5SoxGYcqvwOvk9hFSICQi6 del capítulo 13 no está disponible y no se usa.

Un único iframe oficial se carga voluntariamente. Al elegir otro capítulo, React destruye el contexto anterior antes de cargar el nuevo; el nuevo no comienza automáticamente. El último capítulo se guarda localmente; si el almacenamiento está bloqueado, los controles siguen funcionando. Idiomas: español e inglés. La sección no usa fotografías, OAuth, backend ni un reproductor propio. El reloj existente se conserva sin cambios.

## Reproducción y comprobaciones

En Edge con la sesión de Spotify del autor, el capítulo 12 reprodujo más de 30 segundos y mostró una duración de 4:51 para la primera pista. El cambio al capítulo 13 sustituyó el iframe y dejó el nuevo detenido en 00:00. Esto no demuestra reproducción completa en todas las cuentas ni en todos los navegadores. Tras cargar el reproductor hay que pulsar su botón de reproducción. Al recargar, se recuerda el capítulo y se solicita cargar Spotify de nuevo.

Spotify documenta posibles fragmentos inferiores a 30 segundos según el contexto y problemas con medios cifrados. Se conserva allow=encrypted-media. No se promete autoplay. La pantalla bloqueada, un móvil físico y el cambio a otra app no se han podido probar: para esos usos se ofrece Abrir en Spotify. La web evita audio simultáneo entre sus propios capítulos; no controla otras pestañas o dispositivos de Spotify.

Fuentes oficiales consultadas:
- https://developer.spotify.com/documentation/embeds/tutorials/creating-an-embed
- https://developer.spotify.com/documentation/embeds/references/iframe-api
- https://developer.spotify.com/documentation/embeds/tutorials/troubleshooting

34 pruebas Playwright pasaron en escritorio y viewport móvil: rutas existentes, idiomas, accesibilidad WCAG A/AA automatizada, navegación musical, 30 enlaces, sustitución del iframe, límites del selector, persistencia, almacenamiento bloqueado y recarga. Las pruebas de interfaz interceptan únicamente el embed para no depender de la disponibilidad de Spotify; la prueba de reproducción anterior se hizo con el embed real en Edge.

La dirección corta se sirve con dist/musica/index.html y redirige a /#/musica. GitHub Pages añade la barra de directorio a /musica; Vite preview exige /musica/ para servir ese archivo. Las pruebas de publicación comprueban la dirección sin barra.

## Relación de playlists

| Capítulo | Nombre exacto | Spotify |
| --- | --- | --- |
| Prólogo | Arca-∅ · Prólogo | [Abrir](https://open.spotify.com/playlist/0mEsCoS8DhxkIoD7TMMoCU) |
| 01 | Arca-∅ · Capítulo 01 | [Abrir](https://open.spotify.com/playlist/37Pl3ZTG02YyvzSjtVrtks) |
| 02 | Arca-∅ · Capítulo 02 | [Abrir](https://open.spotify.com/playlist/2Udkd3evdbhUnSNbrdEWrU) |
| 03 | Arca-∅ · Capítulo 03 | [Abrir](https://open.spotify.com/playlist/3hn0wBzcTmbTLizFrjq1Wi) |
| 04 | Arca-∅ · Capítulo 04 | [Abrir](https://open.spotify.com/playlist/6ZMQgm5AGN4N8pg5HFOJRp) |
| 05 | Arca-∅ · Capítulo 05 | [Abrir](https://open.spotify.com/playlist/0OaQ84KodY2ADrL0qzWiVn) |
| 06 | Arca-∅ · Capítulo 06 | [Abrir](https://open.spotify.com/playlist/0lrbdpAbspIllysQCt6baO) |
| 07 | Arca-∅ · Capítulo 07 | [Abrir](https://open.spotify.com/playlist/4DXuZuZBRU8SsZje0lHHTO) |
| 08 | Arca-∅ · Capítulo 08 | [Abrir](https://open.spotify.com/playlist/4XiGQhntkXRnOvoJvHU8pD) |
| 09 | Arca-∅ · Capítulo 09 | [Abrir](https://open.spotify.com/playlist/0XOACDu9Y747qWlbenlU6P) |
| 10 | Arca-∅ · Capítulo 10 | [Abrir](https://open.spotify.com/playlist/34N7q0OPvsetQUnTuLMV3K) |
| 11 | Arca-∅ · Capítulo 11 | [Abrir](https://open.spotify.com/playlist/2oTqZdYapZ7byzO5X9ELyP) |
| 12 | Arca-∅ · Capítulo 12 | [Abrir](https://open.spotify.com/playlist/41eQjraeyrpQKds2T5hmCK) |
| 13 | Arca-∅ · Capítulo 13 | [Abrir](https://open.spotify.com/playlist/66sOccuueyDlZlM4ZO7H4k) |
| 14 | Arca-∅ · Capítulo 14 | [Abrir](https://open.spotify.com/playlist/2bPVKUtuv7PFtTdX44REfK) |
| 15 | Arca-∅ · Capítulo 15 | [Abrir](https://open.spotify.com/playlist/0QKF6ChC1ptEiyq7Ttg6yX) |
| 16 | Arca-∅ · Capítulo 16 | [Abrir](https://open.spotify.com/playlist/5xdn6mfc5Bt7FlxHnziiVM) |
| 17 | Arca-∅ · Capítulo 17 | [Abrir](https://open.spotify.com/playlist/4zqI3LOicl3J028gO8jYZU) |
| 18 | Arca-∅ · Capítulo 18 | [Abrir](https://open.spotify.com/playlist/2aHCFS1uajzcCH1KpfF0Bm) |
| 19 | Arca-∅ · Capítulo 19 | [Abrir](https://open.spotify.com/playlist/33V7Hq0AKV5RTeAGOBcwOr) |
| 20 | Arca-∅ · Capítulo 20 | [Abrir](https://open.spotify.com/playlist/4UG19Da1KtoDzg8mnQDllC) |
| 21 | Arca-∅ · Capítulo 21 | [Abrir](https://open.spotify.com/playlist/50OIswvQibVptfzoqUBYr4) |
| 22 | Arca-∅ · Capítulo 22 | [Abrir](https://open.spotify.com/playlist/2dWboHfLr30yCrBHNm0Ugh) |
| 23 | Arca-∅ · Capítulo 23 | [Abrir](https://open.spotify.com/playlist/0pbA0yyIFvKJjKXCVoQbpe) |
| 24 | Arca-∅ · Capítulo 24 | [Abrir](https://open.spotify.com/playlist/1akFWnIiU0V2VSrKQzZnvW) |
| 25 | Arca-∅ · Capítulo 25 | [Abrir](https://open.spotify.com/playlist/0V6eD1PK8dvhW6UVLtfGrx) |
| 26 | Arca-∅ · Capítulo 26 | [Abrir](https://open.spotify.com/playlist/70hUb16xwM2cutQ1G7dBEg) |
| 27 | Arca-∅ · Capítulo 27 | [Abrir](https://open.spotify.com/playlist/5hr2F4Dvfb0NFoA4L7t1gh) |
| 28 | Arca-∅ · Capítulo 28 | [Abrir](https://open.spotify.com/playlist/4f24AdpP4F685JBgojlSZO) |
| 29 | Arca-∅ · Capítulo 29 | [Abrir](https://open.spotify.com/playlist/5cLoYrqQrJot1ztV79LRMc) |

## Cabecera para lectores

`/musica` usa una cabecera compacta (60 px móvil, 64 px escritorio), con marca y selector ES/EN. El aviso de cierre, el reloj, el menú de hotel y las reservas se muestran únicamente en las rutas del hotel. El pie de Música incluye una vuelta discreta al hotel y el aviso legal. El embed conserva `encrypted-media`; la web no garantiza reproducción completa ni reutiliza la sesión de la app Spotify.
