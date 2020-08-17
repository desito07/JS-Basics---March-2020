function firm(input) {
  let hours = +input.shift();
  let days = +input.shift();
  let count = +input.shift();

  let training = days * 0.1;
  let daysLeft = days - training;
  let hoursNeeded = daysLeft * 8;
  let overtime = count * (2 * days);
  let hoursTotal = hoursNeeded + overtime;

  if (hoursTotal >= hours) {
    console.log(`Yes!${Math.floor(hoursTotal - hours)} hours left.`);
  } else if (hours - hoursTotal) {
    console.log(
      `Not enough time!${Math.ceil(hours - hoursTotal)} hours needed.`
    );
  }
}
firm(["90", "7", "3"]);
firm(["99", "3", "1"]);
