"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import heatMap from "highcharts/modules/heatmap"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip} from "@nextui-org/react";
import "./style.css";

heatMap(Highcharts);
seriesLabel(Highcharts);
annotations(Highcharts);
const Page = () => {


    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    const options = {
        chart: {
            type: 'heatmap',
            plotBorderWidth: 1
        },

        credits: {
            enabled: false
        },

        title: {
            align: 'left',
            text: 'Sales per employee per weekday'
        },
        subtitle: {
            floating: false,
            align: 'left',
            y: 30,
            text: 'Bla Bla',
        },

        xAxis: {
            categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas',
                'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
        },

        yAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
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
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },

        tooltip: {
            format: '<b>{series.xAxis.categories.(point.x)}</b> sold<br>' +
                '<b>{point.value}</b> items on <br>' +
                '<b>{series.yAxis.categories.(point.y)}</b>'
        },



        series: [{
            name: 'Sales per employee',
            borderWidth: 1,
            data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67],
                [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48],
                [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52],
                [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16],
                [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115],
                [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120],
                [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96],
                [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30],
                [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84],
                [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
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
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl text-zinc-600 mb-3 ">Titolo del grafico: <a
                    className="underline decoration-pink-500">Chord Diagram</a></p>
                <div className="flex flex-wrap justify-start gap-2">
                    <Chip color="default">Default</Chip>
                    <Chip color="primary">Primary</Chip>
                    <Chip color="secondary">Secondary</Chip>
                    <Chip color="success">Success</Chip>
                    <Chip color="warning">Warning</Chip>
                    <Chip color="danger">Danger</Chip>
                </div>
                <div className="pt-3 mb-7">
                    <p className="font-sans text-zinc-700">
                        Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. È
                        sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione,
                        pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei
                        fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più
                        recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem
                        Ipsum.
                    </p>
                </div>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </CardBody>

        </Card>


    );
}

export default Page;