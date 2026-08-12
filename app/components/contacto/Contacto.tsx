'use client'

import { useState, FormEvent } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { useLang }   from '../../lib/i18n/LanguageContext'
import styles from './Contacto.module.css'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contacto() {
  const { lang, t }   = useLang()
  const headingRef  = useReveal<HTMLDivElement>()
  const formRef     = useReveal<HTMLDivElement>(0.1)
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>

        <div ref={headingRef} className={styles.heading}>
          <span className={styles.kicker}>{t.contacto.kicker}</span>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>{t.contacto.titleLine1}</span>
            </span>
            <span className={styles.titleLine}>
              <span className={`${styles.titleWord} ${styles.titleWordAccent}`}>
                {t.contacto.titleLine2}
              </span>
            </span>
          </h2>
          <p className={styles.sub}>{t.contacto.sub}</p>
        </div>

        <div ref={formRef} className={styles.formWrap}>
          {status === 'success' ? (
            <div className={styles.successMsg}>
              <span className={styles.successIcon}>✓</span>
              <p>{t.contacto.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">
                    {t.contacto.placeholderName}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={styles.input}
                    placeholder="María García"
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    {t.contacto.placeholderEmail}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={styles.input}
                    placeholder="maria@ejemplo.com"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">
                  {t.contacto.placeholderMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={styles.textarea}
                  placeholder={
                    lang === 'es'
                      ? 'Hola Ana, me gustaría conversar sobre una oportunidad o propuesta técnica…'
                      : 'Hi Ana, I would like to discuss a project or technical opportunity…'
                  }
                />
              </div>

              {status === 'error' && (
                <p className={styles.errorMsg}>{t.contacto.error}</p>
              )}

              <button
                type="submit"
                className={styles.btn}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t.contacto.sending : t.contacto.btn}
                {status !== 'sending' && <span className={styles.btnArrow}>→</span>}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
