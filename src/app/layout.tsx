import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChaDa Surveying and Mapping Services | Professional Land Surveying in Surigao del Sur',
  description: 'Expert surveying and mapping services in Surigao del Sur. Offering relocation survey, original survey, subdivision survey, land use mapping, and more. Sa ChaDa, chada ang resulta!',
  keywords: 'surveying, mapping, land survey, Surigao del Sur, ChaDa, topographic survey, subdivision survey, land use mapping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
