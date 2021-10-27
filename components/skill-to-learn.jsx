import { Box, Icon, useColorModeValue } from '@chakra-ui/react'

const SkillToLearn = ({ icon }) => (
  <Box
    borderRadius="lg"
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    p={3}
    mt={4}
    mb={6}
    align="center"
  >
    <Icon as={icon} w={16} h={16} />
  </Box>
)

export default SkillToLearn
