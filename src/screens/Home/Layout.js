import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../../components';

export const Layout = () => {
  return (
    <div>
      <Title>Welcome to the Trivia Challenge!</Title>
      <p>You will be presented 10 True or False questions.</p>
      <p>Can you score 100%?</p>
      <Link to="/quiz">Begin</Link>
    </div>
  );
};
