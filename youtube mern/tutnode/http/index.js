const http = require('http')
const fs=require('fs')

const server = http.createServer((req, res) => {
    // res.end('hello world')
    if (req.url === '/') {
        res.end('home page')
    } else if (req.url === '/about') {
        res.end('about page')
    }else if (req.url === '/userapi') {
        // res.end('about page')
        fs.readFile(`../userapi/userapi.json`, 'utf-8', function(err, data) {
            console.log(data)
            res.end(data)

        })
    }else {
        res.writeHead(404, { 'Content-type': 'text/html' })
        res.end('<h1>404 error page not found</h1>')
    }
})

server.listen(8000, 'localhost', () => {
    console.log("listening")
})