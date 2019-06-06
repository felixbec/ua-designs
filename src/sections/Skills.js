import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import { ProgressBar } from 'react-bootstrap';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import SectionFluid from '../components/SectionFluid';
import Section from '../components/Section';
import icon from '../../media/wp.png';

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
const SkillsBackground = styled.div`
  background-color: lightgray;
`;
const LogoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 0;
  grid-gap: 0;
  margin: 0;
  margin-top: 50px;
  img:hover {
    opacity: 1;
  }
  img {
    opacity: 0.6;
    width: 100%;
  }
  @media screen and (min-width: 1101px) {
    img {
      /*height: 225px;*/
    }
  }
  @media screen and (max-width: 1100px) {
    img {
      /*height: 200px;*/
    }
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 567px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Skill = ({ progressSkillName, skillPercentage }) => (
  <div>
    <p>{progressSkillName}</p>
    <ProgressBar animated variant="aqua" now={skillPercentage} />
  </div>
);

Skill.propTypes = {
  progressSkillName: PropTypes.string.isRequired,
  skillPercentage: PropTypes.string.isRequired,
};

const Skills = () => (
  <Fragment>
    <Section.Container id="skills" Background={Background}>
      <Section.Header name="Skills" icon="🛠" label="tools" />
      <StaticQuery
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
        render={({ contentfulAbout }) => (
          <Fade bottom>
            <div>
              {contentfulAbout.skills.map((p, i) => (
                <Skill key={p.id} {...p} />
              ))}
            </div>
          </Fade>
        )}
      />
      <SkillsBackground>
        <div className="container">
          <LogoList>
            <div>
              <a>
                <img className="header-img3" src={icon} alt="header" />
              </a>
            </div>
            <div>
              <a>
                <img className="header-img3" src={icon} alt="header" />
              </a>
            </div>
            <div>
              <a>
                <img className="header-img3" src={icon} alt="header" />
              </a>
            </div>
            <div>
              <a>
                <img className="header-img3" src={icon} alt="header" />
              </a>
            </div>
          </LogoList>
        </div>
      </SkillsBackground>
    </Section.Container>
  </Fragment>
);

export default Skills;
