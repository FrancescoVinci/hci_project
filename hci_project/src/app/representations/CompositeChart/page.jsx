"use client"

import Highcharts, { color } from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import hc_more from "highcharts/highcharts-more"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import { Card, CardBody, Chip, Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import { MonthPicker, MonthInput } from 'react-lite-month-picker';
import { usePapaParse } from "react-papaparse";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
    hc_more(Highcharts);
    seriesLabel(Highcharts);
    annotations(Highcharts);
}

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
    const { readRemoteFile } = usePapaParse();

    const start = "2023-02-01 00:00";
    const end = "2023-11-30";

    const [radioValue, setRadioValue] = useState("daily")

    const [selected, setSelected] = useState("campusS");
    const [selectedMonthData, setSelectedMonthData] = useState({
        month: 2,
        year: 2023,
        monthName: 'February',
        monthShort: 'Feb'
    });
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const [showMonthPicker, setShowMonthPicker] = useState(true);

    const [dates, setDates] = useState([]);
    const [temperature, setTemperature] = useState([]);
    const [co2, setCO2] = useState([]);
    const [rainfall, setRainfall] = useState([]);
    const [humidity, setHumidity] = useState([]);

    useEffect(() => {
        if (radioValue === "daily") {
            const parsedDate = new Date(selectedMonthData.year + "-" + selectedMonthData.month + "-01");
            const startDate = new Date(start);
            const endDate = new Date(end);

            if (parsedDate.getTime() >= startDate.getTime() && parsedDate.getTime() <= endDate.getTime()) {
                readRemoteFile(`/compositeChart/${selected}.csv`, {
                    complete: (results) => {
                        const dates = [];
                        const temp = [];
                        const CO2 = [];
                        const rain = [];
                        const humid = [];

                        results.data.forEach((row, index) => {
                            if (index !== 0) {
                                const date = new Date(row[0]);
                                const rowMonth = date.getMonth();
                                if (rowMonth === parsedDate.getMonth()) {
                                    const day = date.getDate();
                                    dates.push(day);
                                    temp.push(parseFloat(row[1]));
                                    humid.push(parseFloat(row[2]));
                                    CO2.push(parseFloat(row[3]));
                                    rain.push(parseFloat(row[4]));
                                }
                            }
                        });

                        setDates(dates);
                        setCO2(CO2);
                        setHumidity(humid);
                        setRainfall(rain);
                        setTemperature(temp);
                    },
                });
            } else {
                toast.warn("There is no data for this month...🤷");
            }
        } else {
            const avg = (array) => array.reduce((sum, x) => sum + x, 0) / array.length;

            readRemoteFile(`/compositeChart/${selected}.csv`, {
                complete: (results) => {
                    const temp = [];
                    const CO2 = [];
                    const rain = [];
                    const humid = [];

                    for (let cur_month = 1; cur_month <= 12; cur_month++) {
                        const accTemp = [];
                        const accHumid = [];
                        const accCO2 = [];
                        const accRain = [];
                        results.data.forEach((row, index) => {
                            if (index !== 0) {
                                const date = new Date(row[0]);
                                const rowMonth = date.getMonth();
                                if (rowMonth === cur_month) {
                                    accTemp.push(parseFloat(row[1]));
                                    accHumid.push(parseFloat(row[2]));
                                    accCO2.push(parseFloat(row[3]));
                                    accRain.push(parseFloat(row[4]));
                                }
                            }
                        });
                        if (accTemp.length != 0 ){
                            temp.push(avg(accTemp));
                            humid.push(avg(accHumid));
                            CO2.push(avg(accCO2));
                            rain.push(avg(accRain));

                            console.log(temp);
                            console.log(humid);
                            console.log(CO2);
                            console.log(rain);
                        }
                    }
                    setDates(["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]);
                    setCO2(CO2);
                    setHumidity(humid);
                    setRainfall(rain);
                    setTemperature(temp);
                },
            });
        }
    }, [selected, selectedMonthData, radioValue]);

    const changeRadioValue = (e) => {
        if (e === "daily") {
            setShowMonthPicker(true);
        } else {
            setShowMonthPicker(false);
        }
        setRadioValue(e);
    }

    const options = {
        chart: {
            scrollablePlotArea: {
                minWidth: 700
            }
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'CO2, Rainfall, Temperature and Humidity',
            align: 'left'
        },
        subtitle: {
            text: 'Fixed Stations Dataset & Cavanis Dataset',
            align: 'left'
        },
        xAxis: [{
            categories: dates,
            crosshair: true
        }],
        yAxis: [
            {
                // Temperature yAxis
                labels: {
                    format: '{value}°C',
                    style: {
                        color: "#006FEE"
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: "#006FEE"
                    }
                },
                opposite: false
            },
            {
                // Rainfall yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Rainfall',
                    style: {
                        color: "#9353d3"
                    }
                },
                labels: {
                    format: '{value} mm',
                    style: {
                        color: "#9353d3"
                    }
                },
                opposite: true
            },
            {
                // CO2 yAxis
                gridLineWidth: 0,
                title: {
                    text: 'CO2',
                    style: {
                        color: "#17c964"
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: "#17c964"
                    }
                },
                opposite: false
            },
            {
                // Humidity yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Humidity',
                    style: {
                        color: "#f5a524"
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: "#f5a524"
                    }
                },
                opposite: true
            }
        ],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: false,
        },
        series: [
            {
                name: 'Rainfall',
                type: 'column',
                yAxis: 1,
                data: rainfall,
                tooltip: {
                    valueSuffix: ' mm',
                    valueDecimals: 3

                },
            },
            {
                name: 'CO2',
                type: 'spline',
                yAxis: 2,
                data: co2,
                dashStyle: 'ShortDashDot',
                color: "#17c964",
                tooltip: {
                    valueSuffix: " ppm",
                    valueDecimals: 0
                },
            },
            {
                name: 'Temperature',
                type: 'spline',
                yAxis: 0,
                data: temperature,
                tooltip: {
                    valueSuffix: ' °C',
                    valueDecimals: 3

                },
                dashStyle: 'ShortDot',
                color: "#006FEE"
            },
            {
                name: 'Humidity',
                type: 'spline',
                yAxis: 3,
                data: humidity,
                tooltip: {
                    valueSuffix: ' %',
                    valueDecimals: 3

                },
                dashStyle: 'Dash',
                color: "#f5a524"
            }
        ],
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            floating: false,
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom',
                            x: 0,
                            y: 0
                        },
                        yAxis: [
                            {
                                title: {
                                    text: ''
                                },
                                showLastLabel: false
                            },
                            {
                                title: {
                                    text: ''
                                },
                                showLastLabel: false
                            },
                            {
                                title: {
                                    text: ''
                                },
                                showLastLabel: false
                            },
                            {
                                title: {
                                    text: ''
                                },
                                showLastLabel: false
                            },
                        ]
                    }
                }]
        },
        plotOptions: {
            column: {
                borderColor: "#9353d3",
                borderWidth: 2,
                color: "rgba(147,83,211,.4)",
            }
        }
    };

    return (
        <>
            <Card className="fullWidth">
                <CardBody className="p-7">
                    <p className="text-3xl font-PlayfairDisplay mb-3 ">Composite Chart</p>

                    <div className="flex flex-wrap justify-start gap-2">
                        <Chip color="primary">Temperature</Chip>
                        <Chip color="secondary">Rainfall</Chip>
                        <Chip className="text-white" color="success">CO2</Chip>
                        <Chip className="text-white" color="warning">Humidity</Chip>
                    </div>

                    <p className="font-xl font-Roboto pt-5 mb-1">
                        This chart displays various environmental indicators on the y-axis, namely{" "}
                        <i><b>precipitation</b></i>, <i><b>CO2 levels</b></i>, <i><b>temperature</b></i>, and <i><b>humidity</b></i>. The x-axis represents time, which can be
                        viewed either by months within a year or by days within a month.
                    </p>
                    <p className="font-xl font-Roboto mb-7">
                        The chart provides a comprehensive overview of how these indicators fluctuate over time. For
                        instance, it shows monthly variations throughout the year, highlighting seasonal changes in
                        weather patterns, CO2 concentrations, and temperature. Alternatively, when viewed by days within
                        a month, it allows for a more granular analysis, capturing daily trends and anomalies (like no data gathered in october for SBasilio Station).
                    </p>

                    <div className="flex justify-center gap-5  mb-4">
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


                        <RadioGroup
                            color="secondary"
                            defaultValue="daily"
                            value={radioValue}
                            onValueChange={changeRadioValue}
                        >
                            <Radio value="daily">Daily</Radio>
                            <Radio value="monthly">Monthly</Radio>
                        </RadioGroup>


                    </div>
                    <div className="flex flex-col items-center">
                        {showMonthPicker &&
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
                        }
                    </div>

                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                    <div className='flex items-center justify-center mt-5 min-[640px]:hidden'>
                        <Chip color="default" className='bg-gray-200'>
                            <div className="flex items-center">
                                <img className="mr-4 opacity-55" width="40" src="/rotate_phone.svg"></img>
                                <p className='overflow-auto'>
                                    Better Smartphone Experience
                                </p>
                            </div>
                        </Chip>
                    </div>
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
}

export default Page;