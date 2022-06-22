import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    const initialProps = await Document.getInitialProps(ctx)

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      return {
        ...initialProps,
        styles: [
          <div key="any">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </div>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }

  public render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>트리플: 여행의 모든 것, 트리플로 한 번에</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

// eslint error getInitialProps 문제 참고(하단)
// https://stackoverflow.com/questions/67087999/how-to-properly-type-the-document-tsx-file-from-next-js
// https://blog.sycamore.design/material-ui-next-js-typescript#heading-create-custom-documenttsx
// https://nextjs.org/docs/advanced-features/custom-document#typescript
