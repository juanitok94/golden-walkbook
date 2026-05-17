import type { Metadata } from 'next'
import { Playfair_Display, Crimson_Pro, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
  display: 'swap',
})

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Golden Walkbook',
  description: 'A walking passport for Washington Avenue — the brewery town at the foot of the Rockies, where Clear Creek runs cold and the Mines campus ends the walk. Golden, Colorado.',
  keywords: ['Golden Colorado', 'Washington Avenue', 'Coors Brewery', 'walking guide', 'Colorado School of Mines', 'Front Range'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${crimson.variable} ${ibmMono.variable}`}>
        {children}
      </body>
    </html>
  )
}