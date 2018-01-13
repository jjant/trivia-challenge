import React from 'react';
import PropTypes from 'prop-types';
import { Actions, Button, Container, QuestionBox } from './components';
import { Title, LinkIf } from '../../components';

export const Layout = ({
  question: { questionText, category },
  currentQuestionIndex,
  questionCount,
  areAllAnswered,
  answerTrue,
  answerFalse,
}) => {
  return (
    <Container>
      <Title>{category}</Title>
      <QuestionBox dangerouslySetInnerHTML={{ __html: questionText }} />
      <p style={{ textAlign: 'center', marginTop: '25px' }}>
        {currentQuestionIndex} of {questionCount}
      </p>
      <Actions>
        <LinkIf condition={areAllAnswered} to="/results">
          <Button onClick={answerTrue}>True</Button>
        </LinkIf>
        <LinkIf condition={areAllAnswered} to="/results">
          <Button onClick={answerFalse}>False</Button>
        </LinkIf>
      </Actions>
    </Container>
  );
};

Layout.propTypes = {
  question: PropTypes.shape({
    questionText: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  questionCount: PropTypes.number.isRequired,
  areAllAnswered: PropTypes.bool.isRequired,
  answerTrue: PropTypes.func.isRequired,
  answerFalse: PropTypes.func.isRequired,
};
