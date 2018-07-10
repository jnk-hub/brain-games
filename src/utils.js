export const randomNumber = (upperLimit, lowerLimit = 0) =>
  Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);

export const print = (...lines) => lines.forEach(line => console.log(line));
