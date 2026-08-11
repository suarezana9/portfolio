'use client'

import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.availability}>
        <span className={styles.pulseDot} />
        disponible para nuevos proyectos
      </div>

      <div className={styles.content}>
        <h1 className={styles.headline}>
          <span className={styles.line}>
            <span className={styles.word}>sistemas</span>
          </span>
          <span className={`${styles.line} ${styles.accentLine}`}>
            <span className={styles.word}>a medida.</span>
          </span>
        </h1>

        <div className={styles.bottom}>
          <p className={styles.description}>
            <strong>Desarrolladora con 8 años de experiencia</strong> en todas
            las etapas de un sistema — arquitectura, desarrollo, pruebas y
            despliegue. Construyo lo que tu negocio necesita, sin soluciones
            genéricas.
            <br />
            <br />
            Argentina · Remoto
          </p>

          <div className={styles.actions}>
            <button
              className="btn btn-ghost"
              onClick={() => scrollTo('#proyectos')}
            >
              Ver proyectos
            </button>
            <button
              className="btn btn-light"
              onClick={() => scrollTo('#contacto')}
            >
              Hablemos →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
