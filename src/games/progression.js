import gameplay from "..";
import { randomNumber } from "../utils";

const rule = "What number is missing in this progression?";

const getItemProgression = start => (step, item) => item * start + step;

const game = () => {
  const progression = Array(10)
    .fill(randomNumber(10, 1))
    .map(getItemProgression(randomNumber(10, 1)));

  const secret = progression[randomNumber(progression.length)];

  return {
    question: progression
      .map(item => (item === secret ? ".." : item))
      .join(" "),
    answer: String(secret)
  };
};

export default () => gameplay(game, rule);
