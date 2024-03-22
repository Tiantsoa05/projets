import { useState, useEffect } from "react"
import ListeOuvrier from "./component/listeOuvrier"
import axiosQuery from "./config/axios"

function App() {

  const [ouvriers, modifOuvriers] = useState([])

  useEffect(function () {
    fetch('http://localhost:5000/employers/all')
      .then(Response => Response.json())
      .then(data => modifOuvriers(data))
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

    modifOuvriers(editedOuvrier)

  }

  const confirmSuppr = function(supprDataId){
    axiosQuery.delete(`/suppr/${supprDataId}`).then(response => {
      const {message} = response.data 
      console.log(message)

      let editedOuvrier = ouvriers
      editedOuvrier.splice(ouvriers.indexOf(supprDataId),1)
      modifOuvriers(editedOuvrier)
    })

  }
 
  return (
    <>
      <ListeOuvrier 
      data={ouvriers} 
      passModifData={confirmModif} 
      passSupprData={confirmSuppr}
      />
    </>
  )
}

export default App
