function Vowels(input) {
  let text = input.shift();
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    let ch = text[i];
    switch (ch) {
      case "a":
        result += 1;
        break;
      case "e":
        result += 2;
        break;
      case "i":
        result += 3;
        break;
      case "o":
        result += 4;
        break;
      case "u":
        result += 5;
        break;
    }
  }
  console.log(result);
}
Vowels(["hello"]);
Vowels(["hi"]);
Vowels(["bamboo"]);
Vowels(["beer"]);
