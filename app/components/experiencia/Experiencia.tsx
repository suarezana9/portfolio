'use client'

import { useReveal } from '../../hooks/useReveal'
import { useLang }   from '../../lib/i18n/LanguageContext'
import styles from './Experiencia.module.css'

export default function Experiencia() {
  const { t } = useLang()
  const headingRef  = useReveal<HTMLDivElement>()
  const timelineRef = useReveal<HTMLOListElement>(0.08)

  return (
    <section id="experiencia" className={styles.section}>
      <div className={styles.inner}>

        <div ref={headingRef} className={styles.heading}>
          <span className={styles.kicker}>{t.experiencia.kicker}</span>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>{t.experiencia.titleLine1}</span>
            </span>
            <span className={styles.titleLine}>
              <span className={`${styles.titleWord} ${styles.titleWordAccent}`}>
                {t.experiencia.titleLine2}
              </span>
            </span>
          </h2>
        </div>

        <ol ref={timelineRef} className={styles.timeline}>
          {t.experiencia.items.map((item, i) => (
            <li
              key={i}
              className={styles.item}
              style={{ '--delay': `${i * 120}ms` } as React.CSSProperties}
            >
              <div className={styles.dot} aria-hidden="true" />
              <div className={styles.itemBody}>
                <span className={styles.period}>{item.period}</span>
                <h3 className={styles.role}>{item.role}</h3>
                <span className={styles.company}>{item.company}</span>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}
