import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#1d2021')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#427b58', '#d3869b')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  gruvBlack: {
    100: '#504945',
    300: '#3c3836',
    600: '#282828',
    900: '#1d2021'
  },
  gruvWhite: {
    100: '#d5c4a1',
    300: '#ebdbb2',
    600: '#fbf1c7',
    900: '#f9f5d7'
  },
  gruvRed: {
    200: '#fb4934',
    500: '#cc241d'
  },
  gruvGreen: {
    200: '#b8bb26',
    500: '#98971a'
  },
  gruvYellow: {
    200: '#fabd2f',
    500: '#d79921'
  },
  gruvBlue: {
    200: '#83a598',
    500: '#458588'
  },
  gruvAqua: {
    50: '#8ec07c',
    100: '#8ec07c',
    200: '#8ec07c',
    300: '#689d6a',
    500: '#689d6a',
    600: '#427b58',
    900: '#689d6a'
  },
  gruvPurple: {
    50: '#d3869b',
    100: '#d3869b',
    200: '#d3869b',
    300: '#b16286',
    500: '#b16286',
    600: '#8f3f71',
    900: '#b16286'
  },
  gruvOrange: {
    200: '#fe8019',
    500: '#d65d0e'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme
