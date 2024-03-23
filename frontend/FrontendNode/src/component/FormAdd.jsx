import react, {useState} from "react"

export default function FormAdd({passAddData,closeAddModal}){

    const [num, setNum] = useState("")
    const [nom, setNom] = useState("")
    const [sexe, setSexe] = useState("")
    const [nbr, setNbr] = useState("")
    const [taux, setTaux] = useState("")


    const sendAdd = function(e){
        e.preventDefault()
        let data = {
            num_ouvrier: num,
            nom_ouvrier: nom,
            sexe_ouvrier: sexe,
            nbr_jours: nbr,
            taux_journalier: taux
        }
        passAddData(data)
        closeAddModal()
    }


    return <div className="blur-container">

        <div className="form">
            <form>
                <div><input type="text" name="num_ouvrier" value={num} onChange={(e) => setNum(e.target.value)} /></div>
                <div><input type="text" name="nom_ouvrier" value={nom} onChange={(e) => setNom(e.target.value)} /></div>
                <div>
                    <label htmlFor="sexe_ouvrier">
                        <input
                            type="radio"
                            name="sexe_ouvrier"
                            value="G"
                            onChange={(e) => setSexe(e.target.value)}
                        />Homme
                    </label>
                    <label htmlFor="sexe_ouvrier">
                        <input
                            type="radio"
                            name="sexe_ouvrier"
                            value="F"
                            onChange={(e) => setSexe(e.target.value)}
                        />Femme
                    </label>
                </div>
                <div>
                    <input
                        type="text"
                        name="nbr_jours"
                        value={nbr}
                        onChange={(e) => setNbr(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="taux_journalier"
                        value={taux}
                        onChange={(e) => setTaux(e.target.value)}
                    />
                </div>
                <div>
                    <button className="btn-confirm" onClick={sendAdd}>Ajouter</button>
                    <button className="btn-cancel">Annuler</button>
                </div>
            </form>
        </div>

    </div>
}