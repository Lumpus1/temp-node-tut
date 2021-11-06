// Modules
// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

// importera modul.
// går att köra require direkt, eller lägga det i en variabel:
const availableInfo = require('./4-firstModule')
const accessInfo = require('./5-secondModule')
const data = require('./6-alternativeFlavor')
require('./7-mindGrenade')
console.log(accessInfo(availableInfo))
console.log(data)

// Built-in modules: os, path, fs och http