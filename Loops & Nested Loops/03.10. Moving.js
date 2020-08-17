function moving(input) {
  let width = Number(input.shift());
  let length = Number(input.shift());
  let height = Number(input.shift());

  let totalFreeSpace = width * length * height;

  let command = input.shift();

  while (command !== "Done") {
    let box = Number(command);
    totalFreeSpace -= box;
    if (totalFreeSpace < 0) {
      break;
    }
    command = input.shift();
  }
  if (totalFreeSpace < 0) {
    console.log(
      `No more free space! You need ${Math.abs(
        totalFreeSpace
      )} Cubic meters more.`
    );
  } else {
    console.log(`${totalFreeSpace} Cubic meters left.`);
  }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122", ""]);
moving(["10", "1", "2", "4", "6", "Done"]);

