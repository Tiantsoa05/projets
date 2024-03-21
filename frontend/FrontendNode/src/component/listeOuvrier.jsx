import React from "react";
import { useEffect } from "react";
import { useState } from "react";


export default function ListeOuvrier({data}) {


    const ouvrirFormulaireModification = function (ouvrier){
        // afficher(true ,ouvrier)
    }

    const confirmerSuppression = function (ouvrier){

    }

    return <>

        {
            data.map(ouvrier =>
                <div className="container" key={ouvrier.id}>
                    <div className="ouvrier">{ouvrier.nom_ouvrier}</div>
                    <div className="boutons">
                        <button onClick={ouvrirFormulaireModification(ouvrier)}>Modifier</button>
                        <button onClick={confirmerSuppression(ouvrier)}>Supprimer</button>
                    </div>
                </div>
            )
        }

    </>


}