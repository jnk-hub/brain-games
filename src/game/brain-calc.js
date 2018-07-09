const ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b
};

export default () => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);

  const opSymbols = Object.keys(ops);
  const op = opSymbols[Math.floor(Math.random() * opSymbols.length)];

  return {
    question: `${a} ${op} ${b} =`,
    answer: String(ops[op](a, b))
  };
};
