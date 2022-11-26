import '../styles/globals.css'
import { chakraUi } from 'chakra'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  color: {
    red: {
      900: '#510B0B'
    },
    gray: {
      200: '#EAEAEA',
      700: '#2D2D2D'
    },
    yellow: {
      300: '#F4DE4D'
    }
  },
  variants: {
    Button: {
      variants: {
        link: {
          ':focus': {
            outline: 'none',
            boxShadow: 'none'
          }
        }
      }
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      return <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
