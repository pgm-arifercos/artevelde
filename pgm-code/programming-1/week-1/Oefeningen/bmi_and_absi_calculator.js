let length = 1.95;
let weight = 98;
let bmi = weight/(length*length);
let waist = 0.1;
let absi = waist/(Math.pow(bmi, 2/3)*Math.sqrt(length));
console.log("Uw BMI is " + bmi)
console.log("Uw ABSI is " + absi)