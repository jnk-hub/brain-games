import gameplay from '..';
import {randomNumber, chosen} from '../utils';

const upperLimitOfNumber = 10;
const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const game = () => {
  const a = randomNumber(upperLimitOfNumber);
  const b = randomNumber(upperLimitOfNumber);
  const [symbol, operation] = chosen(...operations);
  return {
    question: `${a} ${symbol} ${b}`,
    answer: String(operation(a, b)),
  };
};
game.rule = 'What is the result of the expression?';

export default () => gameplay(game);
