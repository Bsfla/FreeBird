import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next tutoria</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
