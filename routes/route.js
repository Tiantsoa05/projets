
import express from 'express'
import database from '../Database/database.js'


const app = express()

app.get('/all', function (requete, reponse) {

    database.query("SELECT * FROM ouvriers ORDER BY nom_ouvrier", function (error, data) {
        if (error) throw error
        reponse.status(200).end(JSON.stringify(data))
    })

})

app.get('/stats', function (requete, reponse) {

    database.query("SELECT * FROM stats ORDER BY mois", function (error, data) {
        if (error) throw error
        reponse.status(200).end(JSON.stringify(data))
    })

})

//Suppresion d'ouvrier

app.delete('/suppr/:id', function (request, response) {

    //chercher l'id dans l'url paramétrée 
    const { id } = request.params

    //etablir la requete de suppression
    database.query("DELETE FROM ouvriers WHERE id=?", [id], function (error, results) {
        if (error) throw error
        else {
            response.status(200).end(JSON.stringify({
                message: "suppression réussie"
            }))
        }
    })

})
//Modification
app.put('/modif/:id', function (request, response) {

    const { id } = request.params

    const { num_ouvrier, nom_ouvrier, sexe_ouvrier, nbr_jours, taux_journalier } = request.body

    database.query("UPDATE ouvriers SET num_ouvrier=? , nom_ouvrier=?, sexe_ouvrier=? ,nbr_jours=? , taux_journalier=?  WHERE id=?",
        [num_ouvrier, nom_ouvrier, sexe_ouvrier, nbr_jours, taux_journalier, id], function (error, results) {
            if (error) throw error
            else {
                response.status(200).end(JSON.stringify({
                    message: "Modification réussie"
                }))
            }
        })

})

//Ajouter un employer
app.post('/add', function (request, reponse) {
    const { num_ouvrier, nom_ouvrier, sexe_ouvrier, nbr_jours, taux_journalier } = request.body

    database.query(
        "INSERT INTO `ouvriers` (`num_ouvrier`, `nom_ouvrier`, `sexe_ouvrier`, `nbr_jours`, `taux_journalier`) VALUES (?,?,?,?,?)",
        [num_ouvrier, nom_ouvrier, sexe_ouvrier, nbr_jours, taux_journalier], (error, results) => {
            if (error) throw error
            else {
                reponse.end(JSON.stringify(
                    {
                        message: "Ajout avec succès"
                    }
                ))
            }
        })

}
)

export default app