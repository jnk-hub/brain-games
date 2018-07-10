import { randomNumber } from "../utils";

const isEven = n => n % 2 === 0;

export const rule = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  const number = randomNumber(100);

  return {
    question: number,
    answer: isEven(number) ? "yes" : "no"
  };
};
