import type { Metadata } from 'next'
import './app.css'

export const metadata: Metadata = {
  title: 'reusable react server component using Sass',
  description: 'Built with front end love by Marian Zburlea',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
