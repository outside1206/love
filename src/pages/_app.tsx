import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NavermapsProvider } from 'react-naver-maps'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="This is my app" />
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
