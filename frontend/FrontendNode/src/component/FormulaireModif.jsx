import React, { useState } from "react";

export default function FormulaireModif(afficher, infoOuvrier) {

    const [detailOuvrier, setInfoOuvrier] = useState(infoOuvrier)
    const { num_ouvrier, nom_ouvrier, sexe_ouvrier, nbr_jours, taux_journalier } = detailOuvrier

    const [num,setNum] = useState("")
    const [nom,setNom] = useState("")
    const [sexe,setSexe] = useState("")
    const [nbr,setNbr] = useState(0)
    const [taux,setTaux] = useState(0)

    return <div className="blur-container">

        <div className="form">
            <form>
                <div><input type="text" name="num_ouvrier" value={num_ouvrier} onChange={setNum(num_ouvrier)}/></div>
                <div><input type="text" name="nom_ouvrier" value={nom_ouvrier} onChange={setNom(nom_ouvrier)}/></div>
                <div>
                    <input type="radio" name="sexe_ouvrier" value="" />
                    <input type="radio" name="sexe_ouvrier" value="" />
                </div>
                <div><input type="text" name="nbr_jours" value={nbr_jours} /></div>
                <div><input type="text" name="taux_journalier" value={taux_journalier} /></div>
                <div>
                    <button className="btn-confirm">Ajouter</button>
                    <button className="btn-cancel" onClick={afficher(false)}>Annuler</button>
                </div>
            </form>
        </div>

    </div>
}