import Link from 'next/link'
import { Image, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  align-items: center;
  display: inline-flex;
  font-weight: bold;
  font-size: 18px;
  height: 1.5rem;
  line-height: 20px;
  padding: 10px;
`

const LinkWrapper = styled.a`
  white-space: nowrap;
  cursor: pointer;
`

const Logo = () => {
  const logoImg = `/images/ursus_profile.svg`

  return (
    <Link href="/" passHref>
      <LinkWrapper>
        <LogoBox>
          <Image src={logoImg} alt="Malcak logo" boxSize="1.5rem" />
        </LogoBox>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          display="inline-flex"
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Malcak
        </Text>
      </LinkWrapper>
    </Link>
  )
}

export default Logo
