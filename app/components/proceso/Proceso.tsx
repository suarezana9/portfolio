'use client'

import { useReveal } from '../../hooks/useReveal'
import { useLang } from '../../lib/i18n/LanguageContext'
import styles from './Proceso.module.css'

export default function Proceso() {
  const { t } = useLang()
  const headingRef = useReveal<HTMLDivElement>()
  const stepsRef   = useReveal<HTMLDivElement>(0.08)

  return (
    <section id="proceso" className={styles.section}>
      <div className={styles.inner}>

        <div ref={headingRef} className={styles.heading}>
          <span className={styles.kicker}>{t.proceso.kicker}</span>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>{t.proceso.titleLine1}</span>
            </span>
            <span className={styles.titleLine}>
              <span className={`${styles.titleWord} ${styles.titleWordAccent}`}>
                {t.proceso.titleLine2}
              </span>
            </span>
          </h2>
        </div>

        <div ref={stepsRef} className={styles.steps}>
          {t.proceso.steps.map((step, i) => (
            <div
              key={step.num}
              className={styles.step}
              style={{ '--step-delay': `${i * 120}ms` } as React.CSSProperties}
            >
              <div className={styles.stepNumWrap}>
                <span className={styles.stepNum}>{step.num}</span>
                {i < t.proceso.steps.length - 1 && (
                  <span className={styles.stepConnector} aria-hidden="true" />
                )}
              </div>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
