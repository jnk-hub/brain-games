import { randomNumber } from "../utils";

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

export const rule = "Find the greatest common divisor of given numbers.";

export default () => {
  const a = randomNumber(100);
  const b = randomNumber(100);

  return {
    question: `GCD ${a} & ${b} =`,
    answer: String(gcd(a, b))
  };
};
