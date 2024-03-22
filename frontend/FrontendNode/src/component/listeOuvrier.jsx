import React from "react";
import { useState } from "react";
import FormulaireModif from "./FormulaireModif";
import ModalSuppr from "./ModalSuppr";


export default function ListeOuvrier({ data, passModifData, passSupprData }) {


    const [formModif, setFormModif] = useState(false)
    const [modalSuppr, setModalSuppr]=useState(false)
    const [editOuvrier, setEditOuvrier] = useState([])

    const confirmerSuppression = function (ouvrier) {
        setModalSuppr(true)
    }

    const remplirModifForm = function (ouvrier) {
        setFormModif(true)
        setEditOuvrier(ouvrier)
    }

    const closeModal = function () {
        setFormModif(false)
    }
    const closesupprModal = function(){
        setModalSuppr(false)
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

        {
            modalSuppr && 
            <ModalSuppr supprId={editOuvrier.id} passSupprData={passSupprData} closesupprModal={closesupprModal}/>
        }

    </>


}