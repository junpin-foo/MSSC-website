const express = require('express')
const db = require('./models/database')
const PORT = 3001;
const cors = require('cors')
const createHttpError = require("http-errors");

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
db.initializeFirebaseApp();

app.use(cors({
    origin: "http://localhost:3000", // allow all origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true
 }))


app.post('/testupload', async(req,res) => {
    const data = {
        key1: "test2"
    }
    const docName = "custom-id"
    await db.helpers.addTestData(data, docName)
    res.status(200).json({ message: 'upload successful' }); 
})

app.get('/testget', async(req,res) => {
    const data = await db.helpers.getTestData()
    res.json(data)
})


app.listen(PORT, '0.0.0.0')
console.log(`Running on port ${PORT}`)
