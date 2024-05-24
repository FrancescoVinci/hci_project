"use client"


import {Card, CardBody, Chip, Select, SelectItem} from "@nextui-org/react";
import {useState} from "react";
import CO2 from "@/app/representations/Polar/CO2";
import AirSmell from "@/app/representations/Polar/AirSmell";
import Noise from "@/app/representations/Polar/Noise";
import People from "@/app/representations/Polar/People";
import Vehicles from "@/app/representations/Polar/Vehicles";

const Page = () => {
    const [selected, setSelected] = useState("CO2");

    return (
        <Card className="fullWidth">
            <CardBody className="p-7">
                <p className="text-3xl font-PlayfairDisplay ">Polar</p>
                <p className="text-xl font-PlayfairDisplay mb-3">Analysis of Temperature, CO2 and Humidity from stations
                    deployed in University sites</p>

                <div className="flex flex-wrap justify-start gap-2">
                    <Chip color="primary">Co2</Chip>
                    <Chip color="secondary">Temperature</Chip>
                    <Chip className="text-white" color="success">Humidity</Chip>
                </div>

                <p className="font-xl font-Roboto pt-5 mb-7">
                    The heat map representing <b><i>CO2 levels</i></b>, <b><i>temperature</i></b>,
                    and <b><i>humidity</i></b> across various sites at Ca' Foscari University and the city of Venice
                    offers valuable insights into the environmental conditions within the campus and the city throughout
                    the year.
                </p>

                <div className="flex justify-center mb-4">
                    <Select
                        label="Select an option"
                        placeholder="Select..."
                        className="max-w-xs"
                        onSelectionChange={(e) => setSelected(e.currentKey)}
                    >
                        {["CO2", "AirSmell", "Noise", "People", "Vehicles"].map((key) => (
                            <SelectItem key={key} value={key}>
                                {key}
                            </SelectItem>
                        ))}
                    </Select>
                </div>

                {selected === "CO2" ?
                    <CO2/>
                    : selected === "AirSmell" ?
                        <AirSmell/>
                        : selected === "Noise" ?
                            <Noise/>
                            : selected === "People" ?
                                <People/>
                                : <Vehicles/>
                }

            </CardBody>
        </Card>
    );
}

export default Page;