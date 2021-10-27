import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import styled from '@emotion/styled'
import { ColorModeScript } from '@chakra-ui/react'

import theme from '../lib/theme'

// removing scrollbars from body
const Body = styled.body`
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />

        <Body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />

          <Main />
          <NextScript />
        </Body>
      </Html>
    )
  }
}
