
import express from 'express'
import database from '../Database/database.js'


const app = express()

app.get('/all',function(requete, reponse){

database.query("SELECT * FROM ouvriers",function(error,data){
    if(error) throw error
    reponse.status(200).end(JSON.stringify(data))
})

})

//Suppresion d'ouvrier

app.delete('/suppr/:id',function(request,response){

    //chercher l'id dans l'url paramétrée 
    const {id} = request.params

    //etablir la requete de suppression
    database.query("DELETE FROM ouvriers WHERE id=?",[id],function(error,results){
        if(error)throw error
        else{
            response.status(200).end(JSON.stringify({
                message: "suppression réussie"
            }))
        }
    })

})

export default app