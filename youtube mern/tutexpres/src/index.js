const express = require("express")
const app = express()
const path=require("path")

const staticpath = path.join(__dirname, "../public")

//middleware
app.use(express.static(staticpath))

app.get("/", (req, res) => {
    res.send("home page")
})

app.get("/about", (req, res) => {
    res.send("about page")
})

app.listen(3000, () => {
    console.log("listening")
})