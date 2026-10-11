# Dirección fotográfica y prompts de ARCA-∅

Las imágenes se generaron con la herramienta de imágenes integrada, sin fotografías de archivo ni marcas reales. La revisión selectiva renueva siete fotografías: `master`, `hero`, `aurora`, `cam`, `dock`, `winter` y `omnimed`. OpenGraph es un recorte de la nueva imagen maestra; las otras nueve fotografías se conservan.

## Referencia de continuidad

El hotel ocupa la orilla norte de la ensenada y mira al sur. El glaciar está al este: a la derecha al mirar el hotel desde el agua, a la izquierda al mirar el mar desde el Aurora. Bloque largo de hormigón oscuro, cuerpo posterior alto con tres filas de ventanales, cubierta plana y aguja fina con un pequeño piloto rojo. El Aurora es un pabellón diferenciado de madera laminada clara y vidrio, situado en el extremo este del frente y parcialmente volado sobre la ladera. Nada de edificios en la orilla opuesta ni árboles en la tundra exterior.

El verano tiene agua abierta, tundra parda y luz de sol de medianoche. La portada en hora azul y la fotografía con aurora son material promocional de marzo, anterior a la apertura. La cámara muestra una mañana nublada de julio, desde una esquina alta del mismo salón. Omni-Med se encuentra en una sala sin ventanas, en el nivel de servicio.

Los exteriores derivados usan `master` como referencia visual; la cámara usa el interior `aurora`. El mapa SVG también sitúa el glaciar al este. Las fotografías conservadas no se han regenerado en esta revisión.

## Prompts de la revisión selectiva

### master

Use case: photorealistic-natural. Generate a single final architectural photograph, 16:9 landscape at the highest available resolution. This is the canonical reference image for ARCA-∅, a fictional five-star Svalbard resort in July 2026. No text, brands, watermark, people or sci-fi elements. Professional Nordic architectural photography, realistic weathered materials, absolutely not a CGI render.
High drone position over a calm inlet looking NORTH towards its north shore, diagonally from southwest. Water in foreground, bare brown/olive Arctic tundra and rocky hillside rising behind the building. Only residual mountain snow patches; no trees. The opposite south shore is entirely unbuilt.
One large long charcoal CONCRETE resort stepped into the hillside. A long low main-level block at the front; a taller rear block set back uphill with exactly THREE horizontal rows of large suite windows, flat roof, unobtrusive low ventilation. In the middle of the REAR roof one very slender tall BLACK STEEL SPIRE with a tiny RED tip light: no tower or bulky antenna base. Under the main level, two storeys of massive mostly blind concrete plinth leading down to the partly buried service level, only a few slit windows.
At the RIGHT/EAST end of the FRONT main block, nearest the glacier: the separate AURORA LOUNGE, a PALE LAMINATED TIMBER and GLASS pavilion, double-to-triple height, a ten-metre-high CURVED glass wall wrapping its south-east corner. A box of glass on dark stone, HALF cantilevered above the rocky slope with open empty air below. It must read as a distinct timber pavilion, not the entire front facade. A clean narrow dark acoustic joint separates it from concrete. Small side terrace with flat glass canopy.
To the RIGHT/EAST of the hotel a blue heavily crevassed GLACIER descends from the uphill mountain towards the inlet, tall visible ice front. Leave a believable rocky buffer from the hotel; it is never on the left of this exterior view.
Below: large concrete loading yard, long gentle supply ramp attached along the south facade, small waterside pier with BLACK STEEL SHEET-PILE edge three metres below the yard, broad concrete stairs, small unloading crane, helipad circle with H (the ONLY allowed lettering). Service walkway with railing extends east towards glacier.
Low golden MIDNIGHT SUN, bright summer sky, quiet green-grey OPEN water, only a few small ice pieces near distant glacier. Accurate dark concrete, pale timber, sober premium architecture, desaturated natural colors. Frame the whole building and glacier with generous landscape.

### hero

