import {
  Box,
  Icon,
  Progress,
  Stat,
  StatLabel,
  useColorModeValue
} from '@chakra-ui/react'
import { IoStar } from 'react-icons/io5'

const Skill = ({ title, value, color, icon }) => {
  const defaultScheme = useColorModeValue('purple', 'teal')
  const colorScheme = color ? color : defaultScheme
  const defaultIcon = icon ? icon : IoStar

  return (
    <Box
      borderRadius="lg"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={3}
      mt={4}
      mb={6}
    >
      <Stat>
        <StatLabel mb={4}>
          <Icon as={defaultIcon} w={5} h={5} mr={2} /> {title}
        </StatLabel>
        <Progress
          colorScheme={colorScheme}
          background={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
          borderRadius="base"
          size="lg"
          value={value}
        />
      </Stat>
    </Box>
  )
}

export default Skill
