# Dirección fotográfica y prompts de ARCA-∅

Generación y edición con la herramienta de imágenes integrada. El alzado aportado por el autor es la referencia de disposición arquitectónica. Sustituye las interpretaciones anteriores de la posición del Aurora. Sin fotografías de archivo ni marcas reales.

## Disposición según el alzado

El suelo del Aurora coincide con el suelo de la planta principal: ambos se apoyan en el gran zócalo de hormigón oscuro. Una junta fina separa el pabellón de madera de la planta principal. El zócalo continúa bajo la mitad izquierda del Aurora y termina bajo su centro; la mitad derecha vuela lateralmente hacia el glaciar, sin pilares ni pilotes. No existe una losa elevada aparte.

El Aurora es una caja rectangular de madera clara y vidrio, de unos diez metros de altura, con una única esquina curva delante a la derecha. Su cubierta queda un poco por debajo de la del cuerpo de suites, no sobre él. El cuerpo posterior conserva tres plantas de ocho ventanales cada una y la aguja negra con un pequeño piloto rojo. El esquema SVG de la web reproduce esta misma relación de alturas y apoyos.

Se conserva el hotel pequeño frente a la montaña, de unos 90 m de largo; el muelle tiene 50–60 m, helipuerto y grúa pequeña. Glaciar al este/derecha al mirar el hotel desde el agua, separado por roca y nieve; a la izquierda al mirar el mar desde el Aurora. Sol de medianoche en verano. Sin edificios en la orilla opuesta ni árboles exteriores.

## Prompts de la corrección según el boceto

### master

Use case: precise-object-edit. Rebuild ONLY the HOTEL ARCHITECTURE in image 1 according to the elevation drawing in image 2.
Image 1 = photographic target: preserve its exact photorealistic style, camera distance/composition, small hotel scale (under one third frame width), immense mountain, RIGHT glacier with broad rock-and-snow slope between it and hotel, dock with H helipad and tiny crane, black roof spire with pinpoint red beacon, and July midnight sunlight from left. Image 2 = AUTHORITATIVE ARCHITECTURAL LAYOUT reference, OVERRIDES the hotel geometry in image 1. Do not reproduce any labels, drawing style or text.
CRITICAL COMMON FLOOR DATUM: the BOTTOM of Aurora's glass box is EXACTLY LEVEL with the BOTTOM/FLOOR of the MAIN PRINCIPAL-LEVEL windows, as in the drawing. It is NOT at the roof of the principal level, not elevated beside the rear suite floors, not on a separate narrow flying slab. There is ONE large dark concrete service PLINTH directly underneath BOTH the principal level and the LEFT HALF of the Aurora.
Architecture from water, left to right: modest horizontal main-floor front block with 4–5 separated wide glazed sections and concrete piers. Behind it, rectangular suite block with exactly THREE full storeys and EIGHT large windows per storey, flat roof and thin BLACK needle topped by tiny red light. Then a NARROW VERTICAL DARK ACOUSTIC JOINT, then the tall pale timber/glass Aurora box at the RIGHT end.
Aurora is a SINGLE TALL VOLUME, around 10m or THREE storeys tall. It STARTS at the SAME FLOOR ELEVATION as principal level, so its ROOF is a little LOWER than the rear suite-block roof (almost as high, never perched above it). Its height rises above the single-storey principal facade. A RECTANGULAR BOX with a FLAT ROOF, STRAIGHT front face for most of its width, STRAIGHT side faces and JUST ONE gently rounded corner: FRONT-RIGHT CORNER toward glacier. Do NOT make a cylinder, turret, oval pavilion or globally curved facade. Pale laminated timber frame, tall clear glass, warm luxury lounge interior.
PLINTH AND OVERHANG: the massive charcoal CONCRETE PLINTH is a tall mostly blind continuous wall, extending from left building all the way to the MIDPOINT of Aurora. Its RIGHT VERTICAL EDGE ends directly UNDER THE CENTRE of Aurora's floor. Thus Aurora's LEFT HALF is directly supported by this BIG CONCRETE MASS, while its RIGHT HALF projects SIDEWAYS TO THE RIGHT toward glacier over the rocky slope, with visible EMPTY AIR BELOW. NO pillars, NO piles, NO stilts, NO concrete mass or raised roof slab beneath the right half. This is a lateral overhang exactly as the sketch. Do not invent a forward-only cantilever instead.
Maintain ~90m hotel length, ~50–60m dock, under one-third photo width. Keep the rest of image 1 unchanged, including rocky buffer from glacier. No people, vehicles, watermarks, brands or text except helipad H. Real luxury architectural landscape photo, not diagram or render.

Ajuste final de la cota de suelo:

