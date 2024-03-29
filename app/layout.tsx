import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Simranjit Saini',
  description: 'We find the best homes for you, faster then making butter chicken.',
  icons: {
    icon: 'S'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <ClerkProvider>
     <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
   </ClerkProvider>
  )
}