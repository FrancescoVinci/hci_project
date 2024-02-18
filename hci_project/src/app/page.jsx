"use client"

import { Accordion, AccordionItem, Button, Card, CardBody } from "@nextui-org/react";

export default function Home() {
    return (
        <div className="">

                <p className="flex justify-center text-4xl pt-4 font-bold text-blue-600 ">
                    Group BeViCi
                </p>
                <p className="flex justify-center text-xl pt-4 font-semibold text-zinc-600">
                    HCI Project 🤖
                </p>


            <div className="pt-3 mb-4 px-4">
                <p className="text-zinc-600 font-sans">
                    This web application was designed for the{" "}
                    Human Computer Interaction and Information{" "}
                    Visualization course [CM0482].{" "}
                    It contains <a className="underline decoration-indigo-500">six</a> different types of{" "}
                    representations showing the data collected in Venice{" "}
                    during the day of 30/11/2023 from a <a className="underline decoration-pink-500">mobile</a> and a <a className="underline decoration-pink-500">fixed</a> stations.{" "}


                </p>
            </div>

            <Accordion variant="splitted">
                <AccordionItem key="1" aria-label="Stream Graph" title="Stream Graph">
                    <div className="flex flex-col">
                        <p>dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg
                            dfgdfgdsfg dfgdfgdsfg</p>
                        <div className=" flex justify-center pt-4">
                            <Button color="primary">Show</Button>
                        </div>
                    </div>
                </AccordionItem>
                <AccordionItem key="2" aria-label="Chord Diagram" title="Chord Diagram">
                    fff
                </AccordionItem>
                <AccordionItem key="3" aria-label="Parallel Coordinate Plot" title="Parallel Coordinate Plot">
                    fff
                </AccordionItem>
                <AccordionItem key="4" aria-label="Line Graph" title="Line Graph">
                    fff
                </AccordionItem>
                <AccordionItem key="5" aria-label="Heat Map" title="Heat Map">
                    fff
                </AccordionItem>
                <AccordionItem key="6" aria-label="Spiral Graph" title="Spiral Graph">
                    fff
                </AccordionItem>
            </Accordion>
        </div>
    );
}
