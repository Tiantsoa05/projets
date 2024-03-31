import React, { useEffect, useState } from "react";
import axiosQuery from "../config/axios";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
}from "chart.js"
import { Bar } from 'react-chartjs-2';

export default function Stats() {
    const [dataStats, setDataStats] = useState([])

    useEffect(function () {
        axiosQuery.get('/stats')
            .then(Response => Response.json())
            .then(data => {
                setDataStats(data)
            })
    }, [])

    // const data = {
    //     labels: dataStats.map(d => d.mois),
    //     datasets: [
    //         {
    //             label: "Moyenne mensuel des salaires",
    //             data: dataStats.map(d => d.valeur),
    //             backgroundColor: "#F4226"
    //         }
    //     ]
    // }

    const data2 = {
        labels: dataStats.map(d => d.mois),
        datasets:[
            {
                label: "Moyenne mensuel des salaires",
                data: dataStats.map(d => d.valeur),
                barThickness: 30,
                backgroundColor: 'rgb(35, 184, 151)',
                borderRadius: 8,
                order: 1,
                yAxisID: 'real-y-axis'
            },
        ]
    }

    return <section className="stats">
        <div className="chart">
            <Bar
                data={data2}
            />
        </div>
        
    </section>
}