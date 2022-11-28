import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Montserrat } from '@next/font/google'

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
  },
  styles: {
    global: {
      'html, body': {
        height: '100vh',
        bgGradient: 'linear(to-tr, black, red.900)',
        backdropFilter: 'auto',
        backdropBlur: 'blur(42px)',
        color: 'white',
        fontFamily: 'Montserrat'
      }
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
