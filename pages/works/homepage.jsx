import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  return (
    <Layout title="Homepage">
      <Container>
        <Title>
          Homepage <Badge>2021</Badge>{' '}
        </Title>
        <P>
          Homepage website to expose my information, my portfolio, and my
          skills.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://malcak.vercel.app/">
              https://malcak.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Next.js, Chakra UI, Three.js, Framer Motion.</span>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link href="http://github.com/malcak/homepage" target="_blank">
              http://github.com/malcak/homepage <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/homepage_home.webp"
          alt="calendar app image"
        />
        <WorkImage
          src="/images/works/homepage_works.webp"
          alt="calendar app image"
        />
        <WorkImage
          src="/images/works/homepage_stack.webp"
          alt="calendar app image"
        />
      </Container>
    </Layout>
  )
}

export default Work
