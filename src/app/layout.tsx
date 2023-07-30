import '@/styles/style.scss';
import { AnimatePresence } from 'framer-motion';
//import { BsArrowUp } from 'react-icons/bs';
import Header from '@/components/Header';
import Contact from '@/sections/Contact';
// import { fadeIn } from '../utility/Animation';
import { inter } from '@/utility/fonts';
import type { Metadata } from 'next';
import clsx from 'clsx';
import Providers from '@/lib/providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang='en'
      className={`${inter.className} ${clsx}(
      'text-black bg-white dark:text-white dark:bg-[#111010]'`}
    >
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Contact />
          {/*<div className='up'>*/}
          {/*  <BsArrowUp />*/}
          {/*</div>*/}
        </Providers>
      </body>
    </html>
  );
}

const APP_NAME = 'Abdul Malek Zihad';
const APP_DEFAULT_TITLE = 'Abdul Malek';
const APP_TITLE_TEMPLATE = '%s - Abdul Malek';
const APP_DESCRIPTION =
  'The portfolio site describes who is Abdul Malek Zihad and what he is specialized in. A self taught Frontend Reactjs/Nextjs developer.';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: { default: APP_DEFAULT_TITLE, template: APP_TITLE_TEMPLATE },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  metadataBase: new URL('https://abdulmalekzihad.me'),
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: '/public/og-bg.jpg',
        width: '800',
        height: '600',
        alt: APP_DEFAULT_TITLE,
      },
      {
        url: '/public/og-bg.jpg',
        width: '900',
        height: '700',
        alt: APP_DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: 'https://abdulmalekzihad.me/',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    images: {
      url: '/public/ob-bg.jpg',
      alt: APP_DEFAULT_TITLE,
    },
    description: APP_DESCRIPTION,
  },
};
