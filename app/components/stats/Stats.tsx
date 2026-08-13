'use client'

import { useReveal } from '../../hooks/useReveal'
import { useLang } from '../../lib/i18n/LanguageContext'
import styles from './Stats.module.css'

export default function Stats() {
  const { t } = useLang()
  const ref = useReveal<HTMLDivElement>(0.2)

  return (
    <div ref={ref} className={styles.strip}>
      {t.stats.map((stat, i) => (
        <div
          key={stat.label}
          className={styles.stat}
          style={{ '--stat-delay': `${i * 80}ms` } as React.CSSProperties}
        >
          <span className={styles.value}>{stat.value}</span>
          <span className={styles.label}>{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
