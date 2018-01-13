import { createSelector } from 'reselect';

const questionSelector = state => state.questions;

export const answeredQuestionsSelector = createSelector(
  questionSelector,
  questions => questions.answered,
);

export const currentQuestionSelector = createSelector(
  questionSelector,
  questions => questions.current,
);

export const remainingQuestionsSelector = createSelector(
  questionSelector,
  questions => questions.remaining,
);

export const currentQuestionIndexSelector = createSelector(
  answeredQuestionsSelector,
  answered => answered.length + 1,
);

export const allQuestionsSelector = createSelector(
  answeredQuestionsSelector,
  currentQuestionSelector,
  remainingQuestionsSelector,
  (answered, current, remaining) => [
    ...answered,
    ...(current !== null ? [current] : []),
    ...remaining,
  ],
);

export const rightAnsweredQuestionsSelector = createSelector(
  answeredQuestionsSelector,
  answered =>
    answered.filter(
      answeredQuestion =>
        answeredQuestion.correctAnswer === answeredQuestion.answer,
    ),
);
