import React from 'react';
import { Box, Image, Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import { ProgressBar } from 'react-bootstrap';
import Triangle from '../components/Triangle';
import SkillsProgress from '../components/SkillsProgress';
import markdownRenderer from '../components/MarkdownRenderer';
import SectionFluid from '../components/SectionFluid';
import Section from '../components/Section';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const Skills = () => (
  <SectionFluid.Container id="skills" Background={Background}>
    <SectionFluid.Header name="Skills" icon="🛠" label="tools" />

    {/*<StaticQuery
      query={graphql`
        query SkillsQuery {
          contentfulAbout {
            skills {
              progressSkillName
              skillPercentage
            }
          }
        }
      `}
      render={data => {
        const { skills } = data.contentfulAbout;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                <div>
                  {skills.map((progressSkillName, skillPercentage, index) => (
                    <Text width={[300, 500]} key={index}>
                      {progressSkillName}
                      <ProgressBar animated now={5} />
                    </Text>
                  ))}
                  <ProgressBar animated now={skills.skillPercentage} />
                </div>
              </Fade>
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: '300px', margin: 'auto' }}
            />
          </Flex>
        );
      }}
    />*/}
    <Fade right>
      <SkillsProgress />
    </Fade>
  </SectionFluid.Container>
);

export default Skills;
