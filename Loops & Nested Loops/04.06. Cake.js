function cake(input) {
  let w = Number(input.shift());
  let l = Number(input.shift());

  let cakeArea = w * l;
  let command = input.shift();

  while (command !== "STOP") {
    let pieces = Number(command);
    cakeArea -= pieces;
    if (cakeArea < 0) {
      break;
    }
    command = input.shift();
  }
  if (cakeArea >= 0) {
    console.log(`${cakeArea} pieces are left.`);
  } else {
    console.log(
      `No more cake left! You need ${Math.abs(cakeArea)} pieces more.`
    );
  }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);
