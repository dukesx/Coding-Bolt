/* eslint-disable react/display-name */
// /* eslint-disable @next/next/no-css-tags */

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry();
    const originalRenderPage = ctx.renderPage;
    if (typeof window === "undefined") {
      const originalWarn = console.warn;
      console.warn = (...args: any) => {
        if (
          args[0] !==
          'Warning: [JSS] Rule is not linked. Missing sheet option "link: true".'
        ) {
          originalWarn(...args);
        }
      };
    }
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <JssProvider
              registry={registry}
              generateId={createGenerateId({ minify: false })}
            >
              <App {...props} />
            </JssProvider>
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="mantine-ssr-styles">{registry.toString()}</style>
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="link to favicon" />
        </Head>
        <body className="antialiased text-base">
          <div
            style={{
              display: "none",
            }}
            id="firebaseui-auth"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
