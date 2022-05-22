import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box
    w="100%"
    p={3}
    textAlign="center"
    borderRadius="lg"
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.50')}
    _hover={{ boxShadow: 'outline' }}
  >
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        layout="responsive"
        width={16}
        height={9}
        quality={64}
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2} fontSize={20} fontWeight="bold">
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box
    w="100%"
    textAlign="center"
    borderRadius="lg"
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.50')}
    _hover={{ boxShadow: 'outline' }}
  >
    <NextLink href={`/works/${id}`} scroll={false}>
      <LinkBox p={3} cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          layout="responsive"
          width={16}
          height={9}
          quality={65}
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20} fontWeight="bold">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 0.375rem;
        aspect-ratio: 16 / 9;
      }
    `}
  />
)
