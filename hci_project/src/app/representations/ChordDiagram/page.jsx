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
            align: 'left',
            text: 'Bla bla bla bla bla bla bla bla bla bla',
        },

        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.from} to {point.to}'
            }
        },

        series: [{
            keys: ['from', 'to', 'weight'],
            data: [
                ['CaFoscari', '300-400', 1],
                ['CampusS', '400-500', 1],
                ['Briati', '500-600', 1],
                ['SBasilio', '600-700', 1],
                ['SGiobbe', '400-500', 1],
                ['SMarghe', '300-400', 1],
                ['SMarghe', '400-500', 1],
            ],
            type: 'dependencywheel',
            name: 'CO2 Ranges',
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