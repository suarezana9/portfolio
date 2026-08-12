'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Lang } from './translations'

interface LangCtxValue {
  lang: Lang
  toggle: () => void
  t: typeof translations['es']
}

const LangCtx = createContext<LangCtxValue>({
  lang: 'es',
  toggle: () => {},
  t: translations.es,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'es' || saved === 'en') setLang(saved)
  }, [])

  const toggle = () =>
    setLang(prev => {
      const next = prev === 'es' ? 'en' : 'es'
      localStorage.setItem('lang', next)
      return next
    })

  return (
    <LangCtx.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LangCtx.Provider>
  )
}

export const useLang = () => useContext(LangCtx)
