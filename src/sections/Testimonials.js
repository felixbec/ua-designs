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
import '../styles/slider.scss';
import FontAwesome from 'react-fontawesome';

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
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  quoteIcons: {
    fontSize: '20px',
    border: '1px solid #f7ce3e',
    color: '#f7ce3e',
    padding: '10px',
    borderRadius: '50%',
  },
};

const Testimonial = ({
  authorName,
  authorQuote,
  authorRole,
  testimonialAuthorImage,
}) => (
  <div className="row">
    <div className="col-lg-5 testimonial__image">
      <TestimonialImage src={testimonialAuthorImage.file.url} />
    </div>
    <div className="col-lg-6 testimonial__context">
      <div style={Styles.flexCenter}>
        <FontAwesome name="quote-right" style={Styles.quoteIcons} />
      </div>
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
  <Section.ContainerTestimonial id="testimonials">
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
        <div className="bg-contact100">
          <div className="container-contact100">
            <div className="wrap-contact100">
              <div className="col-md-12 testimonial__title">
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
      )}
    />
  </Section.ContainerTestimonial>
);

export default Testimonials;
