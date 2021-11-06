// den inbyggda os-modulen erbjuder många properties och metoder för att interagera med operativsystem och server

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// methos returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    relase: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);