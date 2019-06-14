import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import styled from 'styled-components';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import HeaderImg from '../../media/headerBanner.jpeg';

const BackgroundImg = () => <div style={Styles.headerImg} />;

const Styles = {
  headingText: {
    zIndex: 0,
  },
};

const LandingPage = () => (
  <Section.ContainerParallaxBlack className="container" id="home">
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            jobRoles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
      render={data => {
        const { name, jobRoles, socialLinks, roles } = data.contentfulAbout;

        return (
          <Fragment>
            <Heading
              textAlign="center"
              as="h1"
              color="background"
              fontSize={[5, 6, 8]}
              mb={[3, 4, 5]}
              style={Styles.headingText}
            >
              {`Hello, I am ${name} the `}
              <TextLoop interval={100000}>
                {jobRoles.map(text => (
                  <Text width={[300]} key={text}>
                    {text}
                  </Text>
                ))}
              </TextLoop>
            </Heading>

            <Heading
              as="h2"
              color="background"
              fontSize={[4, 5, 6]}
              mb={[3, 5]}
              textAlign="center"
            >
              <TextLoop>
                {roles.map(text => (
                  <Text width={[300, 500]} key={text}>
                    {text}
                  </Text>
                ))}
              </TextLoop>
            </Heading>
            <Flex
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              style={Styles.headingText}
            >
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>
            <SectionLink section="about">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.ContainerParallaxBlack>
);

export default LandingPage;
