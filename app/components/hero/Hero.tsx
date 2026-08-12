'use client'

import { useLang } from '../../lib/i18n/LanguageContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { lang, t } = useLang()

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grain} aria-hidden="true" />

      {/* 3D geometric scene */}
      <div className={styles.scene} aria-hidden="true">
        <div className={styles.ambientGlow} />
        <div className={styles.slab1} />
        <div className={styles.slab2} />
        <div className={styles.slab3} />
        <div className={styles.orb} />
        <div className={styles.orbRing} />
      </div>

      {/* Availability badge */}
      <div className={styles.badge}>
        <span className={styles.pulseDot} />
        {t.hero.badge}
      </div>

      {/* Main text — centered over scene */}
      <div className={styles.content}>
        <h1 className={styles.name}>
          <span className={styles.nameLine}>
            <span className={styles.nameWord}>ANA</span>
          </span>
          <span className={styles.nameLine}>
            <span className={`${styles.nameWord} ${styles.nameWordAlt}`}>SUÁREZ</span>
          </span>
        </h1>
        <p className={styles.subtitle}>
          {lang === 'es'
            ? 'INGENIERA DE SISTEMAS · REMOTO'
            : 'SYSTEMS ENGINEER · REMOTE'}
        </p>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{
            __html: t.hero.desc + `<br/><br/><span class="loc">${t.hero.location}</span>`,
          }}
        />
        <div className={styles.actions}>
          <button className="btn btn-ghost" onClick={() => scrollTo('#proyectos')}>
            {t.hero.btnProjects}
          </button>
          <button className="btn btn-light" onClick={() => scrollTo('#contacto')}>
            {t.hero.btnContact}
          </button>
        </div>
      </div>
    </section>
  )
}
