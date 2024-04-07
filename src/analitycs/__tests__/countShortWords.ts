import { countShortWords } from "../index.js";

const emptyText = "";

console.log(`
If text is empty returns 0:`);

const areTotalShortWordsZero = countShortWords(emptyText).length === 0;

const returnsShortWordsCorrectAmount = () => {
  const shortWordsTotal = countShortWords(`Si, No`).length;
  const expectedShortWordsTotal = 2;
  const isCorrect = shortWordsTotal === expectedShortWordsTotal;
  if (isCorrect) {
    console.log(`returns = ${isCorrect}`);
  }
};
returnsShortWordsCorrectAmount();
