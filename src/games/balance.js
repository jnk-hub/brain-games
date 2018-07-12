import gameplay from "..";
import { randomNumber } from "../utils";

const numberToDigits = number =>
  String(number)
    .split("")
    .map(Number);

const digitsToNamber = array => array.sort().join("");

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

  const noBalanceDigits = numberToDigits(number);
  const balanceDigits = iter(noBalanceDigits);

  return digitsToNamber(balanceDigits);
};

const rule = "Balance the given number.";

const [upperLimitOfNumber, lowerLimitOfNumber] = [9999, 10];

const game = () => {
  const number = randomNumber(upperLimitOfNumber, lowerLimitOfNumber);

  return {
    question: number,
    answer: balance(number)
  };
};

export default () => gameplay(game, rule);
