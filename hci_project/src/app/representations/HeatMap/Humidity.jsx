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



const humidity = [
    [0, 0, 70], [0, 1, 42], [0, 2, 61], [0, 3, 63], [0, 4, 59], [0, 5, 44],
    [1, 0, 68], [1, 1, 55], [1, 2, 55], [1, 3, 58], [1, 4, 54], [1, 5, 53],
    [2, 0, 58], [2, 1, 48], [2, 2, 51], [2, 3, 52], [2, 4, 50], [2, 5, 48],
    [3, 0, 56], [3, 1, 51], [3, 2, 51], [3, 3, 52], [3, 4, 51], [3, 5, 49],
    [4, 0, 56], [4, 1, 56], [4, 2, 52], [4, 3, 52], [4, 4, 50], [4, 5, 50],
    [5, 0, 61], [5, 1, 59], [5, 2, 55], [5, 3, 54], [5, 4, 58], [5, 5, 53],
    [6, 0, 60], [6, 1, 56], [6, 2, 53], [6, 3, 55], [6, 4, 58], [6, 5, 62],
    [7, 0, 61], [7, 1, 49], [7, 2, 53], [7, 3, 57], [7, 4, 53], [7, 5, 46],
    [8, 0, 77], [8, 1, 55], [8, 2, 60], [8, 3, 66], [8, 4, NaN], [8, 5, 69],
    [9, 0, 80], [9, 1, 50], [9, 2, 61], [9, 3, 64], [9, 4, 78], [9, 5, 70],
]
const scale = [
    [0, '#8fd48e'],
    [0.5, '#BFFF00'],
    [1, '#FF0000']
];
const value = 40;

const Humidity = () => {

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
            text: 'Humidity Values per Sector Per Month'
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
                'Humidity: <b>{point.value}</b> %<br>' +
                'at <b>{series.yAxis.categories.(point.y)}</b>'
        },

        series: [{
            name: 'Avg CO2 Values per Station per Month',
            borderWidth: 0.5,
            borderColor: "rgba(0,0,0,.5)",
            data: humidity,
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

export default Humidity;