"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import parallelGraph from "highcharts/modules/parallel-coordinates"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip} from "@nextui-org/react";
import "./style.css"

parallelGraph(Highcharts);
seriesLabel(Highcharts);
annotations(Highcharts);

const data = [
    [1012518000000, 5, 2311020, 0, 462180, 1, 0],
    [1012690800000, 5, 2464980, 0, 493020.00000000006, 1, 0],
    [1012863600000, 4, 1881000, 1, 470280.00000000006, 1, 0],
    [1012950000000, 6, 3232020, 1, 538680, 0, 0],
    [1013122800000, 4.5, 2419020, 0, 537540, 1, 0],
    [1013209200000, 5, 2391000, 2, 478200, 1, 0],
    [1013295600000, 4, 2202000, 2, 550500, 1, 0],
    [1013468400000, 5, 2304000, 0, 460799.99999999994, 1, 0],
    [1013554800000, 6, 2806020, 3, 467640, 0, 0],
    [1013727600000, 5, 2401020, 3, 480180, 1, 0],
    [1013900400000, 5, 2385000, 0, 477000, 1, 0],
    [1013986800000, 5, 2386020, 4, 477180, 1, 0],
    [1014073200000, 4, 2026020.0000000002, 0, 506520, 1, 0],
    [1014159600000, 6, 2851020, 4, 475140, 0, 0],
    [1014332400000, 5, 2320020, 4, 463979.99999999994, 1, 0],
    [1014418800000, 5, 2337000, 4, 467400, 1, 0],
    [1014505200000, 4, 1863000, 5, 465780, 1, 0],
    [1014678000000, 6, 2758020, 6, 459659.99999999994, 0, 0],
    [1014764400000, 6, 2808000, 7, 468000, 0, 0],
    [1015023600000, 5, 2638020, 7, 527579.9999999999, 1, 0],
]
const Page = () => {


    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

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
                text: 'Marathon set'
            },
            subtitle: {
                floating: true,
                align: 'left',
                y: 30,
                text: 'Source: blabla.com'
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
                            }
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
                    'Training date',
                    'Miles for training run',
                    'Training time',
                    'Shoe brand',
                    'Running pace per mile',
                    'Short or long',
                    'After 2004'
                ],
                offset: 10
            },
            yAxis: [{
                type: 'datetime',
                tooltipValueFormat: '{value:%Y-%m-%d}'
            }, {
                min: 0,
                tooltipValueFormat: '{value} mile(s)'
            }, {
                type: 'datetime',
                min: 0,
                labels: {
                    format: '{value:%H:%M}'
                }
            }, {
                categories: [
                    'Other',
                    'Adidas',
                    'Mizuno',
                    'Asics',
                    'Brooks',
                    'New Balance',
                    'Izumi'
                ]
            }, {
                type: 'datetime'
            }, {
                categories: ['> 5miles', '< 5miles']
            }, {
                categories: ['Before', 'After']
            }],
            colors: ['rgba(11, 200, 200, 0.1)'],
            series: data.map(function (set, i) {
                return {
                    name: 'Runner ' + i,
                    data: set,
                    shadow: false
                };
            })

        }
    ;

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl text-zinc-600 mb-3 ">Titolo del grafico: <a
                    className="underline decoration-pink-500">Parallel Coordinate Plot</a></p>
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