function Point(input) {
  let x1 = +input.shift();
  let y1 = +input.shift();
  let x2 = +input.shift();
  let y2 = +input.shift();
  let x = +input.shift();
  let y = +input.shift();

  if (x1 < x2 && y1 < y2) {
    if (
      ((x == x1 || x == x2) && y >= y1 && y <= y2) ||
      ((y == y1 || y == y2) && x >= x1 && x <= x2)
    ) {
      console.log("Border");
    } else {
      console.log("Inside / Outside");
    }
  }
}
Point(["2", "-3", "12", "3", "8", "-1"]);
