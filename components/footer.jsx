import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      based on the design of{' '}
      <Link href="https://www.craftz.dog/" rel="noopener" target="_blank">
        @craftzdog
      </Link>
      and pixelart of{' '}
      <Link href="https://www.emmapixels.com/" rel="noopener" target="_blank">
        @emmapixels
      </Link>
    </Box>
  )
}

export default Footer
