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
