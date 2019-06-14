import React, { Component } from 'react';
import Skills from '../sections/Skills';
import Process from '../sections/Process';
import Section from '../components/Section';
import { bool } from 'prop-types';

const Styles = {
  toggleButton: {
    color: 'red',
    zIndex: '4',
    textAlign: 'right',
  },
  background: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#fff',
    zIndex: '-1',
    position: 'absolute',
  },
};

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
        <Section.ContainerParallax id="skills">
          {this.state.hidden == false ? (
            <div
              id="skills"
              style={{
                transition: 'all 1s ease 0s',
                left: '0px',
                position: 'relative',
                height: '100vh',
                background: 'rgba(247, 206, 62, 0.6)',
              }}
              className="skills"
            >
              <Section.Header name="Skills" icon="🛠" label="tools" />
              <button style={Styles.toggleButton} onClick={this.handleClick}>
                Go to Process
              </button>
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
                background: 'rgba(247, 206, 62, 0.6)',
              }}
              className="ProcessSkills"
            >
              <Section.Header name="Skills" icon="🛠" label="tools" />
              <button style={Styles.toggleButton} onClick={this.handleClick}>
                Go to Process
              </button>
              <Skills />
            </div>
          )}

          {this.state.hidden == false ? (
            <div
              className="process1"
              style={{
                transition: 'all 1s ease 0s',
                left: '-2000px',
                position: 'absolute',
                height: '100vh',
                background: 'rgba(26, 41, 48, 0.9)',
              }}
            >
              <Section.Header name="Process" icon="🛠" label="tools" />
              <button style={Styles.toggleButton} onClick={this.handleClick}>
                Go to Skills
              </button>
              <Process />
            </div>
          ) : (
            <div
              className="process2"
              style={{
                transition: 'all 1s ease 0s',
                left: '0px',
                position: 'relative',
                height: '100vh',
                background: 'rgba(26, 41, 48, 0.9)',
              }}
            >
              <Section.Header name="Process" icon="🛠" label="tools" />
              <button style={Styles.toggleButton} onClick={this.handleClick}>
                Go to Skills
              </button>
              <Process />
            </div>
          )}
        </Section.ContainerParallax>
      </div>
    );
  }
}
