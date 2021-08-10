const chalk = require("chalk");
const hasAnsi = require("has-ansi");

function print(message) {
	if (hasAnsi(message)) {
		console.log(message);
	} else {
		console.log(chalk.green(message));
	}
}

print(chalk.magenta("text with color should keep that color"));
print("colorless text should be green");

const chalkLevelZero = new chalk.constructor({ level: 0 });
console.log(chalkLevelZero.hex("#EC58E1")("Semver weeeee!"));

const chalkLevelOne = new chalk.constructor({ level: 1 });
console.log(chalkLevelOne.hex("#EC58E1")("Semver weeeee!"));

const chalkLevelTwo = new chalk.constructor({ level: 2 });
console.log(chalkLevelTwo.hex("#EC58E1")("Semver weeeee!"));

const chalkLevelThree = new chalk.constructor({ level: 3 });
console.log(chalkLevelThree.hex("#EC58E1")("Semver weeeee!"));
