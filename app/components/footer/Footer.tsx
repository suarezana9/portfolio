'use client'

import { useLang } from '../../lib/i18n/LanguageContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.brand}>Ana.</span>

        <nav className={styles.links} aria-label="links de redes sociales">
          {t.footer.links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {link.label}
              <span className={styles.linkArrow} aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <span className={styles.copy}>{t.footer.copy}</span>
      </div>
    </footer>
  )
}
