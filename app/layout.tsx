import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Potah | Informatics Developer',
  description:
    'Portfolio of an Informatics Developer specialising in backend systems (Go Fiber, Laravel 12) and mobile-first web development (Next.js, React). PWA-ready interactive 3D portfolio.',
  keywords: ['developer', 'portfolio', 'golang', 'laravel', 'nextjs', 'react', 'backend', 'web'],
  authors: [{ name: 'Potah' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Potah | Informatics Developer',
    description:
      'Informatics Developer specialising in backend systems and mobile-first web development.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-slate-100">
        {children}
      </body>
    </html>
  );
}
