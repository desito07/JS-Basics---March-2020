function Min(input) {
  let hour = Number(input.shift());
  let min = Number(input.shift());

  let timemin = hour * 60 + min;
  let min15 = timemin + 15;
  let finalHour = Math.floor(min15 / 60);
  let finalMin = min15 % 60;

  if (finalHour >= 24) {
    finalHour -= 24;
  }

  if (finalMin < 10) {
    console.log(`${finalHour}:0${finalMin}`);
  } else {
    console.log(`${finalHour}:${finalMin}`);
  }
}
Min(["1", "46"]);
