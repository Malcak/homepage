import { Box, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" fontSize="sm">
      <Text opacity={0.6} display="inline">
        based on the design of{' '}
      </Text>
      <Link href="https://www.craftz.dog/" rel="noopener" target="_blank">
        @craftzdog
      </Link>
    </Box>
  )
}

export default Footer
