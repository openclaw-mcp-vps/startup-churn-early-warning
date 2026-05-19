import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnGuard — Predict Customer Churn 30 Days Early',
  description: 'Analyzes user behavior patterns to identify customers likely to churn within 30 days. Built for SaaS founders and customer success teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f528fc7e-ffc1-4ca8-91fe-3a779ef5960f"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
