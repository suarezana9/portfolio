'use client'

import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { label: 'Qué hago',       href: '#sistemas'  },
  { label: 'Proyectos',      href: '#proyectos' },
  { label: 'Para tu negocio', href: '#clientes'  },
  { label: 'Proceso',        href: '#proceso'   },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav} data-scrolled={scrolled ? 'true' : 'false'}>
      <div className={styles.inner}>
        <button className={styles.brand} onClick={() => scrollTo('#hero')}>
          Ana.
        </button>

        <ul className={styles.links}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <button className={styles.link} onClick={() => scrollTo(href)}>
                {label}
              </button>
            </li>
          ))}
          <li>
            <button className={styles.cta} onClick={() => scrollTo('#contacto')}>
              Hablemos
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
