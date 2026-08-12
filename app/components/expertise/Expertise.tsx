'use client'

import { useReveal } from '../../hooks/useReveal'
import { useLang } from '../../lib/i18n/LanguageContext'
import styles from './Expertise.module.css'

const ICONS = [
  // Automatización / operations
  <svg key="ops" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
  </svg>,
  // Ventas / web
  <svg key="web" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
    <path d="M7 8h10M7 11h5"/>
  </svg>,
  // Mobile
  <svg key="mobile" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/>
    <path d="M9 6h6"/>
  </svg>,
]

const ACCENT_COLORS = ['#e879a0', '#4a9fff', '#f97316']

export default function Expertise() {
  const { t } = useLang()
  const headingRef = useReveal<HTMLDivElement>()
  const gridRef    = useReveal<HTMLDivElement>(0.06)

  return (
    <section id="expertise" className={styles.section}>
      <div className={styles.inner}>

        <div ref={headingRef} className={styles.heading}>
          <span className={styles.kicker}>{t.expertise.kicker}</span>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>{t.expertise.titleLine1}</span>
            </span>
            <span className={styles.titleLine}>
              <span className={`${styles.titleWord} ${styles.titleWordAccent}`}>
                {t.expertise.titleLine2}
              </span>
            </span>
          </h2>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {t.expertise.cards.map((card, i) => (
            <article
              key={card.num}
              className={styles.card}
              style={{
                '--card-delay': `${i * 130}ms`,
                '--accent': ACCENT_COLORS[i],
              } as React.CSSProperties}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}>{ICONS[i]}</div>
                <div className={styles.cardTitleBlock}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <span className={styles.cardAccent}>{card.accent}</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.codeTag}>&lt;h3&gt;</span>
                <p className={styles.cardDesc}>{card.desc}</p>
                <span className={styles.codeTag}>&lt;/h3&gt;</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
