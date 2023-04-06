import React from 'react';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
          <meta name="keyword" content="Freebird" />
          <meta property="og:title" content="Freebird" />
          <meta
            name="description"
            content="프리버드에서 다양한 사람들과 당신의 일상을 공유해요."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://freebirdapp.site/" />
          <meta property="og:article:author" content="Freebird" />
          <link
            href="https://fonts.googleapis.com/css2?family=Catamaran:wght@700&family=Poppins:wght@600&display=swap"
            rel="stylesheet"></link>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
