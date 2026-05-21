# Instituto Webinar — Brand Guidelines

Guía oficial de uso de marca. Aplica a presentaciones, landings, emails, ads, banners, PDFs y cualquier comunicación visual.

> Lo simple funciona. Lo complejo paraliza. Esta guía existe para mantener la consistencia visual y de tono en TODO lo que el equipo y los colaboradores creen.

---

## 1. Logo

### Variantes disponibles

| Archivo | Uso |
|---|---|
| `assets/logos/logo-117.png` | **Lockup color principal** — cover de slides, navbar, hero de landings |
| `assets/logos/logo-118.png` | B/N — fallback en imprenta económica |
| `assets/logos/logo-119.png` | Blanco — sobre fondos dark (footer, secciones brand) |

### Espacio mínimo (clear space)

Mantén siempre un margen libre alrededor del logo equivalente a la altura del isotipo. Nada de texto, imágenes ni decoración dentro de ese espacio.

### Tamaño mínimo

- **Digital:** 80px de altura mínimo
- **Impreso:** 20mm de altura mínimo

Por debajo de ese tamaño la legibilidad del lockup se pierde.

### Prohibiciones (NO hacer)

- ❌ Estirar o comprimir las proporciones
- ❌ Rotar el logo
- ❌ Cambiar los colores del logo
- ❌ Aplicar sombras, gradientes o efectos
- ❌ Colocar el logo sobre fondos sin contraste (azul brand sobre azul brand, navy sobre navy)
- ❌ Recortar o cortar el lockup
- ❌ Usar versión b/n cuando hay opción color disponible

### Uso por contexto

- **Slides:** logo SOLO en portada (slide 01). Resto sin logo.
- **Landings:** logo en navbar y footer. No repetir en medio.
- **Emails:** logo en header del email, centrado, 80-120px ancho.
- **Documentos PDF:** logo en cover y header de cada página.

---

## 2. Paleta de colores

### Paleta primaria

| Token | Hex | Uso |
|---|---|---|
| `--iw-primary` | `#3475EF` | Brand principal — CTA, highlights, links, líneas decorativas |
| `--iw-primary-hover` | `#2A5FD0` | Estado hover de CTA |
| `--iw-dark` | `#131D2D` | Navy — texto principal, fondos hero/cards dark |
| `--iw-light` | `#D7E4FF` | Lavanda — cards, pills, badges (al 45-50% transparencia) |
| `--iw-light-soft` | `#EEF3FF` | Lavanda más suave — gradientes, fondos de sección |

### Texto

| Token | Hex | Uso |
|---|---|---|
| `--iw-ink` | `#131D2D` | Texto principal |
| `--iw-ink-soft` | `#4B5563` | Texto secundario, descripciones |
| `--iw-ink-muted` | `#6B7280` | Texto terciario, labels, hints |
| `--iw-on-dark` | `#FFFFFF` | Texto sobre fondos brand o navy |

### Combinaciones permitidas

- **Navy `#131D2D` + Brand `#3475EF`** → patrón "mitad-mitad" en titulares
- **Brand puro `#3475EF` → texto siempre BLANCO** (nunca navy sobre brand)
- **Lavanda `#D7E4FF` al 45-50% transparencia + Navy** → cards de pain points
- **Blanco + Navy + accents brand** → composición clásica del sistema

### Combinaciones PROHIBIDAS

- ❌ Brand sobre brand (sin contraste)
- ❌ Navy sobre navy oscuro
- ❌ Texto navy sobre fondo brand (siempre blanco sobre brand)
- ❌ Colores no-sistema (verdes, rojos, naranjas) salvo en estados semánticos de UI (alerts)

---

## 3. Tipografía

### Familia

**Gilroy** — Sans-serif moderna con 20 pesos disponibles en `assets/fonts/`.

Fallback CSS: `'Gilroy', system-ui, -apple-system, 'Segoe UI', sans-serif`

### Jerarquía

| Estilo | Peso | Tamaño | Line-height | Uso |
|---|---|---|---|---|
| Display | 900 | 88-104px | 1.05 | Cover, hero de impacto |
| H1 | 700 | 56-68px | 1.05 | Titular de slide / sección |
| H2 | 800 | 48-56px | 1.10 | Sub-título mayor |
| H3 | 700 | 32-40px | 1.15 | Sub-secciones, card title |
| Lead | 400 | 28-32px | 1.45 | Subtítulo grande |
| Body | 400 | 18-22px | 1.55 | Cuerpo principal |
| Small | 400 | 14-16px | 1.5 | Labels, hints, footer |

### Reglas de uso

- **Peso h1: 700** (no 800). Presencia sin machacar.
- **Patrón mitad-mitad** en titulares: la palabra-bisagra va en `<span class="iw-hl">…</span>` para colorearse brand.
- **NUNCA eyebrow sobre headlines.** El título abre la slide/sección directamente, sin texto pequeño encima.
- **Negritas** dentro de párrafos para marcar puntos críticos (1-2 por bloque).
- **Letter-spacing -0.02em** en h1 y h2 para densidad.

---

## 4. Sistema de espaciado

Escala basada en múltiplos de 8px:

| Token | Valor | Uso |
|---|---|---|
| `--iw-space-2xs` | 8px | Gaps mínimos |
| `--iw-space-xs` | 16px | Gaps entre elementos relacionados |
| `--iw-space-s` | 24px | Padding interno cards |
| `--iw-space-m` | 40px | Margen entre bloques |
| `--iw-space-l` | 64px | Separación entre secciones |
| `--iw-space-xl` | 96px | Padding generoso de slides |
| `--iw-space-2xl` | 128px | Padding hero |

