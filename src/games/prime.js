import gameplay from "..";
import { randomNumber } from "../utils";

const isPrime = number => {
  const minPrimeNamber = 2;
  if (number < minPrimeNamber) return false;
  if (number === minPrimeNamber) return true;

  const sqrtOfNumber = Math.ceil(Math.sqrt(number));

  const iter = denominator => {
    if (denominator > sqrtOfNumber) return true;
    if (number % denominator === 0) return false;
    return iter(denominator + 1);
  };
  return iter(minPrimeNamber);
};

const rule = "Is this number prime? Answer yes or no.";

const upperLimitOfNumber = 100;

const game = () => {
  const number = randomNumber(upperLimitOfNumber);

  return {
    question: `${number} - is prime?`,
    answer: isPrime(number) ? "yes" : "no"
  };
};

export default () => gameplay(game, rule);
