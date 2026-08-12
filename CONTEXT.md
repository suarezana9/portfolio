# Portafolio — Ana Suárez
## Contexto del proyecto

Portfolio personal con doble propósito:
1. Conseguir clientes **freelance** (proyectos remotos, hispanohablantes)
2. Vender **sistemas a medida** a clientes de negocio (contadores, comercios, inmobiliarias)

Audiencia: clientes técnicos que evalúan código + clientes no técnicos que solo quieren resultados.
Propuesta de valor: "Construyo sistemas de punta a punta. El stack es un detalle."

---

## Decisiones de diseño

| Decisión | Elección | Por qué |
|----------|----------|---------|
| Stack | Next.js 16 + TypeScript + CSS Modules | Sin librerías innecesarias, CSS propio |
| Paleta | Japandi/Warm Minimalist — dark mode | `#181c17` base, `#dcb482` ámbar, `#b0b9a8` sage |
| Tipografía display | Georgia (system serif) | Editorial, autoridad, diferente al sans-serif tech de rigor |
| i18n | Context provider client-side (ES/EN) | Single-page portfolio, sin routing complejo |
| Animaciones | CSS `@keyframes` + IntersectionObserver | Sin dependencias, sin hydration mismatch |
| Referencia visual | tamalsen.dev — expertise section, timeline | Inspiración, no copia |

---

## Fases

### ✅ Etapa 1 — Scaffold y tokens
- [x] Next.js 16 + TypeScript + App Router
- [x] `globals.css` con sistema completo de tokens Japandi dark
- [x] `layout.tsx` con metadata SEO base
- [x] Estructura de carpetas por sección
- [x] `.claude/launch.json` para dev en puerto 3001
- [x] Repositorio en GitHub: `github.com/suarezana9/portfolio`

### ✅ Etapa 2 — Nav y Hero
- [x] Nav fija: transparente sobre hero → sólida al scrollear
- [x] Transición de colores en todos los elementos de la nav
- [x] Hero a pantalla completa (`100svh`) con fondo oscuro + textura de grano
- [x] Headline "sistemas / a medida." con animación de entrada (`@keyframes wordUp`)
- [x] Bottom bar con descripción + CTAs animados (`@keyframes fadeUp`)
- [x] Pulse dot de disponibilidad
- [x] Botones scroll-to smooth
- [x] Fix hydration mismatch React 19 (reemplazado useState por @keyframes)
- [x] Responsive mobile

### 🔄 Etapa 3 — Secciones principales (EN CURSO)
- [ ] i18n: `LanguageContext` + `translations.ts` (ES/EN)
- [ ] Toggle de idioma en Nav (ES | EN)
- [ ] Expertise section (inspirada en tamalsen.dev)
  - 3 áreas: Frontend Dev / Arquitectura de sistemas / Apps mobile
  - Número grande de fondo + título partido + descripción
  - Scroll-triggered animation
- [ ] Sistemas section (filas interactivas full-width con hover fill)
- [ ] Proyectos section (2 bloques: Wallit + Stock multi-local)

### ⏳ Etapa 4 — Experiencia y contacto
- [ ] Timeline de experiencia profesional (IoT 6 años + trabajo actual)
- [ ] Sección contacto con formulario funcional (Resend API)
- [ ] Footer oscuro con links sociales

### ⏳ Etapa 5 — Polish y deploy
- [ ] SEO: Open Graph image generada con `ImageResponse`
- [ ] `sitemap.xml` y `robots.txt`
- [ ] Lighthouse audit (Performance, Accessibility, SEO ≥ 90)
- [ ] Deploy en Vercel conectado a GitHub
- [ ] Dominio propio configurado

---

## i18n — Estructura planificada

```
app/
  lib/
    i18n/
      translations.ts     ← textos en { es: {...}, en: {...} }
      LanguageContext.tsx  ← provider + hook useLanguage()
```

El toggle vive en la Nav. Persiste en `localStorage`. Sin routing (`/en/`, `/es/`).

---

## Stack completo

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | CSS Modules + variables globales |
| i18n | Context API client-side |
| Formulario | Resend (API Route) |
| Deploy | Vercel |
| Repo | github.com/suarezana9/portfolio |

---

## Notas de implementación

- **Hydration**: usar `@keyframes` en lugar de `useState` para animaciones de entrada
- **Client Components**: solo cuando hay interactividad real (scroll, idioma, formulario)
- **Dark mode**: toda la página es dark. No hay toggle light/dark.
- **Paleta dark Japandi**:
  - `--dark-bg: #181c17` — fondo base
  - `--dark-bg-2: #212619` — secciones alternadas
  - `--dark-text: #f3f0e8` — texto principal
  - `--dark-muted: rgba(243,240,232,0.44)` — texto secundario
  - `--accent: #b0b9a8` — sage claro (sobre fondo oscuro)
  - `--warm: #dcb482` — ámbar dorado (kickers, detalles)
  - `--dark-border: rgba(243,240,232,0.10)` — separadores
