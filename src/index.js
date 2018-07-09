import readlineSync from "readline-sync";

export const print = (...lines) => lines.forEach(line => console.log(line));
export const askQuestion = str => readlineSync.question(`${str} `);

export default (game, description = "", turns = 3) => {
  print("Welcome to the Brain Games!\n");
  const player = askQuestion("May I have your name?");
  print(`Hello, ${player}!`);
  print(description);

  const turn = steps => {
    if (steps === 0) {
      print(`Congratulations, ${player}!`);
      return;
    }

    const { question, answer } = game();

    const attempt = askQuestion(`Question: ${question}`);

    if (answer === attempt) {
      print("Correct!\n");
      turn(steps - 1);
    } else {
      print(
        `'${attempt}' is wrong answer =(`,
        `Correct answer was '${answer}'\n`,
        `Let's try again, ${player}!`
      );
    }
  };
  turn(turns);
};

export const games = () => {
  print("Welcome to the Brain Games!\n");
  const player = askQuestion("May I have your name?");
  print(`Hello, ${player}!`);
};
