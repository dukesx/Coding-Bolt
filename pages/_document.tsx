import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { SsrProvider, SheetsRegistry, ServerStyles } from "@mantine/core";

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: (App) => (props) =>
          (
            <SsrProvider registry={registry}>
              <App {...props} />
            </SsrProvider>
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles registry={registry} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="link to favicon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
