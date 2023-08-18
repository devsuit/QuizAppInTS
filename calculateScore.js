function calculateScore(questions, userAnswers) {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].choices[questions[i].correctAnswerIndex]) {
            score++;
        }
    }
    return score;
}
export default calculateScore;
