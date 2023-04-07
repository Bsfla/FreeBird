import React, { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'styles/globalStyles';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import theme from 'styles/theme';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { NextPage } from 'next/types';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            retryOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      })
  );
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>FreeBird</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keyword" content="Freebird" />
          <meta property="og:title" content="Freebird" />
          <meta
            name="description"
            content="프리버드에서 다양한 사람들과 당신의 일상을 공유해요."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://freebirdapp.site/" />
          <meta property="og:article:author" content="Freebird" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Global styles={GlobalStyle} />
        <ThemeProvider theme={theme}>
          <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
