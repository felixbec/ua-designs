import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Flex, Text } from 'rebass';
import Process from '../sections/Process';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Slide from 'react-reveal/Slide';
import { ProgressBar } from 'react-bootstrap';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import SectionFluid from '../components/SectionFluid';
import Section from '../components/Section';
import icon from '../../media/wp.png';
import backgroundImg from '../../media/image1.jpg';
import '../styles/section.scss';

const BackgroundImg = () => (
  <div>
    <img src={backgroundImg} style={Styles.backgroundImg} />
  </div>
);
const Background = () => (
  <div className="background__container" style={Styles.backgroundImg} />
);
const DarkBackground = styled.div`
  height: 100vh;
  width: 25vw;
  background-color: red;
  z-index: -1;
  position: relative;
  right: 0;
`;
const Background2 = () => <div style={Styles.background} />;

const Styles = {
  backgroundImg: {
    height: '100vh',
    width: '100%',
    position: 'absolute',
    background: '#282E34',
  },
  headingText: {
    zIndex: 0,
  },
  skillsContainer: {
    height: '55vh',
  },
  toggleButton: {
    color: 'red',
    zIndex: '4',
    textAlign: 'right',
  },
  background: {
    height: '100vh',
    width: '90vw',
    backgroundColor: '#282E34',
    zIndex: '-1',
    position: 'absolute',
    left: '0',
  },
};

const SkillsBackground = styled.div`
  position: absolute;
  bottom: 0;
  height: 35vh;
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
  skillPercentage: PropTypes.number.isRequired,
};

class Skills extends React.Component {
  render() {
    return (
      <Fragment>
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
            <div className="skill__container" style={Styles.skillsContainer}>
              {contentfulAbout.skills.map((p, i) => (
                <Skill key={p.id} {...p} />
              ))}
            </div>
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
      </Fragment>
    );
  }
}

export default Skills;
