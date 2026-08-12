'use client'

import { useReveal } from '../../hooks/useReveal'
import { useLang } from '../../lib/i18n/LanguageContext'
import styles from './Expertise.module.css'

export default function Expertise() {
  const { t } = useLang()
  const headingRef = useReveal<HTMLDivElement>()
  const gridRef    = useReveal<HTMLDivElement>(0.08)

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
              style={{ '--card-delay': `${i * 140}ms` } as React.CSSProperties}
            >
              <span className={styles.num} aria-hidden="true">{card.num}</span>

              <div className={styles.cardInner}>
                <h3 className={styles.cardTitle}>
                  {card.title}
                  <em className={styles.cardAccent}>{card.accent}</em>
                </h3>

                <p className={styles.cardDesc}>{card.desc}</p>
              </div>

              <div className={styles.cardLine} aria-hidden="true" />
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
