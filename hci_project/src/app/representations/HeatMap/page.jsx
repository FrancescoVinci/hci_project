"use client"


import {Card, CardBody, Chip, Select, SelectItem} from "@nextui-org/react";
import {useState} from "react";
import CO2 from "@/app/representations/HeatMap/CO2";
import Humidity from "@/app/representations/HeatMap/Humidity";
import Temperature from "@/app/representations/HeatMap/Temp";


const Page = () => {
    const [selected, setSelected] = useState("CO2");

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl font-PlayfairDisplay ">Heat Map</p>
                <p className="text-xl font-PlayfairDisplay mb-3">Analysis of Temperature, CO2 and Humidity from stations deployed in University sites</p>

                <div className="flex flex-wrap justify-start gap-2">
                    <Chip color="primary">Co2</Chip>
                    <Chip color="secondary">Temperature</Chip>
                    <Chip className="text-white" color="success">Humidity</Chip>
                </div>

                <p className="font-xl font-Roboto pt-5 mb-7">
                    The heat map representing CO2 <b><i>levels</i></b>, <b><i>temperature</i></b>, and <b><i>humidity</i></b> across various sites at Ca' Foscari University and the city of Venice offers valuable insights into the environmental conditions within the campus and the city throughout the year.
                </p>

                <div className="flex justify-center mb-4">
                    <Select
                        label="Select an option"
                        placeholder="Select..."
                        className="max-w-xs"
                        onSelectionChange={(e) => setSelected(e.currentKey)}
                    >
                        {["CO2", "Temperature", "Humidity"].map((key) => (
                            <SelectItem key={key} value={key}>
                                {key}
                            </SelectItem>
                        ))}
                    </Select>
                </div>

                {selected === "CO2" ?
                    <CO2/>
                    : selected === "Humidity" ?
                        <Humidity/>
                        : <Temperature/>
                }

            </CardBody>
        </Card>
    );
}

export default Page;