import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NavermapsProvider } from 'react-naver-maps'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavermapsProvider
      ncpKeyId={process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID as string}
    >
      <Component {...pageProps} />
    </NavermapsProvider>
  )
}
