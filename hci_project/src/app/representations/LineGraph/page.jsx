"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip} from "@nextui-org/react";
import "./style.css"


seriesLabel(Highcharts);
annotations(Highcharts);
const Page = () => {


    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    const options = {
        chart: {
            zoomType: 'x',
            borderRadius: 8,
            //height: 600,


        },
        credits: {
            enabled: false
        },
        // Make sure connected countries have similar colors

        title: {
            align: 'left',
            text: 'U.S Solar Employment Growth'
        },
        subtitle: {
            floating: false,
            align: 'left',
            y: 30,
            text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
        },
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2020'
            }
        },

        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },

        series: [{
            name: 'Installation & Developers',
            data: [43934, 48656, 65165, 81827, 112143, 142383,
                171533, 165174, 155157, 161454, 154610]
        }, {
            name: 'Manufacturing',
            data: [24916, 37941, 29742, 29851, 32490, 30282,
                38121, 36885, 33726, 34243, 31050]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 30000, 16005, 19771, 20185, 24377,
                32147, 30912, 29243, 29213, 25663]
        }, {
            name: 'Operations & Maintenance',
            data: [null, null, null, null, null, null, null,
                null, 11164, 11218, 10077]
        }, {
            name: 'Other',
            data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
                17300, 13053, 11906, 10073]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },

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