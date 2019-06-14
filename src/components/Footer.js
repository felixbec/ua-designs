import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Text, Flex, Box } from 'rebass';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import FooterLink from '../components/FooterLink';
import ContentfulLogo from './Logo/Contenful.svg';
import GatsbyLogo from './Logo/Gatsby.svg';
import FontAwesome from 'react-fontawesome';

const FooterContainer = styled.footer`
  padding: 0 1em;
  background: ${props => props.theme.colors.MarigoldYellow};
  color: ${props => props.theme.colors.background};
  display: block;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .row {
    text-align: center;
    padding: 100px;
    @media screen and (max-width: 576px) {
      padding: 25px;
    }
  }
`;

const RenponsiveLogo = styled.img`
  width: 100px;
  height: 25px;

  @media (min-width: 400px) {
    width: 150px;
    height: 35px;
  }
`;

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

const Styles = {
  copyright: {
    paddingTop: 50,
    fontSize: 12,
  },
  textside: {
    margin: 'auto',
  },
};

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        contentfulAbout {
          name
          roles
          socialLinks {
            id
            url
            name
            username
            fontAwesomeIcon
          }
        }
      }
    `}
    render={data => {
      const { name, socialLinks, roles } = data.contentfulAbout;

      return (
        <FooterContainer>
          <div className="row">
            <div className="col-md-6" style={Styles.textside}>
              <h3>Living, learning, & leveling up one day at a time.</h3>
              {socialLinks.url}
            </div>
            <div className="col-md-6">
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                  <FooterLink {...rest} />
                  <h3>{}</h3>
                </Box>
              ))}
            </div>
            <div className="col-md-12" style={Styles.copyright}>
              &copy; 2019 | UA-Designs
            </div>
          </div>
        </FooterContainer>
      );
    }}
  />
);

export default Footer;
