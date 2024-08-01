// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Smooooothies</title>
        <meta name="description" content="A website about smoothies" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
