function Converter(input) {
  let num = Number(input.shift());
  let inputme = input.shift();
  let output = input.shift();
  if (inputme == "mm") {
    num = num / 1000;
  } else if (inputme == "cm") {
    num = num / 100;
  }
  if (output == "mm") {
    num *= 1000;
  } else if (output == "cm") {
    num *= 100;
  }
  console.log(num.toFixed(3));
}
Converter(["45", "cm", "mm"]);
