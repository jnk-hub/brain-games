const gcd = (a, b) => (b ? gcd(b, a % b) : a);

export default () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);

  return {
    question: `GCD ${a} & ${b} =`,
    answer: String(gcd(a, b))
  };
};
