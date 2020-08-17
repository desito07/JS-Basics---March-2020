//========================================================= Проверки -  упражнениe 1 упражнения

// упр. 1

function Race(input) {
    let FirstTime = Number(input.shift());
    let SecondTime = Number(input.shift());
    let ThirdTime = Number(input.shift());

    let TotalTime = FirstTime + SecondTime + ThirdTime;
    let minutes = Math.floor(TotalTime / 60);
    let seconds = TotalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
Race(["14", "12", "10"]);

// => анонимна функция
// >= и <=  ползвай знака отляво на = 

// sum = sum + a;
// sum += a;    -  същото е като горното, но съкратено
// Ctrl + S - подравнява кода 

//упр. 2

function Check(input) {

    let score = Number(input.shift());
    let bonus = 0.0;

    if (score <= 100) {
        bonus = 5;
    } else if (score > 1000) {
        bonus = score * 0.1;
    } else {
        bonus = score * 0.2;
    }
    if (score % 2 == 0) {
        bonus += 1;
    } else if (score % 10 == 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(score + bonus);
}
Check(["175"]);

// упр. 3

function Speed(input) {
    let speed = Number(input.shift());
    if (speed <= 10) {
        console.log("slow");
    } else if (speed <= 50) {
        console.log("average");
    } else if (speed <= 150) {
        console.log("fast");
    } else if (speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}
Speed(["3500"]);

// упр. 4

function Distance(input) {
    let value = Number(input.shift());
    let inMetric = input.shift();
    let outMetric = input.shift();
    if (inMetric == "mm") {
        value /= 1000;
    } else if (inMetric == "cm") {
        value /= 100;
    }
    if (outMetric == "mm") {
        value *= 1000;
    } else if (outMetric == "cm") {
        value *= 100;
    }
    console.log(value.toFixed(3));
}
Distance(["45", "cm", "mm"]);

// упр. 5

function Time(input) {
    let starthour = Number(input.shift());
    let startminutes = Number(input.shift());

    let timeinminutes = starthour * 60 + startminutes;
    //startminutes += starthour * 60
    // startminutes += 15;

    let timeplus15 = timeinminutes + 15;
    let finalhour = Math.floor(timeplus15 / 60);
    let finalminutes = timeplus15 % 60;

    if (finalhour >= 24) {
        finalhour -= 24;
    }
    if (finalminutes < 10) {
        console.log(`${finalhour}:0${finalminutes}`);
    } else {
        console.log(`${finalhour}:${finalminutes}`);
    }
}
Time(["1", "46"]);

// упр. 6

function Movie(input) {
    let budget = Number(input.shift());
    let statist = Number(input.shift());
    let Clothespriceperstatist = Number(input.shift());

    let Clothesprice = Clothespriceperstatist * statist;
    let decor = budget * 0.10;
    let discount = Clothesprice * 0.10;


    if (statist > 150) {
        Clothesprice = Clothesprice - (Clothesprice * 0.10);

    }
    let filmcost = decor + Clothesprice;
    let totalfilmcost = budget - filmcost;
    if (filmcost <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(totalfilmcost.toFixed(2))} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(Math.abs(totalfilmcost.toFixed(2)))} leva more.`);
    }
}
Movie(["15437.62", "186", "57.99"]);

// упр. 7 

function Swimming(input) {
    let recordseconds = Number(input.shift());
    let distancemeters = Number(input.shift());
    let timesecondspermeter = Number(input.shift());

    let totaltime = distancemeters * timesecondspermeter;
    let addseconds = Math.floor(distancemeters / 15) * 12.5;
    let finaltime = totaltime + addseconds;

    if (recordseconds <= finaltime) {
        let difference = finaltime - recordseconds;
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${finaltime.toFixed(2)} seconds.`);
    }
}
Swimming(["55555.67", "3017", "5.03"]);

// упр. 8

function Scholarship(input) {
    let salary = +(input.shift());
    let grade = +(input.shift());
    let minsalary = +(input.shift());

    let socialscholarship = 0.00;
    let gradescholarship = 0.00;

    if (salary < minsalary) {
        if (grade > 4.50) {
            socialscholarship = minsalary * 0.35;
        }
    }
    if (grade >= 5.50) {
        gradescholarship = grade * 25;
    }
    if (socialscholarship > gradescholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialscholarship)} BGN`);
    } else if (gradescholarship > socialscholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(gradescholarship)} BGN`);
    } else {
        console.log("You cannot get a scholarship!");
    }
}
Scholarship(["480.00", "4.60", "450.00"]);

// +  означава същото като Number


