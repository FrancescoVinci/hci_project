"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import hc_more from "highcharts/highcharts-more"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip, Select, SelectItem} from "@nextui-org/react";
import {usePapaParse} from "react-papaparse";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import {MonthPicker, MonthInput} from 'react-lite-month-picker';


hc_more(Highcharts);
seriesLabel(Highcharts);
annotations(Highcharts);

const locations = [
    {
        name: "P. Briati",
        key: "Briati"
    },
    {
        name: "P. Ca Foscari",
        key: "CaFoscari"
    },
    {
        name: "Campus Scientifico",
        key: "campusS"
    },
    {
        name: "S. Basilio",
        key: "SBasilio"
    },
    {
        name: "S. Giobbe",
        key: "SGiobbe"
    },
    {
        name: "S. Margherita",
        key: "SMarghe"
    }

]

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

    const {readRemoteFile} = usePapaParse();

    const start = "2023-02-01 00:00";
    const end = "2023-11-30";

    const [selected, setSelected] = useState("Briati");
    const [selectedMonthData, setSelectedMonthData] = useState({
        month: 2,
        year: 2023,
        monthName: 'February',
        monthShort: 'Feb'
    });
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    const [dates, setDates] = useState([]);
    const [avgTemperature, setAvgTemperature] = useState([]);
    const [avgCO2, setAvgCO2] = useState([]);
    const [rangeTemperature, setRangeTemperature] = useState([]);
    const [rangeCO2, setRangeCO2] = useState([]);



    useEffect(() => {
        const parsedDate = new Date(selectedMonthData.year + "-" + selectedMonthData.month + "-01");
        const startDate = new Date(start);
        const endDate = new Date(end);

        if (parsedDate.getTime() >= startDate.getTime() && parsedDate.getTime() <= endDate.getTime()) {

            readRemoteFile(`/areaChart/${selected}.csv`, {
                complete: (results) => {

                    const dates = [];
                    const avgTemperature = [];
                    const avgCO2 = [];
                    const rangeTemperature = [];
                    const rangeCO2 = [];

                    results.data.forEach((row, index) => {
                        if (index !== 0) {
                            const rowMonth = new Date(`${row[0]}-${row[1]}-${row[2]}`).getMonth();
                            if (rowMonth === parsedDate.getMonth()) {
                                dates.push(new Date(`${row[0]}-${row[1]}-${row[2]}`));
                                avgTemperature.push(parseFloat(row[3]));
                                avgCO2.push(parseFloat(row[4]));
                                rangeTemperature.push([parseFloat(row[5]),parseFloat(row[6])]);
                                rangeCO2.push([parseInt(row[7]), parseInt(row[8])]);
                            }
                        }
                    });

                    setDates(dates);
                    setAvgTemperature(avgTemperature);
                    setAvgCO2(avgCO2);
                    setRangeTemperature(rangeTemperature);
                    setRangeCO2(rangeCO2);

                },
            });
        } else {
            toast.warn("Non ci sono rilevazioni");
        }


    }, [selected, selectedMonthData]);


    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    const options = {
        title: {
            text: 'CO2 Range and Average',
            align: 'left'
        },

        credits: {
            enabled: false
        },

        subtitle: {
            text: 'Source: ' +
                '<a href="https://www.yr.no/nb/historikk/graf/1-113585/Norge/Viken/Nesbyen/Nesbyen?q=2022-07"' +
                'target="_blank">YR</a>',
            align: 'left'
        },

        xAxis: {
            type: 'datetime',
            categories: dates.map(date => {
                return date.getDate() + "/" + (date.getMonth()+1);
            }),

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


        series: [
            {
                name: 'Temperature',
                data: avgTemperature,
                zIndex: 1,
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[0]
                }
            },
            {
                name: 'Range',
                data: rangeTemperature,
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
        <>
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

                    <div className="flex gap-2 justify-center mb-4">
                        <Select
                            label="Select a location"
                            placeholder="Select..."
                            className="max-w-xs"
                            onSelectionChange={(e) => setSelected(e.currentKey)}
                        >
                            {locations.map((elem) => (
                                <SelectItem key={elem.key} value={elem.name}>
                                    {elem.name}
                                </SelectItem>
                            ))}
                        </Select>

                        <div className="z-10">
                            <MonthInput
                                bgColorHover={"#E4E4E7"}
                                textColor={"#71717A"}
                                bgColor={"#F4F4F5"}
                                size={"small"}
                                selected={selectedMonthData}
                                setShowMonthPicker={setIsPickerOpen}
                                showMonthPicker={isPickerOpen}
                            />
                            {isPickerOpen ? (
                                <MonthPicker
                                    size={"small"}
                                    setIsOpen={setIsPickerOpen}
                                    selected={selectedMonthData}
                                    onChange={setSelectedMonthData}
                                />
                            ) : null}
                        </div>
                    </div>

                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />

                </CardBody>

            </Card>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
};

export default Page;