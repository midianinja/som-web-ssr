import React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags}

          <link rel="stylesheet" href="/css/reset.css" />
          <link rel="stylesheet" href="/css/fonts.css" />

          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_TAG}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.G_TAG}');
            `
            }}
          />
        </Head>
        <body style={{ backgroundColor: '#000' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
