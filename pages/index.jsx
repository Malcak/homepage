import NextLink from 'next/link'
import Image from 'next/image'
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Link,
  List,
  ListItem,
  useClipboard,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import {
  IoLogoGithub,
  IoLogoSteam,
  IoLogoLinkedin,
  IoMail,
  IoClipboard,
  IoCheckmark
} from 'react-icons/io5'

import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import LinkButton from '../components/link-button'
import { BioSection, BioYear } from '../components/bio'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

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
          Hello, I&apos;m a software engineer based in Colombia and open to work!
        </Alert>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Manuel Castaño
            </Heading>
            <p>
              Software Engineer (learning to be Site Reliability Engineer)
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              width="24"
              height="24"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/profile_photo.webp"
                alt="Profile image"
                borderRadius="full"
                width="256"
                height="256"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
          Software engineer with half a year of experience, enthusiastic in devops, site reliability engineering and web development. Constantly learning. Have developed server-side applications and set up small continuous integration environments, as well as participated in deploying applications to production. Currently learning to become a Site Reliability Engineer.
          </Paragraph>
          <Box align="center" my={4}>
            <LinkButton
              href="/works"
              passHref
              scroll={false}
              colorScheme={useColorModeValue('gruvPurple', 'gruvAqua')}
            >
              My Portfolio
            </LinkButton>
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
            <BioYear>2021</BioYear>
            He create CalendarApp, an event management application with
            markdown-based notes (a personal project for learning purposes). See{' '}
            <NextLink href="/works/calendar-app" passHref scroll={false}>
              <Link>here.</Link>
            </NextLink>
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            He create TodoNative, a smoothly animated ToDo app built with React
            Native (a personal project for learning purposes). See{' '}
            <NextLink href="/works/todo-native" passHref scroll={false}>
              <Link>here.</Link>
            </NextLink>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            He has completed the professional program in computer engineering at
            Politécnico Colombiano Jaime Isaza Cadavid.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            He worked as a backend developer with NodeJS (and sometimes a bit of
            python).
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            <Link
              href='https://github.com/malcak'
              rel="noopener"
              target="_blank"
            >
              Programming
            </Link>
            , devops, learning new technologies,{' '}
            <Link
              href="https://github.com/Malcak/dotfiles"
              rel="noopener"
              target="_blank"
            >
              configuring my work environment
            </Link>
            , music and{' '}
            <Link
              href='https://steamcommunity.com/profiles/76561198356341320/'
              rel='noopener'
              target='_blank'
            >
              video games
            </Link>.
          </Paragraph>
          <Box align="center" my={4}>
            <LinkButton
              href="/stack"
              passHref
              scroll={false}
              colorScheme={useColorModeValue('gruvPurple', 'gruvAqua')}
            >
              My Stack
            </LinkButton>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Links
          </Heading>
          <List>
            <ListItem>
              <Link
                href="mailto:malcak@gmail.com"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue('gruvAqua', 'gruvPurple')}
                  leftIcon={<IoMail />}
                >
                  Malcakx@gmail.com
                </Button>
              </Link>
              <IconButton
                aria-label="copy email"
                variant="ghost"
                colorScheme={useColorModeValue('gruvAqua', 'gruvPurple')}
                onClick={onCopy}
                icon={hasCopied ? <IoCheckmark /> : <IoClipboard />}
              />
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
                  leftIcon={<IoLogoLinkedin />}
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
                  leftIcon={<IoLogoGithub />}
                >
                  @Malcak
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
                  leftIcon={<IoLogoSteam />}
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

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}

export default Page
