import gameplay from "..";
import { randomNumber } from "../utils";

const getItemProgression = start => (step, item) => item * start + step;

const rule = "What number is missing in this progression?";

const progressionLength = 10;
const [upperLimitOfNumber, lowerLimitOfNumber] = [10, 1];

const game = () => {
  const progression = Array(progressionLength)
    .fill(randomNumber(upperLimitOfNumber, lowerLimitOfNumber))
    .map(
      getItemProgression(randomNumber(upperLimitOfNumber, lowerLimitOfNumber))
    );

  const secret = progression[randomNumber(progression.length)];

  return {
    question: progression
      .map(item => (item === secret ? ".." : item))
      .join(" "),
    answer: String(secret)
  };
};

export default () => gameplay(game, rule);
