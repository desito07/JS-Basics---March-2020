function Seconds(input) {
  let time1 = Number(input.shift());
  let time2 = Number(input.shift());
  let time3 = Number(input.shift());

  let sumSec = time1 + time2 + time3;
  let min = Math.floor(sumSec / 60);
  let sec = sumSec % 60;

  if (sec < 10) {
    console.log(`${min}:0${sec}`);
  } else {
    console.log(`${min}:${sec}`);
  }
}
Seconds(["35", "45", "44"]);
