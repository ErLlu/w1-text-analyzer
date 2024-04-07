import { countParagraphs as countWords } from "../index.js";

const givenResult = countWords("Palabra");
const expectedResult = 1;

const testPassed = expectedResult === givenResult;

console.log(testPassed);
