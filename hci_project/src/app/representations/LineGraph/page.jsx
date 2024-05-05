"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {usePapaParse} from "react-papaparse";

seriesLabel(Highcharts);
annotations(Highcharts);


const Page = () => {

    const {readRemoteFile} = usePapaParse();
    const [parsedData1, setParsedData1] = useState([]);
    const [parsedData2, setParsedData2] = useState([]);
    const [parsedData3, setParsedData3] = useState([]);

    const decodeWindDirection = (wind) => {
        switch (wind) {
            case "N":
                return 0;
            case "NNE":
                return 1;
            case "NE":
                return 2;
            case "ENE":
                return 3;
            case "E":
                return 4;
            case "ESE":
                return 5;
            case "SE":
                return 6;
            case "SSE":
                return 7;
            case "S":
                return 8;
            case "SSO":
                return 9;
            case "SO":
                return 10;
            case "OSO":
                return 11;
            case "O":
                return 12;
            case "ONO":
                return 13;
            case "NO":
                return 14;
            case "NNO":
                return 15;
            default:
                console.log(`Oops...`);
        }
    }

    useEffect(() => {
        readRemoteFile("/data.csv", {
            complete: (results) => {

                const seriesData1 = [];
                const seriesData2 = [];
                const seriesData3 = [];

                results.data.forEach((row, index) => {
                    if (index !== 0) {
                        seriesData1.push(parseInt(row[4]));
                        seriesData2.push(parseFloat(row[5]));
                        seriesData3.push(decodeWindDirection(row[6]));
                    }
                });

                console.log(seriesData1)
                console.log(seriesData2)
                console.log(seriesData3)

                setParsedData1(seriesData1);
                setParsedData2(seriesData2);
                setParsedData3(seriesData3);
            },
        });


    }, [])


    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    const options = {
        chart: {
            type: 'spline'
        },

        credits: {
            enabled: false
        },

        title: {
            align: 'left',
            text: 'United States of America\'s Inflation-related statistics',
        },
        subtitle: {
            text: 'Source: <a href="https://www.worldbank.org/en/home">The World Bank</a>',
            align: 'left'
        },

        yAxis: [
            {
                title: {
                    text: 'Co2'
                },
                plotLines: [
                    {
                        color: 'black',
                        width: 2,
                        value: 13.5492019749684,
                        animation: {
                            duration: 1000,
                            defer: 4000
                        },
                        label: {
                            text: 'Max Co2',
                            align: 'right',
                            x: -20
                        }
                    }
                ]
            }, {
                title: {
                    text: 'Avg Wind Speed'
                }
            }, {
                opposite: true,
                title: {
                    text: 'Wind Direction'
                },


            }
        ],

        plotOptions: {
            series: {
                animation: {
                    duration: 1000
                },
                marker: {
                    enabled: false
                },
                lineWidth: 2
            }
        },

        series: [
            {
                name: "Co2",
                data: parsedData1,
                yAxis: 0
            },
            {
                name: "Wind Speed",
                data: parsedData2,
                yAxis: 1,
                animation: {
                    defer: 1000
                }
            },
            {
                name: "Avg Wind Direction",
                data: parsedData3,
                yAxis: 2,
                animation: {
                    defer: 2000
                },
            },
        ],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    yAxis: [{
                        tickAmount: 2,
                        title: {
                            x: 15,
                            reserveSpace: false
                        }
                    }, {
                        tickAmount: 2,
                        title: {
                            x: 20,
                            reserveSpace: false
                        }
                    }, {
                        tickAmount: 2,
                        title: {
                            x: -20,
                            reserveSpace: false
                        }
                    }, {
                        tickAmount: 2,
                        title: {
                            x: -20,
                            reserveSpace: false
                        }
                    }]
                }
            }]
        }

    };

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl font-PlayfairDisplay mb-3 ">Line Graph</p>

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