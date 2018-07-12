import gameplay from "..";
import { randomNumber } from "../utils";

const isEven = n => n % 2 === 0;

const rule = 'Answer "yes" if number even otherwise answer "no".';

const upperLimitOfNumber = 100;

const game = () => {
  const question = randomNumber(upperLimitOfNumber);

  return {
    question,
    answer: isEven(question) ? "yes" : "no"
  };
};

export default () => gameplay(game, rule);
