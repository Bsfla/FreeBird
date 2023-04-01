import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument implements Document {
  styles: any;
  context: any;
  setState: any;
  forceUpdate: any;
  props: any;
  state: any;
  refs: any;

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="My First Static Website" />
          <meta name="keywords" content="nextjs,static,website" />
          <link
            href="https://fonts.googleapis.com/css2?family=Catamaran:wght@700&family=Poppins:wght@600&display=swap"
            rel="stylesheet"></link>
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* <Favicon /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
