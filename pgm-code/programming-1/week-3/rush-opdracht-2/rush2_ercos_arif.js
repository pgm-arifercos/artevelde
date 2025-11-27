const tasks = []

if (tasks.length === 0) {
    console.log("Nog geen taken op jouw lijst")
}
else if (tasks.length === 1) {
    console.log(`
        1 taak in lijst:
        - ${tasks[0]}`)
}
else {
    console.log(`${tasks.length} taken in lijst:`)
    tasks.forEach(function (task) {
        console.log(`- ${task}`)
})
}0.

tasks.push("eten", "drinken", "slapen", "studeren")

if (tasks.length === 0) {
    console.log("Nog geen taken op jouw lijst")
}
else if (tasks.length === 1) {
    console.log(`
        1 taak in lijst:
        - ${tasks[0]}`)
}
else {
    console.log(`${tasks.length} taken in lijst:`)
    tasks.forEach(function (task) {
        console.log(`- ${task}`)
})
}

tasks.push("sporten")

if (tasks.length === 0) {
    console.log("Nog geen taken op jouw lijst")
}
else if (tasks.length === 1) {
    console.log(`
        1 taak in lijst:
        - ${tasks[0]}`)
}
else {
    console.log(`${tasks.length} taken in lijst:`)
    tasks.forEach(function (task) {
        console.log(`- ${task}`)
})
}