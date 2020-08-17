function sleepyTomCat(input) {
  let daysOff = Number(input.shift());

  let yearTotal = 30000;
  let daysTotal = 365;
  let daysWork = daysTotal - daysOff;
  let minsTotal = daysOff * 127 + daysWork * 63;
  let diff = Math.trunc(yearTotal - minsTotal);
  let h = Math.trunc(diff / 60);
  let m = diff % 60;

  if (yearTotal > minsTotal) {
    console.log("Tom sleeps well");
    console.log(
      `${Math.abs(h)} hours and ${Math.abs(m)} minutes less for play`
    );
  } else if (yearTotal < minsTotal) {
    console.log("Tom will run away");
    console.log(
      `${Math.abs(h)} hours and ${Math.abs(m)} minutes more for play`
    );
  }
}
sleepyTomCat(["20"]);
sleepyTomCat(["113"]);
