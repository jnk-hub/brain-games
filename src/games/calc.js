import gameplay from "..";
import { randomNumber } from "../utils";

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b
};

const rule = "What is the result of the expression?";

const upperLimitOfNumber = 10;

const game = () => {
  const a = randomNumber(upperLimitOfNumber);
  const b = randomNumber(upperLimitOfNumber);

  const operationSymbols = Object.keys(operations);
  const operation = operationSymbols[randomNumber(operationSymbols.length)];

  return {
    question: `${a} ${operation} ${b}`,
    answer: String(operations[operation](a, b))
  };
};

export default () => gameplay(game, rule);
