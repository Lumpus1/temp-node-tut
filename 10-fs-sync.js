//synkroniska varianten

const { readFileSync, writeFileSync } = require('fs')
/* // är samma sak som att skriva
const fs = require('fs')
fs.readFileSync()
fs.writeFileSync()
eller nära nog ... ovanstående sätt att skriva kallas de-structuring*/

console.log('start');

//läser av fil
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

//skapar en fil och ger den ett innehåll. om det redan finns en fil med samma namn kommer denna skrivas över.
writeFileSync('./content/result-sync.txt',
`Wake up! ${first}, Watch out! ${second}`
)
// om man vill lägga till mer innehåll ("upend") kan man skriva
/* writeFileSync('./content/result-sync.txt',
`Wake up! ${first}, Watch out! ${second}`,
{flag: 'a'}
) */

console.log('done with this task');
console.log('starting the next one');
// de två sista loggarna körs inte förrän funktionerna emellan har kört färdigt, eftersom det är en synkronisk variant. om funktionen är  långsam eller det är många användare som kör den samtidigt kan det göra sidan långsam. under körningen kan man säga att sidan är nere, den kan inte göra något annat.