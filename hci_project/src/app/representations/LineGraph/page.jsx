"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {usePapaParse} from "react-papaparse";
import {Select, SelectItem} from "@nextui-org/react";


seriesLabel(Highcharts);
annotations(Highcharts);


const Page = () => {

    const {readRemoteFile} = usePapaParse();
    const [selected, setSelected] = useState({currentKey: "1"});
    const [date, setDate] = useState([]);
    const [co2, setCo2] = useState([]);
    const [temperature, setTemperature] = useState([]);
    const [humidity, setHumidity] = useState([]);


    useEffect(() => {
        readRemoteFile(`/lineGraph/sector${selected.currentKey}.csv`, {
            complete: (results) => {

                const date = [];
                const co2 = [];
                const temperature = [];
                const humidity = [];

                results.data.forEach((row, index) => {
                    if (index !== 0 ) {
                        date.push(new Date(row[0]));
                        temperature.push(parseFloat(row[1]));
                        humidity.push(parseFloat(row[2]));
                        co2.push(parseInt(row[3]));
                    }
                });

                setDate(date);
                setCo2(co2);
                setTemperature(temperature);
                setHumidity(humidity);
            },
        });


    }, [selected]);


    if (typeof Highcharts === "object") {
        HighchartsExporting(Highcharts)
    }

    const options = {
        chart: {
            type: "spline"
        },

        credits: {
            enabled: false
        },

        title: {
            align: "left",
            text: "Trend Co2, Temperature, Humidity per path"
        },
        
        subtitle: {
            text: "Source: Mobile Station",
            align: "left"
        },

        xAxis: {
            categories: date.map(date => {
                return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
            }),
            type: 'datetime',

        },

        yAxis: [
            {
                title: {
                    text: "Co2"
                },
            }, {
                title: {
                    text: 'Temperature'
                }
            }, {
                opposite: true,
                title: {
                    text: 'Humidity'
                },
            },
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
                data: co2,
                yAxis: 0
            },
            {
                name: "Temperature",
                data: temperature,
                yAxis: 1,
                animation: {
                    defer: 1000
                }
            },
            {
                name: "Humidity",
                data: humidity,
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

                <div className="flex justify-center mb-4">
                    <Select
                        label="Select a sector"
                        placeholder="Select..."
                        defaultSelectedKeys={["1"]}
                        className="max-w-xs"
                        onSelectionChange={setSelected}
                    >
                        {["1","2","5","6","7","8","9","10","11","12","13","14"].map((sector) => (
                            <SelectItem key={sector} value={sector}>
                                {sector}
                            </SelectItem>
                        ))}
                    </Select>
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