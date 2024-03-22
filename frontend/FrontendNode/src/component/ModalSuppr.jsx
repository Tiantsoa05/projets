import React from "react";
export default function ModalSuppr({ supprData, passSupprData, closesupprModal }) {

    const {id} = supprData
    const confirmSupprData = function () {
        passSupprData(id)
        closesupprModal()
    }

    return <div>
        <h2>Supprimer</h2>
        <p>Voulez-vous vraiment supprimer </p>

        <div>
            <button onClick={confirmSupprData}>Confirmer</button>
            <button onClick={closesupprModal}>Annuler</button>
        </div>
    </div>



}