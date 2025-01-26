import type { Metadata } from 'next'
import './globals.css'
import Header from "@/components/header"
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'IT services',
  description: 'Landing page for IT services',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      
      <body>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  )
}
