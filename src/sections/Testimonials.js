import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Triangle from '../components/Triangle';
import { CardContainer, Card } from '../components/Card';
import markdownRenderer from '../components/MarkdownRenderer';
import Section from '../components/Section';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/slider.css';

const Background = () => (
  <div>
    <Triangle color="primary" height={['100vh']} width={['100vw']} invertY />
    <Triangle color="primary" height={['100vh']} width={['100vw']} invertX />
  </div>
);

const TestimonialImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: relative;

  @media screen and (max-width: 576px) {
    width: 200px;
    height: 200px;
  }
`;

const Styles = {
  context: {
    color: '#6c757d',
  },
};

const Testimonial = ({
  authorName,
  authorQuote,
  authorRole,
  testimonialAuthorImage,
}) => (
  <div class="row">
    <div class="col-lg-5 testimonial__image">
      <TestimonialImage src={testimonialAuthorImage.file.url} />
    </div>
    <div class="col-lg-6 testimonial__context">
      <Carousel.Caption style={Styles.context}>
        <p>{authorQuote.authorQuote}</p>
      </Carousel.Caption>
    </div>
    <div className="col-lg-12 testimonial__author">
      <h3>{authorName}</h3>
      <p className="testimonial__position">{authorRole}</p>
    </div>
  </div>
);

Testimonial.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorQuote: PropTypes.string.isRequired,
  authorRole: PropTypes.string.isRequired,
  testimonialAuthorImage: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

const Testimonials = () => (
  <Section.Container id="testimonials" Background={Background}>
    <Section.Header name="Testimonials" icon="🗣" label="tools" />
    <StaticQuery
      query={graphql`
        query TestimonialQuery {
          contentfulAbout {
            testimonials {
              authorName
              authorQuote {
                authorQuote
              }
              authorRole
              testimonialAuthorImage {
                file {
                  url
                }
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <div class="bg-contact100">
          <div class="container-contact100">
            <div class="wrap-contact100">
              <div class="container">
                <div class="col-md-12 testimonial__title">
                  <h2>See what others say about me!</h2>
                </div>
                <Carousel>
                  {contentfulAbout.testimonials.map((p, i) => (
                    <Carousel.Item>
                      <Testimonial key={p.id} {...p} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  </Section.Container>
);

export default Testimonials;
