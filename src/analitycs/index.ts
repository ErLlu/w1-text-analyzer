export const countParagraphs = (text: string): number => {
  const emptyText = (text: string): boolean => {
    return text === "";
  };
  if (emptyText(text)) {
    return 0;
  }
  const paragraphs = text.split("\n\n");

  return paragraphs.length;
};

export const countWords = (text: string): number => {
  const emptyText = (text: string): boolean => {
    return text === "";
  };
  const words = text.trim().split(/[\s\n]+/);
  const totalWords = words.filter((word) => !emptyText(word));
  return totalWords.length;
};

export const countCharacters = (text: string): number => {
  const emptyText = (text: string): boolean => {
    return text === "";
  };
  if (emptyText(text)) {
    return 0;
  }
  const characters = text.concat();
  return characters.length;
};
export const countShortWords = (text: string): string[] => {
  const maximumCharacters: number = 4;
  const emptyText = (text: string): boolean => {
    return text === "";
  };

  if (emptyText(text)) {
    return [];
  }

  const words: string[] = text.split(/[\s\n]/);
  const shortWords: string[] = words.filter(
    (word) => word.length <= maximumCharacters && word.trim() !== ""
  );

  return shortWords;
};

export const countLongWords = (text: string): string[] => {
  const minimumCharacters: number = 8;
  const emptyText = (text: string): boolean => {
    return text === "";
  };

  if (emptyText(text)) {
    return [];
  }

  const words: string[] = text.split(/[\s\n]+/);
  const longWords: string[] = words.filter(
    (word) => word.length >= minimumCharacters
  );

  return longWords;
};
const minimumCharacters: number = 8;
