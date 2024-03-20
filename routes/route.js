
import express from 'express'
import database from '../Database/database.js'


const app = express()

app.get('/all',function(requete, reponse){

const data = database.query("SELECT * FROM ouvrier")
reponse.status(200).end(JSON.stringify(data))
})

export default app