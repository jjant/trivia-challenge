import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Text = styled.span`
  padding: 5px 20px;
  background: #6c6ea0;
  font-size: 25px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  border-radius: 5px;
`;

export const Title = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};
