import React, { useEffect, useState } from "react";
import axiosQuery from "../config/axios";
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

    return <section className="stats">
        <Bar
            data={[]}
        />
    </section>
}