import { Question } from './quizApp.js';

function calculateScore(questions: Question[], userAnswers: string[]): number {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].choices[questions[i].correctAnswerIndex]) {
      score++;
    }
  }
  return score;
}

export default calculateScore;
