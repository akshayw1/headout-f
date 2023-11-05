import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/Navbar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Metoris MLLLAS',
  description: "MLLAS, Developed in Hackout'23",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  


  return (
    <html lang="en">

      {/* <NavBar/> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
