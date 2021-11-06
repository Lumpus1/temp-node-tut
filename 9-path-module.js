const path = require('path')

// separator, alltså snedstreck
console.log(path.sep);

// ihopskrivning
const filePath = path.join('/content', 'subfolder', 'textfile.txt')
console.log(filePath)

// filnamn
const base = path.basename(filePath)
console.log(base);

// absolut sökväg, kan skilja sig mellan olika servrar. i detta fallet blir det /Users/jacobbergcrantz/Documents/Hattar och mössor 2/Programmering/Visual Studio Code/211105_freecodecamp_node_tutorial/content/subfolder/textfile.txt
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'textfile.txt')
console.log(absolute);