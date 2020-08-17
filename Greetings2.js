//================================================== Прости операции и пресмятания - упражнение упражнения

// упр. 1

function Currency(input) {
    let usd = Number(input.shift());
    let result = usd * 1.79549;
    console.log(result.toFixed(2));
}
Currency(["20"]);

// упр. 2

function radiansToDegrees(input) {
    let radians = Number(input.shift());
    let degrees = radians * 180 / Math.PI;
    console.log(degrees.toFixed(0));
}
radiansToDegrees(["3.1416"]);

// упр. 3

function rectangle(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    let length = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);
    let faceArea = length * width;
    let perimeter = (length + width) * 2;
    console.log(faceArea.toFixed(2));
    console.log(perimeter.toFixed(2));
}
rectangle(["60", "20", "10", "50"]);

// упр. 4

function tables(input) {
    let count = Number(input.shift());
    let length = Number(input.shift());
    let width = Number(input.shift());

    let areatablecloth = count * (length + 2 * 0.30) * (width + 2 * 0.30);
    let areatablecloth1 = count * (length / 2) * (length / 2);
    let price = areatablecloth * 7 + areatablecloth1 * 9;
    let price1 = price * 1.85;

    console.log(`${price.toFixed(2)} USD`);
    console.log(`${price1.toFixed(2)} BGN`);
}
tables(["5", "1.00", "0.50"]);

// упр. 5

function hall(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let side = Number(input.shift());

    let area = (length * 100) * (width * 100);
    let wardrode = (side * 100) * (side * 100);
    let bench = area / 10;
    let space = area - wardrode - bench;
    let dancers = Math.floor(space / (40 + 7000));

    console.log(dancers.toFixed(0));
}
hall(["50", "25", "2"]);

//  упр. 6

function charity(input) {
    let days = Number(input.shift());
    let cooks = Number(input.shift());
    let cakes = Number(input.shift());
    let gofretes = Number(input.shift());
    let pancakes = Number(input.shift());

    let sumcakes = cakes * 45;
    let sumgofretes = gofretes * 5.80;
    let sumpancakes = pancakes * 3.20;
    let sumperday = (sumcakes + sumgofretes + sumpancakes) * cooks;
    let totalsum = sumperday * days;
    let expesnes = totalsum - (totalsum * 1 / 8);

    console.log(expesnes.toFixed(2));
}
charity(["20", "8", "14", "30", "16"]);

// упр. 7

function market(input) {
    let whiskeyprice = Number(input.shift());
    let beerlitre = Number(input.shift());
    let winelitre = Number(input.shift());
    let rakialitre = Number(input.shift());
    let whiskeylitre = Number(input.shift());

    let rakiaprice = 0.5 * whiskeyprice;
    let wineprice = rakiaprice - (0.4 * rakiaprice);
    let beerprice = rakiaprice - (0.8 * rakiaprice);

    let sumrakia = rakiaprice * rakialitre;
    let sumwine = winelitre * wineprice;
    let sumbeer = beerlitre * beerprice;
    let sumwhiskey = whiskeylitre * whiskeyprice;

    let totalsum = sumrakia + sumwine + sumbeer + sumwhiskey;

    console.log(totalsum.toFixed(2));
}
market(["50", "10", "3.5", "6.5", "1"]);

//==============================================================