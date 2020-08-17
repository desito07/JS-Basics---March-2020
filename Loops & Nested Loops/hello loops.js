function solve() {
  for (let i = 1; i <= 1000; i++) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }
}
solve();

function solve(n) {
  n = Number(n);
  sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  console.log(sum);
}
solve("4");

function solve(start, end, divider) {
  start = Number(start);
  end = Number(end);
  divider = Number(divider);

  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % divider === 0) {
      sum += i;
    }
  }
  console.log(sum);
}
solve("10", "30", "7");

function solve(n) {
  n = Number(n);

  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;

  for (let i = 1; i <= n; i++) {
    if ((i < 10) & (i % 2 !== 0)) {
      a++;
    }
    if (i % 2 === 0) {
      b++;
    }
    if (i % 10 === 7 && i % 2 !== 0) {
      c++;
    }
    if (100 % i === 0) {
      d++;
    }
  }
  let pA = (a / n) * 100;
  let pB = (b / n) * 100;
  let pC = (c / n) * 100;
  let pD = (d / n) * 100;

  console.log(`${pA.toFixed(2)}%`);
  console.log(`${pB.toFixed(2)}%`);
  console.log(`${pC.toFixed(2)}%`);
  console.log(`${pD.toFixed(2)}%`);
}
solve("49");

function solve(age, wmp, toyP) {
  age = Number(age);
  wmp = Number(wmp);
  toyP = Number(toyP);

  savedM = 0;
  bdayM = 10;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      savedM += bdayM - 1;
      bdayM += 10;
    } else {
      savedM += toyP;
    }
  }
  if (wmp >= savedM) {
    console.log(`No! ${(wmp - savedM).toFixed(2)}`);
  } else {
    console.log(`Yes! ${(savedM - wmp).toFixed(2)}`);
  }
}
solve("10", "170.00", "6");
solve("21", "1570.98", "3");
