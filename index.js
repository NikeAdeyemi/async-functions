require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const studentRoute = require('./routes/studentRoute')
const connectDB = require('./db/db')



const app = express()
const port = process.env.PORT
 connectDB()




app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))
app.use(studentRoute)


app.listen(port, () => {
    console.log(`Server started successfully on http://localhost:${port}`)
})