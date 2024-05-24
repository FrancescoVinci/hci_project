"use client"

import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'

if (typeof Highcharts === 'object') {
    HighchartsMore(Highcharts);
}

const AirSmell = () => {
    const options = {
        chart: {
            polar: true
        },

        title: {
            text: 'Highcharts Polar Chart'
        },

        subtitle: {
            text: 'Also known as Radar Chart'
        },

        pane: {
            startAngle: 0,
            endAngle: 360
        },

        xAxis: {
            tickInterval: 1,
            min: 1,
            max: 16,
            labels: {
                format: 'Path {value}'
            }
        },

        yAxis: {
            min: 0,
            tickPositions: [0, 100, 200, 300, 400],
            labels:{
                enabled: false
            }
        },

        plotOptions: {
            area: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            {
                type: 'area',
                name: 'Path1',
                data: [0, 400, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                color: "red",
            },
            {
                type: 'area',
                name: 'Path2',
                data: [0, 0, 400, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                color: "red",
            },
            {
                type: 'area',
                name: 'Path3',
                data: [0, 0, 0, 300, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                color: "gold",
            },
            {
                type: 'area',
                name: 'Path4',
                data: [0, 0, 0, 0, 300, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                color: "gold",
            },
            {
                type: 'area',
                name: 'Path5',
                data: [0, 0, 0, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                color: "green",
            },
            {
                type: 'area',
                name: 'Path6',
                data: [0, 0, 0, 0, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0, 0, 0],
                color: "green",
            },
            {
                type: 'area',
                name: 'Path7',
                data: [0, 0, 0, 0, 0, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0, 0],
                color: "green",
            },
            {
                type: 'area',
                name: 'Path8',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0],
                color: "green",
            },
            {
                type: 'area',
                name: 'Path9',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 0, 0, 0, 0, 0],
                color: "green",
            },
            {
                type: 'area',
                name: 'Path10',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 300, 0, 0, 0, 0],
                color: "gold",
            },
            {
                type: 'area',
                name: 'Path11',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 300, 0, 0, 0],
                color: "gold",
            },
            {
                type: 'area',
                name: 'Path12',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 0, 0],
                color: "green",
            },
            {
                type: 'area',
                name: 'Path13',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 0],
                color: "green",
            },
            {
                type: 'area',
                name: 'Path14',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 300],
                color: "gold",
            },
            {
                type: 'area',
                name: 'Path15',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 400],
                color: "red",
            }
        ]
    };

    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </>

    );
}

export default AirSmell;