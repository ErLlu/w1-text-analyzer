export const countParagraphs = (text: string): number => {
  const isEmptyText = " ";
  if (isEmptyText(text)) {
    return 0;
  }
  const paragraphs = text.split("\n");

  return paragraphs.length;
};

export const countWords = (text: string): number => {
  const words = text.trim().split(" ");
  return words.length;
};

export const countCharacters = (text: string): number => {
  if (text === "" || text === undefined || text === null) {
    return 0;
  }
  const characters = text.concat();
  return characters.length;
};
