"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'

import accessibility from "highcharts/modules/accessibility"
import sankey from "highcharts/modules/sankey"
import dependencyWheel from "highcharts/modules/dependency-wheel"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip, Select, SelectItem} from "@nextui-org/react";

accessibility(Highcharts);
sankey(Highcharts);
dependencyWheel(Highcharts);
seriesLabel(Highcharts);
annotations(Highcharts);
const Page = () => {


    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    const options = {
        credits: {
            enabled: false
        },

        title: {
            align: "left",
            text: "Highcharts Dependency Wheel"
        },
        subtitle: {
            floating: false,
            align: 'left',
            y: 30,
            text: 'Bla bla bla bla bla bla bla bla bla bla',
        },

        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. From {point.from} to {point.to}: {point.weight}.'
            }
        },

        series: [{
            keys: ['from', 'to', 'weight'],
            data: [
                ['Brazil', 'Portugal', 5],
                ['Brazil', 'France', 1],
                ['Brazil', 'Spain', 1],
                ['Brazil', 'England', 1],
                ['Canada', 'Portugal', 1],
                ['Canada', 'France', 5],
                ['Canada', 'England', 1],
                ['Mexico', 'Portugal', 1],
                ['Mexico', 'France', 1],
                ['Mexico', 'Spain', 5],
                ['Mexico', 'England', 1],
                ['USA', 'Portugal', 1],
                ['USA', 'France', 1],
                ['USA', 'Spain', 1],
                ['USA', 'England', 5],
                ['Portugal', 'Angola', 2],
                ['Portugal', 'Senegal', 1],
                ['Portugal', 'Morocco', 1],
                ['Portugal', 'South Africa', 3],
                ['France', 'Angola', 1],
                ['France', 'Senegal', 3],
                ['France', 'Mali', 3],
                ['France', 'Morocco', 3],
                ['France', 'South Africa', 1],
                ['Spain', 'Senegal', 1],
                ['Spain', 'Morocco', 3],
                ['Spain', 'South Africa', 1],
                ['England', 'Angola', 1],
                ['England', 'Senegal', 1],
                ['England', 'Morocco', 2],
                ['England', 'South Africa', 7],
                ['South Africa', 'China', 5],
                ['South Africa', 'India', 1],
                ['South Africa', 'Japan', 3],
                ['Angola', 'China', 5],
                ['Angola', 'India', 1],
                ['Angola', 'Japan', 3],
                ['Senegal', 'China', 5],
                ['Senegal', 'India', 1],
                ['Senegal', 'Japan', 3],
                ['Mali', 'China', 5],
                ['Mali', 'India', 1],
                ['Mali', 'Japan', 3],
                ['Morocco', 'China', 5],
                ['Morocco', 'India', 1],
                ['Morocco', 'Japan', 3],
                ['Japan', 'Brazil', 1]
            ],
            type: 'dependencywheel',
            name: 'Dependency wheel series',
            dataLabels: {
                color: '#333',
                style: {
                    textOutline: 'none'
                },
                textPath: {
                    enabled: true
                },
                distance: 10
            },
            size: '95%'
        }]

    };

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl font-PlayfairDisplay mb-3 ">Chord Diagram</p>

                <div className="flex flex-wrap justify-start gap-2">
                    <Chip color="primary">Bla</Chip>
                    <Chip color="secondary">Bla</Chip>
                    <Chip className="text-white" color="success">Bla</Chip>
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