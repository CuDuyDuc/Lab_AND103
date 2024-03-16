const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

const local = "mongodb://localhost:27017/Lab3_AND103"

const atlat = "mongodb+srv://duccu1403:1403@duyduc.ofsxxxi.mongodb.net/"

const connect =  async () => {
    try {
        await mongoose.connect(local, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('connect success')
    } catch (error) {
        console.log(error)
        console.log('connect fail')
    }
}

module.exports = {connect}

