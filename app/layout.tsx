import './globals.css';
import type { Metadata } from 'next';
import { Maven_Pro } from 'next/font/google';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const mavenPro = Maven_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Justin Mach Dev',
  description: 'Frontend Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={mavenPro.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
