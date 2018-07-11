import gameplay from "..";
import { randomNumber } from "../utils";

const balance = number => {
  const iter = digits => {
    const maxDigit = Math.max(...digits);
    const minDigit = Math.min(...digits);

    if (maxDigit - minDigit <= 1) {
      return digits;
    }

    const newDigits = digits.map(digit => {
      if (digit === maxDigit) return digit - 1;
      if (digit === minDigit) return digit + 1;
      return digit;
    });

    return iter(newDigits);
  };

  return iter(
    String(number)
      .split("")
      .map(Number)
  )
    .sort()
    .join("");
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
