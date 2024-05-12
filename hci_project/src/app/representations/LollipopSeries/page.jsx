"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import hc_more from "highcharts/highcharts-more"
import lollipop from "highcharts/modules/lollipop"
import dumbbell from "highcharts/modules/dumbbell";
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip} from "@nextui-org/react";

hc_more(Highcharts);
dumbbell(Highcharts); // dependency for lollipop
lollipop(Highcharts);
seriesLabel(Highcharts);
annotations(Highcharts);

const Page = () => {

    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    const options = {
        chart: {},
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {xDescription}, {point.y}.'
            }
        },

        legend: {
            enabled: true
        },

        subtitle: {
            text: 'subtitle',
            align: 'left'
        },

        title: {
            text: 'Top 10 Countries by Population',
            align: 'left'
        },

        tooltip: {
            crosshairs: true,
            shared: true
        },

        xAxis: {
            type: 'category'
        },

        yAxis: [
            {
                title: {
                    text: 'Wind'
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
                }
            },
            {
                title: {
                    text: 'Environmental Noise'
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
                }
            },
            {
                title: {
                    text: 'Quantity of Vehicles'
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
                }
            },
            {
                title: {
                    text: 'Quantity of People'
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
                }
            },
            {
                title: {
                    text: 'CO2'
                },
                labels: {
                    format: "{value}"
                },
                opposite: true
            },
        ],

        series: [
            {
                type: 'lollipop',
                yAxis: 1,
                name: 'Wind',
                data: [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1],
                tooltip: {
                    pointFormatter: function () {
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
                }
            },
            {
                type: 'lollipop',
                yAxis: 1,
                name: 'Environmental Noise',
                data: [1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 2, 2, 3]
            },
            {
                type: 'lollipop',
                yAxis: 1,
                name: 'Quantity of Vehicles',
                data: [3, 3, 0, 0, 0, 0, 1, 0, 3, 3, 2, 2, 0, 2, 3]
            },
            {
                type: 'lollipop',
                yAxis: 1,
                name: 'Quantity of People',
                data: [3, 2, 1, 3, 3, 2, 3, 1, 1, 0, 1, 1, 3, 3, 3]
            },
            {
                type: 'spline',
                name: 'CO2',
                data: [494, 437, 479, 478, 476, 481, 473, 463, 461, 461, 461, 463, 488, 478, 500,]
            },
        ]
    };

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl font-PlayfairDisplay mb-3 ">Lollipop Series</p>

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