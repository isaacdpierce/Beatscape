import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledError = styled.p`
  position: absolute;
  top: 15%;
  left: 30%;
  font-size: 1rem;
  color: red;
  z-index: 99;
`;

const Error = ({ children }) => <StyledError>{children}</StyledError>;

Error.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Error;
