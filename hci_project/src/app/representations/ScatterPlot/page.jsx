"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip} from "@nextui-org/react";
import {data} from "./data";


seriesLabel(Highcharts);
annotations(Highcharts);
const Page = () => {

    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    const series = [
        {
            name: 'Basketball',
            id: 'basketball',
            marker: {
                symbol: 'circle'
            }
        },
        {
            name: 'Triathlon',
            id: 'triathlon',
            marker: {
                symbol: 'triangle'
            }
        },
        {
            name: 'Volleyball',
            id: 'volleyball',
            marker: {
                symbol: 'square'
            }
        }
    ];


    const getData = sportName => {
        const temp = [];
        data.forEach(elm => {
            if (elm.sport === sportName && elm.weight > 0 && elm.height > 0) {
                temp.push([elm.height, elm.weight]);
            }
        });
        return temp;
    };

    series.forEach(s => {
        s.data = getData(s.id);
    });


    const options = {
        colors: ['rgba(5,141,199,0.5)', 'rgba(80,180,50,0.5)', 'rgba(237,86,27,0.5)'],

        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        // Make sure connected countries have similar colors

        title: {
            align: 'left',
            text: 'Olympics athletes'
        },
        subtitle: {
            floating: false,
            align: 'left',
            y: 30,
            text: 'Source: <a href="https://www.theguardian.com/sport/datablog/2012/aug/07/olympics-2012-athletes-age-weight-height">The Guardian</a>',
        },
        xAxis: {
            title: {
                text: 'Height'
            },
            labels: {
                format: '{value} m'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },

        yAxis: {
            title: {
                text: 'Weight'
            },
            labels: {
                format: '{value} kg'
            }
        },

        legend: {
            enabled: true
        },

        pplotOptions: {
            scatter: {
                marker: {
                    radius: 2.5,
                    symbol: 'circle',
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                jitter: {
                    x: 0.005
                }
            }
        },

        tooltip: {
            pointFormat: 'Height: {point.x} m <br/> Weight: {point.y} kg'
        },

        series

    };

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl font-PlayfairDisplay mb-3 ">Scatter Plot</p>

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