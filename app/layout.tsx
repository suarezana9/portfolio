import type { Metadata } from 'next'
import { LanguageProvider } from './lib/i18n/LanguageContext'
import Cursor from './components/cursor/Cursor'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ana Suárez — Software Developer',
  description:
    'Software Developer con +8 años en el ciclo completo de desarrollo. Especializada en arquitectura, web, mobile y uso estratégico de IA para acelerar la ejecución sin perder criterio técnico.',
  keywords: ['software developer', 'ingeniería de sistemas', 'desarrollo web', 'mobile', 'TypeScript', 'Angular', 'React', 'arquitectura', 'IA', 'remoto'],
  openGraph: {
    title: 'Ana Suárez — Software Developer',
    description: 'Ciclo completo: relevamiento, arquitectura, desarrollo, testing y deploy. +8 años de experiencia.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <Cursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
