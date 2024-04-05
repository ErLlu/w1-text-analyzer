import { countParagraphs } from "../index.js";

const zeroParagraphs = "";

if (countParagraphs(zeroParagraphs) === 0) {
  console.log("Todo ok");
} else {
  console.log("Todo Mal");
}

const oneWordTest = "1";

if (countParagraphs(oneWordTest) === 1) {
  console.log("Todo ok");
} else {
  console.log("Todo Mal");
}

const twoParagraphs = "1 \n 2";
if (countParagraphs(twoParagraphs) === 2) {
  console.log("Todo ok");
} else {
  console.log("Todo Mal");
}
