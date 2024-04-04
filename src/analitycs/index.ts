export const countParagraphs = (text: string): number => {
  const paragraphs = text.trim().split("\n");

  if (!text) {
    return 0;
  }
  return paragraphs.length;
};

export const countWords = (text: string): number => {
  const sentenceCountWords = text.split("");
  return sentenceCountWords.length;
};
