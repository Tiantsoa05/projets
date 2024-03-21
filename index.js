import express from 'express'
import app from './routes/route.js'
import cors from 'cors'
const server = express() 


// server.use(express.json()): Pour transformer toutes données depuis le client en objet json 
//Ilaina amle modification ;) 
server.use(express.json())
server.use(cors())

server.use('/employers',app)

server.listen(5000,()=>console.log(`listening to port 5000`))