Edit image 1 with ONE precise correction; image 2 is the authoritative elevation sketch. Keep every mountain, glacier, dock, window, spire, camera scale, light and material unchanged.
The Aurora is STILL ONE STOREY TOO HIGH in image 1. TRANSLATE THE ENTIRE timber-and-glass box DOWN by about 35 pixels in this 1672x941 image, WITHOUT changing its height or width. Its current glass bottom/floor is around y545; MOVE it DOWN to around y580, EXACTLY ALIGNED with the BOTTOM edge of the main principal-level glazed windows to its left. Thus the flat roof of Aurora must also move DOWN from around y447 to around y482, distinctly LOWER than the rear suite-block roof at y450. There is NO raised upper concrete tier under the Aurora. The main level and Aurora SHARE ONE CONTINUOUS FLOOR LINE, at the TOP of the huge concrete SERVICE PLINTH, just like image 2. Main facade windows span above that floor; Aurora spans roughly three storeys above that SAME floor.
Remove the extra 35px raised concrete wall section currently beneath the wooden box. Plinth TOP runs HORIZONTALLY on the common floor line y580 from main building to under the LEFT HALF of Aurora. Plinth's RIGHT vertical EDGE ends under the box MIDPOINT (around x1040). Aurora RIGHT HALF (x1040–1147) floats in clear empty AIR over the slope, no pillars or supports. Box bottom stays perfectly level at y580 across both halves. Keep rectangular flat-front box with ONLY FRONT-RIGHT corner gently rounded, not cylindrical.
Do NOT lower the main principal floor or change rear suite body. LOWER ONLY AURORA to share that EXISTING principal FLOOR, NOT its ROOF. No text from sketch. Photorealistic same midnight-sun photograph.

### winter

Use case: lighting-weather. Change ONLY season and light of the reference photograph. Preserve the EXACT hotel architecture, silhouette, proportions, small scale and landscape geometry: straight rectangular Aurora timber/glass box at RIGHT with just ONE gently curved front-right corner. Aurora floor aligns EXACTLY with principal-level FLOOR (bottom of main glazed windows), not its roof. Massive dark concrete SERVICE PLINTH continuously supports main level and the LEFT HALF of Aurora; plinth ends under MIDPOINT of Aurora, RIGHT HALF floats sideways toward glacier with no columns/piles. Aurora roof lower than rear suite roof, single interior volume 10m high, 3-storey rear suites with 8 bays per row. Thin acoustic joint to main block. Thin black needle with tiny red tip on rear roof. Tiny dock with H helipad and small crane. Glacier remains right, distant from dock with broad rocky slope buffer.
Transform into March polar night: snowy hillside, inlet fully frozen white, natural dark starry sky, restrained green northern lights, realistic cold moonlight; Aurora warm inside, rear suite windows dark. Keep framing, mountain mass and all building geometry unchanged. No people, vehicles, brands, watermarks or text except H. Photorealistic architectural luxury photography, no science-fiction glow.

### hero, dock y og

`hero` y `dock` reutilizan la fotografía maestra de sol de medianoche. Así el alzado corregido aparece también en la portada y en Cómo llegar. `og` es un recorte central de esa misma toma en 1600:837. No son generaciones independientes. La portada móvil se centra en el edificio y desplaza la toma hacia arriba con un aumento moderado para mostrar el Aurora por encima del cuadro de reservas.

## Prompts de interiores conservados

### aurora

Use case: photorealistic-natural. The input image defines the resort and its EAST timber pavilion. Produce a NEW 16:9 interior photograph INSIDE that exact AURORA LOUNGE. Not an exterior. Eye-level camera near the back concrete wall, facing SOUTH across the inlet. From this interior viewpoint, the glacier is now at the LEFT through the glass, up the nearby east slope, with bare empty mountains across the water. July soft natural DAYLIGHT, no dusk, no aurora, open water, brown stony tundra and residual high mountain snow.
A large double-to-triple height hall with a genuine ten-metre-high CURVED wall of clear glass wrapping the south-east corner (left of view), PALE laminated timber beams and warm pale timber ceiling, not a low flat-ceiling restaurant. A single LONG reddish DARK MAHOGANY captain's table prominently centered, EXACTLY TWELVE seating places: five plain elegant chairs along each side, one chair at far end and ONE distinctive leather ARMCHAIR at the near head. Timber/glass scale luxurious but real, warm leather sofas near windows, a discreet timber bar on RIGHT with a few stools, warm lamps, above bar a simple brass RING CLOCK with hands but no numbers and no writing. Coffee cabinet and understated painting on rear side. No people, no visible electronics, no logos, no embedded text, no sci-fi. Precise professional hospitality photography, 24mm lens with straight verticals and natural textures. Maintain a believable rocky buffer before glacier; no building on opposite shore.

Ajuste del mobiliario sobre la primera generación:

