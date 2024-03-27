import React, { useEffect } from "react";
import { useState } from "react";
import FormulaireModif from "./FormulaireModif";
import ModalSuppr from "./ModalSuppr";
import man from '../../public/employe_1.png'
import woman from '../../public/perso_woman.png'


export default function ListeOuvrier({ data, passModifData, passSupprData, calcSalaire, formater }) {

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
            (ouvrier) =>
                ouvrier.nom_ouvrier.toLowerCase().includes(e.target.value.toLowerCase())
                || ouvrier.num_ouvrier.includes(e.target.value)
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

    return <section className="liste">

        <div className="search">
            <input type="text" name="nom" placeholder="Chercher" onChange={chercherOuvrier} />
        </div>

        {
            ouvriers.length > 0 ?
                ouvriers.map(ouvrier =>
                    <div className="container" key={ouvrier.id}>
                        <div className="image">
                            <img src={ouvrier.sexe_ouvrier === "G" ? man : woman} alt="avatar" />
                        </div>
                        <div className="ouvrier"><p><span className="title">Nom: </span>{ouvrier.nom_ouvrier}</p></div>
                        <div className="salaire"><p><span className="title">Salaire: </span>{formater(calcSalaire(ouvrier))} Ar</p></div>
                        <div className="nbr"><span className="title">Nb. jours: </span>{ouvrier.nbr_jours}</div>
                        <div className="taux"><span className="title">Taux: </span>{formater(ouvrier.taux_journalier)} Ar</div>
                        {
                            <div className="boutons">
                                <div className="btn-modif" onClick={() => remplirModifForm(ouvrier)}></div>
                                <div className="btn-suppr" onClick={() => confirmerSuppression(ouvrier)}></div>
                            </div>
                        }
                    </div>
                ) : (ouvriers.length === 0 && searchValue) ?
                    <div>Aucun ouvrier ne correspond à votre recherche</div> :
                    data.map(ouvrier =>
                        <div className="container" key={ouvrier.id}>
                            <div className="image">
                                <img src={ouvrier.sexe_ouvrier === "G" ? man : woman} alt="avatar" />
                            </div>
                            <div className="ouvrier"><p><span className="title">Nom: </span>{ouvrier.nom_ouvrier}</p></div>
                            <div className="salaire"><p><span className="title">Salaire: </span>{formater(calcSalaire(ouvrier))} Ar</p></div>
                            <div className="nbr"><p><span className="title">Nb. jours: </span>{ouvrier.nbr_jours}</p></div>
                            <div className="taux">
                                <p><span className="title">Taux: </span>{formater(ouvrier.taux_journalier)}</p>
                            </div>

                            {
                                <div className="boutons">
                                    <div className="btn-modif" onClick={() => remplirModifForm(ouvrier)}></div>
                                    <div className="btn-suppr" onClick={() => confirmerSuppression(ouvrier)}></div>
                                </div>
                            }
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

    </section>


}