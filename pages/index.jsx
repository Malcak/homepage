import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useClipboard,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoSteam,
  IoMail
} from 'react-icons/io5'

import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  const { hasCopied, onCopy } = useClipboard('Malcakx@gmail.com')

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mt={4}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Colombia!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Malcak
            </Heading>
            <p>Full-stack and Game developer ( at least trying )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile_photo.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Malcak is a computer engineering student based in Colombia,
            enthusiastic about the world of ICT and video games, in constant
            study and growth. Willing to work in group environments where
            teamwork and communication is crucial. He is currently working to
            add quality projects to his portfolio.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={useColorModeValue('purple', 'teal')}
              >
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Antioquia, Colombia.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            He has completed the professional program in computer engineering at
            Colombian Polytechnic Jaime Isaza Cadavid.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Works as a freelance (at least I hope so).
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Programming, Machine Learning, Learning new Technologies{' '}
            <Link href="https://github.com/Malcak/dotfiles">
              Configuring my Work Environment
            </Link>
            , Video Games and Music.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/stack">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={useColorModeValue('purple', 'teal')}
              >
                My Stack
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Links
          </Heading>
          <List>
            <ListItem>
              <Link>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                  onClick={onCopy}
                >
                  {hasCopied ? 'Copied' : 'Malcakx@gmail.com'}
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://github.com/malcak" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Malcak
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://twitter.com/malcakk" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @Malcakk
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://steamcommunity.com/profiles/76561198356341320/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoSteam} />}
                >
                  @Malakk
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
