let hasTicket = false;
let isVIP = false;

if (hasTicket === true && !isVIP) {
    console.log("Je hebt een ticket!")
}

else if (hasTicket === true && isVIP === true) {
    console.log("Je hebt een ticket en je bent een VIP!")
}

else {
    console.log("Sorry, je hebt geen ticket")
}
