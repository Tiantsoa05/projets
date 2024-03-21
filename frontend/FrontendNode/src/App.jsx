import { useState } from "react"
import ListeOuvrier from "./component/listeOuvrier"
import FormulaireModif from "./component/FormulaireModif"

function App() {

  const [formModif,setFormModif] = useState(false)

  const afficherFormModif=function(payload){
    setFormModif(payload)
  }
  return (
    <>
      <ListeOuvrier afficher={afficherFormModif}/>
      {
        formModif && <FormulaireModif afficher={afficherFormModif}/>
      }
    </>
  )
}

export default App
