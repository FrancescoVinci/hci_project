"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import heatMap from "highcharts/modules/heatmap"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import { Card, CardBody, Chip, Select, SelectItem } from "@nextui-org/react";
import "./style.css";
import { useEffect, useState } from "react";

heatMap(Highcharts);
seriesLabel(Highcharts);
annotations(Highcharts);

const start_value = {
    "CO2": 360,
    "Humidity": 40,
    "Temperature": 1,
};

const value_scale = {
    "CO2": [
        [0, '#8fd48e'],
        [0.25, '#BFFF00'],
        [0.5, '#FFFF00'],
        [0.75, '#FFA500'],
        [1, '#FF0000']
    ],
    "Humidity": [
        [0, '#8fd48e'],
        [0.5, '#BFFF00'],
        [1, '#FF0000']
    ],
    "Temperature": [
        [0, '#0500ff'],
        [0.25, '#00b2ff'],
        [0.3, '#8fd48e'],
        [0.5, '#FFA500'],
        [1, '#FF0000']
    ],
};

const data = {
    "CO2": [
        [0, 0, 452], [0, 1, 513], [0, 2, 455], [0, 3, 544], [0, 4, 506], [0, 5, 418],
        [1, 0, 432], [1, 1, 525], [1, 2, 453], [1, 3, 522], [1, 4, 438], [1, 5, 479],
        [2, 0, 428], [2, 1, 423], [2, 2, 459], [2, 3, 475], [2, 4, 431], [2, 5, 457],
        [3, 0, 427], [3, 1, 423], [3, 2, 430], [3, 3, 545], [3, 4, 434], [3, 5, 462],
        [4, 0, 433], [4, 1, 428], [4, 2, 429], [4, 3, 436], [4, 4, 434], [4, 5, 422],
        [5, 0, 429], [5, 1, 423], [5, 2, 448], [5, 3, 468], [5, 4, 424], [5, 5, 420],
        [6, 0, 433], [6, 1, 427], [6, 2, 457], [6, 3, 645], [6, 4, 429], [6, 5, 436],
        [7, 0, 433], [7, 1, 424], [7, 2, 465], [7, 3, 470], [7, 4, 440], [7, 5, 443],
        [8, 0, 432], [8, 1, 431], [8, 2, 438], [8, 3, 374], [8, 4, NaN], [8, 5, 436],
        [9, 0, 446], [9, 1, 442], [9, 2, 456], [9, 3, 445], [9, 4, 428], [9, 5, 457],
    ], 
    "Humidity": [
        [0, 0, 70], [0, 1, 42], [0, 2, 61], [0, 3, 63], [0, 4, 59], [0, 5, 44],
        [1, 0, 68], [1, 1, 55], [1, 2, 55], [1, 3, 58], [1, 4, 54], [1, 5, 53],
        [2, 0, 58], [2, 1, 48], [2, 2, 51], [2, 3, 52], [2, 4, 50], [2, 5, 48],
        [3, 0, 56], [3, 1, 51], [3, 2, 51], [3, 3, 52], [3, 4, 51], [3, 5, 49],
        [4, 0, 56], [4, 1, 56], [4, 2, 52], [4, 3, 52], [4, 4, 50], [4, 5, 50],
        [5, 0, 61], [5, 1, 59], [5, 2, 55], [5, 3, 54], [5, 4, 58], [5, 5, 53],
        [6, 0, 60], [6, 1, 56], [6, 2, 53], [6, 3, 55], [6, 4, 58], [6, 5, 62],
        [7, 0, 61], [7, 1, 49], [7, 2, 53], [7, 3, 57], [7, 4, 53], [7, 5, 46],
        [8, 0, 77], [8, 1, 55], [8, 2, 60], [8, 3, 66], [8, 4, NaN], [8, 5, 69],
        [9, 0, 80], [9, 1, 50], [9, 2, 61], [9, 3, 64], [9, 4, 78], [9, 5, 70],
    ],
    "Temperature":[
        [0, 0, 8.07], [0, 1, 10.89], [0, 2, 12.96], [0, 3, 12.47], [0, 4, 13.69], [0, 5, 12.85],
        [1, 0, 14.38], [1, 1, 16.63], [1, 2, 16.38], [1, 3, 15.85], [1, 4, 16.72], [1, 5, 15.91],
        [2, 0, 17.34], [2, 1, 19.62], [2, 2, 18.1], [2, 3, 18.14], [2, 4, 18.55], [2, 5, 18.28],
        [3, 0, 24.87], [3, 1, 24.69], [3, 2, 24.57], [3, 3, 25.04], [3, 4, 27.16], [3, 5, 25.35],
        [4, 0, 28.78], [4, 1, 27.74], [4, 2, 28.43], [4, 3, 29.06], [4, 4, 29.23], [4, 5, 29.2],
        [5, 0, 30.88], [5, 1, 29.6], [5, 2, 30.62], [5, 3, 31.52], [5, 4, 29.21], [5, 5, 31.57],
        [6, 0, 30.09], [6, 1, 29.97], [6, 2, 30.57], [6, 3, 30.46], [6, 4, 28.64], [6, 5, 29.01],
        [7, 0, 26.99], [7, 1, 30.28], [7, 2, 28.48], [7, 3, 27.63], [7, 4, 27.54], [7, 5, 28.64],
        [8, 0, 20.3], [8, 1, 25.55], [8, 2, 23.75], [8, 3, 21.98], [8, 4, NaN], [8, 5, 22.31],
        [9, 0, 10.48], [9, 1, 18.04], [9, 2, 17.62], [9, 3, 13.55], [9, 4, 20.13], [9, 5, 13.59],
    ]
}

