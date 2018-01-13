import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  answeredQuestionsSelector,
  rightAnsweredQuestionsSelector,
} from '../../state/selectors/questions';
import { Layout } from './Layout';

const Container = ({ answers, totalAnswersCount, rightAnswersCount }) => {
  return (
    <Layout
      answers={answers}
      totalAnswersCount={totalAnswersCount}
      rightAnswersCount={rightAnswersCount}
    />
  );
};

Container.propTypes = {
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

const mapStateToProps = state => ({
  answers: answeredQuestionsSelector(state),
  totalAnswersCount: answeredQuestionsSelector(state).length,
  rightAnswersCount: rightAnsweredQuestionsSelector(state).length,
});

const enhance = connect(mapStateToProps);

const withData = enhance(Container);

export { withData as Container };
