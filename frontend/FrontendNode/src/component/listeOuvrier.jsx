import React from "react";
import { useEffect } from "react";
import { useState } from "react";


export default function ListeOuvrier() {
    const [ouvriers, modifOuvriers] = useState([])



    useEffect(function () {
        fetch('http://localhost:5000/employers/all')
            .then(Response => Response.json())
            .then(data => modifOuvriers(data))
            .catch(error => console.error(error))
    }, [])


    return <>

        {
            ouvriers.map(ouvrier =>
                <div>
                    <span>Nom:{ouvrier.nom_ouvrier}</span>
                </div>
            )
        }
    </>


}