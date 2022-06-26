import { CSSProp } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth: string

    color: {
      main: string
      sub: string
    }
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject
  }
}
