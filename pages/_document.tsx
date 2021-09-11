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
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased text-base">
          {/* <div
            id="g_id_onload"
            data-client_id="1036440562165-j7g06r27357plblbsbdosmf6k5gh6drv.apps.googleusercontent.com"
            data-context="signin"
            data-callback="handleCredentialResponse"
            data-skip_prompt_cookie="sid"
          ></div> */}

          <Main />
          <NextScript />
          {/* <script src="/getyolo.js" async /> */}
        </body>
      </Html>
    );
  }
}
