import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  return (
    <Layout title="Calendar API">
      <Container>
        <Title>
          Calendar API <Badge>2021</Badge>{' '}
        </Title>
        <P>
          API for calendar app built in TypeScript with Express and MongoDB.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://calendar-app-malcak.vercel.app/">
              https://calendar-app-malcak.vercel.app{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>TypeScript, Express, JsonWebToken, MongoDB.</span>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link href="http://github.com/malcak/calendar-api" target="_blank">
              http://github.com/malcak/calendar-api{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/calendar_app_home.webp"
          alt="calendar app image"
        />
        <WorkImage
          src="/images/works/calendar_app_event.webp"
          alt="calendar app image"
        />
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

export default Work
