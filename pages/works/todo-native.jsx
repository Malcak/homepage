import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  return (
    <Layout title="TODO App">
      <Container>
        <Title>
          TODO App <Badge>2021</Badge>{' '}
        </Title>
        <P>A smoothly animated ToDo app built with React Native.</P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Mobile</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              React Native, Expo, React Navigation, Native Base, ReactNative
              Reanimated, ReactNative SVG, Moti.
            </span>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link href="http://github.com/malcak/todo-native" target="_blank">
              http://github.com/malcak/todo-native <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={2} gap={2}>
          <WorkImage
            src="/images/works/todo-native-main.webp"
            alt="todo native app main view"
          />
          <WorkImage
            src="/images/works/todo-native-sidebar.webp"
            alt="todo native app sidebar view"
          />
          <WorkImage
            src="/images/works/todo-native-about.webp"
            alt="todo native app about view"
          />
          <WorkImage
            src="/images/works/todo-native-dark.webp"
            alt="todo native app dark mode"
          />
        </SimpleGrid>
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
