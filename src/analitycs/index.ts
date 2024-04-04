export const countParagraphs = (text: string): number => {
  const paragraphs = text.split("\n\n");

  if (!text) {
    return 0;
  } else {
    return paragraphs.length;
  }
};
