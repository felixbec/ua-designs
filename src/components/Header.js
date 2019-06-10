import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image } from 'rebass';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import RouteLink from './RouteLink';
import Logo from './Logo/Portfolio.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/header.scss';

const Styles = {
  navbar: {
    height: '100vh',
    width: '100vw',
  },
};

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: transparent;
  }

  position: absolute;
  width: 100%;
`;

const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          };
    },
    { links: [], home: null },
  );

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
      backgroundColor: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isCollapsed: !state.isCollapsed,
    }));
    if (this.state.isCollapsed == false) {
      this.setState({ backgroundColor: 'rgba(1,134,135,0.8)' });
    } else if (this.state.isCollapsed == true) {
      this.setState({ backgroundColor: 'transparent' });
    } else {
      this.setState({ backgroundColor: 'transparent' });
    }
  }

  render() {
    return (
      <Navbar expand="*" style={{ background: this.state.backgroundColor }}>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="button"
          onClick={this.handleClick}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <div style={Styles.navbar}>
            <SectionLinks>
              {({ allLinks }) => {
                const { home, links } = formatLinks(allLinks);
                const homeLink = home && (
                  <Navbar.Brand>
                    <Image
                      src={Logo}
                      width="50px"
                      alt="Portfolio Logo"
                      onClick={home.onClick}
                      style={{
                        cursor: 'pointer',
                      }}
                    />
                  </Navbar.Brand>
                );
                const navLinks = links.map(({ name, value }) => (
                  <Nav>
                    <Nav.Link>
                      <RouteLink
                        key={name}
                        onClick={value.onClick}
                        selected={value.selected}
                      >
                        {name}
                      </RouteLink>
                    </Nav.Link>
                  </Nav>
                ));

                return (
                  <Fragment>
                    <Navbar.Brand>
                      {homeLink}
                      <Flex className="links__container" mr={[0, 3, 5]}>
                        {navLinks}
                      </Flex>
                    </Navbar.Brand>
                  </Fragment>
                );
              }}
            </SectionLinks>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
