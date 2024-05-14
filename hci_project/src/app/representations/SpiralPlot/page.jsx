"use client"

import Highcharts from 'highcharts'

import HighchartsExporting from 'highcharts/modules/exporting';
import hc_more from "highcharts/highcharts-more";
import seriesLabel from "highcharts/modules/series-label";
import annotations from "highcharts/modules/annotations";
import HighchartsReact from 'highcharts-react-official';
import {usePapaParse} from "react-papaparse";
import {useEffect, useState} from "react";
import {Card, CardBody, Chip} from "@nextui-org/react";


if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
    hc_more(Highcharts);
    seriesLabel(Highcharts);
    annotations(Highcharts);
}

const ranges = {
    "low": [300, 400],
    "med": [400, 600],
    "high": [600, 700],
}

const Page = () => {
    const avg = (array) => array.reduce((sum, x) => sum + x, 0) / array.length;
    const {readRemoteFile} = usePapaParse();

    // cafoscari data
    const [lowCaFoscari, setLowCaFoscari] = useState(0);
    const [medCaFoscari, setMedCaFoscari] = useState(0);
    const [highCaFoscari, setHighCaFoscari] = useState(0);
    readRemoteFile(`/spiralPlot/CaFoscari.csv`, {
        complete: (results) => {
            const CO2 = [];
            for (let cur_month = 1; cur_month < 11; cur_month++) {
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

            let low = 0;
            let med = 0;
            let high = 0;

            CO2.forEach((x) => {
                if (x >= ranges["low"][0] && x < ranges["low"][1]) {
                    low += 1;
                } else if (x >= ranges["med"][0] && x < ranges["med"][1]) {
                    med += 1;
                } else if (x >= ranges["high"][0] && x <= ranges["high"][1]) {
                    high += 1;
                }
            });

            setLowCaFoscari(low);
            setMedCaFoscari(med);
            setHighCaFoscari(high);
        },
    });

    // Briati data
    const [lowBriati, setLowBriati] = useState(0);
    const [medBriati, setMedBriati] = useState(0);
    const [highBriati, setHighBriati] = useState(0);
    readRemoteFile(`/spiralPlot/Briati.csv`, {
        complete: (results) => {
            const CO2 = [];
            for (let cur_month = 1; cur_month < 11; cur_month++) {
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

            let low = 0;
            let med = 0;
            let high = 0;

            CO2.forEach((x) => {
                if (x >= ranges["low"][0] && x < ranges["low"][1]) {
                    low += 1;
                } else if (x >= ranges["med"][0] && x < ranges["med"][1]) {
                    med += 1;
                } else if (x >= ranges["high"][0] && x <= ranges["high"][1]) {
                    high += 1;
                }
            });

            setLowBriati(low);
            setMedBriati(med);
            setHighBriati(high);
        },
    });

    // SMarghe data
    const [lowSMarghe, setLowSMarghe] = useState(0);
    const [medSMarghe, setMedSMarghe] = useState(0);
    const [highSMarghe, setHighSMarghe] = useState(0);
    readRemoteFile(`/spiralPlot/SMarghe.csv`, {
        complete: (results) => {
            const CO2 = [];
            for (let cur_month = 1; cur_month < 11; cur_month++) {
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

            let low = 0;
            let med = 0;
            let high = 0;

            CO2.forEach((x) => {
                if (x >= ranges["low"][0] && x < ranges["low"][1]) {
                    low += 1;
                } else if (x >= ranges["med"][0] && x < ranges["med"][1]) {
                    med += 1;
                } else if (x >= ranges["high"][0] && x <= ranges["high"][1]) {
                    high += 1;
                }
            });

            setLowSMarghe(low);
            setMedSMarghe(med);
            setHighSMarghe(high);
        },
    });

    // SGiobbe data
    const [lowSGiobbe, setLowSGiobbe] = useState(0);
    const [medSGiobbe, setMedSGiobbe] = useState(0);
    const [highSGiobbe, setHighSGiobbe] = useState(0);
    readRemoteFile(`/spiralPlot/SGiobbe.csv`, {
        complete: (results) => {
            const CO2 = [];
            for (let cur_month = 1; cur_month < 11; cur_month++) {
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

            let low = 0;
            let med = 0;
            let high = 0;

            CO2.forEach((x) => {
                if (x >= ranges["low"][0] && x < ranges["low"][1]) {
                    low += 1;
                } else if (x >= ranges["med"][0] && x < ranges["med"][1]) {
                    med += 1;
                } else if (x >= ranges["high"][0] && x <= ranges["high"][1]) {
                    high += 1;
                }
            });

            setLowSGiobbe(low);
            setMedSGiobbe(med);
            setHighSGiobbe(high);
        },
    });

    // SBasilio data
    const [lowSBasilio, setLowSBasilio] = useState(0);
    const [medSBasilio, setMedSBasilio] = useState(0);
    const [highSBasilio, setHighSBasilio] = useState(0);
    readRemoteFile(`/spiralPlot/SBasilio.csv`, {
        complete: (results) => {
            const CO2 = [];
            for (let cur_month = 1; cur_month < 11; cur_month++) {
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

            let low = 0;
            let med = 0;
            let high = 0;

            CO2.forEach((x) => {
                if (x >= ranges["low"][0] && x < ranges["low"][1]) {
                    low += 1;
                } else if (x >= ranges["med"][0] && x < ranges["med"][1]) {
                    med += 1;
                } else if (x >= ranges["high"][0] && x <= ranges["high"][1]) {
                    high += 1;
                }
            });

            setLowSBasilio(low);
            setMedSBasilio(med);
            setHighSBasilio(high);
        },
    });

    // campusS data
    const [lowcampusS, setLowcampusS] = useState(0);
    const [medcampusS, setMedcampusS] = useState(0);
    const [highcampusS, setHighcampusS] = useState(0);
    readRemoteFile(`/spiralPlot/campusS.csv`, {
        complete: (results) => {
            const CO2 = [];
            for (let cur_month = 1; cur_month < 11; cur_month++) {
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

            let low = 0;
            let med = 0;
            let high = 0;

            CO2.forEach((x) => {
                if (x >= ranges["low"][0] && x < ranges["low"][1]) {
                    low += 1;
                } else if (x >= ranges["med"][0] && x < ranges["med"][1]) {
                    med += 1;
                } else if (x >= ranges["high"][0] && x <= ranges["high"][1]) {
                    high += 1;
                }
            });

            setLowcampusS(low);
            setMedcampusS(med);
            setHighcampusS(high);
        },
    });

    const options = {
        colors: ['#17c964', '#f5a524', '#f31260'],

        chart: {
            type: 'column',
            inverted: true,
            polar: true,
            height: 500,
        },

        credits: {
            enabled: false
        },

        title: {
            text: 'Number of Months per CO2 Levels per Station',
            align: 'left'
        },

        subtitle: {
            align: 'left',
            text: 'subtitle',
        },
        tooltip: {
            outside: true
        },

        pane: {
            size: '85%',
            innerSize: '20%',
            endAngle: 270
        },

        xAxis: {
            tickInterval: 1,
            labels: {
                align: 'right',
                useHTML: true,
                allowOverlap: true,
                step: 1,
                y: 3,
                style: {
                    fontSize: '13px'
                }
            },
            lineWidth: 0,
            gridLineWidth: 0,
            categories: [
                "CampusS",
                "S.Basilio",
                "S.Giobbe",
                "S.Marghe",
                "Briati",
                "Ca Foscari",
            ]
        },

        yAxis: {
            lineWidth: 0.2,
            tickInterval: 1,
            reversedStacks: false,
            endOnTick: true,
            showLastLabel: true,
            gridLineWidth: 1
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
                pointPadding: 1,
                groupPadding: 0.10,
                borderRadius: '50%'
            }
        },

        series: [
            {
                name: 'Low CO2 Level',
                data: [
                    lowcampusS,
                    lowSBasilio,
                    lowSGiobbe,
                    lowSMarghe,
                    lowBriati,
                    lowCaFoscari
                ]
            },
            {
                name: 'Medium CO2 Level',
                data: [
                    medcampusS,
                    medSBasilio,
                    medSGiobbe,
                    medSMarghe,
                    medBriati,
                    medCaFoscari
                ]
            },
            {
                name: 'High CO2 Level',
                data: [
                    highcampusS,
                    highSBasilio,
                    highSGiobbe,
                    highSMarghe,
                    highBriati,
                    highCaFoscari
                ]
            }
        ],

        /*responsive: {
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
        }*/

    };

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl font-PlayfairDisplay mb-3 ">Spiral Plot</p>

                <div className="flex flex-wrap justify-start gap-2">
                    <Chip className="text-white" color="primary">CO2</Chip>

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
                <div className="flex flex-wrap justify-center gap-2">
                    <Chip className="text-white" color="success">{ranges["low"][0] + "-" + ranges["low"][1]}</Chip>
                    <Chip className="text-white" color="warning">{ranges["med"][0] + "-" + ranges["med"][1]}</Chip>
                    <Chip color="danger">{">" + ranges["high"][0]}</Chip>
                </div>

            </CardBody>
        </Card>
    );
}

export default Page;