"use client"

import Highcharts, { color } from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import hc_more from "highcharts/highcharts-more"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import { Card, CardBody, Chip } from "@nextui-org/react";

hc_more(Highcharts);
seriesLabel(Highcharts);
annotations(Highcharts);
const Page = () => {

    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    const options = {
        chart: {
            scrollablePlotArea: {
                minWidth: 700
            }
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Average Monthly Weather Data for Tokyo',
            align: 'left'
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            align: 'left'
        },
        xAxis: [{
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
            crosshair: true
        }],
        yAxis: [
            {
                // Temperature yAxis
                labels: {
                    format: '{value}°C',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: false
            },
            {
                // Rainfall yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Rainfall',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    format: '{value} mm',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                opposite: true
            },
            {
                // CO2 yAxis
                gridLineWidth: 0,
                title: {
                    text: 'CO2',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                opposite: false
            },
            {
                // Humidity yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Humidity',
                    style: {
                        color: Highcharts.getOptions().colors[3]
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[3]
                    }
                },
                opposite: true
            }
        ],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: false,
        },
        series: [
            {
                name: 'Rainfall',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                tooltip: {
                    valueSuffix: ' mm'
                },
            },
            {
                name: 'CO2',
                type: 'spline',
                yAxis: 2,
                data: [9.9, 1.5, 16.4, 19.2, 44.0, 76.0, 35.6, 48.5, 16.4, 94.1, 5.6, 4.4],
                tooltip: {
                    valueSuffix: ''
                },
                dashStyle: 'ShortDashDot',
                color: Highcharts.getOptions().colors[2]
            },
            {
                name: 'Temperature',
                type: 'spline',
                yAxis: 0,
                data: [27.0, 26.9, 39.5, 24.5, 38.2, 22.5, 35.2, 36.5, 33.3, 38.3, 33.9, 39.6],
                tooltip: {
                    valueSuffix: ' °C'
                },
                dashStyle: 'ShortDot',
                color: Highcharts.getOptions().colors[0]
            },
            {
                name: 'Humidity',
                type: 'spline',
                yAxis: 3,
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    valueSuffix: ' %'
                },
                dashStyle: 'Dash',
                color: Highcharts.getOptions().colors[3]
            }
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
                        yAxis: [
                            {
                                title:{
                                    text: ''
                                },
                                showLastLabel: false
                            },
                            {
                                title:{
                                    text: ''
                                },
                                showLastLabel: false
                            },
                            {
                                title:{
                                    text: ''
                                },
                                showLastLabel: false
                            },
                            {
                                title:{
                                    text: ''
                                },
                                showLastLabel: false
                            },
                        ]
                    }
                }]
        },
        plotOptions: {
            column: {
                borderColor: "rgba(80,74,205,.6)",
                borderWidth: 2,
                color: "rgba(80,74,205,.2)",
            }
        }
    };

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl font-PlayfairDisplay mb-3 ">Composite Chart</p>

                <div className="flex flex-wrap justify-start gap-2">
                    <Chip color="default">Default</Chip>
                    <Chip color="primary">Primary</Chip>
                    <Chip color="secondary">Secondary</Chip>
                    <Chip color="success">Success</Chip>
                    <Chip color="warning">Warning</Chip>
                    <Chip color="danger">Danger</Chip>
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