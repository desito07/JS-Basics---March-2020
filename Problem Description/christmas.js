function solve(input) {
    let days = Number(input.shift());
    let length = input.length;
    let money = 0;
    let wonGames = 0;
    let lostGames = 0;
    let totalMoney = 0;
    let totalLostGames = 0;
    let totalWonGames = 0;

    for(let k = 1; k <= days; k++) {
        wonGames = 0;
        lostGames = 0;
        money = 0;
        for(let i = 1; i < length; i++) {
            let sport = input.shift();
            let result = input.shift();

            if(sport == 'Finish') {
                input.unshift(result);
                break;
            }

            if(result == 'win') {
                money += 20;
                wonGames++;
            } else {
                lostGames++;
            }
        }

        totalWonGames += wonGames;
        totalLostGames += lostGames
        if(wonGames > lostGames) {
            totalMoney += money * 1.1;
            
        } else {
            totalMoney += money;
        }
    }

    if(totalWonGames > totalLostGames) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

// solve(2, 'volleyball', 'win', 'football', 'lose', 'basketball', 'win', 'Finish', 'golf', 'win', 'tennis', 'win', 'badminton', 'win', 'Finish');
solve(3, "darts", "lose", "handball", "lose", 'judo', 'win', "Finish", "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball", "win", "Finish" );