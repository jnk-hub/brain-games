import gameplay from "..";
import { randomNumber } from "../utils";

const isEven = n => n % 2 === 0;

const rule = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const number = randomNumber(100);

  return {
    question: number,
    answer: isEven(number) ? "yes" : "no"
  };
};

export default () => gameplay(game, rule);
