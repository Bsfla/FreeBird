import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <div>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </div>,
        ],
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
