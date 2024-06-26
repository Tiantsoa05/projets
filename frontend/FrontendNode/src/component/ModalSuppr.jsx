import React from "react";
export default function ModalSuppr({ supprData, passSupprData, closesupprModal }) {

    const {id} = supprData
    const confirmSupprData = function () {
        passSupprData(id)
        closesupprModal()
    }

    const closeModal = function(e){
        if(e.target.classList.contains('blur-container')){
            closesupprModal()
        }
    }
    return <div className="blur-container" onClick={closeModal}>
        <div className="suppr">
            <h2>Suppression de personnel</h2>
            <p>Voulez-vous vraiment supprimer ?</p>

            <div className="boutons">
                <button className="btn-confirm" onClick={confirmSupprData}>Confirmer</button>
                <button className="btn-cancel" onClick={closesupprModal}>Annuler</button>
            </div>
        </div>
    </div>



}