import React from 'react';
import { Link } from 'react-router-dom';
import { FlowButton } from '../../components';
import { Container, InstructionBox, GameTitle } from './components';

export const Layout = () => {
  return (
    <Container>
      <GameTitle>Welcome to the Trivia Challenge!</GameTitle>
      <InstructionBox>
        <p>You will be presented 10 True or False questions.</p>
        <p>Can you score 100%?</p>
      </InstructionBox>
      <Link to="/quiz">
        <FlowButton>Begin</FlowButton>
      </Link>
    </Container>
  );
};
