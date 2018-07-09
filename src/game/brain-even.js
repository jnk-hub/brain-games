const isEven = n => n % 2 === 0;

export default () => {
  const number = Math.floor(Math.random() * 100);
  return {
    question: number,
    answer: isEven(number) ? "yes" : "no"
  };
};
