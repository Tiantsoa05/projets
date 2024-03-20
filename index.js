import express from 'express'
import app from './routes/route.js'
const server = express() 

server.use('/employers',app)


server.listen(5000,()=>console.log(`listening to port 5000`))


