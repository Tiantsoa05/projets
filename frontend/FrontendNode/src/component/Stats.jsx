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
import { Link } from "react-router-dom"

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export default function Stats() {
    const [dataStats, setDataStats] = useState([])

    useEffect(function () {
        axiosQuery.get('/stats')
            .then(res => setDataStats(res.data))
    }, [])

    const data = {
        labels: dataStats.map(d => d.mois),

        datasets:[
            {
                label: "Moyenne mensuel des salaires",
                data: dataStats.map(d => d.moyenne),
                barThickness: 30,
                backgroundColor: 'rgb(35, 184, 151)',
                borderRadius: 8,
                order: 1,
                yAxisID: 'real-y-axis'
            }
        ]
    }

    return <section className="graphstats">

        <Link to="/">
            <div className="back"></div>
        </Link>

        <div className="chart">
            <Bar
                data={data}
            />
        </div>
        
    </section>
}