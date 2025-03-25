import React from 'react'
import { Metadata } from 'next';
import '../styles/main.scss'

export const metadata: Metadata = {
  title: 'De La Soil',
  description: 'Recipes From Earth',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <div id="root">{children}</div>.
      </body>
    </html>
    
  )
}