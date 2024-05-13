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
];

const Page = () => {

    const {readRemoteFile} = usePapaParse();

    const start = "2023-02-01 00:00";
    const end = "2023-11-30";

    const [selected, setSelected] = useState("campusS");
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

    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }


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
                                rangeTemperature.push([parseFloat(row[5]), parseFloat(row[6])]);
                                rangeCO2.push([parseInt(row[7]), parseInt(row[8])]);
                            }
                        }
                    });

                    if (dates.length !== 0) {
                        setDates(dates);
                        setAvgTemperature(avgTemperature);
                        setAvgCO2(avgCO2);
                        setRangeTemperature(rangeTemperature);
                        setRangeCO2(rangeCO2);
                    } else {
                        setDates([]);
                        setAvgTemperature([]);
                        setAvgCO2([]);
                        setRangeTemperature([]);
                        setRangeCO2([]);
                        toast.warn("There is no data for this month...🤷");
                    }
                },
            });
        } else {
            setDates([]);
            setAvgTemperature([]);
            setAvgCO2([]);
            setRangeTemperature([]);
            setRangeCO2([]);
            toast.warn("There is no data for this month...🤷");
        }


    }, [selected, selectedMonthData]);


    const options = {
        chart: {
            scrollablePlotArea: {
                minWidth: 700
            }
        },
        title: {
            text: `Temperature, CO2 - Range and Average (${selectedMonthData.monthName})`,
            align: 'left'
        },

        credits: {
            enabled: false
        },

        subtitle: {
            text: 'Source: Fixed Stations Dataset',
            align: 'left'
        },

        xAxis: {
            type: 'datetime',
            categories: dates.map(date => {
                return date.getDate() + "/" + (date.getMonth() + 1);
            }),
            scrollbar: {
                enabled: true,
            },

        },

        yAxis: [
            {
                title: {
                    text: "Temperature °C"
                }
            },
            {
                title: {
                    text: "CO2 ppm",
                },
                opposite: true,
            }
        ],

        tooltip: {
            crosshairs: true,
            shared: true,
        },


        series: [
            {
                name: 'Temperature',
                yAxis: 0,
                data: avgTemperature,
                zIndex: 1,
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[4]
                },
                tooltip: {
                    valueSuffix: " °C",
                    valueDecimals: 3
                },
            },
            {
                name: 'Range Temp',
                yAxis: 0,
                data: rangeTemperature,
                type: 'arearange',
                lineWidth: 0.5,
                linkedTo: ':previous',
                color: Highcharts.getOptions().colors[4],
                fillOpacity: 0.3,
                zIndex: 0,
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: " °C",
                },
            },
            {
                name: 'CO2',
                yAxis: 1,
                data: avgCO2,
                zIndex: 1,
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[5]
                },
                tooltip: {
                    valueSuffix: " ppm",
                    valueDecimals: 3
                },
            },
            {
                name: 'Range CO2',
                yAxis: 1,
                data: rangeCO2,
                type: 'arearange',
                lineWidth: 0.5,
                linkedTo: ':previous',
                color: Highcharts.getOptions().colors[5],
                fillOpacity: 0.3,
                zIndex: 0,
                marker: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: " ppm",
                },
            },
        ]
    };

    return (
        <>
            <Card className="fullWidth">
                <CardBody className="p-7">
                    <p className="text-3xl font-PlayfairDisplay">Area Range Plot</p>
                    <p className="text-xl font-PlayfairDisplay mb-3 ">Analysis of Peaks, Valleys, and Averages: Temperature and CO2 Trends</p>

                    <div className="flex flex-wrap justify-start gap-2">
                        <Chip color="primary">Temperature</Chip>
                        <Chip color="secondary">CO2</Chip>

                    </div>

                    <p className="font-xl font-Roboto pt-5 mb-7">
                        In the graph, we observe the <b><i>maximums</i></b>, <b><i>minimums</i></b>, and <b><i>averages</i></b> of <b><i>CO2</i></b> and <b><i>temperature</i></b>.
                        These data points are derived from the dataset provided by the monitoring stations situated across university sites.
                        The dataset has been processed by aggregating multiple measurements taken on the same day and calculating the maximums, minimums, and averages for both temperature and CO2 levels.
                    </p>

                    <div className="flex justify-center gap-2  mb-4">
                        <Select
                            label="Select location"
                            placeholder="Select..."
                            defaultSelectedKeys={["campusS"]}
                            className="max-w-xs"
                            onSelectionChange={(e) => setSelected(e.currentKey)}
                        >
                            {locations.map((elem) => (
                                <SelectItem key={elem.key} value={elem.name}>
                                    {elem.name}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className="flex justify-center gap-5  mb-4">
                        <div className="z-10">
                            <MonthInput
                                bgColorHover={"#E4E4E7"}
                                textColor={"#71717A"}
                                bgColor={"#F4F4F5"}
                                size={"small"}
                                selected={selectedMonthData}
                                setShowMonthPicker={setIsPickerOpen}
                                showMonthPicker={isPickerOpen}
                                className="bg-red-500"
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
                theme="light"
            />
        </>
    );
};

export default Page;