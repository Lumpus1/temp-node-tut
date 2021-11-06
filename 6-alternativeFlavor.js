// ett annat sätt att exportera, utan att först definiera en variabel
module.exports.items = ['item1', 'item2']

// ytterligare ett sätt
const people = {
    name1: 'Navi',
    name2: 'Howard'
}

module.exports.singlePerson = people.name1