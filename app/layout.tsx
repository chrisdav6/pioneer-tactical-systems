import type { Metadata } from 'next';
import './globals.css';
import { Montserrat, Inter } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // Define a CSS variable name
  display: 'swap', // Optional: ensures text is visible while loading
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Define a CSS variable name
  display: 'swap', // Optional: ensures text is visible while loading
});

export const metadata: Metadata = {
  title: 'Pioneer Tactical Systems',
  description: 'Pioneer Tactical Systems - Precision, Innovation, Reliability',
  icons: {
    icon: '/favicon.png', // Reference from the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${montserrat.variable} ${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
