import React, { useState } from "react";

export default function FormulaireModif({ dataEdit ,passModifData, closeModal}) {

    const [detailOuvrier, setInfoOuvrier] = useState(dataEdit)
    const { id, num_ouvrier, nom_ouvrier, sexe_ouvrier, nbr_jours, taux_journalier } = detailOuvrier

    const [num, setNum] = useState(num_ouvrier)
    const [nom, setNom] = useState(nom_ouvrier)
    const [sexe, setSexe] = useState(sexe_ouvrier)
    const [nbr, setNbr] = useState(nbr_jours)
    const [taux, setTaux] = useState(taux_journalier)

    const sendModif = function (e){
        e.preventDefault()
        let data = {
            id,
            num_ouvrier:num,
            nom_ouvrier:nom,
            sexe_ouvrier:sexe,
            nbr_jours:nbr,
            taux_journalier:taux
        }
        console.log({avant: data})
        passModifData(data)
        closeModal()
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
                    <button className="btn-confirm" onClick={sendModif}>Ajouter</button>
                    <button className="btn-cancel">Annuler</button>
                </div>
            </form>
        </div>

    </div>
}