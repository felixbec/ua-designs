import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import LinkAnimated from './LinkAnimated';
import HeaderImg from '../../media/headerBanner.jpeg';
import '../styles/parallax.scss';

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`;
const SectionContainerFluid = styled.div`
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  scroll-behavior: smooth;
`;
const SectionContainerTestimonials = styled.div`
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;

  scroll-behavior: smooth;
`;
const SectionContainerShort = styled.div`
  min-height: 50vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`;

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(26, 41, 48, 0.9);
`;
const OverlayYellow = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(247, 206, 62, 0.6);
`;

const OverlayShort = styled.div`
  height: 50vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(26, 41, 48, 0.6);
`;
const DefaultBackground = () => <div />;

const Container = ({ id, children, Background = DefaultBackground }) => (
  <Section
    id={id}
    style={{
      position: 'relative',
    }}
  >
    <Background />
    <SectionContainer>{children}</SectionContainer>
  </Section>
);

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  Background: PropTypes.func,
};

const ContainerTestimonial = ({
  id,
  children,
  Background = DefaultBackground,
}) => (
  <Section
    id={id}
    style={{
      position: 'relative',
    }}
  >
    <Background />
    <SectionContainerTestimonials>{children}</SectionContainerTestimonials>
  </Section>
);

ContainerTestimonial.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  Background: PropTypes.func,
};

const ContainerParallax = ({
  id,
  children,
  Background = DefaultBackground,
}) => (
  <Section id={id} className="parallax">
    <SectionContainerFluid>{children}</SectionContainerFluid>
  </Section>
);

ContainerParallax.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const ContainerParallaxBlack = ({
  id,
  children,
  Background = DefaultBackground,
}) => (
  <Section id={id} className="parallax">
    <Overlay>
      <SectionContainer>{children}</SectionContainer>
    </Overlay>
  </Section>
);

ContainerParallaxBlack.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const ContainerParallaxContact = ({
  id,
  children,
  Background = DefaultBackground,
}) => (
  <Section id={id} className="parallax--contact">
    <Overlay>
      <SectionContainer>{children}</SectionContainer>
    </Overlay>
  </Section>
);

ContainerParallax.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const ContainerParallaxYellow = ({
  id,
  children,
  Background = DefaultBackground,
}) => (
  <Section id={id} className="parallax--yellow">
    <OverlayYellow>
      <SectionContainer>{children}</SectionContainer>
    </OverlayYellow>
  </Section>
);

ContainerParallaxYellow.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const ContainerParallaxContactShort = ({
  id,
  children,
  Background = DefaultBackground,
}) => (
  <Section id={id} className="parallax--short">
    <OverlayShort>
      <SectionContainerShort>{children}</SectionContainerShort>
    </OverlayShort>
  </Section>
);

ContainerParallaxContactShort.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Header = ({ name, icon = '', label = '' }) => [
  <React.Fragment>
    <Heading color="denimGray" mb={4}>
      <LinkAnimated selected>
        {name}
        {icon && (
          <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
            {icon}
          </span>
        )}
      </LinkAnimated>
    </Heading>
  </React.Fragment>,
];

Header.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default {
  Container,
  ContainerTestimonial,
  ContainerParallax,
  ContainerParallaxBlack,
  ContainerParallaxYellow,
  ContainerParallaxContactShort,
  ContainerParallaxContact,

  Header,
};
