import readlineSync from "readline-sync";

const title = "Welcome to the Brain Games!\n";

const print = (...lines) => lines.forEach(line => console.log(line));
const question = str => readlineSync.question(`${str} `);

const askForName = () => question("May I have your name?");
const salute = name => console.log(`Hello, ${name}!`);

export const even = () => {
  print(title);
  const player = askForName();
  print('\nAnswer "yes" if number even otherwise answer "no".\n');
  const isEven = n => n % 2 === 0;
  const turn = steps => {
    if (steps === 0) {
      print(`Congratulations, ${player}!`);
      return;
    }

    const number = Math.floor(Math.random() * 100);
    const answer = question(`Question: ${number}`);
    const correctAnswer = isEven(number) ? "yes" : "no";

    if (answer !== correctAnswer) {
      print(
        `'${answer}' is wrong answer ;(.`,
        `Correct answer was '${correctAnswer}'.\n`,
        `Let's try again, ${player}!`
      );
    } else {
      print("Correct!\n");
      turn(steps - 1);
    }
  };
  turn(3);
};

export default () => {
  print(title);
  const userName = askForName();
  salute(userName);
};
