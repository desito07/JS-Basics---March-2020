function BigNumbers(input) {
  let i = Number(input.shift());
  if (i < 100) {
    console.log("Less than 100");
  } else if (i <= 200) {
    console.log("Between 100 and 200");
  } else {
    console.log("Greater than 200");
  }
}
BigNumbers(["120"]);
