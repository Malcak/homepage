import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiJest,
  SiAngular,
  SiJava,
  SiCplusplus,
  SiGo,
  SiRust,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiGnubash,
  SiLinux,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiAmazonaws,
  SiUnity,
  SiGodotengine,
  SiHackthebox
} from 'react-icons/si'

import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Skill from '../components/skill'
import SkillToLearn from '../components/skill-to-learn'

const Stack = () => {
  return (
    <Layout>
      <Container mt={6}>
        <Box mb={4}>
          <Heading as="h2" fontSize={24} mb={2}>
            My skills
          </Heading>
          <Paragraph>
            The (small) set of technologies I work with, how well I master them,
            and which ones I plan to learn. These skills are based only on
            technologies, i have other skills such as algorithmics, object
            oriented programming, functional programming, architectural
            patterns, frameworks, discrete mathematics, among others. but they
            are more difficult to measure through a simple progress bar and less
            specific.
          </Paragraph>
        </Box>
        <Heading as="h3" fontSize={20} variant="section-title">
          Technology Stack
        </Heading>
        <List mt={6}>
          <ListItem mb={4}>
            <Section delay={0.1}>
              <Skill title="HTML" value="75" color="gruvRed" icon={SiHtml5} />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={0.2}>
              <Skill title="CSS" value="55" color="gruvBlue" icon={SiCss3} />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={0.3}>
              <Skill
                title="JavaScript"
                value="80"
                color="gruvYellow"
                icon={SiJavascript}
              />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={0.4}>
              <Skill
                title="TypeScript"
                value="65"
                color="gruvBlue"
                icon={SiTypescript}
              />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={0.5}>
              <Skill
                title="NodeJS"
                value="65"
                color="gruvGreen"
                icon={SiNodedotjs}
              />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={0.6}>
              <Skill title="React" value="75" color="gruvAqua" icon={SiReact} />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={0.7}>
              <Skill title="Jest" value="55" color="gruvPurple" icon={SiJest} />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={0.8}>
              <Skill
                title="Angular"
                value="60"
                color="gruvRed"
                icon={SiAngular}
              />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={0.9}>
              <Skill title="Java" value="40" color="gruvOrange" icon={SiJava} />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={1.0}>
              <Skill
                title="C++"
                value="35"
                color="gruvPurple"
                icon={SiCplusplus}
              />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={1.1}>
              <Skill
                title="SQL"
                value="65"
                color="gruvBlue"
                icon={SiPostgresql}
              />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={1.2}>
              <Skill
                title="MongoDB"
                value="60"
                color="gruvGreen"
                icon={SiMongodb}
              />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={1.3}>
              <Skill
                title="Linux"
                value="55"
                color="gruvOrange"
                icon={SiLinux}
              />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={1.4}>
              <Skill
                title="Docker"
                value="65"
                color="gruvBlue"
                icon={SiDocker}
              />
            </Section>
          </ListItem>
          <ListItem mb={4}>
            <Section delay={1.5}>
              <Skill
                title="Git y Github"
                value="75"
                color="gruvRed"
                icon={SiGithub}
              />
            </Section>
          </ListItem>
        </List>
        <Heading as="h3" fontSize={20} variant="section-title">
          Next to learn
        </Heading>
        <SimpleGrid columns={[2, 3, 5, 5]} gap={3}>
          <SkillToLearn icon={SiGnubash} />
          <SkillToLearn icon={SiGo} />
          <SkillToLearn icon={SiRust} />
          <SkillToLearn icon={SiPython} />
          <SkillToLearn icon={SiKubernetes} />
          <SkillToLearn icon={SiJenkins} />
          <SkillToLearn icon={SiAmazonaws} />
          <SkillToLearn icon={SiUnity} />
          <SkillToLearn icon={SiGodotengine} />
          <SkillToLearn icon={SiHackthebox} />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Stack
