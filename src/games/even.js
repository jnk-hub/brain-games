import gameplay from "..";
import { randomNumber } from "../utils";

const isEven = n => n % 2 === 0;

const upperLimitOfNumber = 100;

const game = () => {
  const question = randomNumber(upperLimitOfNumber);
  return {
    question,
    answer: isEven(question) ? "yes" : "no"
  };
};
game.rule = 'Answer "yes" if number even otherwise answer "no".';

export default () => gameplay(game);
