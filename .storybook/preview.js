import { ThemeProvider } from 'styled-components'
import { AppProvider } from '../src/context'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyles />
        <Story />
      </AppProvider>
    </ThemeProvider>
  )
]