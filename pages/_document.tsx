/* eslint-disable react/display-name */
// /* eslint-disable @next/next/no-css-tags */
// import Document, { Html, Head, Main, NextScript } from "next/document";
// import Link from "next/";

// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx);
//     return { ...initialProps };
//   }

//   render() {
//     return (
//       <Html>
//         <Head>
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link
//             rel="preconnect"
//             href="https://fonts.gstatic.com"
//             crossOrigin="true"
//           />
//           <link
//             href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
//             rel="stylesheet"
//           />
//           {/* <link
//             rel="stylesheet"
//             href="/assets/themes/light-theme.css"
//             type="text/css"
//           /> */}
//           {/* <link
//             rel="stylesheet"
//             href="/assets/themes/dark-theme.css"
//             type="text/css"
//           /> */}
//         </Head>
//         <body className="subpixel-antialiased text-base">
//           <div
//             style={{
//               display: "none",
//             }}
//             id="firebaseui-auth"
//           />
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;

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
