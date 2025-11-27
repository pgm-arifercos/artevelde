function calculateDogYears(age, factor = 7) {
  return age * factor;
}

let dogAge1 = calculateDogYears(5); 
console.log(`Your dog is ${dogAge1} years old in dog years!`);

let dogAge2 = calculateDogYears(3, 6); 