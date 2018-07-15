import gameplay from "..";
import { randomNumber } from "../utils";

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b
};
const SymbolsOfOperations = Object.keys(operations);

const rule = "What is the result of the expression?";

const upperLimitOfNumber = 10;

const game = () => {
  const a = randomNumber(upperLimitOfNumber);
  const b = randomNumber(upperLimitOfNumber);

  const operationSymbol =
    SymbolsOfOperations[randomNumber(SymbolsOfOperations.length)];

  return {
    question: `${a} ${operationSymbol} ${b}`,
    answer: String(operations[operationSymbol](a, b))
  };
};

export default () => gameplay(game, rule);
