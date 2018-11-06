const pwd = require("./pwd");
const ls = require("./ls");


const chalk = require("chalk");

const returnRandomColor = () => {
  const colors = ["red", "cyan", "magenta", "green", "yellow"];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};
console.log(chalk[returnRandomColor()]("------------------------------"));

process.stdout.write("prompt > ");

process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else {
    process.stdout.write("You typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});
