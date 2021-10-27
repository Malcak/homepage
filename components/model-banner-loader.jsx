import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const BannerSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const BannerContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="model-banner"
    m="auto"
    mt={['-5px', '-15px', '-30px']}
    mb={['-10px', '-35px', '-50px']}
    w={[140, 240, 320]}
    h={[140, 240, 320]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <BannerContainer>
      <BannerSpinner />
    </BannerContainer>
  )
}

export default Loader
