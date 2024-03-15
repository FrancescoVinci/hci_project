"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import hc_more from "highcharts/highcharts-more"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip} from "@nextui-org/react";

hc_more(Highcharts);
seriesLabel(Highcharts);
annotations(Highcharts);
const Page = () => {

    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    const options = {
        colors: ['#FFD700', '#C0C0C0', '#CD7F32'],

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
            text: 'Winter Olympic medals per existing country (TOP 5)',
            align: 'left'
        },

        subtitle: {

            align: 'left',

            text: 'Source: ' +
                '<a href="https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table"' +
                'target="_blank">Wikipedia</a>',
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
                'Norway <span class="f16"><span id="flag" class="flag no">' +
                '</span></span>',
                'United States <span class="f16"><span id="flag" class="flag us">' +
                '</span></span>',
                'Germany <span class="f16"><span id="flag" class="flag de">' +
                '</span></span>',
                'Austria <span class="f16"><span id="flag" class="flag at">' +
                '</span></span>',
                'Canada <span class="f16"><span id="flag" class="flag ca">' +
                '</span></span>'
            ]
        },

        yAxis: {
            lineWidth: 0,
            tickInterval: 25,
            reversedStacks: false,
            endOnTick: true,
            showLastLabel: true,
            gridLineWidth: 0
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
                pointPadding: 0,
                groupPadding: 0.15,
                borderRadius: '50%'
            }
        },

        series: [{
            name: 'Gold medals',
            data: [148, 113, 104, 71, 77]
        }, {
            name: 'Silver medals',
            data: [113, 122, 98, 88, 72]
        }, {
            name: 'Bronze medals',
            data: [124, 95, 65, 91, 76]
        }],


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