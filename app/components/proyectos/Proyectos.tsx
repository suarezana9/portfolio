'use client'

import { useReveal } from '../../hooks/useReveal'
import { useLang }   from '../../lib/i18n/LanguageContext'
import styles from './Proyectos.module.css'

function WallitMockup() {
  return (
    <div className={styles.phone}>
      <div className={styles.phoneNotch} />
      <div className={styles.phoneScreen}>
        <div className={styles.phoneHeader}>
          <span className={styles.phoneLabel}>Balance total</span>
          <span className={styles.phoneBalance}>$ 24.850</span>
        </div>
        <div className={styles.phoneChart}>
          {[38, 55, 72, 48, 88, 64, 95].map((h, i) => (
            <div
              key={i}
              className={`${styles.bar} ${i === 6 ? styles.barActive : ''}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className={styles.phoneTxList}>
          {[
            { label: 'Supermercado', amount: '−$3.200', neg: true },
            { label: 'Sueldo',       amount: '+$85.000', neg: false },
            { label: 'Netflix',      amount: '−$1.500', neg: true },
          ].map(tx => (
            <div key={tx.label} className={styles.phoneTx}>
              <span className={styles.phoneTxLabel}>{tx.label}</span>
              <span className={tx.neg ? styles.phoneTxNeg : styles.phoneTxPos}>
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function IoTMockup() {
  return (
    <div className={styles.browser}>
      <div className={styles.browserBar}>
        <span className={styles.browserDot} />
        <span className={styles.browserDot} />
        <span className={styles.browserDot} />
        <span className={styles.browserUrl}>dashboard.iot-platform.io</span>
      </div>
      <div className={styles.browserScreen}>
        <div className={styles.dashMetrics}>
          {[
            { label: 'Dispositivos', value: '1.240', ok: true  },
            { label: 'Telemetría',   value: '99.8%', ok: true  },
            { label: 'Alertas',      value: '!02',  ok: false },
          ].map(m => (
            <div key={m.label} className={`${styles.metric} ${m.ok ? '' : styles.metricAlert}`}>
              <span className={styles.metricLabel}>{m.label}</span>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={styles.metricUnit}>activos</span>
            </div>
          ))}
        </div>
        <div className={styles.dashChart}>
          {[60, 45, 80, 55, 90, 70, 85, 60, 75].map((h, i) => (
            <div key={i} className={styles.dashBar} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className={styles.dashStatus}>
          <span className={styles.statusDot} />
          <span className={styles.statusText}>Plataforma Multi-tenant · Sensores en tiempo real</span>
        </div>
      </div>
    </div>
  )
}

export default function Proyectos() {
  const { t } = useLang()
  const headingRef = useReveal<HTMLDivElement>()
  const card1Ref   = useReveal<HTMLElement>(0.08)
  const card2Ref   = useReveal<HTMLElement>(0.08)

  const projects = t.proyectos.items

  return (
    <section id="proyectos" className={styles.section}>
      <div className={styles.inner}>

        <div ref={headingRef} className={styles.heading}>
          <span className={styles.kicker}>{t.proyectos.kicker}</span>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>{t.proyectos.titleLine1}</span>
            </span>
            <span className={styles.titleLine}>
              <span className={`${styles.titleWord} ${styles.titleWordMuted}`}>
                {t.proyectos.titleLine2}
              </span>
            </span>
          </h2>
        </div>

        {/* Card 1 — Wallit */}
        <article ref={card1Ref} className={styles.card}>
          <div className={styles.cardMockup}>
            <WallitMockup />
          </div>
          <div className={styles.cardBody}>
            <span className={styles.cardNum}>01</span>
            <h3 className={styles.cardName}>{projects[0].name}</h3>
            <p className={styles.cardDesc}>{projects[0].desc}</p>
            <ul className={styles.tags}>
              {projects[0].tags.map(tag => (
                <li key={tag} className={styles.tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </article>

        {/* Card 2 — Multi-tenant IoT Platform — reversed layout */}
        <article ref={card2Ref} className={`${styles.card} ${styles.cardReverse}`}>
          <div className={styles.cardBody}>
            <span className={styles.cardNum}>02</span>
            <h3 className={styles.cardName}>{projects[1].name}</h3>
            <p className={styles.cardDesc}>{projects[1].desc}</p>
            <ul className={styles.tags}>
              {projects[1].tags.map(tag => (
                <li key={tag} className={styles.tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className={styles.cardMockup}>
            <IoTMockup />
          </div>
        </article>

      </div>
    </section>
  )
}
