'use client'

import { useEffect, useState } from 'react'
import { useLang } from '../../lib/i18n/LanguageContext'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggle, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquea scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <nav
        className={styles.nav}
        data-scrolled={scrolled ? 'true' : 'false'}
        data-menu={menuOpen ? 'open' : 'closed'}
      >
        <div className={styles.inner}>
          <button className={styles.brand} onClick={() => scrollTo('#hero')}>
            Ana.
          </button>

          {/* Desktop links */}
          <ul className={styles.links}>
            {t.nav.links.map(({ label, href }) => (
              <li key={href}>
                <button className={styles.link} onClick={() => scrollTo(href)}>
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.right}>
            {/* Language toggle */}
            <div className={styles.langToggle} role="group" aria-label="Idioma / Language">
              <button
                className={`${styles.langOpt} ${lang === 'es' ? styles.langOptActive : ''}`}
                onClick={() => lang !== 'es' && toggle()}
                aria-pressed={lang === 'es'}
              >
                ES
              </button>
              <span className={styles.langDivider} aria-hidden="true" />
              <button
                className={`${styles.langOpt} ${lang === 'en' ? styles.langOptActive : ''}`}
                onClick={() => lang !== 'en' && toggle()}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            {/* Desktop CTA */}
            <button className={`${styles.cta} ${styles.ctaDesktop}`} onClick={() => scrollTo('#contacto')}>
              {t.nav.cta}
            </button>

            {/* Hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={styles.drawer}
        data-open={menuOpen ? 'true' : 'false'}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.drawerLinks}>
          {t.nav.links.map(({ label, href }) => (
            <li key={href}>
              <button className={styles.drawerLink} onClick={() => scrollTo(href)}>
                {label}
              </button>
            </li>
          ))}
        </ul>
        <button className={styles.drawerCta} onClick={() => scrollTo('#contacto')}>
          {t.nav.cta}
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={styles.backdrop}
        data-open={menuOpen ? 'true' : 'false'}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  )
}
