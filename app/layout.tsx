import type { Metadata } from 'next'
import { LanguageProvider } from './lib/i18n/LanguageContext'
import Cursor from './components/cursor/Cursor'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ana — Desarrollo de sistemas a medida',
  description:
    'Desarrolladora con 8 años de experiencia en todas las etapas de un sistema. Construyo lo que tu negocio necesita, de la arquitectura al despliegue.',
  keywords: ['desarrollo de sistemas', 'freelance', 'Argentina', 'TypeScript', 'Angular', 'React'],
  openGraph: {
    title: 'Ana — Desarrollo de sistemas a medida',
    description: 'Del problema al sistema que funciona.',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <Cursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
