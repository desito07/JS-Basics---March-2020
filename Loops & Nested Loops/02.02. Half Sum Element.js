function Element(input) {
  let n = Number(input.shift()); // общият брой числа, случая е 7
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    // цикъла се върти докато i = общият брой числа
    let currentNumber = Number(input.shift()); // всяко следващо от числата изброени долу след 7-цата
    sum += currentNumber; // сумата се е надграждала след всяко число в цикъла и накрая е след всичките числа, тотал
    // след като сме добавили всяко текущо число към общата сума, правим проверка
    if (currentNumber > max) {
      max = currentNumber; // презаписваме стойността на max
    }
  }
  let result = sum - max;
  if (result === max) {
    console.log("Yes");
    console.log(`Sum = ${result}`);
  } else {
    console.log("No");
    console.log(`Diff = ${Math.abs(result - max)}`);
  }
}
Element(["7", "3", "4", "1", "1", "2", "12", "1"]);
Element(["3", "1", "1", "10"]);
Element(["3", "5", "5", "1"]);
Element(["3", "1", "1", "1"]);
