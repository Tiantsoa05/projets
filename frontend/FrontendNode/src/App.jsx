import { useState ,useEffect} from "react"
import ListeOuvrier from "./component/listeOuvrier"
import FormulaireModif from "./component/FormulaireModif"

function App() {

  const [ouvriers, modifOuvriers] = useState([])
  
  useEffect(function () {
    fetch('http://localhost:5000/employers/all')
        .then(Response => Response.json())
        .then(data => modifOuvriers(data))
        .catch(error => console.error(error))
  }, [])

  return (
    <>
      <ListeOuvrier data={ouvriers}/>
    </>
  )
}

export default App
