import React from "react";
import { useEffect } from "react";
import { useState } from "react";


export default function ListeOuvrier(afficher) {
    const [ouvriers, modifOuvriers] = useState([])

    useEffect(function () {
        fetch('http://localhost:5000/employers/all')
            .then(Response => Response.json())
            .then(data => modifOuvriers(data))
            .catch(error => console.error(error))
    }, [])


    const ouvrirFormulaireModification = function (ouvrier){

    }

    const confirmerSuppression = function (ouvrier){

    }

    return <>

        {
            ouvriers.map(ouvrier =>
                <div className="container">
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