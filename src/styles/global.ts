import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-image: url('/img/background.png');
  }
  
  a, button {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles
