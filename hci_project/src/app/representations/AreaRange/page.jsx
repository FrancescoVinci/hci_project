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

const ranges = [
    [13.7, 25.6],
    [13.3, 21.8],
    [11.2, 19.9],
    [7.9, 17.3],
    [4.9, 20.6],
    [5.1, 16.8],
    [9.3, 21.1],
    [11.1, 20.5],
    [8.9, 18.4],
    [4.6, 23.2],
    [11.5, 26.0],
    [8.6, 23.4],
    [9.8, 22.2],
    [8.1, 18.2],
    [5.9, 20.2],
    [4.5, 20.2],
    [8.9, 19.8],
    [11.1, 22.1],
    [7.9, 26.7],
    [15.9, 28.6],
    [14.9, 27.5],
    [9.5, 26.0],
    [11.5, 22.4],
    [8.6, 21.1],
    [12.9, 21.7],
    [13.6, 20.9],
    [9.6, 23.9],
    [8.6, 22.7],
    [7.5, 25.7],
    [5.5, 24.3],
    [10.4, 21.2]

],
averages = [
    [18.1],
    [17.1],
    [15.2],
    [12.7],
    [13.3],
    [10.6],
    [15.6],
    [16.1],
    [14.0],
    [15.3],
    [17.5],
    [17.5],
    [15.3],
    [13.9],
    [13.7],
    [13.8],
    [14.0],
    [15.8],
    [18.6],
    [21.5],
    [19.8],
    [17.6],
    [16.8],
    [15.6],
    [16.7],
    [16.3],
    [17.2],
    [16.0],
    [16.9],
    [16.1],
    [14.5]
];

const Page = () => {

    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    const options = {
        title: {
            text: 'CO2 Range and Average',
            align: 'left'
        },
    
        subtitle: {
            text: 'Source: ' +
                '<a href="https://www.yr.no/nb/historikk/graf/1-113585/Norge/Viken/Nesbyen/Nesbyen?q=2022-07"' +
                'target="_blank">YR</a>',
            align: 'left'
        },
    
        xAxis: {
            type: 'datetime',
            accessibility: {
                rangeDescription: 'Range: Jul 1st 2022 to Jul 31st 2022.'
            }
        },
    
        yAxis: {
            title: {
                text: null
            }
        },
    
        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '°C'
        },
    
        plotOptions: {
            series: {
                pointStart: Date.UTC(2022, 6, 1),
                pointIntervalUnit: 'day'
            }
        },
    
        series: [
            {
                name: 'Temperature',
                data: averages,
                zIndex: 1,
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[0]
                }
            }, 
            {
                name: 'Range',
                data: ranges,
                type: 'arearange',
                lineWidth: 0.5,
                linkedTo: ':previous',
                color: Highcharts.getOptions().colors[0],
                fillOpacity: 0.3,
                zIndex: 0,
                marker: {
                    enabled: false
                }
            }
        ]
    };

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl font-PlayfairDisplay mb-3 ">Area Range Plot</p>

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
};

export default Page;