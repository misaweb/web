import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/index.css';
import TagManager from 'react-gtm-module';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KDR95TH' });
  }, []);

  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Michaela Somolová"
        description="Michaela Somolová je expert na architekturu lidských procesů"
        openGraph={{
          images: [
            {
              alt: 'Michaela Somolová',
              height: 330,
              url: 'https://michaelasomolova.cz/img.png',
              width: 296,
            },
          ],
          locale: 'cs_CZ',
          site_name: 'Michaela Somolová',
          type: 'website',
          url: 'https://michaelasomolova/',
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
