import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            custom-element="amp-analytics"
            src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
          ></script>
          <script async src="/tag.js"></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-TJJ3QKX0NK"
          ></script>
          <script async src="/analytics.js"></script>
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-P5245SN"
              height="0"
              width="0"
              style={{
                visibility: 'hidden',
                display: 'hidden',
              }}
            ></iframe>
          </noscript>

          <Main />
          <div id="firebase-ui" style={{ visibility: 'hidden' }} />
          <NextScript />
          <link
            type="text/css"
            rel="stylesheet"
            href="https://www.gstatic.com/firebasejs/ui/4.8.0/firebase-ui-auth.css"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
