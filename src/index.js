import readlineSync from "readline-sync";

const numberStepsOfGame = 3;

export default game => {
  console.log("Welcome to the Brain Games!\n");
  const player = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${player}!`);
  console.log(`\n${game.rule}\n`);

  const turn = steps => {
    if (!steps) {
      console.log(`Congratulations, ${player}!`);
      return;
    }
    const { question, answer } = game();
    const attempt = readlineSync.question(`Question: ${question} `);
    if (answer === attempt) {
      console.log("Correct!\n");
      turn(steps - 1);
    } else {
      console.log(
        `'${attempt}' is wrong answer =(\n`,
        `Correct answer was '${answer}'\n`,
        "\n",
        `Let's try again, ${player}!`
      );
    }
  };
  turn(numberStepsOfGame);
};
