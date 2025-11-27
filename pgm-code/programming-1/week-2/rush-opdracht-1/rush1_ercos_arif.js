let balance = 500;
let collect = 400;


console.log(`Je hebt ${balance} euro in de bank.`)


if (collect <= balance) {
    console.log(`Je wil ${collect} euro afhalen. In uitvoering...
Je hebt nu nog ${balance - collect} euro in de bank.`)
}

else {
    console.log(`Je wil ${collect} euro afhalen. Er is een probleem. Uw saldo is ontoereikend. Transactie geannuleerd.
Je hebt nog steeds ${balance} euro in de bank`)
}
