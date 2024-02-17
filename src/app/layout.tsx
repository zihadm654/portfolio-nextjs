import '@/styles/globals.css';
import '@/styles/style.scss';
//import { BsArrowUp } from 'react-icons/bs';
import Header from '@/components/navigation/Header';
import Contact from '@/components/sections/Contact';
// import { fadeIn } from '../utility/Animation';
import { poppins } from '@/utility/fonts';
import type { Metadata } from 'next';
import Providers from '@/lib/providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${poppins.className}`}>
      <body>
        <Providers>
          <div className='min-h-screen relative'>
            <Header />
            <main>{children}</main>
            <Contact />
          </div>
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
  metadataBase: new URL('https://abdulmalekzihad.me'),
  referrer: 'origin-when-cross-origin',
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  // themeColor: '#ffffff',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
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
        url: '/og-bg.jpg',
        width: '800',
        height: '600',
        alt: APP_DEFAULT_TITLE,
      },
      {
        url: '/og-bg.jpg',
        width: '900',
        height: '700',
        alt: APP_DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: 'https://abdulmalekzihad.me',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    images: {
      url: '/ob-bg.jpg',
      alt: APP_DEFAULT_TITLE,
    },
    description: APP_DESCRIPTION,
  },
};
