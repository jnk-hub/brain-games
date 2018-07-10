import { randomNumber } from "../utils";

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b
};

export const rule = "What is the result of the expression?";

export default () => {
  const a = randomNumber(10);
  const b = randomNumber(10);

  const operationSymbol = Object.keys(operations);
  const operation = operationSymbol[randomNumber(operationSymbol.length)];

  return {
    question: `${a} ${operation} ${b} =`,
    answer: String(operations[operation](a, b))
  };
};
