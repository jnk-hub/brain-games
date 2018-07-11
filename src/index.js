import readlineSync from "readline-sync";

const print = (...lines) => lines.forEach(line => console.log(line));

export default (game, rule) => {
  print("Welcome to the Brain Games!\n");
  const player = readlineSync.question("May I have your name? ");
  print(`Hello, ${player}!`);
  print(`\n${rule}\n`);

  const turn = steps => {
    if (!steps) {
      print(`Congratulations, ${player}!`);
      return;
    }

    const { question, answer } = game();

    const attempt = readlineSync.question(`Question: ${question} `);

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
  turn(3);
};
