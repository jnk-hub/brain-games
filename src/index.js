import readlineSync from "readline-sync";

const askForName = () => readlineSync.question("May I have your name? ");
const salute = name => console.log(`Hello, ${name}!`);

export default () => {
  const userName = askForName();
  salute(userName);
};
