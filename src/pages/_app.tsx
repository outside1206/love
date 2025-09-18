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
        <title>유가연 ♥️ 변상현 결혼합니다</title>
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
