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

    editedOuvrier[editIndex] = editData
    modifOuvriers(editedOuvrier)

  }

  return (
    <>
      <ListeOuvrier data={ouvriers} passModifData={confirmModif} />
    </>
  )
}

export default App
