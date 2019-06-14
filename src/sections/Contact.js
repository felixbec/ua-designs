import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Slide from 'react-reveal/Slide';
import { ProgressBar } from 'react-bootstrap';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import SectionFluid from '../components/SectionFluid';
import Section from '../components/Section';
import '../styles/contact.scss';
import mailIcon from '../../media/contactLogo@1x.png';
import Tilt from 'react-tilt';

const Background = () => (
  <div>
    <Triangle
      color="MarigoldYellow"
      height={['100vh']}
      width={['100vw']}
      invertY
    />
    <Triangle
      color="MarigoldYellow"
      height={['100vh']}
      width={['100vw']}
      invertX
    />
  </div>
);

const Styles = {
  button: {
    position: 'absolute',
    left: '0',
    right: '0',
    background: 'transparent',
    padding: '15px 35px',
    borderRadius: '0',
    border: '3px solid white',
    color: 'white',
  },
};

const GhostButton = styled.button`
  margin: 0 auto;
  left: 0;
  right: 0;
  background: transparent;
  padding: 15px 35px;
  border-radius: 0;
  border: 3px solid white;
  color: white;
  font-size: 25px;
  :hover {
    background: ${props => props.theme.colors.MarigoldYellow};
    border-color: ${props => props.theme.colors.MarigoldYellow};
    transition: all 0.25s ease;
  }
`;
const Heading = styled.h2`
  text-align: center;
  color: white;
`;
const ContextHeading = styled.p`
  text-align: center;
  color: white;
`;
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: false,
      hidden: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      formToggle: !state.formToggle,
    }));
    this.setState({ hidden: !this.state.visible });
  }

  render() {
    if (this.state.formToggle == false) {
      return (
        <Section.ContainerParallaxContactShort id="contact">
          <Heading>Want to work together?</Heading>
          <ContextHeading>
            I'm currently accepting new projects and would love to hear about
            yours. Please take a few minutes to tell me about it.
          </ContextHeading>
          <GhostButton onClick={this.handleClick}>Contact me</GhostButton>
        </Section.ContainerParallaxContactShort>
      );
    } else {
      return (
        <Section.ContainerParallaxContact id="contact" Background={Background}>
          <Heading>Want to work together?</Heading>
          <ContextHeading>
            I'm currently accepting new projects and would love to hear about
            yours. Please take a few minutes to tell me about it.
          </ContextHeading>
          <Slide bottom>
            <div className="bg-contact100">
              <div className="container-contact100">
                <div className="wrap-contact100">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 tilt-container">
                        <Tilt
                          className="Tilt"
                          options={{ max: 50 }}
                          style={{ height: 310, width: 322, margin: 'auto' }}
                        >
                          <div className="contact100-pic js-tilt" data-tilt>
                            <img src={mailIcon} alt="IMG" />
                          </div>
                        </Tilt>
                      </div>

                      <div className="col-lg-6 form-container">
                        <form
                          name="contact"
                          method="POST"
                          data-netlify="true"
                          data-netlify-honeypot="bot-field"
                          className="contact100-form validate-form"
                        >
                          <input type="hidden" name="bot-field" />
                          <input
                            type="hidden"
                            name="form-name"
                            value="contact"
                          />
                          <span className="contact100-form-title">
                            Get in touch
                          </span>

                          <div
                            className="wrap-input100 validate-input"
                            data-validate="Name is required"
                          >
                            <input
                              className="input100"
                              type="text"
                              name="name"
                              placeholder="Name"
                            />
                            <span className="focus-input100" />
                            <span className="symbol-input100">
                              <i className="fa fa-user" aria-hidden="true" />
                            </span>
                          </div>

                          <div
                            className="wrap-input100 validate-input"
                            data-validate="Valid email is required: ex@abc.xyz"
                          >
                            <input
                              className="input100"
                              type="text"
                              name="email"
                              placeholder="Email"
                            />
                            <span className="focus-input100" />
                            <span className="symbol-input100">
                              <i
                                className="fa fa-envelope"
                                aria-hidden="true"
                              />
                            </span>
                          </div>

                          <div
                            className="wrap-input100 validate-input"
                            data-validate="Message is required"
                          >
                            <textarea
                              className="input100"
                              name="message"
                              placeholder="Message"
                            />
                            <span className="focus-input100" />
                          </div>

                          <div className="container-contact100-form-btn">
                            <button
                              onClick={this.handleClick}
                              className="contact100-form-btn"
                            >
                              Send
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </Section.ContainerParallaxContact>
      );
    }
  }
}

export default Contact;
