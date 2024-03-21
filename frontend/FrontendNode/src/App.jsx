import { useState ,useEffect} from "react"
import ListeOuvrier from "./component/listeOuvrier"
import FormulaireModif from "./component/FormulaireModif"

function App() {

  const [formModif,setFormModif] = useState(false)

  const [ouvriers, modifOuvriers] = useState([])

  useEffect(function () {
    fetch('http://localhost:5000/employers/all')
        .then(Response => Response.json())
        .then(data => modifOuvriers(data))
        .catch(error => console.error(error))
  }, [])

  const afficherFormModif=function(payload){
    setFormModif(!formModif)
  }
  return (
    <>
      <ListeOuvrier data={ouvriers} setModif={afficherFormModif}/>
      {
        formModif && <FormulaireModif afficher={afficherFormModif}/>
      }
    </>
  )
}

export default App
