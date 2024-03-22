import React from "react";
export default function ModalSuppr({ supprId, passSupprData, closesupprModal }) {

    const confirmSupprData = function () {
        passSupprData(supprId)
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