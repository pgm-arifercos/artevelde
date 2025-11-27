let length = 1.95;
let weight = 98;
let bmi = Math.round(weight/(Math.pow(length, 2)));

if (bmi <= 18,5) {
    console.log(`Uw bmi is ${bmi}. U heeft ondergewicht.`)
}
else if (18,5 < bmi > 25) {
    console.log(`Uw bmi is ${bmi}. U heeft een normaal gewicht`)
}
else if (25 <= bmi > 30) {
    console.log(`Uw bmi is ${bmi}. U heeft overgewicht`)
}
else if (bmi >= 30 ) {
    console.log(`Uw bmi is ${bmi}. U bent zwaarlijvig`)
}