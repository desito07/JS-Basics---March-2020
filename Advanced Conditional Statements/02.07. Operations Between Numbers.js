function Numbers(input) {
  let N1 = Number(input.shift());
  let N2 = Number(input.shift());
  let operator = input.shift();

  let result = 0;
  let oddOrEven = "";

  if (operator == "+") {
    result = N1 + N2;
    if (result % 2 == 0) {
      oddOrEven = "even";
    } else {
      oddOrEven = "odd";
    }
    console.log(`${N1} ${operator} ${N2} = ${result} - ${oddOrEven}`);
  } else if (operator == "-") {
    result = N1 - N2;
    if (result % 2 == 0) {
      oddOrEven = "even";
    } else {
      oddOrEven = "odd";
    }
    console.log(`${N1} ${operator} ${N2} = ${result} - ${oddOrEven}`);
  } else if (operator == "*") {
    result = N1 * N2;
    if (result % 2 == 0) {
      oddOrEven = "even";
    } else {
      oddOrEven = "odd";
    }
    console.log(`${N1} ${operator} ${N2} = ${result} - ${oddOrEven}`);
  } else if (operator == "/") {
    result = N1 / N2;
    if (N2 == 0) {
      console.log(`Cannot divide ${N1} by zero`);
    } else {
      console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
    }
  } else if (operator == "%") {
    result = N1 % N2;
    if (N2 == 0) {
      console.log(`Cannot divide ${N1} by zero`);
    } else {
      console.log(`${N1} % ${N2} = ${result}`);
    }
  }
}
Numbers(["10", "12", "+"]);
Numbers(["10", "1", "-"]);
Numbers(["7", "3", "*"]);
Numbers(["123", "12", "/"]);
Numbers(["10", "3", "%"]);
Numbers(["112", "0", "/"]);
Numbers(["10", "0", "%"]);
