/* eslint-disable no-undef */
import Footer from '@/presentation/components/footer'
import Navbar from '@/presentation/components/navbar'

import ModalProvider from '@/presentation/providers/modal-provider'
import ToastProvider from '@/presentation/providers/toast-provider'
import { ThemeProvider } from '@/presentation/providers/theme-provider'

import './globals.css'
import { Urbanist } from 'next/font/google'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'V8S Store',
  description: 'V8S Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
