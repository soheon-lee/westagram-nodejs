const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

var corsOptions = {
  origin :"*"
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.json({ message: "Welcome to >wecode backend application!!!!!!!!!!" })
})

const PORT = process.env.PORT || 8080
require("./app/routes/customer.routes.js")(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
