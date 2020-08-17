function Swimming(input) {
  let record = Number(input.shift());
  let distance = Number(input.shift());
  let time1 = Number(input.shift());

  let time2 = distance * time1;
  let time3 = Math.floor(distance / 15) * 12.5;
  let totaltime = time2 + time3;

  if (record <= totaltime) {
    let diff = record - totaltime;
    console.log(
      `No, he failed! He was ${Math.abs(diff).toFixed(2)} seconds slower.`
    );
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${totaltime.toFixed(
        2
      )} seconds.`
    );
  }
}
Swimming(["55555.67", "3017", "5.03"]);

