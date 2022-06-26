import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: rgb(250 250 250);
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
