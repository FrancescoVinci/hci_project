"use client"


import {Card, CardBody, Chip, Select, SelectItem} from "@nextui-org/react";
import {useEffect, useState} from "react";
import CO2 from "@/app/representations/HeatMap/CO2";
import Humidity from "@/app/representations/HeatMap/Humidity";
import Temperature from "@/app/representations/HeatMap/Temp";


const Page = () => {
    const [selected, setSelected] = useState("CO2");

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
                    <CO2 />
                    : selected === "Humidity" ?
                        <Humidity/>
                        : <Temperature/>
                }





            </CardBody>
        </Card>
    );
}

export default Page;