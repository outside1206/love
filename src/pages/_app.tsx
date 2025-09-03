import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NavermapsProvider } from 'react-naver-maps'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>상가 커플 결혼식에 초대하겠습니다.</title>
        <meta name="description" content="come come" />
      </Head>

      <NavermapsProvider
        ncpKeyId={process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID as string}
      >
        <Component {...pageProps} />
        <div id="global-modal"></div>
      </NavermapsProvider>
    </>
  )
}
