import Head from 'next/head'
import GlobalStyle from '../styles/global-styles'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>트리플: 여행의 모든 것, 트리플로 한 번에</title>
      </Head>
      <GlobalStyle />
      <>
        <Component {...pageProps} />
      </>
    </>
  )
}

export default MyApp
