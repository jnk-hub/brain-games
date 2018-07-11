import gameplay from "..";
import { randomNumber } from "../utils";

const rule = "Is this number prime? Answer yes or no.";

const isPrime = number => {
  const minPrimeNamber = 2;
  if (number < minPrimeNamber) return false;

  const iter = count => {
    if (count === number) {
      return true;
    }
    return number % count === 0 ? false : iter(count + 1);
  };
  return iter(minPrimeNamber);
};

const game = () => {
  const number = randomNumber(100);

  return {
    question: `${number} - is prime?`,
    answer: isPrime(number) ? "yes" : "no"
  };
};

export default () => gameplay(game, rule);
