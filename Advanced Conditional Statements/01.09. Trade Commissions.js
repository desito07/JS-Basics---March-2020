function Trade(input) {
  let city = input.shift();
  let sales = Number(input.shift());
  let commission = 0;

  if (city == "Sofia") {
    if (sales >= 0 && sales <= 500) {
      commission = 0.05;
    } else if (sales > 500 && sales <= 1000) {
      commission = 0.07;
    } else if ((sales > 1000) & (sales <= 10000)) {
      commission = 0.08;
    } else if (sales > 10000) {
      commission = 0.12;
    }
  } else if (city == "Varna") {
    if (sales >= 0 && sales <= 500) {
      commission = 0.045;
    } else if (sales > 500 && sales <= 1000) {
      commission = 0.075;
    } else if ((sales > 1000) & (sales <= 10000)) {
      commission = 0.1;
    } else if (sales > 10000) {
      commission = 0.13;
    }
  } else if (city == "Plovdiv") {
    if (sales >= 0 && sales <= 500) {
      commission = 0.055;
    } else if (sales > 500 && sales <= 1000) {
      commission = 0.08;
    } else if (sales > 1000 && sales <= 10000) {
      commission = 0.12;
    } else if (sales > 10000) {
      commission = 0.145;
    }
  }
  if (commission > 0) {
    console.log((commission * sales).toFixed(2));
  } else {
    console.log("error");
  }
}
Trade(["Plovdiv", "1000"]);

