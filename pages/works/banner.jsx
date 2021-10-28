import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  return (
    <Layout title="Homepage Banner">
      <Container>
        <Title>
          Homepage Banner <Badge>2021</Badge>{' '}
        </Title>
        <P>3D Model made with voxels to be the banner of my homepage.</P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Voxel Art Editor</Meta>
            <Link href="https://ephtracy.github.io/">MagicaVoxel</Link>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/model_banner_front.webp"
          alt="calendar app image"
        />
        <WorkImage
          src="/images/works/model_banner_iso.webp"
          alt="calendar app image"
        />
      </Container>
    </Layout>
  )
}

export default Work
