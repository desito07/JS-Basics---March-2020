function Shapes(input) {
  let shape = input.shift();
  if (shape == "square") {
    let a = Number(input.shift());
    console.log((a * a).toFixed(3));
  } else if (shape === "rectangle") {
    let length = Number(input.shift());
    let width = Number(input.shift());
    console.log((length * width).toFixed(3));
  } else if (shape === "circle") {
    let radius = Number(input.shift());
    console.log((radius * radius * Math.PI).toFixed(3));
  } else if (shape === "triangle") {
    let length = Number(input.shift());
    let height = Number(input.shift());
    console.log(((length * height) / 2).toFixed(3));
  }
}
Shapes(["circle", "6"]);
