'use client'

import { useReveal } from '../../hooks/useReveal'
import { useLang } from '../../lib/i18n/LanguageContext'
import styles from './Sistemas.module.css'

export default function Sistemas() {
  const { t } = useLang()
  const headingRef = useReveal<HTMLDivElement>()
  const listRef    = useReveal<HTMLUListElement>(0.08)

  return (
    <section id="sistemas" className={styles.section}>
      <div className={styles.inner}>

        <div ref={headingRef} className={styles.heading}>
          <span className={styles.kicker}>{t.sistemas.kicker}</span>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>{t.sistemas.titleLine1}</span>
            </span>
            <span className={styles.titleLine}>
              <span className={`${styles.titleWord} ${styles.titleWordMuted}`}>
                {t.sistemas.titleLine2}
              </span>
            </span>
          </h2>
        </div>

        <ul ref={listRef} className={styles.list} aria-label="capacidades y ciclo de desarrollo">
          {t.sistemas.items.map((item, i) => (
            <li
              key={item.label}
              className={styles.item}
              style={{ '--item-delay': `${i * 90}ms` } as React.CSSProperties}
            >
              <span className={styles.arrow} aria-hidden="true">→</span>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.tags}>{item.tags}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
