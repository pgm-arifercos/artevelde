const year = 2021;
let isLeapYear = false;
let vier = year%4;
let honderd = year%100;
let vierHonderd = year%400;

if (vier === 0 && honderd !== 0) {
    let isLeapYear = true;
    console.log (year + " is een schrikkeljaar.")
}

else if (vierHonderd !== 0 && honderd === 0) {
    let isLeapYear = true;
    console.log (year + " is een schrikkeljaar")
}

else {
    console.log (year + " is geen schrikkeljaar")
}