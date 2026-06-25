import type {Metadata} from 'next';
import { Playfair_Display, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nexora Studio | The Central Creative Nexus',
  description: 'Engineering high-performance digital experiences through web design, brand identity and cinematic content creation.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="bg-[#060608] text-white antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
