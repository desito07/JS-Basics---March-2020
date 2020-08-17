function library(input) {
  let book = input.shift();
  let libraryCapacity = Number(input.shift());

  let counter = 0;
  let isFound = false;

  while (counter < libraryCapacity) {
    let currentBook = input.shift();
    if (currentBook === book) {
      console.log(`You checked ${counter} books and found it.`);
      isFound = true;
      break;
    }
    counter++;
  }
  if (isFound === false) {
    console.log("The book you search is not here!");
    console.log(`You checked ${counter} books.`);
  }
}
library(["Troy", "8", "Stronger", "Life Style", "Troy"]);
library([
  "The Spot",
  "4",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "",
]);
library([
  "Bourne",
  "32",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
