import React, { Component } from 'react';
import Skills from '../sections/Skills';
import Process from '../sections/Process';
import Section from '../components/Section';
import { bool } from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Styles = {
  toggleButton: {
    zIndex: '4',
    textTransform: 'uppercase',
    color: '#f7ce3e',
  },
  background: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#fff',
    zIndex: '-1',
    position: 'absolute',
  },
  flexEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBotton: '10px',
  },
  icon: {
    marginLeft: '10px',
    color: '#1a2930',
  },
};
const SkillsHidden = styled.div`
  transition: all 1s ease 0s;
  left: 0px;
  position: relative;
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      left: '0px',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ hidden: !this.state.hidden });

    if (this.state.hidden == false) {
      this.setState({ left: '0px' });
    } else if (this.state.hidden == true) {
      this.setState({ left: '-2000px' });
    } else {
    }
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Section.ContainerFluid id="skills">
          {this.state.hidden == false ? (
            <div
              className="process--hidden"
              style={{
                transition: 'all 1s ease 0s',
                left: '-2000px',
                position: 'absolute',
                height: '100vh',
              }}
            >
              <Section.Header name="Process" icon="🛠" label="tools" />
              <div className="container" style={Styles.flexEnd}>
                <button style={Styles.toggleButton} onClick={this.handleClick}>
                  Go to Skills
                  <FontAwesome style={Styles.icon} name="arrow-circle-right" />
                </button>
              </div>
              <Process />
            </div>
          ) : (
            <div
              className="process--show"
              style={{
                transition: 'all 1s ease 0s',
                left: '0px',
                position: 'relative',
                height: '100vh',
              }}
            >
              <Section.Header name="Process" icon="🛠" label="tools" />
              <div className="container" style={Styles.flexEnd}>
                <button style={Styles.toggleButton} onClick={this.handleClick}>
                  Go to Skills
                  <FontAwesome style={Styles.icon} name="arrow-circle-right" />
                </button>
              </div>
              <Process />
            </div>
          )}
          {this.state.hidden == false ? (
            <div
              id="skills"
              style={{
                transition: 'all 1s ease 0s',
                left: '0px',
                position: 'relative',
                height: '100vh',
              }}
              className="skills--show"
            >
              <Section.Header name="Skills" icon="🛠" label="tools" />
              <div className="container" style={Styles.flexEnd}>
                <button style={Styles.toggleButton} onClick={this.handleClick}>
                  Go to Process
                  <FontAwesome style={Styles.icon} name="arrow-circle-right" />
                </button>
              </div>
              <Skills />
            </div>
          ) : (
            <div
              id="skills"
              style={{
                transition: 'all 1s ease 0s',
                left: '-2000px',
                position: 'absolute',
                height: '100vh',
              }}
              className="skills--hidden"
            >
              <Section.Header name="Skills" icon="🛠" label="tools" />
              <div className="container" style={Styles.flexEnd}>
                <button style={Styles.toggleButton} onClick={this.handleClick}>
                  Go to Process
                  <FontAwesome style={Styles.icon} name="arrow-circle-right" />
                </button>
              </div>
              <Skills />
            </div>
          )}
        </Section.ContainerFluid>
      </div>
    );
  }
}
