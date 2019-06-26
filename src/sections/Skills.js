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
import icon from '../../media/icons/discuss.png';
import FontAwesome from 'react-fontawesome';
import backgroundImg from '../../media/image1.jpg';
import '../styles/section.scss';
import '../styles/skills.scss';

const Background = () => (
  <div className="background__container" style={Styles.backgroundImg} />
);
const ProcessIconContainer = styled.div`
  width: 140px;
  height: 140px;
  margin: 0 auto;
  color: ${props => props.theme.colors.background};
  border-radius: 50%;
  display: flex;
  position: relative;
  transition: all 0.5s ease-in-out;
  span {
    color: white;
    margin: auto;
    font-size: 50px;
  }
  :hover {
    transition: margin-bottom 1s ease-out;
    transition: background-color 0.5s;
  }
`;

const ProcessIcon = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;
`;
const ProcessContent = styled.div`
  text-align: center;
  padding-bottom: 10vh;
`;

const Card = styled.div`
  .card-body {
    text-align: center;
    padding: 1.25rem 0;
    color: white;
  }

  margin: 0 !important;
  border: none !important;
  :hover {
    span {
      color: ${props => props.theme.colors.MarigoldYellow};
      transform: scale(1.1);
      transition: color 0.5s ease-out;
    }
  }

  @media screen and (max-width: 768px) {
    .card-text {
    }
  }

  @media screen and (max-width: 576px) {
  }
`;

const Background2 = () => <div style={Styles.background} />;

const SkillsBackground = styled.div`
  width: 100%;
  background: #1a2930;
  height: 55vh;
  display: flex;
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const Skill = ({ progressSkillName, skillPercentage }) => (
  <React.Fragment>
    <div class="graph-bar bar" id="a">
      <div class="inside">{progressSkillName}</div>
    </div>
  </React.Fragment>
);

Skill.propTypes = {
  progressSkillName: PropTypes.string.isRequired,
  skillPercentage: PropTypes.number.isRequired,
};

class Skills extends React.Component {
  render() {
    return (
      <Fragment>
        {/*
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
            <div className="skill__container ">
              {contentfulAbout.skills.map((p, i) => (
                <Skill key={p.id} {...p} />
              ))}
            </div>
          )}
              />*/}

        <div class="skill-container">
          <div class="graph-bar bar-1" id="a">
            <div class="inside">HTML5</div>
          </div>
          <div class="graph-bar bar-2" id="b">
            <div class="inside">CSS3/ Sass</div>
          </div>
          <div class="graph-bar bar-3" id="bb">
            <div class="inside">JQuery/ Javascript</div>
          </div>
          <div class="graph-bar bar-4" id="cc">
            <div class="inside">UX UI design</div>
          </div>
          <div class="graph-bar bar-5" id="c">
            <div class="inside">AngularJS</div>
          </div>
          <div class="graph-bar bar-6" id="d">
            <div class="inside">Build Automation tools</div>
          </div>
          <div class="graph-bar bar-7" id="ee">
            <div class="inside">Balsamiq | Invision</div>
          </div>
          <div class="graph-bar bar-8" id="e">
            <div class="inside">Photoshop</div>
          </div>
          <div class="graph-bar bar-9" id="ff">
            <div class="inside">Illustrator</div>
          </div>
          <div class="graph-bar bar-10" id="f">
            <div class="inside">Version control</div>
          </div>
          <div class="graph-bar bar-11" id="g">
            <div class="inside">Web Performance</div>
          </div>
          <div class="graph-bar bar-12" id="f">
            <div class="inside">Version control</div>
          </div>
          <div class="graph-bar bar-13" id="g">
            <div class="inside">Web Performance</div>
          </div>
        </div>

        <SkillsBackground>
          <div className="container m-auto">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <Card className="card card--skills">
                  <ProcessIconContainer>
                    <FontAwesome name="coffee" />
                  </ProcessIconContainer>

                  <div className="card-body #discuss">
                    <h5 className="card-title">CONCEPTING</h5>
                    <p className="card-text">
                      Creative digital photographer, passionate about digital
                      photography of several kinds, variations, acquired more
                      than 7 years professional photography experience in HTML
                      Template
                    </p>
                  </div>
                </Card>
              </div>
              <div className="col-md-3 col-sm-6">
                <Card className=" card card--skills">
                  <a href="#discuss">
                    <ProcessIconContainer>
                      <FontAwesome name="coffee" />
                    </ProcessIconContainer>
                  </a>
                  <div className="card-body #discuss">
                    <h5 className="card-title">CONCEPTING</h5>
                    <p className="card-text">
                      Creative digital photographer, passionate about digital
                      photography of several kinds, variations, acquired more
                      than 7 years professional photography experience in HTML
                      Template
                    </p>
                  </div>
                </Card>
              </div>
              <div className="col-md-3 col-sm-6">
                <Card className="card card--skills">
                  <a href="#discuss">
                    <ProcessIconContainer>
                      <FontAwesome name="coffee" />
                    </ProcessIconContainer>
                  </a>
                  <div className="card-body #discuss">
                    <h5 className="card-title">CONCEPTING</h5>
                    <p className="card-text">
                      Creative digital photographer, passionate about digital
                      photography of several kinds, variations, acquired more
                      than 7 years professional photography experience in HTML
                      Template
                    </p>
                  </div>
                </Card>
              </div>
              <div className="col-md-3 col-sm-6">
                <Card className="card card--skills">
                  <a href="#discuss">
                    <ProcessIconContainer>
                      <FontAwesome name="coffee" />
                    </ProcessIconContainer>
                  </a>
                  <div className="card-body #discuss">
                    <h5 className="card-title">CONCEPTING</h5>
                    <p className="card-text">
                      Creative digital photographer, passionate about digital
                      photography of several kinds, variations, acquired more
                      than 7 years professional photography experience in HTML
                      Template
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </SkillsBackground>
      </Fragment>
    );
  }
}
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
export default Skills;
