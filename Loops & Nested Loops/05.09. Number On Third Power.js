function numberOnThirdPower(n) {
  n = Number(n);

  if (n % 2 != 0) {
    for (i = 1; i <= n; i += 2) {
      let cube = i ** 3;
      console.log(`Current number: ${i}. Cube: ${cube}`);
    }
  } else if (n % 2 == 0) {
    for (i = 2; i <= n; i += 2) {
      let cube = i ** 3;
      console.log(`Current number: ${i}. Cube: ${cube}`);
    }
  }
}
numberOnThirdPower(["5"]);
numberOnThirdPower(["6"]);
