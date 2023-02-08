import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="index.css" />
      </Head>
      <body style={{ margin: 0, background: "#202123" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
export default Document;
