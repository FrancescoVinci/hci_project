"use client"

import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'

if (typeof Highcharts === 'object') {
    HighchartsMore(Highcharts);
}

const People = () => {
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
            tickPositions: [0, 100, 300200, 300, 400, 500, 600]
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
                data: [0, 494, 494, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                color: "red",
            },
            {
                type: 'area',
                name: 'Path2',
                data: [0, 0, 437, 437, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                type: 'area',
                name: 'Path3',
                data: [0, 0, 0, 479, 479, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                type: 'area',
                name: 'Path4',
                data: [0, 0, 0, 0, 478, 478, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                type: 'area',
                name: 'Path5',
                data: [0, 0, 0, 0, 0, 476, 476, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                type: 'area',
                name: 'Path6',
                data: [0, 0, 0, 0, 0, 0, 481, 481, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                type: 'area',
                name: 'Path7',
                data: [0, 0, 0, 0, 0, 0, 0, 473, 473, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                type: 'area',
                name: 'Path8',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 463, 463, 0, 0, 0, 0, 0, 0]
            },
            {
                type: 'area',
                name: 'Path9',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 461, 461, 0, 0, 0, 0, 0]
            },
            {
                type: 'area',
                name: 'Path10',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 461, 461, 0, 0, 0, 0]
            },
            {
                type: 'area',
                name: 'Path11',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 461, 461, 0, 0, 0]
            },
            {
                type: 'area',
                name: 'Path12',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 463, 463, 0, 0]
            },
            {
                type: 'area',
                name: 'Path13',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 488, 488, 0]
            },
            {
                type: 'area',
                name: 'Path14',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 478, 478]
            },
            {
                type: 'area',
                name: 'Path15',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 500]
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

export default People;