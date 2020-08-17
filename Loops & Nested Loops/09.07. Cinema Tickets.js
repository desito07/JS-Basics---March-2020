function cinemaTickets(input) {
  let nameMovie = input.shift();
  let sum = 0;
  let countStudentTickets = 0;
  let countStandardTickets = 0;
  let countKidsTickets = 0;

  while (nameMovie !== "Finish") {
    let freeSpace = Number(input.shift());
    let typeTicket = input.shift();
    let sellTicket = 0;

    while (typeTicket !== "End") {
      if (typeTicket === "student") {
        countStudentTickets++;
      } else if (typeTicket === "standard") {
        countStandardTickets++;
      } else if (typeTicket === "kid") {
        countKidsTickets++;
      }
      sellTicket++;
      sum++;
      if (sellTicket >= freeSpace) {
        break;
      }
      typeTicket = input.shift();
    }
    let percentSpace = (sellTicket / freeSpace) * 100;

    console.log(`${nameMovie} - ${percentSpace.toFixed(2)}% full.`);
    nameMovie = input.shift();
  }
  let percentStudent = (countStudentTickets / sum) * 100;
  let percentStandard = (countStandardTickets / sum) * 100;
  let percentKid = (countKidsTickets / sum) * 100;
  console.log(`Total tickets: ${sum}`);
  console.log(`${percentStudent.toFixed(2)}% student tickets.`);
  console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
  console.log(`${percentKid.toFixed(2)}% kids tickets.`);
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
cinemaTickets([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);

