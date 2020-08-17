function Sum(input) {
  let com = input.shift();
  let sum = 0;
  while (com !== "Stop") {
    let num = Number(com);
    sum += num;
    com = input.shift();
  }
  console.log(sum);
}
Sum(["10", "20", "30", "45", "Stop"]);
Sum(["1", "2", "3", "4", "5", "6", "Stop"]);
