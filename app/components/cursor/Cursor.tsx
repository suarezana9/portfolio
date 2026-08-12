'use client'

import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = -200, my = -200
    let rx = -200, ry = -200
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    const frame = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`
      }
      rx += (mx - rx) * 0.5
      ry += (my - ry) * 0.5
      const dist = Math.hypot(mx - rx, my - ry)
      if (dist > 18) {
        const clamp = 18 / dist
        rx = mx - (mx - rx) * clamp
        ry = my - (my - ry) * clamp
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`
      }
      rafId = requestAnimationFrame(frame)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(frame)

    const expand  = () => ringRef.current?.setAttribute('data-hover', 'true')
    const shrink  = () => ringRef.current?.removeAttribute('data-hover')

    document.addEventListener('mouseover', e => {
      const target = e.target as Element
      if (target.closest('a, button, [role="button"]')) expand()
      else shrink()
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  )
}
