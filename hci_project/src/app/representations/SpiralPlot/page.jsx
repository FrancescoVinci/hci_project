"use client"

import Highcharts from 'highcharts'

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
        colors: ['#0FD700', '#FFD700', '#FF2032'],

        chart: {
            type: 'column',
            inverted: true,
            polar: true,
            height: 500,
        },

        credits: {
            enabled: false
        },

        title: {
            text: 'Number of Months per CO2 Levels per Station',
            align: 'left'
        },

        subtitle: {
            align: 'left',
            text: 'subtitle',
        },
        tooltip: {
            outside: true
        },

        pane: {
            size: '85%',
            innerSize: '20%',
            endAngle: 270
        },

        xAxis: {
            tickInterval: 1,
            labels: {
                align: 'right',
                useHTML: true,
                allowOverlap: true,
                step: 1,
                y: 3,
                style: {
                    fontSize: '13px'
                }
            },
            lineWidth: 0,
            gridLineWidth: 0,
            categories: [
                "CampusS",
                "S.Basilio",
                "S.Giobbe",
                "S.Marghe",
                "Briati",
                "Ca Foscari",
            ]
        },

        yAxis: {
            lineWidth: 0.2,
            tickInterval: 1,
            reversedStacks: false,
            endOnTick: true,
            showLastLabel: true,
            gridLineWidth: 1
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
                pointPadding: 1,
                groupPadding: 0.10,
                borderRadius: '50%'
            }
        },

        series: [
            {
                name: 'Low CO2 Level',
                data: [2, 5, 1, 4, 7]
            }, 
            {
                name: 'Medium CO2 Level',
                data: [6, 3, 2, 3, 2]
            }, 
            {
                name: 'High CO2 Level',
                data: [2, 2, 7, 3, 1]
            }
        ],

        /*responsive: {
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
        }*/

    };

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl font-PlayfairDisplay mb-3 ">Spiral Plot</p>

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