//============================================= - Sht+Atl+F - за подравняване на кода

/*function greetingByName() {
    console.log("Hello, World!");
}
greetingByName();

//============================================= гладките скоби след функцията показват входните данни - променлива
// извикваме тази функция с параметър Пешо, който се записва в тази променлива

function greetingByName(name) {
    console.log(name);
}
let input = "Pesho";
greetingByName(input);

function solve(name, age, grade) {
    console.log(name);
    console.log(age);
    console.log(grade);
}
let name = "Stamat";
let age = 16;
let grade = 6.00;

solve(name, age);

//==============================================

function solve(name, age, grade) {
    console.log(name);
    console.log(age);
    console.log(grade);
}
solve("Pesho", 23, 6.00);

//==============================================

function solve(name, age){
    name = "Pesho";
    console.log(name);
    console.log(age);
    
}
solve("Gosho", 20);

//=============================================== конкатенация - долепяне на стринг със стринг, със стринг

function greetingByName(name, age, grade){
    console.log("Hello, " + name +"! Your age is: " + age +". Your grade is: " + grade);
}
greetingByName("Gosho", 20, 6.00);

//=============================================== ${variable} - шаблонен стринг - ползва се стойността на променливата, а не стринга Гошо

function greetingByName(name, age, grade){
    console.log(`Hello, ${name}! Your age is: ${age}. Your grade is: ${grade}`);
}
greetingByName("Pesho", 20, 6);

//================================================

function greetingByName(input){
    let name = input.shift();
    let age = input.shift();
    console.log(`Hello ${name}!`);
    console.log(`Your age is ${age}!`);
}
greetingByName(["Pesho", 30]);

//================================================ - как да преобразуваме от един в друг тип данни 
// console.log - празно в Judge, ще върне това, което подава 

function addOne(input) {
    let number = Number(input.shift());
    console.log(number + 1);
}
addOne(["30"]);

//================================================

function readName(input) {
    let name = input.shift();      // подаване на стринга "SoftUni!", прочитаме го с shift и го принтираме обратно в конзолата 
    let name = input.shift();
    console.log(name);
}
readName(["SoftUni!"]);

//================================================ 

function readText(input) {
    let str = input.shift();
    console.log(str);
}
readText(["Mimi"]);*/

//================================================
// за преобразуване на стрингове в числа Number(input.shift());

function circleArea(input) {
    let radius = Number(input.shift());
    let area = radius * radius * Math.PI;
    console.log(area.toFixed(2));    //toFixеd връща в стринг
}
circleArea(["20"]);

//================================================= () - подават се параметри
// shift променя input горе във функцията

let result = 10 / 3;
console.log(result);

let remainder1 = 10 % 3;
console.log(remainder1);

let remainder = 12 % 5;
console.log(remainder);

let remainder2 = 9 % 10;
console.log(remainder2);

let error = 3 % 0;
console.log(error);

console.log(typeof("Pesho"));
console.log(typeof(Nan));

let Infinity = 3 / 0;
console.log(Infinity);

let sqrt = Math.sqrt(-1);
console.log(sqrt);

let f = parseInt(5 / 4.0);
console.log(f);

console.log(Number("5.500,50"));
console.log(Number("5,500.50"));

//===============================================

function CreateProjects(input){
    let name = input.shift();
    let projectCount = Number(input.shift());
    console.log(`The architect ${name} will need ${projectCount * 3} hours to complete ${projectCount} projects.`); 
}
CreateProjects(["George", "4"]);

//================================================

function AquariumVolume(input){
    let length = Number(input.shift());
    let width = Number(input.shift());
    let heigth = Number(input.shift());
    let percentage = Number(input.shift());

    let volume = length * width * heigth;
    let liters = volume * 0.001;
    let result = liters - liters * percentage / 100;

    console.log(result.toFixed(3));
}

AquariumVolume(["85", "75", "47", "17"]);

//=================================================

function AquariumVolume(input){
    let length = Number(input.shift());
    let width = Number(input.shift());
    let heigth = Number(input.shift());
    let percentage = Number(input.shift());

    let volume = length * width * heigth;
    let liters = volume * 0.001;
    let result = liters - liters * percentage / 100;

    console.log(result.toFixed(3));
}

AquariumVolume(["105", "77", "89", "18.5"]);
