const express = require("express")
const app = express()
const port = 3000||process.env

app.get("/", (req, res) => {
    // res.send(" home page")
    res.write("<h1>home page</h1>")
    res.write("<h1>some html</h1>")
    res.send()
})

app.get("/about", (req, res) => {
    res.send(" about page")
})

// app.get("/temp", (req, res) => {
//     res.send([
//         {
//         "bangalore": 27,
//             "avg": 25
//         },
//         {
//         "chennai": 34,
//             "avg": 31
//         },
//         {
//         "mumbai": 30,
//             "avg": 28
//         },
//     ])
// })

app.get("/temp", (req, res) => {
    res.json([
        {
        "bangalore": 27,
            "avg": 25
        },
        {
        "chennai": 34,
            "avg": 31
        },
        {
        "mumbai": 30,
            "avg": 28
        },
    ])
})

//res.json() will convert non object also into json
//res.send() will only convert object into json

app.listen(port, () => {
    console.log(`listening at ${port}`)
})