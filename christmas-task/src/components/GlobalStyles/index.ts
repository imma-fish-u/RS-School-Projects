import { createGlobalStyle } from 'styled-components'
import { backgroundGradient, primaryTextColor } from 'styles/theme'
import { fontFamily } from 'styles/fonts'

const GlobalStyles = createGlobalStyle`
  * {
    transition: 0.3s;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
    font-family: ${fontFamily};
    margin: 0;
    box-sizing: border-box;
    background: ${backgroundGradient};
  }
  button {
    border: 0;
    cursor: pointer;
    outline: 0;
  }
  a {
    color: ${primaryTextColor};
    text-decoration: none;
  }
  input[type="search" i]::-webkit-search-cancel-button {
    opacity: 0;
    pointer-events: none;
  }
`

export default GlobalStyles
