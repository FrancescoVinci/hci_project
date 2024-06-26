"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'

import hc_more from "highcharts/highcharts-more"
import lollipop from "highcharts/modules/lollipop"
import dumbbell from "highcharts/modules/dumbbell";
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import { Card, CardBody, Chip } from "@nextui-org/react";

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
    hc_more(Highcharts);
    dumbbell(Highcharts);
    lollipop(Highcharts);
    seriesLabel(Highcharts);
    annotations(Highcharts);
}


const Page = () => {

    const options = {
        chart: {
            scrollablePlotArea: {
                minWidth: 700
            }
        },
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {xDescription}, {point.y}.'
            }
        },

        credits: {
            enabled: false
        },

        legend: {
            enabled: true
        },

        subtitle: {
            text: 'Mobile Station Dataset',
            align: 'left'
        },

        title: {
            text: 'Wind, Noise, Vehicles and People Levels Per Path',
            align: 'left'
        },

        tooltip: {
            crosshairs: true,
            shared: true
        },

        xAxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            scrollbar: {
                enabled: true,
            },
        },

        yAxis: [
            {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        if (this.value === 0) {
                            return 'NONE';
                        } else if (this.value === 1) {
                            return 'LOW';
                        } else if (this.value === 2) {
                            return 'MEDIUM';
                        } else if (this.value === 3) {
                            return 'HIGH';
                        }
                    }
                },
                tickPositions: [0, 1, 2, 3]
            },
            {
                title: {
                    text: 'CO2'
                },
                opposite: true,
            },
        ],

        series: [
            {
                type: 'lollipop',
                yAxis: 0,
                name: 'Wind',
                color: "#006FEE",
                data: [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1],
            },
            {
                type: 'lollipop',
                yAxis: 0,
                name: 'Environmental Noise',
                color: "#9353d3",
                data: [1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 2, 2, 3]
            },
            {
                type: 'lollipop',
                yAxis: 0,
                name: 'Quantity of Vehicles',
                color: "#17c964",
                data: [3, 3, 0, 0, 0, 0, 1, 0, 3, 3, 2, 2, 0, 2, 3]
            },
            {
                type: 'lollipop',
                yAxis: 0,
                name: 'Quantity of People',
                color: "#f5a524",
                data: [3, 2, 1, 3, 3, 2, 3, 1, 1, 0, 1, 1, 3, 3, 3]
            },
            {
                type: 'spline',
                yAxis: 1,
                name: 'CO2',
                lineWidth: 4,
                color: "#f31260",
                data: [494, 437, 479, 478, 476, 481, 473, 463, 461, 461, 461, 463, 488, 478, 500,]
            },
        ],
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
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
                <p className="text-3xl font-PlayfairDisplay mb-3 ">Lollipop Series</p>

                <div className="flex flex-wrap justify-start gap-2">
                    <Chip color="primary">Wind</Chip>
                    <Chip color="secondary">Environmental Noise</Chip>
                    <Chip className="text-white" color="success">Quantity of Vehicles</Chip>
                    <Chip className="text-white" color="warning">Quantity of People</Chip>
                    <Chip className="text-white" color="danger">CO2</Chip>
                </div>

                <p className="font-xl font-Roboto pt-5 mb-7">
                    A lollipop series plot was created to visualize <i>various environmental</i> and <i>traffic metrics</i> along <b>15
                        different paths</b> walked in Venice on <i>November 30th</i>. The plot features <b>wind, ambient noise, number of
                            vehicles, and number of people</b>, each categorized on a scale of <b>NONE, LOW, MEDIUM, and HIGH</b>.
                    Additionally, the <b>concentration of CO2</b> is represented as a
                    line along the x-axis. The y-axis lists the <b>15 paths</b>, providing a clear comparison of these
                    variables for each specific route. This visual representation helps in understanding the
                    environmental conditions and traffic density experienced during the walk.
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