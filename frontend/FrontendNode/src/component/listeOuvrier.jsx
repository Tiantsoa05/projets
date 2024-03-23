import React from "react";
import { useState } from "react";
import FormulaireModif from "./FormulaireModif";
import ModalSuppr from "./ModalSuppr";


export default function ListeOuvrier({ data, passModifData, passSupprData, calcSalaire }) {

    const [supprData, setSupprData] = useState([])
    const [formModif, setFormModif] = useState(false)
    const [modalSuppr, setModalSuppr] = useState(false)
    const [editOuvrier, setEditOuvrier] = useState([])

    const confirmerSuppression = function (ouvrier) {
        setModalSuppr(true)
        setSupprData(ouvrier)
    }

    const remplirModifForm = function (ouvrier) {
        setFormModif(true)
        setEditOuvrier(ouvrier)
    }

    const closeModal = function () {
        setFormModif(false)
    }
    const closesupprModal = function () {
        setModalSuppr(false)
    }

    return <>

        {
            data.map(ouvrier =>
                <div className="container" key={ouvrier.id}>
                    <div className="ouvrier">{ouvrier.nom_ouvrier}</div>
                    <div className="salaire">{calcSalaire(ouvrier)} Ar </div>
                    <div className="nbr">{ouvrier.nbr_jours}</div>
                    <div className="taux">{ouvrier.taux_journalier}</div>
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
            <ModalSuppr supprData={supprData} passSupprData={passSupprData} closesupprModal={closesupprModal} />
        }

    </>


}