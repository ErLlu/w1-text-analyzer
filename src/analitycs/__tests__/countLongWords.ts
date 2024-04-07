import { countLongWords } from "../index.js";

const emptyText = "";

console.log(`
If text is empty returns 0:`);

const areTotalShortWordsZero = countLongWords(emptyText).length === 0;

const returnsLongWordsCorrectAmount = () => {
  const longWordsTotal = countLongWords(`Palabras`).length;
  const expectedLongWordsTotal = 1;
  const isCorrect = longWordsTotal === expectedLongWordsTotal;
  if (isCorrect) {
    console.log(`returns = ${isCorrect}`);
  }
};
returnsLongWordsCorrectAmount();
