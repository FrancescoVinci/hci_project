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
import {usePapaParse} from "react-papaparse";
import {useEffect, useState} from "react";

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
    accessibility(Highcharts);
    sankey(Highcharts);
    dependencyWheel(Highcharts);
    seriesLabel(Highcharts);
    annotations(Highcharts);
}

const ranges = {
    "low": [300, 400],
    "med": [400, 600],
    "high": [600, 700],
}

const files = [
    "Briati",
    "CaFoscari",
    "SBasilio",
    "SMarghe",
    "campusS",
    "SGiobbe",
]

const Page = () => {
    const {readRemoteFile} = usePapaParse();

    const [lowCaFoscari, setLowCaFoscari] = useState(0);
    const [medCaFoscari, setMedCaFoscari] = useState(0);
    const [highCaFoscari, setHighCaFoscari] = useState(0);
    const [lowBriati, setLowBriati] = useState(0);
    const [medBriati, setMedBriati] = useState(0);
    const [highBriati, setHighBriati] = useState(0);
    const [lowSMarghe, setLowSMarghe] = useState(0);
    const [medSMarghe, setMedSMarghe] = useState(0);
    const [highSMarghe, setHighSMarghe] = useState(0);
    const [lowSGiobbe, setLowSGiobbe] = useState(0);
    const [medSGiobbe, setMedSGiobbe] = useState(0);
    const [highSGiobbe, setHighSGiobbe] = useState(0);
    const [lowSBasilio, setLowSBasilio] = useState(0);
    const [medSBasilio, setMedSBasilio] = useState(0);
    const [highSBasilio, setHighSBasilio] = useState(0);
    const [lowcampusS, setLowcampusS] = useState(0);
    const [medcampusS, setMedcampusS] = useState(0);
    const [highcampusS, setHighcampusS] = useState(0);

    useEffect(() => {
        files.forEach(
            (file) => {
                readRemoteFile(`/spiralPlot/${file}.csv`, {
                    complete: (results) => {
                        let low = 0;
                        let med = 0;
                        let high = 0;

                        for (let cur_month = 1; cur_month < 11; cur_month++) {
                            results.data.forEach((row, index) => {
                                if (index !== 0) {
                                    const CO2 = parseFloat(row[3]);
                                    if (CO2 >= ranges["low"][0] && CO2 < ranges["low"][1]) {
                                        low += 1;
                                    } else if (CO2 >= ranges["med"][0] && CO2 < ranges["med"][1]) {
                                        med += 1;
                                    } else if (CO2 >= ranges["high"][0] && CO2 < ranges["high"][1]) {
                                        high += 1;
                                    }
                                }
                            });
                        }

                        if (file === "Briati") {
                            setLowBriati(low);
                            setMedBriati(med);
                            setHighBriati(high);
                        } else if (file === "CaFoscari") {
                            setLowCaFoscari(low);
                            setMedCaFoscari(med);
                            setHighCaFoscari(high);
                        } else if (file === "SBasilio") {
                            setLowSBasilio(low);
                            setMedSBasilio(med);
                            setHighSBasilio(high);
                        } else if (file === "SMarghe") {
                            setLowSMarghe(low);
                            setMedSMarghe(med);
                            setHighSMarghe(high);
                        } else if (file === "campusS") {
                            setLowcampusS(low);
                            setMedcampusS(med);
                            setHighcampusS(high);
                        } else if (file === "SGiobbe") {
                            setLowSGiobbe(low);
                            setMedSGiobbe(med);
                            setHighSGiobbe(high);
                        }
                    },
                });
            }
        );
    }, []);

    const options = {
        credits: {
            enabled: false
        },

        title: {
            align: "left",
            text: "Number of Days Per CO2 Level per Station"
        },
        subtitle: {
            align: 'left',
            text: 'Fixed Station Data',
        },

        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.from} to {point.to}'
            }
        },

        series: [{
            keys: ['from', 'to', 'weight'],
            data: [
                ['CaFoscari', '300-400', lowCaFoscari],
                ['CaFoscari', '400-600', medCaFoscari - 2000],
                ['CaFoscari', '600-700', highCaFoscari],
                ['CampusS', '300-400', lowcampusS],
                ['CampusS', '400-600', medcampusS - 2000],
                ['CampusS', '600-700', highcampusS ],
                ['Briati', '300-400', lowBriati],
                ['Briati', '400-600', medBriati - 2000],
                ['Briati', '600-700', highBriati],
                ['SBasilio', '300-400', lowSBasilio],
                ['SBasilio', '400-600', medSBasilio - 2000],
                ['SBasilio', '600-700', highSBasilio],
                ['SGiobbe', '300-400', lowSGiobbe],
                ['SGiobbe', '400-600', medSGiobbe - 2000],
                ['SGiobbe', '600-700', highSGiobbe],
                ['SMarghe', '300-400', lowSMarghe],
                ['SMarghe', '400-600', medSMarghe - 2000],
                ['SMarghe', '600-700', highSMarghe],
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
                distance: 10,
                padding: 0,
                crop: false,
                overflow: 'allow',
                allowOverlap: true,
            },
            size: '100%',
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