import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Junaid Ahmad',
    default: 'Junaid Ahmad - Software Engineer, founder, and community builder',
  },
  description:
    'I’m Junaid, a Software Engineer with over 6 years of leadership experience, specializing in developing production software that generates 10MM+ in revenue. Proven ability to lead multidisciplinary teams to streamline product delivery cycles, resulting in significant increases in company revenue. Looking for my next challenging role to leverage technical expertise and leadership skills.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
