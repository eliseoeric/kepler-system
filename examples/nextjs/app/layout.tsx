import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kepler Design System - Next.js Example',
  description: 'Example Next.js application using Kepler Design System components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-brand="atlas">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}