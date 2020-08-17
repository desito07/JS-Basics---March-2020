function streamOfLetters(input) {
  let word = "";

  let isCappear = false;
  let isOappear = false;
  let isNappear = false;

  let symbol;
  while ((symbol = input.shift()) !== "End") {
    if (
      !((symbol >= "A" && symbol <= "Z") || (symbol >= "a" && symbol <= "z"))
    ) {
      continue;
    }

    switch (symbol) {
      case "c":
        if (isCappear == true) {
          word += symbol;
        }
        isCappear = true;
        break;
      case "o":
        if (isOappear == true) {
          word += symbol;
        }
        isOappear = true;
        break;
      case "n":
        if (isNappear == true) {
          word += symbol;
        }
        isNappear = true;
        break;
      default:
        word += symbol;
        break;
    }

    if (isCappear == true && isOappear == true && isNappear == true) {
      console.log(`${word} `);
      isCappear = false;
      isOappear = false;
      isNappear = false;
      word = "";
    }
  }
}
streamOfLetters([
  "H",
  "n",
  "e",
  "l",
  "l",
  "o",
  "o",
  "c",
  "t",
  "c",
  "h",
  "o",
  "e",
  "r",
  "e",
  "n",
  "e",
  "End",
]);
streamOfLetters([
  "%",
  "!",
  "c",
  "^",
  "B",
  "`",
  "o",
  "%",
  "o",
  "o",
  "M",
  ")",
  "{",
  "n",
  "\\",
  "A",
  "D",
  "End",
]);
streamOfLetters([
  "o",
  "S",
  "%",
  "o",
  "l",
  "^",
  "v",
  "e",
  "c",
  "n",
  "&",
  "m",
  "e",
  "c",
  "o",
  "n",
  "End",
]);
