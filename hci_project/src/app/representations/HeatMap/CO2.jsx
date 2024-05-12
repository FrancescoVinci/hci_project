"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import heatMap from "highcharts/modules/heatmap"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'

heatMap(Highcharts);
seriesLabel(Highcharts);
annotations(Highcharts);

const co2 = [
    [0, 0, 452], [0, 1, 513], [0, 2, 455], [0, 3, 544], [0, 4, 506], [0, 5, 418],
    [1, 0, 432], [1, 1, 525], [1, 2, 453], [1, 3, 522], [1, 4, 438], [1, 5, 479],
    [2, 0, 428], [2, 1, 423], [2, 2, 459], [2, 3, 475], [2, 4, 431], [2, 5, 457],
    [3, 0, 427], [3, 1, 423], [3, 2, 430], [3, 3, 545], [3, 4, 434], [3, 5, 462],
    [4, 0, 433], [4, 1, 428], [4, 2, 429], [4, 3, 436], [4, 4, 434], [4, 5, 422],
    [5, 0, 429], [5, 1, 423], [5, 2, 448], [5, 3, 468], [5, 4, 424], [5, 5, 420],
    [6, 0, 433], [6, 1, 427], [6, 2, 457], [6, 3, 645], [6, 4, 429], [6, 5, 436],
    [7, 0, 433], [7, 1, 424], [7, 2, 465], [7, 3, 470], [7, 4, 440], [7, 5, 443],
    [8, 0, 432], [8, 1, 431], [8, 2, 438], [8, 3, 374], [8, 4, NaN], [8, 5, 436],
    [9, 0, 446], [9, 1, 442], [9, 2, 456], [9, 3, 445], [9, 4, 428], [9, 5, 457],
]
const scale = [
    [0, '#8fd48e'],
    [0.25, '#BFFF00'],
    [0.5, '#FFFF00'],
    [0.75, '#FFA500'],
    [1, '#FF0000']
];
const value = 360;

const CO2 = () => {

    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

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
            text: 'CO2 Values per Sector Per Month'
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
                'CO2: <b>{point.value}</b> <br>' +
                'at <b>{series.yAxis.categories.(point.y)}</b>'
        },

        series: [{
            name: 'Avg CO2 Values per Station per Month',
            borderWidth: 0.5,
            borderColor: "rgba(0,0,0,.5)",
            data: co2,
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

export default CO2;