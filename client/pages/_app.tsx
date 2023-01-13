import React from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>PokeBird</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Catamaran:wght@700&family=Poppins:wght@600&display=swap"
            rel="stylesheet"></link>
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
