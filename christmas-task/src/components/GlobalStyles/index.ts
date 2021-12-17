import { createGlobalStyle } from 'styled-components'
import { backgroundGradient } from 'styles/theme'
import { fontFamily } from 'styles/fonts'
import ball from 'assets/ball/1.png'
import bg from 'assets/bg.jpg'
import windowsIcon from 'assets/icons/windows.svg'
import browserIcon from 'assets/icons/browser.svg'

const GlobalStyles = createGlobalStyle`
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
`

export default GlobalStyles