Use case: precise-object-edit. Edit this exact Aurora photograph. Preserve architecture, curved glass wall, pale timber, brass ring clock and bar on the right, sofas, glacier LEFT, empty south shore, daylight, colors, composition and photorealism. Change ONLY the captain's table and its seating arrangement. The table is currently too long and surrounded by too many chairs. Shorten it enough to seat EXACTLY TWELVE diners, with generous realistic spacing:
EXACTLY FIVE individual dining chairs on the LEFT long side, EXACTLY FIVE individual dining chairs on the RIGHT long side, ONE single chair at the FAR end, ONE single large leather ARMCHAIR at the NEAR end. TOTAL TWELVE. Each of the five side chairs must be distinctly countable, spaced apart, no extra chair behind another, no second row, no chair clusters. Keep mahogany one-piece tabletop, dark reddish polished timber, cream/brown understated leather seating. All chairs neatly positioned, no people or other objects added. Keep all background layout unchanged. Table for 12 rather than 14 or 16, broad enough for dining but less elongated than input. No text, no numbers, no watermark. Final high-resolution horizontal 16:9.

### cam

Use this exact Aurora Lounge interior as the room identity reference. Generate one photorealistic fixed surveillance webcam still, wide 16:9. CRITICAL radically different camera position: mounted high at ceiling height 5 metres above the bar in the rear-right corner, looking diagonally DOWN at a steep 45-degree angle over the room. Clearly see the tops of the mahogany table and all chairs, much more floor area, table diagonal in frame; distant horizon appears only in uppermost quarter. Same curved 10-metre glass wall, pale laminated timber, left-side glacier through windows and empty inlet/opposite mountains, bar on right, leather lounge furniture, brass ring clock without numbers. Preserve a table with exactly twelve seats, five on each long side and one at each end; nearest end has armchair. EMPTY ROOM, overcast July 14 morning 11AM polar daylight, subdued cool white balance, faint surveillance compression and grain, understated realistic security camera exposure, no commercial cinematic framing. No text, overlays, date, timestamp, UI, logo or watermark. Not night, no people, no science fiction.

### omnimed

Use case: photorealistic-natural. Produce one horizontal 16:9 professional hospitality / medical equipment photograph for a remote luxury hotel infirmary. A partially buried SERVICE LEVEL room with NO EXTERIOR WINDOWS and NO daylight panorama. Quiet expensive medical room, pale neutral walls, dark concrete structural wall, clean soft artificial clinical lighting. Centerpiece: a plausible 2026 white examination BED beneath a partially enclosing white SENSOR DOME, open at sides, gentle subdued BLUE diagnostic light within the dome. A few small precise sensor modules in curved arch, not a full sealed MRI tube, not a spaceship, no holograms. Linen folded neatly, discreet equipment cabinet, no screens with readable text. Human scale, clinically clean, expensive but believable precision medical technology. No people, no logo, no labels, no windows, no glacier visible, no neon decoration. Natural fine grain, true photographic material texture, soft shadows, straight verticals, 35mm photography, not 3D render.

## Fotografías conservadas

Dirección de sus prompts originales:

| Archivo | Dirección del prompt |
| --- | --- |
| garden-suite | Luxury bedroom in pale oak, king bed in white linen, dark stone bathroom, glazed garden gallery and trees beyond. |
| high-suite | Upper bedroom, three-metre panoramic window over inlet, glacier on far left, white linen and pale timber. |
| garden | Glazed main-level corridor, exactly four trees in monumental planters and a bronze hand sculpture on a pedestal, timber ceiling and charcoal floor. |
| food | Close-up of Nordic Arctic char, dill oil, tiny pickled vegetables and one quenelle on matte ivory ceramic, natural light and glacier-blue bokeh. |
| spa | Outdoor dark stone hot tub with gentle steam, pale timber loungers and folded towels, inlet ahead and glacier left, Arctic summer light. |
| snowmobile | One unbranded dark electric snowmobile on a winter trail marked with red-striped poles, distant mountains and glacier valley to left, no riders. |
| kayak | Kayak with a distant paddler seen from behind on safe calm open water, low midnight sun, glacier far to left, no ice near the kayak. |
| watch | Three unbranded mechanical watches in discreet glazed showcases on stone plinths, navy velvet, warm oak and natural Arctic reflections. |
| crown-suite | Highest suite living room, panoramic inlet and glacier left, pale timber, white linen sofas, private dining area and visible pantry. |

## Entrega web

Finales en `public/images/<archivo>-480.webp`, `-960.webp` y `-1600.webp`: 17 conjuntos, 51 archivos. Reescalado Lanczos, WebP método 6. Exteriores: calidad 75 para 480/960 y 78 para 1600; portada de 960 a calidad 55 para reducir la descarga inicial. Los interiores conservan su optimización anterior. Textos alternativos ES/EN en `src/locales/`. `imageRevision` en `site.config.json` versiona las URLs y precargas: `aurora-alzado`.
