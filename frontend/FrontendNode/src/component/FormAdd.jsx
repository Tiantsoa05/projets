import react, { useRef, useState } from "react"

export default function FormAdd({ passAddData, closeAddModal }) {

    const [num, setNum] = useState("")
    const [nom, setNom] = useState("")
    const [sexe, setSexe] = useState("")
    const [nbr, setNbr] = useState("")
    const [taux, setTaux] = useState("")

    const [errorNumInput, setErrorNumInput] = useState(false)
    const [errorNomInput, setErrorNomInput] = useState(false)
    const [errorSexeInput, setErrorSexeInput] = useState(false)
    const [errorNbrInput, setErrorNbrInput] = useState(false)
    const [errorTauxInput, setErrorTauxInput] = useState(false)

    const numRef = useRef()
    const nomRef = useRef()
    const nbrRef = useRef()
    const tauxRef = useRef()

    const sendAdd = function (e) {
        e.preventDefault()

        setErrorNumInput(numRef.current.value.length === 0 || numRef.current.value.length > 5)
        setErrorNomInput(nomRef.current.value.length === 0)
        setErrorSexeInput(sexe.length === 0)
        setErrorNbrInput(nbrRef.current.value.length === 0 || parseInt(nbrRef.current.value) === NaN)
        setErrorTauxInput(tauxRef.current.value.length === 0 || parseInt(tauxRef.current.value) === NaN)

        if (
            (numRef.current.value.length === 0 || numRef.current.value.length > 5)
            || nomRef.current.value.length === 0
            || (nbrRef.current.value.length === 0 || parseInt(nbrRef.current.value) === NaN)
            || (tauxRef.current.value.length === 0 || parseInt(tauxRef.current.value) === NaN)
            || sexe.length === 0
        ) {
            return
        } else {
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

    }

    const closeModal = function(e){
        if(e.target.classList.contains('blue-container')){
            closeAddModal()
        }
    }

    return <div className="blur-container" onClick={closeModal}>

        <div className="form">
            <h1>Ajout de personnel</h1>
            <form>
                <div>
                    <input
                        type="text"
                        name="num_ouvrier"
                        placeholder="Numero d'identification"
                        onChange={(e) => setNum(e.target.value)}
                        ref={numRef}
                    />
                </div>
                {errorNumInput && <div className="error">Ce champ ne doit pas être vide et ne dépasse pas 5 caractères</div>}
                <div><input
                    type="text"
                    name="nom_ouvrier"
                    placeholder="Nom"
                    onChange={(e) => setNom(e.target.value)}
                    ref={nomRef}
                />
                </div>
                {errorNomInput && <div className="error">Ce champ ne doit pas être vide</div>}
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
                {errorSexeInput && <div className="error">Veuillez choisir le sexe</div>}
                <div>
                    <input
                        type="text"
                        name="nbr_jours"
                        placeholder="Nombre de jours"
                        onChange={(e) => setNbr(e.target.value)}
                        ref={nbrRef}
                    />
                </div>
                {errorNbrInput && <div className="error">Ce champ ne doit être vide ni contenant des caractères</div>}
                <div>
                    <input
                        type="text"
                        name="taux_journalier"
                        placeholder="Taux  journalier"
                        onChange={(e) => setTaux(e.target.value)}
                        ref={tauxRef}
                    />
                </div>
                {errorTauxInput && <div className="error">Ce champ ne doit être vide ni contenant des caractères</div>}
                <div className="boutons">
                    <button className="btn-confirm" onClick={sendAdd}>Ajouter</button>
                    <button className="btn-cancel" onClick={closeAddModal}>Annuler</button>
                </div>
            </form>
        </div>

    </div>
}