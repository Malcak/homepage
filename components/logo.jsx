import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }
`

const Logo = () => {
  const logoImg = `/images/ursus_profile.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImg} width={30} height={30} alt="logo" />
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
      </a>
    </Link>
  )
}

export default Logo
