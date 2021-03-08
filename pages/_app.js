import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    box-sizing: border-box;
    font-family: 'Recursive', Helvetica, Arial, sans-serif;
    background-color: #000;
    color: #333;
  }
`

const theme = {
  colors: {
    primary: '#7dce03',
    hover: '#76B900',
    primaryText: '#82b42f'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
