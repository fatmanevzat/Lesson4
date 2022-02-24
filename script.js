sayHello();

console.log("dişaridan merhaba");

function sayHello() {
  console.log("içeriden merhaba");
}
console.log("aşağidan merhaba");

let a = 5;
let b = 3;
console.log(a + b);
function calc() {
  console.log(a + b);
}
calc();
calc();

let name1 = "Fatma";
function nameUpper(isim) {
  console.log(isim.toUpperCase());
}
nameUpper("beyza");
nameUpper(name1);

function calculate(param1, param2) {
  console.log(param1 + param2);
}
calculate(5, 2);

function sayName(parametre) {
  let cümle = `${parametre} benim ismim`;
  return cümle;
}

console.log(sayName("Elif"));
console.log(sayName("Eyüp"));

function basit(params) {
  return 5, "merhaba";
}
console.log(basit());

function nameFunc(params) {
  return params;
}
console.log(nameFunc(8));

let yenideğer = nameFunc(8) + 5;

const yeniFunc = function (val) {
  return val + 4;
};
console.log(yeniFunc(6))

  // IIEF
 // function () {
  //  console.log("Welcome to Immediately invoked function expression(IIFE)");
 // }
//)();

const sayMello = function (name) {
    //console.log("sayMello çalişti")
    const greeting = "Hello" + name;
    //console.log(greeting)
  return greeting;

};
console.log("merhaba");
console.log("hello JOHN WAYNE");
console.log(sayMello("JOHN WAYNE"));

sayMello("ELİF");


function merhaba(params) {
    document.write(`<p>Merhaba ${params}</p>`)
}
merhaba("Ayşe")

let myAge = prompt("Yaşinizi giriniz");
console.log(myAge)

function writeMyAge(params) {
    document.write(`<p>Senin yaşin ${params}</p>`)
}
writeMyAge(myAge);


let firstName = prompt("isminizi giriniz");
let firstAge = prompt("yaşinizi giriniz");

function example(value1,value2) {
    let firstYears = 2*10.5;
    let lastYears = (value2 -2) * 4;
    let totalYears = firstYears + lastYears;

    document.write(`<h4> ${value1}, senin köpek yaşin ${totalYears}  </h4>`)
    return `${value1}, senin köpek yaşin ${totalYears}`
}
//example("Fatma",44);
example(firstName, firstAge);

let result = example ("Fatma",44);
console.log(result)
