import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nishyan | My Dukaan',
  description: 'Try Dukaan, the cutting-edge enterprise ecommerce platform. Seamlessly manage your online business and drive growth with our powerful tools.',
  metadataBase: new URL("https://dukaan-payouts-dashboard-phi.vercel.app"),
  openGraph: {
    images: "opengraph-image.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
