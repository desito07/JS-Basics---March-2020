function walking(input) {
  let action = input.shift();
  let stepsSum = 0;

  while (action !== `Going home`) {
    let daySteps = Number(action);
    stepsSum += daySteps;
    if (stepsSum >= 10000) {
      break;
    }
    action = input.shift();
  }

  if (action === `Going home`) {
    stepsSum += Number(input.shift());
  }
  if (stepsSum >= 10000) {
    console.log(`Goal reached! Good job!`);
  } else {
    console.log(`${10000 - stepsSum} more steps to reach goal.`);
  }
}
walking(["1000", "1500", "2000", "6500", ""]);
