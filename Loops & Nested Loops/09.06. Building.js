function building(input) {
  let floor = Number(input.shift());
  let room = Number(input.shift());

  for (let floorCounter = floor; floorCounter > 0; floorCounter--) {
    let result = "";
    for (let roomCounter = 0; roomCounter < room; roomCounter++) {
      if (floor === floorCounter) {
        result += `L${floorCounter}${roomCounter} `;
      } else if (floorCounter % 2 === 0) {
        result += `O${floorCounter}${roomCounter} `;
      } else {
        result += `A${floorCounter}${roomCounter} `;
      }
    }
    console.log(result);
  }
}
building(["6", "4"]);
building(["9", "5"]);
building(["4", "4"]);
