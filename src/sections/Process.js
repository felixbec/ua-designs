import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Skills from '../sections/Skills';
import { Box, Image, Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Slide from 'react-reveal/Slide';
import { ProgressBar } from 'react-bootstrap';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import Section from '../components/Section';
import icon from '../../media/ss.png';

const Background = () => <div style={Styles.background} />;
const ProcessIconContainer = styled.div`
  width: 140px;
  height: 140px;
  margin: 0 auto;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  position: relative;
  transition: all 0.5s ease-in-out;

  :hover {
    background-color: ${props => props.theme.colors.primary};
    .index {
      background-color: ${props => props.theme.colors.secondary};
      transition: background-color 1s;
    }

    transition: margin-bottom 1s ease-out;
    margin-bottom: 20px;
    transition: background-color 0.5s;
    transform: scale(1.1);
  }
`;
const ProcessIconIndex = styled.div`
  width: 40px;
  height: 40px;
  margin: auto;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 100px;
`;

const ProcessIcon = styled.img`
  width: 100%;
`;
const ProcessContent = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;

const Card = styled.div`
  .card-body {
    text-align: center;
  }
`;

const Process = ({ cardTitle, cardDescription, cardImage, cardIndex }) => (
  <div className="col-lg-3 col-md-6">
    <Card className="card">
      <a href="#discuss">
        <ProcessIconContainer>
          <ProcessIconIndex className="index">{cardIndex}</ProcessIconIndex>
          <ProcessIcon
            className="header-img3"
            src={cardImage.file.url}
            alt="lil"
          />
        </ProcessIconContainer>
      </a>
      <div className="card-body #discuss">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>
      </div>
    </Card>
  </div>
);

Process.propTypes = {
  cardIndex: PropTypes.number.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

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

class Processes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageToggle: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      pageToggle: !state.pageToggle,
    }));
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <StaticQuery
              query={graphql`
                query ProcessesQuery {
                  contentfulAbout {
                    process {
                      cardDescription
                      cardImage {
                        file {
                          url
                        }
                      }
                      cardTitle
                      cardIndex
                    }
                    processDescription {
                      childMarkdownRemark {
                        rawMarkdownBody
                      }
                    }
                  }
                }
              `}
              render={({ contentfulAbout }) => (
                <Fragment>
                  <Box width={[1, 1, 1]} px={[1, 2, 4]}>
                    <ProcessContent>
                      {
                        contentfulAbout.processDescription.childMarkdownRemark
                          .rawMarkdownBody
                      }
                    </ProcessContent>
                  </Box>
                  <div className="container-fluid">
                    <div className="row card-deck">
                      {contentfulAbout.process.map((p, i) => (
                        <Process key={p.id} {...p} />
                      ))}
                    </div>
                  </div>
                </Fragment>
              )}
            />
          </Flex>
        </div>
      </Fragment>
    );
  }
}

export default Processes;
