const express = require('express')
const { info, start, move, end } = require('./logic')
const http = require('http')

const app = express()
app.use(express.json())
app.use(function (req, res, next) {
    res.set("Server", "BattlesnakeOfficial/starter-snake-javascript")
    next()
})


const port = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send(info())
});

app.post("/start", (req, res) => {
    res.send(start(req.body))
});

app.post("/move", (req, res) => {
    res.send(move(req.body))
});

app.post("/end", (req, res) => {
    res.send(end(req.body))
});

// Start the Express server
app.listen(port, () => {
    // console.log(`Starting Battlesnake Server at http://0.0.0.0:${port}...`)
})

setInterval(() => {
    http.get("https://turbulent-enigma.herokuapp.com/");
  }, 25 * 60 * 1000); // every 25 minutes
