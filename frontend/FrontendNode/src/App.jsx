import { useState, useEffect } from "react"
import ListeOuvrier from "./component/listeOuvrier"
import axiosQuery from "./config/axios"
import FormAdd from "./component/FormAdd"
import { Link } from "react-router-dom"

function App() {

  const [ouvriers, modifOuvriers] = useState([])
  const [displayFormAdd, setDisplayFormAdd] = useState(false)
  const [Salaires, setSalaires] = useState([])

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
      console.info(message)
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
    setSalaires(ouvriers.map(calcSalaire))
  }

  const confirmSuppr = function (supprDataId) {
    axiosQuery.delete(`/suppr/${supprDataId}`).then(response => {
      const { message } = response.data
      console.log(message)

      let editedOuvrier = ouvriers

      modifOuvriers(editedOuvrier.filter(ouvrier => ouvrier.id !== supprDataId))
      setSalaires([])
    })

  }

  const confirmAdd = function (newPers) {
    axiosQuery.post('/add', newPers)
      .then(reponse => console.log(reponse.data))
      .catch(error => console.error(error))

    const newPersUpdate = ouvriers
    newPersUpdate.push(newPers)

    modifOuvriers(newPersUpdate)
    setSalaires([])
  }

  const closeAddModal = function () {
    setDisplayFormAdd(false)
  }

  return <>

    <div className="commandes">
      <button className="btn-add" onClick={() => setDisplayFormAdd(true)}></button>
      <Link to="/stats">
        <button className="btn-stats">Ici</button>
      </Link>
    </div>
    
    <ListeOuvrier
      data={ouvriers}
      passModifData={confirmModif}
      passSupprData={confirmSuppr}
      calcSalaire={calcSalaire}
      formater={formater}
    />
    {
      Salaires.length > 0 ?
        <div className="stats">
          <div>
            Salaire total: {formater(Salaires.reduce((a, c) => a + c, 0))} Ar
          </div>
          <div>
            Salaire maximal: {formater(Math.max(...Salaires))} Ar
          </div>
          <div>
            Salaire minimal: {formater(Math.min(...Salaires))} Ar
          </div>
        </div>
        :
        <div className="stats">
          <div>
            <span className="titre">Salaire total:</span> {formater(ouvriers.map(calcSalaire).reduce((a, c) => a + c, 0))} Ar
          </div>
          <div>
            <span className="titre">Salaire maximal:</span>  {formater(Math.max(...ouvriers.map(calcSalaire)))} Ar
          </div>
          <div>
            <span className="titre">Salaire minimal:</span>  {formater(Math.min(...ouvriers.map(calcSalaire)))} Ar
          </div>
        </div>
    }

    {
      displayFormAdd && <FormAdd passAddData={confirmAdd} closeAddModal={closeAddModal} />
    }
  </>
}

function calcSalaire(ouvrier) {
  return parseInt(ouvrier.nbr_jours) * parseInt(ouvrier.taux_journalier)
}
function formater(nombre) {
  return new Intl.NumberFormat("fr-FR").format(nombre)
}
export default App