import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import styled from 'styled-components';
import icon from '../../media/wp.png';

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
const SkillsBackground = styled.div`
  background-color: lightgray;
`;

export default class SkillsProgress extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <p>HTML/HTML5</p>
          <ProgressBar animated variant="aqua" now={90} />
          <p>CSS/SASS</p>
          <ProgressBar animated now={85} />
          <p>Javascript</p>
          <ProgressBar animated now={75} />
          <p>CMS - WordPress & Silverstripe</p>
          <ProgressBar animated now={75} />
          <p>ReactJS</p>
          <ProgressBar animated now={60} />
          <p>UI/UX</p>
          <ProgressBar animated now={60} />
          <p>Photoshop</p>
          <ProgressBar animated now={60} />
        </div>
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
      </div>
    );
  }
}
