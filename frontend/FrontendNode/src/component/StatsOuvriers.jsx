import React, { useState,useEffect } from "react";

export default function StatsOuvriers({ouvriers}) {

    const [Salaires, setSalaires] = useState([])

    useEffect(function (){
        setSalaires(ouvriers.map(calcSalaire))
        console.log(Salaires)
    }, [ouvriers])
    const Total = function () {
        let total = 0
        Salaires.map(salaire => {
            total += salaire
        })
        return total
    }

    return <div>
        <div>
            Salaire total: {Total()} Ar
        </div>
    </div>
}


function calcSalaire(ouvrier) {
    return parseInt(ouvrier.nbr_jours) * parseInt(ouvrier.taux_journalier)
}