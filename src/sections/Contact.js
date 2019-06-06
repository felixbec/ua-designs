import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import { ProgressBar } from 'react-bootstrap';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import SectionFluid from '../components/SectionFluid';
import Section from '../components/Section';
import '../styles/contact.css';
import mailIcon from '../../media/contactLogo@1x.png';
import Tilt from 'react-tilt';

const Background = () => (
  <div>
    <Triangle color="primary" height={['100vh']} width={['100vw']} invertY />
    <Triangle color="primary" height={['100vh']} width={['100vw']} invertX />
  </div>
);

const Contact = () => (
  <Section.Container id="contact" Background={Background}>
    {/*<Section.Header name="Contact" icon="📩" label="tools" />
    
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
    <div class="bg-contact100">
      <div class="container-contact100">
        <div class="wrap-contact100">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 tilt-container">
                <Tilt
                  className="Tilt"
                  options={{ max: 50 }}
                  style={{ height: 310, width: 322, margin: 'auto' }}
                >
                  <div class="contact100-pic js-tilt" data-tilt>
                    <img src={mailIcon} alt="IMG" />
                  </div>
                </Tilt>
              </div>

              <div class="col-lg-6 form-container">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  class="contact100-form validate-form"
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                  <span class="contact100-form-title">Get in touch</span>

                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Name is required"
                  >
                    <input
                      class="input100"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                    <span class="focus-input100" />
                    <span class="symbol-input100">
                      <i class="fa fa-user" aria-hidden="true" />
                    </span>
                  </div>

                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Valid email is required: ex@abc.xyz"
                  >
                    <input
                      class="input100"
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
                    <span class="focus-input100" />
                    <span class="symbol-input100">
                      <i class="fa fa-envelope" aria-hidden="true" />
                    </span>
                  </div>

                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Message is required"
                  >
                    <textarea
                      class="input100"
                      name="message"
                      placeholder="Message"
                    />
                    <span class="focus-input100" />
                  </div>

                  <div class="container-contact100-form-btn">
                    <button class="contact100-form-btn">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section.Container>
);

export default Contact;
