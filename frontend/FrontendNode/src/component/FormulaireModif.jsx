import React from "react";

export default function FormulaireModif(afficherFormModif) {

    return <div className="blur-container">

        <div className="form">
            <form>
                <div><input type="text" name="num_ouvrier" id="" /></div>
                <div><input type="text" name="nom_ouvrier" id="" /></div>
                <div>
                    <input type="radio" name="sexe_ouvrier" value=""/>
                    <input type="radio" name="sexe_ouvrier" value=""/>
                </div>
                <div><input type="text" name="nbr_jours" id="" /></div>
                <div><input type="text" name="taux_journalier" id="" /></div>
                <div>
                    <button className="btn-confirm">Ajouter</button>
                    <button className="btn-cancel" onClick={afficherFormModif(false)}>Annuler</button>
                </div>
            </form>
        </div>

    </div>
}