### Border-radius

| Token | Valor | Uso |
|---|---|---|
| `--iw-radius-pill` | 12px | Pills, badges |
| `--iw-radius-card` | 16px | Cards estándar |
| `--iw-radius-cardLg` | 24px | Cards grandes, media |
| `--iw-radius-circle` | 9999px | CTAs pill, avatares |

---

## 5. Iconografía

### Estilo

**Lucide icons** (lucide.dev) — biblioteca open-source de iconos consistentes.

### Specs

- **ViewBox:** `0 0 24 24`
- **Stroke-width:** `2`
- **Stroke-linecap:** `round`
- **Stroke-linejoin:** `round`
- **Fill:** `none` (outline only)
- **Color:** `var(--iw-primary)` por defecto

### Tamaños recomendados

| Contexto | Tamaño |
|---|---|
| Inline con texto | 16-20px |
| Card title | 24-28px |
| Card hero (en círculo lavanda) | 32-40px |
| Hero principal | 48-64px |

### Iconos en círculo brand

Patrón habitual: icono brand dentro de un círculo lavanda `var(--iw-light)`.

```html
<div class="iw-card__icon">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- path Lucide -->
  </svg>
</div>
```

### Prohibiciones

- ❌ Iconos macizos rellenos (no usar style "solid" de FontAwesome u otros)
- ❌ Iconos en colores no-sistema
- ❌ Mezclar 2 estilos de iconografía en la misma composición

---

## 6. Decoración visual

### Líneas brand serpenteantes

Firma visual de IW: líneas curvas finas en color brand `#3475EF` que serpentean por el fondo de heros y secciones. Conectan los widgets flotantes.

### Widgets flotantes

En heros y secciones de credibilidad, usar 2-3 "fake dashboards" superpuestos a la foto principal:
- Card light con barras de progreso brand
- Card dark con número grande + sparkline

### Flechas

- ❌ NUNCA flechas hand-drawn SVG
- ✅ Solo flechas geométricas (línea + chevron clásico)
- ✅ Líneas punteadas brand para conectar steps numerados

### Fondos

- **Principal:** `assets/bg/fondos-10.jpg` (gradiente blanco→lavanda muy suave)
- **Dark:** `assets/bg/fondos-12.jpg` (azul brand sólido con onditas blancas)
- **Cards lavanda:** `rgba(215, 228, 255, 0.45)` (light brand al 45-50%)

---

## 7. Fotografía

### Estilo

- **Natural y profesional**, no stock photo cliché.
- Personas en contextos reales (oficina, casa, evento).
- Iluminación natural cálida o luz blanca limpia.

### Tratamiento

- **Border-radius:** 24-28px (rounded-2xl)
- **NUNCA circular** salvo para avatares de testimonios (50px-128px)
- **Object-fit: cover** para no deformar
- **Aspect-ratios:** 16:9 hero, 4:5 retrato lateral, 1:1 cuadrada testimonio

### Prohibiciones

- ❌ High-five forzado, stock "businessman in suit", manos chocando, gente fingiendo entusiasmo
- ❌ Overlay verde/rojo/morado (solo overlay navy al 30-50% si se necesita oscurecer)
- ❌ Filtros vintage o duotone

### Si no hay foto propia

Usar Unsplash (ver README sección Imágenes con Unsplash):

```html
<img src="https://source.unsplash.com/1600x900/?business,laptop,success" alt="...">
```

Keywords útiles: `business`, `entrepreneur`, `team`, `dashboard`, `growth`, `success`.

---

## 8. Voz y tono

> La voz se gestiona desde las skills de texto de la agencia, no en este repo.

Pero como recordatorio rápido: tuteo siempre, frases cortas, empatía antes de solución, anti-hype, vocabulario propio (sistema, foco, consistencia, maestría, libertad, lo correcto).

---

## 9. Reglas no negociables del sistema

Cumplir SIEMPRE — incumplirlas rompe la coherencia visual del cliente:

1. **Logo solo en portada (slide 01)**. Resto sin logo.
2. **NUNCA eyebrow/kicker sobre headlines.** Composición limpia.
3. **Patrón mitad-mitad en titulares**: mitad navy + mitad brand.
4. **Brand puro → contenido siempre blanco.**
5. **Fondos lavanda al 45-50% transparencia** (excepto círculos contenedores de iconos).
6. **Nunca flechas hand-drawn.** Solo líneas geométricas y chevrons.
7. **Iconos Lucide stroke 2.** Sin variaciones.
8. **Whitespace > densidad.** Minimalismo extremo.
9. **Jerarquía visual obligatoria.** Nunca 2 líneas con mismo peso+tamaño.
10. **Peso h1: 700.** No 800.

---

## 10. Checklist antes de publicar

- [ ] Logo solo en portada (si aplica)
- [ ] Titulares con patrón mitad-mitad
- [ ] Sin eyebrow sobre headlines
- [ ] Iconos Lucide stroke 2 coherentes
- [ ] Contraste suficiente en cada combinación de color
- [ ] Cards lavanda con transparencia 45-50%
- [ ] Fotografía rounded-2xl, no circular (salvo testimonio)
- [ ] Tipografía Gilroy en todos los textos
- [ ] Padding generoso, whitespace respetado
- [ ] Sin colores fuera del sistema

---

## Recursos

- **Tokens CSS:** `tokens.css`
- **Catálogo de slides:** `preview.html`
- **Catálogo de componentes:** `preview-components.html`
- **Repositorio:** https://github.com/adminnosolounjpg/instituto-webinar-ds
- **Design system online:** [claude.ai/design](https://claude.ai/design)
