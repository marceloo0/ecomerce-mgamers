import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '~/styles/global'
import theme from '~/styles/theme'
import { AppProvider } from '../context'

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
