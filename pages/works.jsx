import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem, WorkGridItem } from '../components/grid-item'

import thumbHomepage from '../public/images/works/homepage_home.webp'
import thumbToDoNative from '../public/images/works/todo_native.webp'
import thumbCalendar from '../public/images/works/calendar_app_home.webp'
import thumbCalendarApi from '../public/images/works/calendar_api.webp'
import thumbModelBanner from '../public/images/works/model_banner_iso.webp'
import thumbGitgub from '../public/images/works/github.webp'

const Works = () => {
  return (
    <Layout>
      <Container mt={6}>
        <Heading as="h2" fontSize={24} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={4}>
          <Section delay={0.1}>
            <WorkGridItem
              id="todo-native"
              title="TODO App"
              thumbnail={thumbToDoNative}
            >
              A smoothly animated ToDo app built with React Native.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="homepage"
              title="Homepage"
              thumbnail={thumbHomepage}
            >
              Hompage website to expose my information and my portfolio.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="calendar-app"
              title="Calendar"
              thumbnail={thumbCalendar}
            >
              A event management app with text/markdown based event-notes and
              to-do list, built with React.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="calendar-api"
              title="Calendar API"
              thumbnail={thumbCalendarApi}
            >
              API for calendar app built in TypeScript with Express and MongoDB.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="banner"
              title="Homepage Banner"
              thumbnail={thumbModelBanner}
            >
              3D Model made with voxels to be the banner of my homepage.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <GridItem
              href="https://github.com/malcak?tab=repositories"
              title="My GitHub"
              thumbnail={thumbGitgub}
            >
              See in my github other smaller projects I have done.
            </GridItem>
          </Section>
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

export default Works
