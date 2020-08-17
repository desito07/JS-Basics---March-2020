function Exam(input) {
  let startHExam = Number(input.shift());
  let startMExam = Number(input.shift());
  let arriveH = Number(input.shift());
  let arriveM = Number(input.shift());

  let examTimeInMin = startHExam * 60 + startMExam;
  let studentTimeInMin = arriveH * 60 + arriveM;

  let diff = examTimeInMin - studentTimeInMin;

  let h = Math.floor(Math.abs(diff) / 60);
  let m = Math.abs(diff % 60);

  if (m < 10) {
    m = "0" + m;
  }
  if (diff < 0) {
    console.log("Late");
    if (Math.abs(diff) < 60) {
      console.log(`${parseInt(m)} minutes after the start`);
    } else {
      console.log(`${h}:${m} hours after the start`);
    }
  } else if (diff === 0 || diff <= 30) {
    console.log("On time");
    if (diff % 60 !== 0) {
      console.log(`${diff % 60} minutes before the start`);
    }
  } else {
    console.log("Early");
    if (Math.abs(diff) < 60) {
      console.log(`${m} minutes before the start`);
    } else {
      console.log(`${h}:${m} hours before the start`);
    }
  }
}
Exam(["9", "00", "9", "02"]);
Exam(["9", "00", "8", "58"]);
