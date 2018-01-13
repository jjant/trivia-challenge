import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import spinnerGif from '../assets/images/spinner.gif';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Spinner = ({ children }) => {
  return (
    <Container>
      <img src={spinnerGif} alt="Loading" />
      {children}
    </Container>
  );
};

Spinner.propTypes = {
  children: PropTypes.node,
};

Spinner.defaultProps = {
  children: 'Loading...',
};
