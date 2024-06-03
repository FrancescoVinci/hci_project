"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import parallelGraph from "highcharts/modules/parallel-coordinates"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip} from "@nextui-org/react";
import "./style.css"


if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
    parallelGraph(Highcharts);
    seriesLabel(Highcharts);
    annotations(Highcharts);
}

const data = [
    [494, 3, 0],
    [437, 3, 0],
    [479, 0, 1],
    [478, 0, 1],
    [476, 0, 3],
    [481, 0, 3],
    [473, 1, 3],
    [463, 0, 3],
    [461, 3, 3],
    [461, 3, 1.],
    [461, 2, 1],
    [463, 2, 3],
    [488, 0, 3],
    [474, 2, 1],
    [500, 3, 0]
]
const Page = () => {

    const options = {
        chart: {
            type: 'spline',
            zoomType: 'none',
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
            text: 'CO2 Values in Relation to the Number of Vehicles and Air Quality/Smell'
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
                },
            }
        },
        legend: {
            enabled: true,
            floating: false,
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 0
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span>' +
                '{series.name}: <b>{point.formattedValue}</b><br/>'
        },
        xAxis: {
            categories: [
                'CO2',
                'Vehicles',
                'Air Quality',
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
                categories: [
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
                categories: [
                    "Bad",
                    "Fair",
                    "",
                    "Good"
                ],
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
                name: 'Path ' + (i + 1),
                data: set,
                shadow: false
            };
        }),
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            enabled: true,
                            floating: false,
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom',
                            x: 0,
                            y: 0
                        },
                    }
                }]
        },
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
                    The Parallel Coordinate Plot effectively visualizes the <i>relationship</i> between <b>CO2 concentration</b>,
                    <b>vehicle quantity</b>, and <b>air quality</b> across <b>14 paths</b> on <i>November 30, 2023</i>. Each axis represents
                    one of these variables, while the lines correspond to individual road segments. This plot allows us
                    to observe how traffic volume and CO2 levels correlate with air quality. For example, if lines show
                    similar trends between the CO2 and vehicle quantity axes, it suggests that higher traffic volume
                    might lead to increased CO2 emissions. Additionally, by examining the intersections on the air
                    quality axis, we can discern how changes in CO2 and vehicle numbers impact overall air quality.
                </p>

                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
                <div className='flex items-center justify-center mt-5 min-[640px]:hidden'>
                        <Chip color="default" className='bg-gray-200'>
                            <div className="flex items-center">
                                <img className="mr-4 opacity-55" width="40" src="/rotate_phone.svg"></img>
                                <p className='overflow-auto'>
                                    Better Smartphone Experience
                                </p>
                            </div>
                        </Chip>
                    </div>
            </CardBody>

        </Card>


    );
}

export default Page;