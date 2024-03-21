import React from "react";
import { useState } from "react";
import FormulaireModif from "./FormulaireModif";


export default function ListeOuvrier({ data, passModifData }) {


    const [formModif, setFormModif] = useState(false)
    const [editOuvrier, setEditOuvrier] = useState([])

    const confirmerSuppression = function (ouvrier) {
        console.log(ouvrier)
    }

    const remplirModifForm = function (ouvrier) {
        setFormModif(true)
        setEditOuvrier(ouvrier)
    }

    const closeModal = function () {
        setFormModif(false)
    }

    return <>

        {
            data.map(ouvrier =>
                <div className="container" key={ouvrier.id}>
                    <div className="ouvrier">{ouvrier.nom_ouvrier}</div>
                    <div className="boutons">
                        <button onClick={() => remplirModifForm(ouvrier)}>Modifier</button>
                        <button onClick={() => confirmerSuppression(ouvrier)}>Supprimer</button>
                    </div>
                </div>
            )
        }

        {
            formModif && 
            <FormulaireModif
                dataEdit={editOuvrier}
                passModifData={passModifData}
                closeModal={closeModal}
            />
        }

    </>


}