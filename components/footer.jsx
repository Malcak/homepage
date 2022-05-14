import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      based on the design of{' '}
      <Link href="https://www.craftz.dog/" rel="noopener" target="_blank">
        @craftzdog
      </Link>
    </Box>
  )
}

export default Footer
