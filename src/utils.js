export const randomNumber = (upperLimit, lowerLimit = 0) =>
  Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);

export const chosen = (...arr) => arr[randomNumber(arr.length)];
