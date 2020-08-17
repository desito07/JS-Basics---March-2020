function pipesInPool(input) {
  let volume = Number(input.shift());
  let p1 = Number(input.shift());
  let p2 = Number(input.shift());
  let hours = Number(input.shift());

  let pipe1 = p1 * hours;
  let pipe2 = p2 * hours;

  let pipePool = pipe1 + pipe2;

  if (pipePool <= volume) {
    let poolPercent = (pipePool / volume) * 100;
    let p1Percent = (pipe1 / pipePool) * 100;
    let p2Percent = (pipe2 / pipePool) * 100;
    console.log(
      `The pool is ${poolPercent.toFixed(2)}% full. Pipe 1: ${p1Percent.toFixed(
        2
      )}%. Pipe 2: ${p2Percent.toFixed(2)}%.`
    );
  } else if (pipePool > volume) {
    let overFlow = pipePool - volume;
    console.log(
      `For ${hours} hours the pool overflows with ${parseFloat(
        overFlow.toFixed(2)
      )} liters.`
    );
  }
}
pipesInPool(["1000", "100", "120", "3"]);
pipesInPool(["100", "100", "100", "2.5"]);
