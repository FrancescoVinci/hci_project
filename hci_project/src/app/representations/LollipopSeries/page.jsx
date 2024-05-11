"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'

import lollipop from "highcharts/modules/lollipop"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip} from "@nextui-org/react";

lollipop(Highcharts);
seriesLabel(Highcharts);
annotations(Highcharts);

const Page = () => {
    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    const options = {
        chart: {
            type: 'lollipop'
        },
    
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {xDescription}, {point.y}.'
            }
        },
    
        legend: {
            enabled: false
        },
    
        subtitle: {
            text: '2021'
        },
    
        title: {
            text: 'Top 10 Countries by Population'
        },
    
        tooltip: {
            shared: true
        },
    
        xAxis: {
            type: 'category'
        },
    
        yAxis: {
            title: {
                text: 'Population'
            }
        },
    
        series: [{
            name: 'Population',
            data: [{
                name: 'China',
                y: 1444216107
            }, {
                name: 'India',
                y: 1393409038
            }, {
                name: 'United States',
                y: 332915073
            }, {
                name: 'Indonesia',
                y: 276361783
            }, {
                name: 'Pakistan',
                y: 225199937
            }, {
                name: 'Brazil',
                y: 213993437
            }, {
                name: 'Nigeria',
                y: 211400708
            }, {
                name: 'Bangladesh',
                y: 166303498
            }, {
                name: 'Russia',
                y: 145912025
            }, {
                name: 'Mexico',
                y: 130262216
            }]
        }]
    
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