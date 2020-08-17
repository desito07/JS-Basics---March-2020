function schoolCamp(input) {
  let season = input.shift();
  let group = input.shift();
  let countStudents = Number(input.shift());
  let countNights = Number(input.shift());

  let price = 0;
  let sportActivity = "";

  switch (season) {
    case "Winter":
      if (group === "girls") {
        price = countNights * 9.6 * countStudents;
        sportActivity = "Gymnastics";
      } else if (group === "boys") {
        price = countNights * 9.6 * countStudents;
        sportActivity = "Judo";
      } else {
        price = countNights * 10 * countStudents;
        sportActivity = "Ski";
      }
      break;
    case "Spring":
      if (group === "girls") {
        price = countNights * 7.2 * countStudents;
        sportActivity = "Athletics";
      } else if (group === "boys") {
        price = countNights * 7.2 * countStudents;
        sportActivity = "Tennis";
      } else {
        price = countNights * 9.5 * countStudents;
        sportActivity = "Cycling";
      }
      break;
    case "Summer":
      if (group === "girls") {
        price = countNights * 15 * countStudents;
        sportActivity = "Volleyball";
      } else if (group === "boys") {
        price = countNights * 15 * countStudents;
        sportActivity = "Football";
      } else {
        price = countNights * 20 * countStudents;
        sportActivity = "Swimming";
      }
      break;
  }
  let discount = 0;

  if (countStudents >= 50) {
    discount = price * 0.5;
  } else if (countStudents >= 20 && countStudents < 50) {
    discount = price * 0.15;
  } else if (countStudents >= 10 && countStudents < 20) {
    discount = price * 0.05;
  }
  priceTotal = price - discount;
  console.log(`${sportActivity} ${priceTotal.toFixed(2)} lv.`);
}
schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
schoolCamp(["Summer", "boys", "60", "7"]);
schoolCamp(["Spring", "mixed", "17", "14"]);
