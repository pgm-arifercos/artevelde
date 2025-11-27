let user = new Object()

user.name = "Arif"
user.age = 18
user.email = "arif.ercos@student.arteveldehs.be"

function displayUser(user) {
    console.log(
`Profiel van gebruiker:
Naam: ${user.name}
Leeftijd: ${user.age}
Email: ${user.email}`)
}

displayUser(user)

function updateEmail(user, newEmail) {
    user.email = newEmail
    console.log(`
Email succesvol bijgewerkt naar: ${newEmail}`)
    displayUser(user)
}

updateEmail(user, "arifercos@hotmail.com")

function haveBirthday(user) {
    user.age = user.age + 1
    console.log(`
Hoera! Arif is nu ${user.age} jaar oud!`)
    displayUser(user)
}

haveBirthday(user)