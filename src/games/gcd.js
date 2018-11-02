import gameplay from '..';
import {randomNumber} from '../utils';

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const upperLimitOfNumber = 100;

const game = () => {
  const a = randomNumber(upperLimitOfNumber);
  const b = randomNumber(upperLimitOfNumber);
  return {
    question: `GCD ${a} & ${b}`,
    answer: String(gcd(a, b)),
  };
};
game.rule = 'Find the greatest common divisor of given numbers.';

export default () => gameplay(game);
