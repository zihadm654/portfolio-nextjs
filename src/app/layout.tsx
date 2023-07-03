'use client';
// import { useEffect } from 'react';
import '../styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import { BsArrowUp } from 'react-icons/bs';
// import { useAnimation, motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { AppProps } from 'next/dist/shared/lib/router/router';
import { ThemeProvider } from 'next-themes';
import Header from '../components/Header';
import Contact from '../sections/Contact';
// import { fadeIn } from '../utility/Animation';
import { inter } from '../utility/fonts';
import { Metadata } from 'next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} font-sans`}>
      <body>
        <ThemeProvider defaultTheme="system">
          <Header />
          <main>{children}</main>
          <Contact />
          <div className="up">
            <BsArrowUp />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

const app_name = 'Abdul Malek Zihad';
const app_default_title = 'Abdul Malek';
const app_title_template = '%s - Abdul Malek';
const app_description =
  'The portfolio site describes who is Abdul Malek Zihad and what he is specialized in. A self taught Frontend Reactjs/Nextjs developer.';

export const metadata: Metadata = {
  applicationName: app_name,
  title: {
    default: app_default_title,
    template: app_title_template,
  },
  description: app_description,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: app_default_title,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: app_name,
    title: {
      default: app_default_title,
      template: app_title_template,
    },
    description: app_description,
  },
};
