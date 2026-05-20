# Instituto Webinar — Design System

Sistema de diseño completo para presentaciones, landings y comunicación visual de Instituto Webinar. Pensado para conectarse a [Claude Design](https://claude.ai/design) (vía GitHub) y para uso directo del equipo de desarrollo.

## Estructura

```
instituto-webinar/
├── tokens.css              ← Fuente única de verdad: paleta, tipografía, componentes
├── preview.html            ← Catálogo visual de todas las plantillas y diagrams
├── README.md               ← Este archivo
├── assets/
│   ├── fonts/              ← Gilroy (20 pesos, .ttf)
│   ├── logos/              ← Variantes del logo (color, light, b/n, isotipo)
│   └── bg/                 ← Fondos originales del cliente (gradiente + onditas)
├── slides/
│   ├── 01-cover.html
│   ├── 02-content-bullets.html
│   ├── 03-pill-grid.html
│   ├── 04-numbered-list.html
│   ├── 05-section-divider.html
│   ├── 06-big-statement.html
│   ├── 07-callout.html
│   ├── 08-testimonial-single.html
│   ├── 09-testimonials-grid.html
│   └── 10-process-flow.html
└── diagrams/
    ├── 01-target.html
    ├── 02-road.html
    ├── 03-semicircle-road.html
    ├── 04-linear-venn.html
    ├── 05-funnel.html
    ├── 06-funnel-3d.html
    ├── 07-connected-circles.html
    ├── 08-concentric-circles.html
    ├── 09-diamonds.html
    └── 10-timeline.html
```

## Tokens de marca

| Token | Valor | Uso |
|---|---|---|
| `--iw-primary` | `#3475EF` | Acentos, highlights, CTA, líneas brand |
| `--iw-dark` | `#131D2D` | Texto principal, fondos hero |
| `--iw-light` | `#D7E4FF` | Cards, pills, badges (al 45-50% transparencia) |
| `--iw-ink` | `#131D2D` | Texto principal |
| `--iw-ink-soft` | `#4B5563` | Texto secundario |
| Fuente | Gilroy | 20 pesos disponibles (100 → 950) |
| Ratio slides | 16:9 (1920×1080) | Lienzo base |

Cualquier modificación de marca se hace en **`tokens.css`** y se propaga a todas las plantillas.

## Cómo previsualizar

### Opción 1: servidor local (recomendado, las fuentes cargan bien)

```bash
cd instituto-webinar
python -m http.server 8765
```

Luego abre [http://localhost:8765/preview.html](http://localhost:8765/preview.html) en el navegador.

### Opción 2: abrir directo en el navegador

Doble click sobre `preview.html`. Algunos navegadores pueden bloquear las fuentes locales con `file://`. Si te ocurre, usa la opción 1.

## Cómo añadir contenido nuevo

### Reemplazar el placeholder vacío por una imagen

Cualquier `<div class="iw-media">…</div>` o `<div class="iw-testimonial__photo"></div>` acepta una imagen dentro:

```html
<!-- Antes: -->
<div class="iw-media"></div>

<!-- Después: -->
<div class="iw-media">
  <img src="../assets/photos/cliente-x.jpg" alt="Cliente X">
</div>
```

Se ajusta sola con `object-fit: cover`, mantiene border-radius. Soporta también `.iw-media--square` y `.iw-media--wide` para otros aspect-ratios.

### Crear una nueva diapositiva

1. Copia el HTML de la plantilla más cercana (ej: `slides/02-content-bullets.html`).
2. Renómbralo (ej: `slides/11-mi-nueva.html`).
3. Cambia el contenido. Reutiliza componentes globales (`iw-h1`, `iw-checklist`, `iw-pill`, etc.).
4. Si necesitas un componente nuevo, añádelo a `tokens.css` con prefijo `iw-`.

## Conexión con Claude Design

En claude.ai/design, al crear un design system para Instituto Webinar:

1. **Link code on GitHub:** apunta a este subfolder, ej: `https://github.com/humberto/design-systems/tree/main/instituto-webinar`
2. **Add fonts, logos and assets:** sube manualmente los logos de `assets/logos/` (Claude Design no enlaza assets binarios desde GitHub, hay que subirlos).
3. **Any other notes:** la voz y tono del cliente se gestiona desde las skills de texto de la agencia, no en este repo.

## Reglas no negociables del sistema

Acumuladas de iteraciones con el cliente — incumplirlas rompe la coherencia visual:

- **Logo solo en portada (slide 01)**. El resto de slides no llevan logo.
- **Fondo de marca en TODOS los slides**: `assets/bg/fondos-10.jpg`.
- **Fondos lavanda con 40–50% transparencia** (`rgba(215, 228, 255, 0.45)`). Excepción: los círculos contenedores de iconos van sólidos.
- **Nunca flechas hand-drawn SVG**. Las composiciones conectan ideas con jerarquía tipográfica, color y indent — no con flechas.
- **Iconos siempre estilo Lucide** (viewBox 24×24, stroke 2, line caps redondos).
- **Minimalismo extremo**: si dudas entre meter algo o no, no lo metas. Whitespace > densidad.
- **Jerarquía visual obligatoria**: nunca dos líneas con el mismo peso y tamaño en un divisor o callout. Una es la principal, otra el contexto.

## Mantenimiento

- **Source of truth:** este repo. Cualquier cambio se commitea aquí.
- **Distribución al equipo:** `git pull` en local. Claude Design re-lee al refrescar.
- **Cambios visuales:** se hacen en `tokens.css`. NO en cada slide individual.
