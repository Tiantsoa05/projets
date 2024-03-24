import React, { useState } from "react";

export default function FormulaireModif({ dataEdit, passModifData, closeModal }) {

    const [detailOuvrier, setInfoOuvrier] = useState(dataEdit)
    const { id, num_ouvrier, nom_ouvrier, sexe_ouvrier, nbr_jours, taux_journalier } = detailOuvrier

    const [num, setNum] = useState(num_ouvrier)
    const [nom, setNom] = useState(nom_ouvrier)
    const [sexe, setSexe] = useState(sexe_ouvrier)
    const [nbr, setNbr] = useState(nbr_jours)
    const [taux, setTaux] = useState(taux_journalier)

    const [errorNumInput, setErrorNumInput] = useState(false)
    const [errorNomInput, setErrorNomInput] = useState(false)
    const [errorNbrInput, setErrorNbrInput] = useState(false)
    const [errorTauxInput, setErrorTauxInput] = useState(false)


    const handleNumInput = function (e) {
        setErrorNumInput(e.target.value === "")
        setNum(e.target.value)
    }
    const handleNomInput = function (e) {
        setErrorNomInput(e.target.value === "")
        setNom(e.target.value)
    }
    const handleNbrInput = function (e) {
        setErrorNbrInput(e.target.value === "" || parseInt(nbr) === NaN)
        setNbr(e.target.value)
    }
    const handleTauxInput = function (e) {
        setErrorTauxInput(e.target.value === "" || parseInt(taux) === NaN)
        setTaux(e.target.value)
    }

    const sendModif = function (e) {
        e.preventDefault()

        if (errorNumInput || errorNomInput || errorNbrInput || errorTauxInput) {
            return
        } else {
            let data = {
                id,
                num_ouvrier: num,
                nom_ouvrier: nom,
                sexe_ouvrier: sexe,
                nbr_jours: nbr,
                taux_journalier: taux
            }
            passModifData(data)
            closeModal()
        }

    }

    return <div className="blur-container">

        <div className="form">
            <form>
                <div><input type="text" name="num_ouvrier" value={num} onChange={handleNumInput} /></div>
                {errorNumInput && <div className="error">Ce champ ne doit pas être vide et ne dépasse pas 5 caractères</div>}
                <div><input type="text" name="nom_ouvrier" value={nom} onChange={handleNomInput} /></div>
                {errorNomInput && <div className="error">Ce champ ne doit pas être vide</div>}
                <div>
                    <label htmlFor="sexe_ouvrier">
                        <input
                            type="radio"
                            name="sexe_ouvrier"
                            value="G"
                            checked={sexe === "G"}
                            onChange={(e) => setSexe(e.target.value)}
                        />Homme
                    </label>
                    <label htmlFor="sexe_ouvrier">
                        <input
                            type="radio"
                            name="sexe_ouvrier"
                            value="F"
                            checked={sexe === "F"}
                            onChange={(e) => setSexe(e.target.value)}
                        />Femme
                    </label>
                </div>
                <div>
                    <input
                        type="text"
                        name="nbr_jours"
                        value={nbr}
                        onChange={handleNbrInput}
                    />
                </div>
                {errorNbrInput && <div className="error">Ce champ ne doit être vide ni contenant des caractères</div>}
                <div>
                    <input
                        type="text"
                        name="taux_journalier"
                        value={taux}
                        onChange={handleTauxInput}
                    />
                </div>
                {errorTauxInput && <div className="error">Ce champ ne doit être vide ni contenant des caractères</div>}
                <div>
                    <button className="btn-confirm" onClick={sendModif}>Ajouter</button>
                    <button className="btn-cancel">Annuler</button>
                </div>
            </form>
        </div>

    </div>
}