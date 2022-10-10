export function getFirstLetters(str) {
  if (typeof str === "string" && str.length) {
    const firstLetters = str
      .split(" ")
      .map((word) => word[0])
      .join("");

    return firstLetters;
  }
  return "";
}

export function getFirstWord(str) {
  if (typeof str === "string" && str.length) {
    const firstWord = str.split(" ")[0];
    return firstWord;
  }
  return "";
}

export function capitalizeFirstLetter(str) {
  if (typeof str === "string" && str.length) {
    const modifyString = str[0].toUpperCase() + str.slice(1);
    return modifyString;
  }
  return "";
}

export function getTitleCase(str) {
  if (typeof str === "string" && str.length) {
    const titleCase = str
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");

    return titleCase;
  }
  return "";
}

export function countWords(str) {
  if (typeof str === "string" && str.length) {
    const countWords = str.split(" ").filter((word) => word !== "").length;

    return countWords;
  }
  return "";
}

export function uniqueWordsCount(str) {
  if (typeof str === "string" && str.length) {
    const uniqueWordsCount = new Set(str.split(" ")).size;

    return uniqueWordsCount;
  }
  return "";
}

export function getLastWord(str) {
  if (typeof str === "string" && str.length) {
    const lastWord = str.split(" ").pop();

    return lastWord;
  }
  return "";
}

export function removeAlphaNumeric(str) {
  if (typeof str === "string" && str.length) {
    const replaced = str.replace(/[^a-z0-9]/gi, "");

    return replaced;
  }
  return "";
}

export function uniqueString() {
  return Math.random().toString(36).slice(2);
}

export function lowerCase(str) {
  if (typeof str === "string" && str.length) {
    return str.toLowerCase();
  }
  return "";
}

export function upperCase(str) {
  if (typeof str === "string" && str.length) {
    return str.toUpperCase();
  }
  return "";
}
