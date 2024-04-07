import { countCharacters } from "../index.js";

const givenResult = countCharacters("");
const result = 0;

const testPassed = result === givenResult;

if (testPassed) {
  console.log(`text is empty: ${testPassed}`);
}

const givenResult2 = countCharacters("C");
const result2 = 1;

const testPassed2 = result2 === givenResult2;

if (testPassed) {
  console.log(testPassed2);
}
