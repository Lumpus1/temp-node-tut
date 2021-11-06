// asynkroniska varianten

const { readFile, writeFile } = require('fs')

// det andra argumentet, (err, result), är en callback som körs när funktionen har verkställts. om funktionen fungerar kommer result innehålla den efterfrågade datan. vill man ta hand om denna data behöver det ske inuti funktionen. t ex kan den stoppas in i en ny variabel. i detta exempel - som är exempel på bad practise - kör vi en till funktion av samma typ inuti den första för att hämta den andra textfilen. sedan skapar vi en ny textfil. det blir ett sk "callback hell"

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Wake up! ${first} Watch out! ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
        })
    })
})
console.log('starting next task');

// med denna asynkroniska metod stannar inte hela sidan upp när man kör readfile. man kan alltså köra flera tasks samtidigt. implementeringen är inget vidare dock. den kan underlättas med promises och async-await. instruktören verkar tycka att async-await är det enklaste.