Use case: photorealistic-natural. Input image is the CANONICAL ARCHITECTURE AND GEOGRAPHY reference, not a request to redesign. Produce one 16:9 luxury architectural photograph, no text, watermark, people or brands. Preserve EXACTLY this resort's long dark concrete front block, mostly blind tall service plinth, THREE horizontal window rows in the rear block, flat roof and very fine black central spire with tiny red tip. At the RIGHT end, nearest the glacier, the separate pale laminated TIMBER AND GLASS Aurora pavilion with tall CURVED ten-metre glass corner, clean dark acoustic joint and half projecting over the rocky slope.
New camera: lower viewpoint from the water looking NORTH, slightly closer than the reference but showing the WHOLE resort, spire, and glacier to its RIGHT. Hotel positioned around middle-right, quiet open water foreground and generous subdued left part for webpage typography. Maintain correct east/right placement of both pavilion and glacier. No hotel or cabins on any far shore.
New season/light: late MARCH blue hour, believable snow patches and snow on surrounding bare slopes, blue dusk sky but no stars or aurora. Calm mostly open water with a few small pieces of floating ice. The Aurora glows warm amber like a lantern on stone; the rest of the resort is almost dark, black suite windows; the fine spire's RED pilot visible. The glacier is cold blue, not illuminated artificially. Real materials, straight verticals, restrained Nordic colors, professional 35mm architectural photograph, not CGI. No giant light halos or red glow anywhere other than tiny spire tip.

### aurora

Use case: photorealistic-natural. The input image defines the resort and its EAST timber pavilion. Produce a NEW 16:9 interior photograph INSIDE that exact AURORA LOUNGE. Not an exterior. Eye-level camera near the back concrete wall, facing SOUTH across the inlet. From this interior viewpoint, the glacier is now at the LEFT through the glass, up the nearby east slope, with bare empty mountains across the water. July soft natural DAYLIGHT, no dusk, no aurora, open water, brown stony tundra and residual high mountain snow.
A large double-to-triple height hall with a genuine ten-metre-high CURVED wall of clear glass wrapping the south-east corner (left of view), PALE laminated timber beams and warm pale timber ceiling, not a low flat-ceiling restaurant. A single LONG reddish DARK MAHOGANY captain's table prominently centered, EXACTLY TWELVE seating places: five plain elegant chairs along each side, one chair at far end and ONE distinctive leather ARMCHAIR at the near head. Timber/glass scale luxurious but real, warm leather sofas near windows, a discreet timber bar on RIGHT with a few stools, warm lamps, above bar a simple brass RING CLOCK with hands but no numbers and no writing. Coffee cabinet and understated painting on rear side. No people, no visible electronics, no logos, no embedded text, no sci-fi. Precise professional hospitality photography, 24mm lens with straight verticals and natural textures. Maintain a believable rocky buffer before glacier; no building on opposite shore.

Ajuste del mobiliario sobre la primera generación:

Use case: precise-object-edit. Edit this exact Aurora photograph. Preserve architecture, curved glass wall, pale timber, brass ring clock and bar on the right, sofas, glacier LEFT, empty south shore, daylight, colors, composition and photorealism. Change ONLY the captain's table and its seating arrangement. The table is currently too long and surrounded by too many chairs. Shorten it enough to seat EXACTLY TWELVE diners, with generous realistic spacing:
EXACTLY FIVE individual dining chairs on the LEFT long side, EXACTLY FIVE individual dining chairs on the RIGHT long side, ONE single chair at the FAR end, ONE single large leather ARMCHAIR at the NEAR end. TOTAL TWELVE. Each of the five side chairs must be distinctly countable, spaced apart, no extra chair behind another, no second row, no chair clusters. Keep mahogany one-piece tabletop, dark reddish polished timber, cream/brown understated leather seating. All chairs neatly positioned, no people or other objects added. Keep all background layout unchanged. Table for 12 rather than 14 or 16, broad enough for dining but less elongated than input. No text, no numbers, no watermark. Final high-resolution horizontal 16:9.

### cam

Use this exact Aurora Lounge interior as the room identity reference. Generate one photorealistic fixed surveillance webcam still, wide 16:9. CRITICAL radically different camera position: mounted high at ceiling height 5 metres above the bar in the rear-right corner, looking diagonally DOWN at a steep 45-degree angle over the room. Clearly see the tops of the mahogany table and all chairs, much more floor area, table diagonal in frame; distant horizon appears only in uppermost quarter. Same curved 10-metre glass wall, pale laminated timber, left-side glacier through windows and empty inlet/opposite mountains, bar on right, leather lounge furniture, brass ring clock without numbers. Preserve a table with exactly twelve seats, five on each long side and one at each end; nearest end has armchair. EMPTY ROOM, overcast July 14 morning 11AM polar daylight, subdued cool white balance, faint surveillance compression and grain, understated realistic security camera exposure, no commercial cinematic framing. No text, overlays, date, timestamp, UI, logo or watermark. Not night, no people, no science fiction.

