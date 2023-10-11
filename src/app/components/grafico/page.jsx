"use client"

import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar, Chart } from 'react-chartjs-2'

ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

export default function Grafico() {
    const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"]
    const vendedor_1 = [23, 112, 104, 57, 98, 123]
    const vendedor_2 = [47, 99, 102, 143, 139, 107]
    const vendedor_3 = [55, 44, 108, 110, 90, 101]

    const data = {
        labels: ['mon', 'Tue', 'Wed', 'Thu'],
        datasets: [{
            label: "Victor",
            data: vendedor_1,
            borderColor: 'black',
            backgroundColor: 'blue',
            borderWidth: 1
        },{
            label: "Rafael",
            data: vendedor_2,
            borderColor: 'black',
            backgroundColor: 'red',
            borderWidth: 1
        },{
            label: "Carlos",
            data: vendedor_3,
            borderColor: 'black',
            backgroundColor: 'purple',
            borderWidth: 1
        }
    ]
    }
    const options = {}



    return(
        <div className='max-w-[700px] w-full'>
            <Bar
                data={data}
                options={options}
            >

            </Bar>
        </div>
    )
}