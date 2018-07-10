import { randomNumber } from "../utils";

const balance = number => {
  const iter = digits => {
    const maxDigit = Number(digits.pop());
    const minDigit = Number(digits.shift());
    if (maxDigit - minDigit > 1) {
      return iter([maxDigit - 1, minDigit + 1, ...digits].sort());
    }
    return [minDigit, ...digits, maxDigit];
  };

  return iter(
    String(number)
      .split("")
      .sort()
  ).join("");
};

export const rule = "Balance the given number.";

export default () => {
  const number = randomNumber(9999, 10);

  return {
    question: number,
    answer: balance(number)
  };
};
