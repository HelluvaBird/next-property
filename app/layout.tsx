import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextProperty',
  description:
    'A real estate property buying and renting platform made with NextJS and TailwindCSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="px-4 py-6 sm:px-6 md:max-w-7xl md:mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
