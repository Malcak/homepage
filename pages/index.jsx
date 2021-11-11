import NextLink from 'next/link'
import {
  Alert,
  AlertIcon,
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Icon,
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
  IoLogoLinkedin,
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
        <Alert
          status="info"
          variant="left-accent"
          borderRadius="md"
          colorScheme={useColorModeValue('gruvPurple', 'gruvAqua')}
          color="whiteAlpha.900"
          p={3}
          mt={4}
          mb={6}
        >
          <AlertIcon />
          Hello, I&apos;m a full-stack developer based in Colombia!
        </Alert>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Malcak
            </Heading>
            <p>Full-stack and Game developer (working on it)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Avatar
              size="xl"
              name="Manuel Alejandro Castaño Jaramillo"
              bg="whiteAlpha.800"
              borderColor="whiteAlpha.800"
              borderWidth={2}
              src="/images/profile_photo.webp"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            <strong>Manuel Alejandro Castaño Jaramillo</strong> is a computer
            engineering student based in Colombia, enthusiastic about the world
            of ICT and video games, in constant study and growth. He is
            currently working on quality projects to gain experience.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={useColorModeValue('gruvPurple', 'gruvAqua')}
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
            <BioYear>2016</BioYear>
            He completed his high school studies at Liceo Francisco Restrepo
            Molina.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            He has completed the professional program in computer engineering at
            Politécnico Colombiano Jaime Isaza Cadavid.
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
            Programming, machine learning, learning new technologies{' '}
            <Link href="https://github.com/Malcak/dotfiles">
              configuring my work environment
            </Link>
            , video games and music.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/stack">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={useColorModeValue('gruvPurple', 'gruvAqua')}
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
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('gruvAqua', 'gruvPurple')}
                leftIcon={<Icon as={IoMail} />}
                onClick={onCopy}
              >
                {hasCopied ? 'Copied' : 'Malcakx@gmail.com'}
              </Button>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.linkedin.com/in/malcak/"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue('gruvAqua', 'gruvPurple')}
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://github.com/malcak"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue('gruvAqua', 'gruvPurple')}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Malcak
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://twitter.com/malcakk"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue('gruvAqua', 'gruvPurple')}
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @Malcakk
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://steamcommunity.com/profiles/76561198356341320/"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue('gruvAqua', 'gruvPurple')}
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
