"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import heatMap from "highcharts/modules/heatmap"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
    heatMap(Highcharts);
    seriesLabel(Highcharts);
    annotations(Highcharts);
}



const temperature = [
    [0, 0, 8.07], [0, 1, 10.89], [0, 2, 12.96], [0, 3, 12.47], [0, 4, 13.69], [0, 5, 12.85],
    [1, 0, 14.38], [1, 1, 16.63], [1, 2, 16.38], [1, 3, 15.85], [1, 4, 16.72], [1, 5, 15.91],
    [2, 0, 17.34], [2, 1, 19.62], [2, 2, 18.1], [2, 3, 18.14], [2, 4, 18.55], [2, 5, 18.28],
    [3, 0, 24.87], [3, 1, 24.69], [3, 2, 24.57], [3, 3, 25.04], [3, 4, 27.16], [3, 5, 25.35],
    [4, 0, 28.78], [4, 1, 27.74], [4, 2, 28.43], [4, 3, 29.06], [4, 4, 29.23], [4, 5, 29.2],
    [5, 0, 30.88], [5, 1, 29.6], [5, 2, 30.62], [5, 3, 31.52], [5, 4, 29.21], [5, 5, 31.57],
    [6, 0, 30.09], [6, 1, 29.97], [6, 2, 30.57], [6, 3, 30.46], [6, 4, 28.64], [6, 5, 29.01],
    [7, 0, 26.99], [7, 1, 30.28], [7, 2, 28.48], [7, 3, 27.63], [7, 4, 27.54], [7, 5, 28.64],
    [8, 0, 20.3], [8, 1, 25.55], [8, 2, 23.75], [8, 3, 21.98], [8, 4, NaN], [8, 5, 22.31],
    [9, 0, 10.48], [9, 1, 18.04], [9, 2, 17.62], [9, 3, 13.55], [9, 4, 20.13], [9, 5, 13.59],
]
const scale = [
    [0, '#0500ff'],
    [0.25, '#00b2ff'],
    [0.3, '#8fd48e'],
    [0.5, '#FFA500'],
    [1, '#FF0000']
];
const value = 1;

const Temperature = () => {

    const options = {
        chart: {
            type: 'heatmap',
            plotBorderWidth: 0,
        },

        credits: {
            enabled: false
        },

        title: {
            align: 'left',
            text: 'Temperature Values per Sector Per Month'
        },
        subtitle: {
            align: 'left',
            text: 'Fixed Stations Dataset',
        },

        xAxis: {
            categories: ['February', 'March', 'April', 'May',
                'June', 'July', 'August', 'September', 'October', 'November']
        },

        yAxis: {
            categories: ['CampusS', 'CaFoscari', 'SMarghe', 'SGiobbe', 'SBasilio', 'Briati'],
            title: null,
            reversed: true
        },

        accessibility: {
            point: {
                descriptionFormat: '{(add index 1)}. ' +
                    '{series.xAxis.categories.(x)} sales ' +
                    '{series.yAxis.categories.(y)}, {value}.'
            }
        },

        colorAxis: {
            min: value,
            stops: scale
        },

        legend: {
            align: 'right',
            layout: 'horizontal',
            margin: 5,
            verticalAlign: 'top',
            symbolHeight: 280,
        },

        tooltip: {
            format: '<b>{series.xAxis.categories.(point.x)}</b><br>' +
                'Temperature: <b>{point.value}</b> °C <br>' +
                'at <b>{series.yAxis.categories.(point.y)}</b>'
        },

        series: [{
            name: 'Avg CO2 Values per Station per Month',
            borderWidth: 0.5,
            borderColor: "rgba(0,0,0,.5)",
            data: temperature,
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    yAxis: {
                        labels: {
                            format: '{substr value 0 1}'
                        }
                    }
                }
            }]
        }

    };

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    );
}

export default Temperature;