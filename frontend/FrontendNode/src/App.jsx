import { useState, useEffect } from "react"
import ListeOuvrier from "./component/listeOuvrier"
import axiosQuery from "./config/axios"
import FormAdd from "./component/FormAdd"


function App() {

  const [ouvriers, modifOuvriers] = useState([])
  const [displayFormAdd, setDisplayFormAdd] = useState(false)
  const [Salaires, setSalaires] = useState([])

  useEffect(function () {
    fetch('http://localhost:5000/employers/all')
      .then(Response => Response.json())
      .then(data => {
        modifOuvriers(data)
        setSalaires(data.map(calcSalaire))
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

    modifOuvriers(editedOuvrier)

  }

  const confirmSuppr = function (supprDataId) {
    axiosQuery.delete(`/suppr/${supprDataId}`).then(response => {
      const { message } = response.data
      console.log(message)

      let editedOuvrier = ouvriers

      modifOuvriers(editedOuvrier.filter(ouvrier => ouvrier.id !== supprDataId))
    })

  }

  const confirmAdd = function (newPers) {
    axiosQuery.post('/add', newPers)
      .then(reponse => console.log(reponse.data))
      .catch(error => console.error(error))

    const newPersUpdate = ouvriers
    newPersUpdate.push(newPers)

    modifOuvriers(newPersUpdate)
  }

  const closeAddModal = function () {
    setDisplayFormAdd(false)
  }

  return <>
    <button onClick={() => setDisplayFormAdd(true)}>Nouvel employé</button>
    <ListeOuvrier
      data={ouvriers}
      passModifData={confirmModif}
      passSupprData={confirmSuppr}
      calcSalaire={calcSalaire}
    />
    <div>
      <div>
        Salaire total: {ouvriers.map(calcSalaire).reduce((a, c) => a + c, 0)} Ar
      </div>
      <div>
        Salaire maximal: {Math.max(...ouvriers.map(calcSalaire))} Ar
      </div>
      <div>
        Salaire minimal: {Math.min(...ouvriers.map(calcSalaire))} Ar
      </div>
    </div>
    {
      displayFormAdd && <FormAdd passAddData={confirmAdd} closeAddModal={closeAddModal} />
    }
  </>
}

function calcSalaire(ouvrier) {
  return parseInt(ouvrier.nbr_jours) * parseInt(ouvrier.taux_journalier)
}

export default App