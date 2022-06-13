import NextLink from 'next/link'
import { Button, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const LinkButton = ({ children, href, passHref, scroll, colorScheme }) => {
  return (
    <NextLink href={href} passHref={passHref} scroll={scroll}>
      <Link style={{ all: 'unset' }}>
        <Button rightIcon={<ChevronRightIcon />} colorScheme={colorScheme}>
          {children}
        </Button>
      </Link>
    </NextLink>
  )
}

export default LinkButton
