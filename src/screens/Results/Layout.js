import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, ResponseList } from './components';
import { Title, FlowButton, Response } from '../../components';

const renderAnswers = answers => {
  return answers.map(({ id, answer, correctAnswer, questionText }) => (
    <Response
      key={id}
      isCorrect={answer === correctAnswer}
      question={questionText}
    />
  ));
};

export const Layout = ({ answers, totalAnswersCount, rightAnswersCount }) => {
  return (
    <Container>
      <Title>You scored</Title>
      <Title>
        {rightAnswersCount} / {totalAnswersCount}
      </Title>
      <ResponseList>{renderAnswers(answers)}</ResponseList>
      <Link to="/quiz">
        <FlowButton>Play Again?</FlowButton>
      </Link>
    </Container>
  );
};

Layout.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      questionText: PropTypes.string.isRequired,
      answer: PropTypes.bool.isRequired,
      correctAnswer: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  totalAnswersCount: PropTypes.number.isRequired,
  rightAnswersCount: PropTypes.number.isRequired,
};
