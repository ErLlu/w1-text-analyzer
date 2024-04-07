import { countParagraphs } from "../index.js";

const givenResult = countParagraphs("");
const result = 0;

const testPassed = result === givenResult;

if (testPassed) {
  console.log(`text is empty equal 0: ${testPassed}`);
}

const givenResult2 = countParagraphs("Hola");
const result2 = 1;

const testPassed2 = result2 === givenResult2;

if (testPassed) {
  console.log(testPassed2);
}
