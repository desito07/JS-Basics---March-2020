function hospital(input) {
  let days = Number(input.shift());

  let doctors = 7;
  let treatedP = 0;
  let untreatedP = 0;

  for (let i = 1; i <= days; i++) {
    let currentPatient = Number(input.shift());
    if (i % 3 === 0 && untreatedP > treatedP) {
      doctors++;
    }
    if (currentPatient <= doctors) {
      treatedP += currentPatient;
    } else {
      treatedP += doctors;
      untreatedP += currentPatient - doctors;
    }
  }
  console.log(`Treated patients: ${treatedP}`);
  console.log(`Untreated patients: ${untreatedP}`);
}
hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);
hospital(["3", "7", "7", "7"]);
