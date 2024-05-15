require('dotenv').config()

const express = require('express')
const cors = require('cors')

const db = require('./DB/connection')

const router = require('./Routes/router')

const auServer = express()

auServer.use(cors())
auServer.use(express.json())

auServer.use(router)

const PORT = 4000 || process.env.PORT

auServer.listen(PORT,()=>{
    console.log("auServer listening on the port "+PORT);
})

auServer.get('/',(req,res)=>{
    res.send("Welcome to Auth-validation")
})