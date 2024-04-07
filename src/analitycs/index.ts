export const countParagraphs = (text: string): number => {
  const isEmptyText = (text: string): boolean => {
    return text.trim() === "";
  };
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
  const isEmptyText = (text: string): boolean => {
    return text === "";
  };
  if (isEmptyText(text)) {
    return 0;
  }
  const characters = text.concat();
  return characters.length;
};
