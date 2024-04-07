export const countParagraphs = (text: string): number => {
  const isEmptyText = (text: string): boolean => {
    return text === "";
  };
  if (isEmptyText(text)) {
    return 0;
  }
  const paragraphs = text.split("\n");

  return paragraphs.length;
};

export const countWords = (text: string): number => {
  const isEmptyText = (text: string): boolean => {
    return text === "";
  };
  const words = text.trim().split(/[\s\n]+/);
  const totalWords = words.filter((word) => !isEmptyText(word));
  return totalWords.length;
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