const Page = () => {
    const [selected, setSelected] = useState({currentKey: "CO2"});
    const [cur_data, setData] = useState(data[selected.currentKey]);
    const [cur_value, setValue] = useState(start_value[selected.currentKey]);
    const [cur_scale, setScale] = useState(value_scale[selected.currentKey]);

    useEffect(() => {
        console.log("selected.currentKey = " + selected.currentKey);
        setData(data[selected.currentKey]);
        setValue(start_value[selected.currentKey]);
        setScale(value_scale[selected.currentKey]);
    }, [selected]);

    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    const options = {
        chart: {
            type: 'heatmap',
            plotBorderWidth: 0,
        },

        credits: {
            enabled: false
        },

        title: {
            align: 'left',
            text: 'CO2 Values per Sector Per Month'
        },
        subtitle: {
            align: 'left',
            text: 'Fixed Stations Dataset',
        },

        xAxis: {
            categories: ['February', 'March', 'April', 'May',
                'June', 'July', 'August', 'September', 'October', 'November']
        },

        yAxis: {
            categories: ['CampusS', 'CaFoscari', 'SMarghe', 'SGiobbe', 'SBasilio', 'Briati'],
            title: null,
            reversed: true
        },

        accessibility: {
            point: {
                descriptionFormat: '{(add index 1)}. ' +
                    '{series.xAxis.categories.(x)} sales ' +
                    '{series.yAxis.categories.(y)}, {value}.'
            }
        },

        colorAxis: {
            min: cur_value,
            stops: cur_scale
        },

        legend: {
            align: 'right',
            layout: 'horizontal',
            margin: 5,
            verticalAlign: 'top',
            symbolHeight: 280,
        },

        tooltip: {
            format: '<b>{series.xAxis.categories.(point.x)}</b><br>' +
                'CO2: <b>{point.value}</b> <br>' +
                'at <b>{series.yAxis.categories.(point.y)}</b>'
        },

        series: [{
            name: 'Avg CO2 Values per Station per Month',
            borderWidth: 0.5,
            borderColor: "rgba(0,0,0,.5)",
            data: cur_data,
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    yAxis: {
                        labels: {
                            format: '{substr value 0 1}'
                        }
                    }
                }
            }]
        }

    };

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl font-PlayfairDisplay mb-3 ">Heat Map</p>

                <div className="flex flex-wrap justify-start gap-2">
                    <Chip color="primary">Co2</Chip>
                    <Chip color="secondary">Temperature</Chip>
                    <Chip className="text-white" color="success">Humidity</Chip>
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
                        label="Select an option"
                        placeholder="Select..."
                        defaultSelectedKeys={["CO2"]}
                        className="max-w-xs"
                        onSelectionChange={setSelected}
                    >
                        {["CO2", "Temperature", "Humidity"].map((key) => (
                            <SelectItem key={key} value={key}>
                                {key}
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