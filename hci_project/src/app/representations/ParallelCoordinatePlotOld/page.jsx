"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import parallelGraph from "highcharts/modules/parallel-coordinates"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import { Card, CardBody, Chip } from "@nextui-org/react";
import "./style.css"


if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
    parallelGraph(Highcharts);
    seriesLabel(Highcharts);
    annotations(Highcharts);
}

const data = [
    [494, 3, 3],
    [437, 3, 2],
    [479, 0, 1],
    [478, 0, 3],
    [476, 0, 3],
    [481, 0, 2],
    [473, 1, 3],
    [463, 0, 1],
    [461, 3, 1],
    [461, 3, 0],
    [461, 2, 1],
    [463, 2, 1],
    [488, 0, 3],
    [474, 2, 3],
    [500, 3, 3]
]
const Page = () => {

    const options = {
        chart: {
            type: 'spline',
            zoomType: 'x',
            height: 500,
            parallelCoordinates: true,
            parallelAxes: {
                lineWidth: 2
            }
        },
        credits: {
            enabled: false
        },
        title: {
            align: 'left',
            text: 'CO2 Values in Relation to the Number of Vehicles and People'
        },
        subtitle: {
            align: 'left',
            text: 'Source: mobile station data'
        },
        plotOptions: {
            series: {
                accessibility: {
                    enabled: false
                },
                animation: false,
                marker: {
                    enabled: false,
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                },
                states: {
                    hover: {
                        halo: {
                            size: 0
                        },
                    }
                },
                events: {
                    mouseOver: function () {
                        this.group.toFront();
                    }
                }
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span>' +
                '{series.name}: <b>{point.formattedValue}</b><br/>'
        },
        xAxis: {
            categories: [
                'CO2',
                'Vehicles',
                'People',
            ],
            offset: 10,
        },
        yAxis: [
            {
                tickInterval: 5,
                tooltipValueFormat: '{value}'
            },
            {
                min: 0,
                allowDecimals: false,
                tooltipValueFormat: '{value}',
                startOnTick: false,
                categories:[
                    "None",
                    "Low",
                    "Medium",
                    "High",
                ]
            },
            {
                min: 0,
                allowDecimals: false,
                tooltipValueFormat: '{value}',
                startOnTick: false,
                categories:[
                    "None",
                    "Low",
                    "Medium",
                    "High",
                ]
            },
        ],
        colors: [
            'rgb(230, 25, 75)', // red
            'rgb(245, 130, 48)', // orange
            'rgb(255, 255, 25)', // yellow
            'rgb(210, 245, 60)', // lime
            'rgb(60, 180, 75)', // green
            'rgb(70, 240, 240)', // cyan
            'rgb(0, 130, 200)', // blue
            'rgb(145 30, 180)', // purple
            'rgb(240, 50, 230)', // magenta
            'rgb(128, 128, 128)', // grey
            'rgb(170, 110, 40)', // brown
            'rgb(0, 0, 0)', // black
            'rgb(0, 0, 128)', // navy
            'rgb(255, 215, 180)', // apricot
            'rgb(128, 128, 0)', // olive
        ],
        series: data.map(function (set, i) {
            return {
                name: 'Path ' + i,
                data: set,
                shadow: false
            };
        })
    };

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl font-PlayfairDisplay mb-3 ">Parallel Coordinate Plot</p>

                <div className="flex flex-wrap justify-start gap-2">
                    <Chip color="primary">CO2</Chip>
                    <Chip color="secondary">Vehicles</Chip>
                    <Chip className="text-white" color="success">People</Chip>
                </div>

                <p className="font-xl font-Roboto pt-5 mb-7">
                    Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. È
                    sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione,
                    pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei
                    fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più
                    recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem
                    Ipsum.
                </p>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />

            </CardBody>

        </Card>


    );
}

export default Page;