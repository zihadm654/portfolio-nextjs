import '@/styles/style.scss';
//import { AnimatePresence } from 'framer-motion';
//import { BsArrowUp } from 'react-icons/bs';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Contact from '@/sections/Contact';
// import { fadeIn } from '../utility/Animation';
import { inter } from '@/utility/fonts';
import { Metadata } from 'next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.className} font-sans`}>
      <body>
        {/*<ThemeProvider defaultTheme='system'>*/}
        <Header />
        <main>{children}</main>
        <Contact />
        {/*<div className='up'>*/}
        {/*  <BsArrowUp />*/}
        {/*</div>*/}
        {/*</ThemeProvider>*/}
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
  metadataBase: new URL('https://portfolio-nextjs-zihadm654.vercel.app'),
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
        url: '/public/assets/Facebook cover - 2.jpg',
        width: '800',
        height: '600',
        alt: APP_DEFAULT_TITLE,
      },
      {
        url: '/public/assets/Facebook cover - 2.jpg',
        width: '900',
        height: '700',
        alt: APP_DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: 'https://portfolio-nextjs-zihadm654.vercel.app/',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    images: {
      url: '/public/assets/Facebook cover - 2.jpg',
      alt: APP_DEFAULT_TITLE,
    },
    description: APP_DESCRIPTION,
  },
};
