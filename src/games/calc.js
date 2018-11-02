import gameplay from '..';
import {randomNumber} from '../utils';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandomOperationSymbol = () => {
  const symbols = Object.keys(operations);
  return symbols[randomNumber(symbols.length)];
};

const getOperationFunction = (symbol) => operations[symbol];

const upperLimitOfNumber = 10;

const game = () => {
  const a = randomNumber(upperLimitOfNumber);
  const b = randomNumber(upperLimitOfNumber);
  const operationSymbol = getRandomOperationSymbol();
  const operationFunction = getOperationFunction(operationSymbol);
  return {
    question: `${a} ${operationSymbol} ${b}`,
    answer: String(operationFunction(a, b)),
  };
};
game.rule = 'What is the result of the expression?';

export default () => gameplay(game);
