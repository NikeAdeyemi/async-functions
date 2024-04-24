require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB)
        console.log('DB connection is successful')
    } catch (error) {
        console.log(error)
    }
}



module.exports = connectDB