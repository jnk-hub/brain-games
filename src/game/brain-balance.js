import gameplay from "../index";
import { randomNumber } from "../utils";

const balance = number => {
  const iter = digits => {
    const [maxDigit, ...rest] = digits;
    const minDigit = digits[digits.length - 1];
    rest.length = digits.length - 1;

    if (maxDigit - minDigit > 1) {
      return iter([maxDigit - 1, minDigit + 1, ...rest].sort());
    }
    return [...digits];
  };

  return iter(
    String(number)
      .split("")
      .sort()
  ).join("");
};

const rule = "Balance the given number.";

const game = () => {
  const number = randomNumber(9999, 10);

  return {
    question: number,
    answer: balance(number)
  };
};

export default () => gameplay(game, rule);
