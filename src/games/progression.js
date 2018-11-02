import gameplay from '..';
import {randomNumber} from '../utils';

const makeProgression = (count, start, step) =>
  Array(count)
    .fill(null)
    .map((_, index) => index * start + step);

const getItem = (progression, index) => progression[index];

const hideItem = (progression, index) =>
  progression.map((item, i) => (i === index ? '..' : item));

const toString = (progression) => progression.join(' ');

const progressionLength = 10;
const [upperLimitOfNumber, lowerLimitOfNumber] = [10, 1];

const game = () => {
  const startProgression = randomNumber(upperLimitOfNumber, lowerLimitOfNumber);
  const stepProgression = randomNumber(upperLimitOfNumber, lowerLimitOfNumber);
  const progression = makeProgression(
    progressionLength,
    startProgression,
    stepProgression,
  );
  const secretIndex = randomNumber(progression.length);
  const progressionMissedItem = hideItem(progression, secretIndex);
  return {
    question: toString(progressionMissedItem),
    answer: String(getItem(progression, secretIndex)),
  };
};
game.rule = 'What number is missing in this progression?';

export default () => gameplay(game);
