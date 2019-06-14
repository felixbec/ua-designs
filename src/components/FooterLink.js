import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'rebass';
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors.background};

  &:hover {
    color: ${props => props.theme.colors.denimGray};
  }
`;

const UsernameTag = styled.span`
  font-size: 24px;
  margin-left: 15px;
`;

const FooterLink = ({ fontAwesomeIcon, name, url, username }) => (
  <IconLink href={url} target="_blank">
    <FontAwesome style={{ verticalAlign: 'middle' }} name={fontAwesomeIcon} />
    <UsernameTag>{username}</UsernameTag>
  </IconLink>
);

FooterLink.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default FooterLink;
