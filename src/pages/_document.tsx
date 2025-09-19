import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-regular.min.css"
        />
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wdth,wght@125,400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wdth,wght@125,500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.cdnfonts.com/css/brownhill-script"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
