//========================================= Вложени цикли - лекция лаб упражнения

// преговор
// function Cycle(input) {
//   for (let hour = 0; hour < 24; hour++) {
//     for (let min = 0; min < 60; min++) {
//       for (let sec = 0; sec < 60; sec++) {
//         console.log(`${hour} : ${min} : ${sec}`);
//       }
//     }
//   }
// }
// Cycle([]);

//============================================

function Table(input) {
  for (let num1 = 1; num1 <= 10; num1++) {
    for (let num2 = 1; num2 <= 10; num2++) {
      let multi = num1 * num2;
      console.log(`${num1} * ${num2} = ${multi}`);
    }
  }
}
Table(["10"]);

//=============================================
