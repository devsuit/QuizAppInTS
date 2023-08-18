import inquirer from 'inquirer';
import calculateScore from './calculateScore.js';
import chalk from 'chalk';
const questions = [
    {
        question: 'What are the three main simple types in TypeScript?',
        choices: ['a. Array, Object, Boolean  ', 'b. Object, String, Number', 'c. Object, Array, Symbol', 'd. Boolean, Number, String '],
        correctAnswerIndex: 3,
    },
    {
        question: 'Type Aliases are mostly used with ______.',
        choices: ['a. Numbers', 'b. Strings', 'c. Booleans'],
        correctAnswerIndex: 1,
    },
    {
        question: '_____ is a return type for when nothing is returned.',
        choices: ['a. any[]', 'b. unknown', 'c. void  ', 'd. any'],
        correctAnswerIndex: 2,
    },
    {
        question: 'Access modifiers control the ______ of properties and methods.',
        choices: ['a. mocking', 'b. type', 'c. inheritance  ', 'd. visibility'],
        correctAnswerIndex: 3,
    },
    {
        question: `What is the output of the following TypeScript code?
    const foo = (): number => 5;
    console.log(foo());`,
        choices: ['a. “5”', 'b. 5', 'c. undefined  ', 'd. Error'],
        correctAnswerIndex: 1,
    },
];
const userAnswers = [];
async function main() {
    for (const q of questions) {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'answer',
                message: q.question,
                choices: q.choices,
            },
        ]);
        userAnswers.push(answer.answer);
    }
    const score = calculateScore(questions, userAnswers);
    console.log(chalk.bold.green('Quiz Results:\n'));
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.choices[q.correctAnswerIndex];
        const result = isCorrect ? chalk.green('Correct') : chalk.red('Incorrect');
        const correctAnswer = q.choices[q.correctAnswerIndex];
        console.log(`${index + 1}. ${q.question}\n   Your Answer: ${userAnswer}\n   Correct Answer: ${correctAnswer}\n   Result: ${result}\n`);
    });
    console.log("--------------------------------------------");
    console.log(chalk.bold.yellow(`Your Total Score: ${score}/${questions.length}`));
    console.log("--------------------------------------------");
}
main();
