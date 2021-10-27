import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  return (
    <Layout title="Calendar App">
      <Container>
        <Title>
          Calendar App <Badge>2021</Badge>{' '}
        </Title>
        <P>
          A event management app with text/markdown based event-notes and to-do
          list, built with React.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://calendar-app-malcak.vercel.app/"
              target="_blank"
            >
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
            <span>React, Redux, Sweetalert 2</span>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link href="http://github.com/malcak/calendar-app" target="_blank">
              http://github.com/malcak/calendar-app{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/calendar_app_home.png"
          alt="calendar app home"
        />
        <WorkImage
          src="/images/works/calendar_app_event.png"
          alt="calendar app event"
        />
      </Container>
    </Layout>
  )
}

export default Work
