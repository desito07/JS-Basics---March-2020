function People(input) {
  let age = +input.shift();
  let gender = input.shift();

  if (gender == "m" && age >= 16) {
    console.log("Mr.");
  } else if (gender == "m" && age < 16) {
    console.log("Master");
  }
  if (gender == "f" && age >= 16) {
    console.log("Ms.");
  } else if (gender == "f" && age < 16) {
    console.log("Miss");
  }
}
People(["13.5", "m"]);
