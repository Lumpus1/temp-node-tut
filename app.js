// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// paket kan installeras som local dependencies eller globala dependencies. skriv npm i (eller install) <packageName> för att installera paketet lokalt. lägg till -g för att installera det globalt, enligt ovan. ofta ombeds man då att ange sudo och får skriva sudo npm i(nstall) -g <packageName>. det gäller iaf på mac. det vanligaste är att man använder lokala dependencies.

// package.json - manifest file that stores important info about project/package
// sätt att installera package.json:
// manual approach (create package.json in the root, create properties etc))
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// package.json är viktigt. i package.json lagras alla dependencies. genom att installera package.json skapas också en mapp node_modules som innehåller alla dependencies.
// vissa dependencies bygger i sin tur på andra dependencies. lägger man till en sådan dependency får man också de andra på köpet.


// det är en konvention att skriva const _ = när det gäller denna typ av moduler / dependencies / packages
const _ = require('lodash')

// lodash är inget kritiskt. det är bara ett exempel. men det gör att man bl a kan förenkla arrayer.

// en array som innehåller flera inre arrayer:
const items = [1,[2, [3, [4]]]]
// lodash kan göra det till en enda array:
const newItems = _.flattenDeep(items)
console.log(newItems)

