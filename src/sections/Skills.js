import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { ProgressBar } from 'react-bootstrap';
import SkillsProgress from '../components/SkillsProgress';
import markdownRenderer from '../components/MarkdownRenderer';

const Skills = () => (
  <Section.Container id="skills">
    <Section.Header name="Skills" icon="🛠" label="tools" />
    {/*
    <StaticQuery
      query={graphql`
        query SkillsQuery {
          allContentfulSkills {
            nodes {
              skillTitle
              skillPercentage
            }
          }
        }
      `}
      render={data => {
        const { skillTitle, skillPercentage } = data.allContentfulSkills.nodes;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                <div>
                  <p>{skillTitle}</p>
                  <ProgressBar animated now={skillPercentage} />
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
    <SkillsProgress />
  </Section.Container>
);

export default Skills;
