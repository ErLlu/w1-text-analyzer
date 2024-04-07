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

export const countShortWords = (text: string, maximum: number = 4): number => {
  const isEmptyText = (text: string): boolean => {
    return text === "";
  };
  if (isEmptyText(text)) {
    return 0;
  }
  const words: string[] = text.split(/[\s\n]+/);
  const totalWords: string[] = words.filter((word) => word.length <= maximum);
  return totalWords.length;
};
