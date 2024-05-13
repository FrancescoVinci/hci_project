"use client"

import Highcharts, {color} from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting'
import hc_more from "highcharts/highcharts-more"
import seriesLabel from "highcharts/modules/series-label"
import annotations from "highcharts/modules/annotations"
import HighchartsReact from 'highcharts-react-official'
import {Card, CardBody, Chip, Radio, RadioGroup, Select, SelectItem} from "@nextui-org/react";
import {MonthPicker, MonthInput} from 'react-lite-month-picker';
import {usePapaParse} from "react-papaparse";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";

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
                            console.log(date);
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

    }, [selected, selectedMonthData]);

    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

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
            text: 'Fixed Stations Dataset',
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
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: Highcharts.getOptions().colors[0]
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
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    format: '{value} mm',
                    style: {
                        color: Highcharts.getOptions().colors[1]
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
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[2]
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
                        color: Highcharts.getOptions().colors[3]
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[3]
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
                    valueSuffix: ' mm'
                },
            },
            {
                name: 'CO2',
                type: 'spline',
                yAxis: 2,
                data: co2,
                tooltip: {
                    valueSuffix: ''
                },
                dashStyle: 'ShortDashDot',
                color: Highcharts.getOptions().colors[2]
            },
            {
                name: 'Temperature',
                type: 'spline',
                yAxis: 0,
                data: temperature,
                tooltip: {
                    valueSuffix: ' °C'
                },
                dashStyle: 'ShortDot',
                color: Highcharts.getOptions().colors[0]
            },
            {
                name: 'Humidity',
                type: 'spline',
                yAxis: 3,
                data: humidity,
                tooltip: {
                    valueSuffix: ' %'
                },
                dashStyle: 'Dash',
                color: Highcharts.getOptions().colors[3]
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
                borderColor: "rgba(80,74,205,.6)",
                borderWidth: 2,
                color: "rgba(80,74,205,.2)",
            }
        }
    };

    return (
        <>
            <Card className="fullWidth">
                <CardBody className="p-7">
                    <p className="text-3xl font-PlayfairDisplay mb-3 ">Composite Chart</p>

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