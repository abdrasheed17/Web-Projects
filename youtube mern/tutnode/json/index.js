const fs = require('fs')
const bio = {
    name: 'tahir',
    age:21,
    hobby:'code'
}

// const js = JSON.stringify(bio)
// console.log(js)

// const ob = JSON.parse(js)
// console.log(ob)

// const jsondata = JSON.stringify(bio)
// fs.writeFile('json1.json', jsondata, (err) => {
//     console.log('json created')
// })

fs.readFile('json1.json', 'utf-8', (err, data) => {
    const objdata = JSON.parse(data)
    console.log(data)
    console.log(objdata)
})