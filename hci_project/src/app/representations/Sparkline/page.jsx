"use client"

import { Card, CardBody, Chip } from "@nextui-org/react";
import { usePapaParse } from "react-papaparse";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import SparkLineTable from './SparkLineTable.jsx';

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

    const [co2CaFoscari, setco2CaFoscari] = useState(0);
    const [co2Briati, setco2Briati] = useState(0);
    const [co2SMarghe, setco2SMarghe] = useState(0);
    const [co2SGiobbe, setco2SGiobbe] = useState(0);
    const [co2SBasilio, setco2SBasilio] = useState(0);
    const [co2campusS, setco2campusS] = useState(0);
    const [co2TrendCaFoscari, setco2TrendCaFoscari] = useState(0);
    const [co2TrendBriati, setco2TrendBriati] = useState(0);
    const [co2TrendSMarghe, setco2TrendSMarghe] = useState(0);
    const [co2TrendSGiobbe, setco2TrendSGiobbe] = useState(0);
    const [co2TrendSBasilio, setco2TrendSBasilio] = useState(0);
    const [co2TrendcampusS, setco2TrendcampusS] = useState(0);

    const [tempCaFoscari, settempCaFoscari] = useState(0);
    const [tempBriati, settempBriati] = useState(0);
    const [tempSMarghe, settempSMarghe] = useState(0);
    const [tempSGiobbe, settempSGiobbe] = useState(0);
    const [tempSBasilio, settempSBasilio] = useState(0);
    const [tempcampusS, settempcampusS] = useState(0);
    const [tempTrendCaFoscari, settempTrendCaFoscari] = useState(0);
    const [tempTrendBriati, settempTrendBriati] = useState(0);
    const [tempTrendSMarghe, settempTrendSMarghe] = useState(0);
    const [tempTrendSGiobbe, settempTrendSGiobbe] = useState(0);
    const [tempTrendSBasilio, settempTrendSBasilio] = useState(0);
    const [tempTrendcampusS, settempTrendcampusS] = useState(0);

    const [humCaFoscari, setHumCaFoscari] = useState(0);
    const [humBriati, setHumBriati] = useState(0);
    const [humSMarghe, setHumSMarghe] = useState(0);
    const [humSGiobbe, setHumSGiobbe] = useState(0);
    const [humSBasilio, setHumSBasilio] = useState(0);
    const [humcampusS, setHumcampusS] = useState(0);
    const [humTrendCaFoscari, setHumTrendCaFoscari] = useState(0);
    const [humTrendBriati, setHumTrendBriati] = useState(0);
    const [humTrendSMarghe, setHumTrendSMarghe] = useState(0);
    const [humTrendSGiobbe, setHumTrendSGiobbe] = useState(0);
    const [humTrendSBasilio, setHumTrendSBasilio] = useState(0);
    const [humTrendcampusS, setHumTrendcampusS] = useState(0);

    useEffect(() => {
        files.forEach(
            (file) => {
                readRemoteFile(`/spiralPlot/${file}.csv`, {
                    complete: (results) => {
                        const CO2 = [];
                        const TEMP = [];
                        const HUM = [];

                        let end_month = file === "SBasilio" ? 9 : 11;

                        for (let cur_month = 2; cur_month < end_month; cur_month++) {
                            
                            const accCO2 = [];
                            const accTemp = [];
                            const accHum = [];
                            results.data.forEach((row, index) => {
                                if (index !== 0) {
                                    const date = new Date(row[0]);
                                    const rowMonth = date.getMonth();
                                    if (rowMonth === cur_month) {
                                        accCO2.push(parseFloat(row[3]));
                                        accTemp.push(parseFloat(row[1]));
                                        accHum.push(parseFloat(row[2]));
                                    }
                                }
                            });
                            CO2.push(avg(accCO2));
                            TEMP.push(avg(accTemp));
                            HUM.push(avg(accHum));
                        }

                        if (file === "Briati") {
                            setco2Briati(parseInt(avg(CO2)));
                            setco2TrendBriati(CO2);
                            settempBriati(parseInt(avg(TEMP)));
                            settempTrendBriati(TEMP);
                            setHumBriati(parseInt(avg(HUM)));
                            setHumTrendBriati(HUM);
                        } else if (file === "CaFoscari") {
                            setco2CaFoscari(parseInt(avg(CO2)));
                            setco2TrendCaFoscari(CO2);
                            settempCaFoscari(parseInt(avg(TEMP)));
                            settempTrendCaFoscari(TEMP);
                            setHumCaFoscari(parseInt(avg(HUM)));
                            setHumTrendCaFoscari(HUM);
                        } else if (file === "SBasilio") {
                            setco2SBasilio(parseInt(avg(CO2)));
                            setco2TrendSBasilio(CO2);
                            settempSBasilio(parseInt(avg(TEMP)));
                            settempTrendSBasilio(TEMP);
                            setHumSBasilio(parseInt(avg(HUM)));
                            setHumTrendSBasilio(HUM);
                        } else if (file === "SMarghe") {
                            setco2SMarghe(parseInt(avg(CO2)));
                            setco2TrendSMarghe(CO2);
                            settempSMarghe(parseInt(avg(TEMP)));
                            settempTrendSMarghe(TEMP);
                            setHumSMarghe(parseInt(avg(HUM)));
                            setHumTrendSMarghe(HUM);
                        } else if (file === "campusS") {
                            setco2campusS(parseInt(avg(CO2)));
                            setco2TrendcampusS(CO2);
                            settempcampusS(parseInt(avg(TEMP)));
                            settempTrendcampusS(TEMP);
                            setHumcampusS(parseInt(avg(HUM)));
                            setHumTrendcampusS(HUM);
                        } else if (file === "SGiobbe") {
                            setco2SGiobbe(parseInt(avg(CO2)));
                            setco2TrendSGiobbe(CO2);
                            settempSGiobbe(parseInt(avg(TEMP)));
                            settempTrendSGiobbe(TEMP);
                            setHumSGiobbe(parseInt(avg(HUM)));
                            setHumTrendSGiobbe(HUM);
                        }
                    },
                });
            }
        );
    }, []);

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

                    <SparkLineTable>
                        <thead>
                            <tr>
                                <th>Station</th>
                                <th className="text-center">CO2 Avg</th>
                                <th className="text-center">CO2 Trend</th>
                                <th className="text-center">Temp Avg</th>
                                <th className="text-center">Temp Trend</th>
                                <th className="text-center">Humidity Avg</th>
                                <th className="text-center">Humidity Trend</th>
                            </tr>
                        </thead>
                        <tbody id="tbody-sparkline">
                            <tr>
                                <th>CaFoscari</th>
                                <td className="text-center">{co2CaFoscari}</td>
                                <td data-sparkline={co2TrendCaFoscari} />
                                <td className="text-center">{tempCaFoscari}°C</td>
                                <td data-sparkline={tempTrendCaFoscari} />
                                <td className="text-center">{humCaFoscari}%</td>
                                <td data-sparkline={humTrendCaFoscari} />
                            </tr>
                            <tr>
                                <th>Briati</th>
                                <td className="text-center">{co2Briati}</td>
                                <td data-sparkline={co2TrendBriati} />
                                <td className="text-center">{tempBriati}°C</td>
                                <td data-sparkline={tempTrendBriati} />
                                <td className="text-center">{humBriati}%</td>
                                <td data-sparkline={humTrendBriati} />
                            </tr>
                            <tr>
                                <th>SMarghe</th>
                                <td className="text-center">{co2SMarghe}</td>
                                <td data-sparkline={co2TrendSMarghe} />
                                <td className="text-center">{tempSMarghe}°C</td>
                                <td data-sparkline={tempTrendSMarghe} />
                                <td className="text-center">{humSMarghe}%</td>
                                <td data-sparkline={humTrendSMarghe} />
                            </tr>
                            <tr>
                                <th>SGiobbe</th>
                                <td className="text-center">{co2SGiobbe}</td>
                                <td data-sparkline={co2TrendSGiobbe} />
                                <td className="text-center">{tempSGiobbe}°C</td>
                                <td data-sparkline={tempTrendSGiobbe} />
                                <td className="text-center">{humSGiobbe}%</td>
                                <td data-sparkline={humTrendSGiobbe} />
                            </tr>
                            <tr>
                                <th>SBasilio</th>
                                <td className="text-center">{co2SBasilio}</td>
                                <td data-sparkline={co2TrendSBasilio} />
                                <td className="text-center">{tempSBasilio}°C</td>
                                <td data-sparkline={tempTrendSBasilio} />
                                <td className="text-center">{humSBasilio}%</td>
                                <td data-sparkline={humTrendSBasilio} />
                            </tr>
                            <tr>
                                <th>campusS</th>
                                <td className="text-center">{co2campusS}</td>
                                <td data-sparkline={co2TrendcampusS} />
                                <td className="text-center">{tempcampusS}°C</td>
                                <td data-sparkline={tempTrendcampusS} />
                                <td className="text-center">{humcampusS}%</td>
                                <td data-sparkline={humTrendcampusS} />
                            </tr>
                        </tbody>
                    </SparkLineTable>
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