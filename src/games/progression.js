import gameplay from "..";
import { randomNumber } from "../utils";

const makeProgression = (count, start, step) =>
  Array(count)
    .fill(null)
    .map((_, index) => index * start + step);

const hideItem = (index, progression) =>
  progression.map((item, i) => (i === index ? ".." : item));

const rule = "What number is missing in this progression?";

const progressionLength = 10;
const [upperLimitOfNumber, lowerLimitOfNumber] = [10, 1];

const game = () => {
  const startProgression = randomNumber(upperLimitOfNumber, lowerLimitOfNumber);
  const stepProgression = randomNumber(upperLimitOfNumber, lowerLimitOfNumber);

  const progression = makeProgression(
    progressionLength,
    startProgression,
    stepProgression
  );

  const secretIndex = randomNumber(progression.length);

  return {
    question: hideItem(secretIndex, progression).join(" "),
    answer: String(progression[secretIndex])
  };
};

export default () => gameplay(game, rule);
