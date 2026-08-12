import type { Metadata } from 'next'
import { LanguageProvider } from './lib/i18n/LanguageContext'
import Cursor from './components/cursor/Cursor'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ana Suárez — Ingeniería de Sistemas a medida',
  description:
    'Ingeniera de sistemas con 8 años de experiencia. Diseño y desarrollo sistemas digitales que automatizan, ordenan y hacen crecer empresas reales.',
  keywords: ['ingeniería de sistemas', 'desarrollo de software', 'freelance', 'sistemas a medida', 'TypeScript', 'Angular', 'React', 'mobile'],
  openGraph: {
    title: 'Ana Suárez — Ingeniería de Sistemas',
    description: 'Sistemas digitales que hacen crecer negocios reales.',
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
      <body>
        <LanguageProvider>
          <Cursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
