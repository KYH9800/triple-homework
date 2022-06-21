import { createGlobalStyle } from 'styled-components';
// import { normalize } from 'styled-normalize'; // ${normalize}
// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
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
`;

export default GlobalStyle;
