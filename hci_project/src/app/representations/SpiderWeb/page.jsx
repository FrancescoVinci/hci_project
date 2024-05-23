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

const files = [
    "Briati",
    "CaFoscari",
    "SBasilio",
    "SMarghe",
    "campusS",
    "SGiobbe",
]

const Page = () => {
    const avg = (array) => array.reduce((sum, x) => sum + x, 0) / array.length;
    const { readRemoteFile } = usePapaParse();

    const [CaFoscari, setCaFoscari] = useState(0);
    const [Briati, setBriati] = useState(0);
    const [SMarghe, setSMarghe] = useState(0);
    const [SGiobbe, setSGiobbe] = useState(0);
    const [SBasilio, setSBasilio] = useState(0);
    const [campusS, setcampusS] = useState(0);

    useEffect(() => {
        files.forEach(
            (file) => {
                readRemoteFile(`/spiralPlot/${file}.csv`, {
                    complete: (results) => {
                        const CO2 = [];
                        for (let cur_month = 2; cur_month < 11; cur_month++) {
                            const accCO2 = [];
                            results.data.forEach((row, index) => {
                                if (index !== 0) {
                                    const date = new Date(row[0]);
                                    const rowMonth = date.getMonth();
                                    if (rowMonth === cur_month) {
                                        accCO2.push(parseFloat(row[3]));
                                    }
                                }
                            });
                            CO2.push(avg(accCO2));
                        }

                        if (file === "Briati") {
                            setBriati(CO2);
                        } else if (file === "CaFoscari") {
                            setCaFoscari(CO2);
                        } else if (file === "SBasilio") {
                            setSBasilio(CO2);
                        } else if (file === "SMarghe") {
                            setSMarghe(CO2);
                        } else if (file === "campusS") {
                            setcampusS(CO2);
                        } else if (file === "SGiobbe") {
                            setSGiobbe(CO2);
                        }
                    },
                });
            }
        );
    }, []);

    const options = {
        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: 'Avg Monthly CO2 Levels Per Fixed Station',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: [
                'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'
            ],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>' +
                '${point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical'
        },

        series: [
            {
                name: 'CaFoscari',
                data: CaFoscari,
                pointPlacement: 'on'
            },
            {
                name: 'SGiobbe',
                data: SGiobbe,
                pointPlacement: 'on'
            },
            {
                name: 'SMarghe',
                data: SMarghe,
                pointPlacement: 'on'
            },
            {
                name: 'Briati',
                data: Briati,
                pointPlacement: 'on'
            },
            {
                name: 'CampusS',
                data: campusS,
                pointPlacement: 'on'
            },
            {
                name: 'SBasilio',
                data: SBasilio,
                pointPlacement: 'on'
            }
        ],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
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
                        a month, it allows for a more granular analysis, capturing daily trends and anomalies.
                    </p>

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