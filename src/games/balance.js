import gameplay from "..";
import { randomNumber } from "../utils";

const numberToDigits = number =>
  String(number)
    .split("")
    .map(Number);

const digitsToNumber = array => array.sort().join("");

const balance = number => {
  const digits = numberToDigits(number);
  const countOfDigits = digits.length;
  const sumOfDigits = digits.reduce((a, b) => a + b);
  const average = sumOfDigits / countOfDigits;

  if (sumOfDigits % countOfDigits === 0) {
    const balancedDigits = Array(countOfDigits).fill(average);
    return digitsToNumber(balancedDigits);
  }

  const fewerNumber = Math.floor(average);
  const greaterNumber = Math.ceil(average);
  const countOfFewerNumber = greaterNumber * countOfDigits - sumOfDigits;
  const countOfGreaterNumber = countOfDigits - countOfFewerNumber;

  const balancedDigits = [
    ...Array(countOfFewerNumber).fill(fewerNumber),
    ...Array(countOfGreaterNumber).fill(greaterNumber)
  ];
  return digitsToNumber(balancedDigits);
};

const rule = "Balance the given number.";

const [upperLimitOfNumber, lowerLimitOfNumber] = [9999, 10];

const game = () => {
  const question = randomNumber(upperLimitOfNumber, lowerLimitOfNumber);

  return {
    question,
    answer: balance(question)
  };
};

export default () => gameplay(game, rule);
