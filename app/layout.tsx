import { Tajawal, Amiri, Inter } from 'next/font/google';
import './globals.css';
import PWAHandler from '@/components/PWAHandler';
const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'أثر | موسوعة أهل البيت',
  description: 'موسوعة رقمية موثقة لسيرة النبي ﷺ والأئمة المعصومين (ع)',
  manifest: '/manifest.json', // ربط ملف الـ Manifest
  icons: {
    icon: '/icons/icon-192x192.png',
    apple: '/icons/icon-192x192.png',
  },
  themeColor: '#0D5C4C',
};;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
       <head>
        <meta name="theme-color" content="#0D5C4C" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="أثر" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <body className={`${tajawal.variable} ${amiri.variable} ${inter.variable} font-arabic`}>
        {children}
        <PWAHandler />
      </body>
    </html>
  );
}