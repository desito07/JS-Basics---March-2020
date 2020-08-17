function equalPairs (args) {
    let number = Number (args[0]);
    let sumOne = Number(args[1]) + Number(args[2]);
    let sumTwo = sumOne;
 
    for (i = 3; i <= (2 * number); i += 2) {
        if ((Number(args[i]) + Number(args[i+1])) != sumOne) {
            let newSum = Number(args[i]) + Number(args[i+1]);
            if (Math.abs (newSum - sumTwo) > Math.abs(sumTwo - sumOne)) {
                sumOne = Number(args[i-1]) + Number(args[i-2]);
                sumTwo = newSum;
            }
        }
    }
    if (sumOne == sumTwo) {
        console.log (`Yes, value=${sumTwo}`);
    } else {
        console.log ('No, maxdiff=' + Math.abs (sumOne - sumTwo));
    }
}
equalPairs([ '2', '1', '2', '2', '2' ]);
equalPairs([ '1', '5', '5' ]);
