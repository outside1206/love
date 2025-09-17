import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NavermapsProvider } from 'react-naver-maps'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>상가 커플 결혼식에 초대하겠습니다.</title>
        <meta name="description" content="come come" />
        <link
          href="https://fonts.cdnfonts.com/css/brownhill-script"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/anek-bangla"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </Head>
      <script
        defer
        src="https://developers.kakao.com/sdk/js/kakao.min.js"
      ></script>

      <NavermapsProvider
        ncpKeyId={process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID as string}
      >
        <Component {...pageProps} />
        <div id="global-modal"></div>
      </NavermapsProvider>
    </>
  )
}
