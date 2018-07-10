import gameplay from "../index";
import { randomNumber } from "../utils";

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const rule = "Find the greatest common divisor of given numbers.";

const game = () => {
  const a = randomNumber(100);
  const b = randomNumber(100);

  return {
    question: `GCD ${a} & ${b} =`,
    answer: String(gcd(a, b))
  };
};

export default () => gameplay(game, rule);
