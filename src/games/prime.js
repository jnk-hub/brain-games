import gameplay from '..';
import {randomNumber} from '../utils';

const isPrime = (number) => {
  const minPrimeNamber = 2;
  if (number < minPrimeNamber) return false;
  if (number === minPrimeNamber) return true;
  const sqrtOfNumber = Math.ceil(Math.sqrt(number));

  const iter = (denominator) => {
    if (denominator > sqrtOfNumber) return true;
    if (number % denominator === 0) return false;
    return iter(denominator + 1);
  };
  return iter(minPrimeNamber);
};

const upperLimitOfNumber = 100;

const game = () => {
  const question = randomNumber(upperLimitOfNumber);
  return {
    question: `${question} - is prime?`,
    answer: isPrime(question) ? 'yes' : 'no',
  };
};
game.rule = 'Is this number prime? Answer yes or no.';

export default () => gameplay(game);
