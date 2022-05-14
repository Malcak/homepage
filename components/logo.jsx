import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  align-items: center;
  display: inline-flex;
  font-weight: bold;
  font-size: 18px;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`

const Logo = () => {
  const logoImg = `/images/ursus_profile.svg`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImg} width={28} height={28} alt="logo" />
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
