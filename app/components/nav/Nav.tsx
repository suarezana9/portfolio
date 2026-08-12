'use client'

import { useEffect, useState } from 'react'
import { useLang } from '../../lib/i18n/LanguageContext'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggle, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav} data-scrolled={scrolled ? 'true' : 'false'}>
      <div className={styles.inner}>
        <button className={styles.brand} onClick={() => scrollTo('#hero')}>
          Ana.
        </button>

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

          <button className={styles.cta} onClick={() => scrollTo('#contacto')}>
            {t.nav.cta}
          </button>
        </div>
      </div>
    </nav>
  )
}
