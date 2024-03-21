
app.get('/all',function(requete, reponse){

    const data = database.query(" SELECT * FROM ouvrier")
    reponse.status(200).end(JSON.stringify(data))
    database.query("SELECT * FROM ouvriers",function(error,data){
        if(error) throw error
        reponse.status(200).end(JSON.stringify(data))
    })
    
    })
    
    
app.put('/modif/:id',function(request,response){

    const {id} = request.params

    const {num_ouvrier,nom_ouvrier,sexe_ouvrier,nbr_jours,taux_journalier} = request.body

    database.query("UPDATE FROM ouvriers SET num_ouvrier=? , nom_ouvrier=?, sexe_ouvrier=? ,nbr_jours=? , taux_journalier=?  WHERE id=?",
    [num_ouvrier,nom_ouvrier,sexe_ouvrier,nbr_jours,taux_journalier,id],function(error,results){
        if(error)throw error
        else{
            response.status(200).end(JSON.stringify({
                message: "Modification réussie"
            }))
        }
    })

})