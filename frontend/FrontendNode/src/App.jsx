import { useState, useEffect } from "react"
import ListeOuvrier from "./component/listeOuvrier"
import axiosQuery from "./config/axios"
import StatsOuvriers from "./component/StatsOuvriers"


function App() {

  const [ouvriers, modifOuvriers] = useState([])


  useEffect(function () {
    fetch('http://localhost:5000/employers/all')
      .then(Response => Response.json())
      .then(data => {
        modifOuvriers(data)
      })
      .catch(error => console.error(error))
  }, [])

  const confirmModif = function (editData) {

    let editIndex = 0

    axiosQuery.put(`/modif/${editData.id}`, editData).then(response => {
      const { message } = response.data
      console.log(message)
    })

    ouvriers.forEach((ouvrier, index) => {
      if (ouvrier.id === editData.id) {
        editIndex = index
        return
      }
    })

    let editedOuvrier = ouvriers
    editedOuvrier[editIndex] = editData

    // let editSalaireOuvrier =  salaires
    // editSalaireOuvrier[editIndex] = calcSalaire(editData)

    modifOuvriers(editedOuvrier)
    // setSalaires(editSalaireOuvrier)

  }

  const confirmSuppr = function (supprDataId) {
    axiosQuery.delete(`/suppr/${supprDataId}`).then(response => {
      const { message } = response.data
      console.log(message)

      let editedOuvrier = ouvriers

      modifOuvriers(editedOuvrier.filter(ouvrier => ouvrier.id !== supprDataId))
    })

  }

  return (
    <>
      <ListeOuvrier
        data={ouvriers}
        passModifData={confirmModif}
        passSupprData={confirmSuppr}
      />
      <StatsOuvriers ouvriers={ouvriers}/>
    </>
  )
}

function calcSalaire(ouvrier) {
  return parseInt(ouvrier.nbr_jours) * parseInt(ouvrier.taux_journalier)
}
export default App