### dock

Use case: photorealistic-natural. Input is the exact canonical exterior resort reference. Make a NEW 16:9 professional photograph of its PRIVATE PIER, closer and slightly elevated from over the water south of the pier, looking NORTH. Preserve same dark concrete main and service blocks, THREE horizontal window rows in rear wing, slender black central roof spire, separate pale timber/glass Aurora at RIGHT/EAST end and glacier to RIGHT beyond it. Do NOT redesign resort.
Foreground: low pier with BLACK STEEL SHEET PILING wall and quiet open green-grey inlet water. On pier a painted helipad circle and a SINGLE white H (only allowed lettering), small utilitarian unloading CRANE in one corner. A broad CONCRETE STAIRCASE climbs THREE METRES from pier to the large loading yard; a narrow adjacent cart ramp. Behind, massive mostly blind dark concrete service plinth and a LONG GENTLE supply ramp attached along the south facade rising towards the Aurora terrace. A service walkway with steel railing runs east towards the glacier. Let the practical access details be clear and believable, not decorative.
July bright clean natural MORNING light, mostly bare brown stony tundra, glacier blue, residual snow only up mountain, no trees, no people, no merchant vessel, no giant yacht, no architecture across inlet. Photographic textures and real scale, 35mm lens, sober precise high-end architectural photography, no text or branding except permitted H.

### winter

Use case: photorealistic-natural. Input is the EXACT resort architecture/geography reference. Generate a horizontal 16:9 winter night architectural landscape photograph of the SAME resort, seen from the WATER looking NORTH, distant in the lower middle of frame, ample starry dark sky and surrounding mountains. Preserve long dark concrete front block and mostly blind service plinth, taller rear block with exactly THREE rows of suite windows, flat roof and very thin BLACK central SPIRE with tiny RED tip light, and the separate pale timber and glass Aurora pavilion at the RIGHT/EAST end next to the glacier. The glacier must remain to the RIGHT of the hotel. No new towers, cabins, bridges or buildings.
Season: clear dark MARCH night before opening. Snow blankets the rocky slopes, the INLET is FROZEN, matte pale WHITE ICE in foreground, not open black water. A natural restrained GREEN AURORA across the sky with realistic stars; NOT neon cartoon bands or rainbow. The Aurora Lounge glows warm and softly through curved glazing; all other suite windows nearly black, tiny red light only at spire tip. Blue glacier subtle in darkness, opposite shore entirely empty, no ship trapped in ice. No people, no spheres, no orange/red glow, no logos/text, no sci-fi. Real professional long-exposure Arctic photography, cool desaturated palette, natural grain and exposure, architectural shape must match reference.

### omnimed

Use case: photorealistic-natural. Produce one horizontal 16:9 professional hospitality / medical equipment photograph for a remote luxury hotel infirmary. A partially buried SERVICE LEVEL room with NO EXTERIOR WINDOWS and NO daylight panorama. Quiet expensive medical room, pale neutral walls, dark concrete structural wall, clean soft artificial clinical lighting. Centerpiece: a plausible 2026 white examination BED beneath a partially enclosing white SENSOR DOME, open at sides, gentle subdued BLUE diagnostic light within the dome. A few small precise sensor modules in curved arch, not a full sealed MRI tube, not a spaceship, no holograms. Linen folded neatly, discreet equipment cabinet, no screens with readable text. Human scale, clinically clean, expensive but believable precision medical technology. No people, no logo, no labels, no windows, no glacier visible, no neon decoration. Natural fine grain, true photographic material texture, soft shadows, straight verticals, 35mm photography, not 3D render.

### og

Recorte central de `master` en relación 1600:837. Sin texto incrustado. Se mantiene la misma arquitectura y la posición del glaciar; no es una generación independiente.

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

Finales en `public/images/<archivo>-480.webp`, `-960.webp` y `-1600.webp`: 17 conjuntos, 51 archivos, aproximadamente 5 MB. Las nuevas fotografías se reescalan con Lanczos a 16:9 (OpenGraph a 1600:837), WebP método 6, calidad 75 para 480/960 y 78 para 1600. Las fotografías conservadas mantienen calidad 79. Los textos alternativos ES/EN están en `src/locales/` y describen las nuevas tomas. La portada móvil ajusta el encuadre para conservar el pabellón y el glaciar.
