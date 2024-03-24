import React, { useEffect } from "react";
import { useState } from "react";
import FormulaireModif from "./FormulaireModif";
import ModalSuppr from "./ModalSuppr";


export default function ListeOuvrier({ data, passModifData, passSupprData, calcSalaire }) {

    const [ouvriers, setOuvriers] = useState([])

    useEffect(function () {
        setOuvriers(data)
    }, [])

    const [supprData, setSupprData] = useState([])
    const [formModif, setFormModif] = useState(false)
    const [modalSuppr, setModalSuppr] = useState(false)
    const [editOuvrier, setEditOuvrier] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const chercherOuvrier = function (e) {
        setSearchValue(e.target.value)
        let filteredSearch = data.filter(
            (ouvrier) => ouvrier.nom_ouvrier.includes(e.target.value) || ouvrier.num_ouvrier.includes(e.target.value)
        )
        setOuvriers(filteredSearch)
    }

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

        <div className="search">
            <input type="text" name="nom" placeholder="Chercher" onChange={chercherOuvrier} />
        </div>

        {
            ouvriers.length > 0 ?
                ouvriers.map(ouvrier =>
                    <div className="container" key={ouvrier.id}>
                        <div className="numero">{ouvrier.num_ouvrier}</div>
                        <div className="ouvrier">{ouvrier.nom_ouvrier}</div>
                        <div className="salaire">{calcSalaire(ouvrier)} Ar </div>
                        <div className="nbr">{ouvrier.nbr_jours}</div>
                        <div className="taux">{ouvrier.taux_journalier}</div>
                        <div className="boutons">
                            <button onClick={() => remplirModifForm(ouvrier)}>Modifier</button>
                            <button onClick={() => confirmerSuppression(ouvrier)}>Supprimer</button>
                        </div>
                    </div>
                ) : (ouvriers.length === 0 && searchValue) ?
                    <div>Aucun ouvrier ne correspond à votre recherche</div> :
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