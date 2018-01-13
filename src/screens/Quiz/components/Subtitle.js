import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  margin-top: 25px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Text = styled.span`
  padding: 5px 20px;
  background: #6c6ea0;
  font-size: 15px;
  text-align: center;
  color: #fff;
  font-weight: 300;
  border-radius: 5px;
  border: 1px solid #333;
`;

export const Subtitle = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
};
