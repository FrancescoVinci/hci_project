"use client"

import {Accordion, AccordionItem, Button, Card, CardBody} from "@nextui-org/react";

export default function Home() {
    return (
        <Card>
            <CardBody>
                <div>

                    <p className="flex justify-center text-4xl pt-4 font-bold text-blue-600 ">
                        Group BeViCi
                    </p>
                    <p className="flex justify-center text-xl pt-4 font-semibold text-zinc-600">
                        HCI Project 🤖
                    </p>


                    <div className="pt-3 mb-4 px-4">
                        <p>
                            This web application was designed for the{" "}
                            Human Computer Interaction and Information{" "}
                            Visualization course [CM0482].{" "}
                            It contains six different types of{" "}
                            representations showing the data collected in Venice{" "}
                            during the day of 30/11/2023 from a <a
                            className="underline decoration-2 decoration-pink-500">mobile</a> and a <a
                            className="underline decoration-2 decoration-pink-500">fixed stations</a>.{" "}

                        </p>
                    </div>

                    <Accordion>
                        <AccordionItem key="1" aria-label="Stream Graph" title={<div className="flex items-center"><img className="mr-2" width="40" src="/stream_graph.svg"></img><p>Stream Graph</p></div>} >
                            <div className="flex flex-col">
                                <p>dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg
                                    dfgdfgdsfg dfgdfgdsfg</p>
                                <div className=" flex justify-center pt-4">
                                    <Button color="primary">Show</Button>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Chord Diagram" title={<div className="flex items-center"><img className="mr-2" width="40" src="/chord_diagram.svg"></img><p>Chord Diagram</p></div>}>
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Parallel Coordinate Plot" title={<div className="flex items-center"><img className="mr-2" width="40" src="/parallel_coordinates.svg"></img><p>Parallel Coordinate Plot</p></div>}>
                            fff
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Line Graph" title={<div className="flex items-center"><img className="mr-1" width="40" src="/line_graph.svg"></img><p>Line Graph</p></div>}>
                            fff
                        </AccordionItem>
                        <AccordionItem key="5" aria-label="Heat Map" title={<div className="flex items-center"><img className="mr-2" width="40" src="/heat_map.svg"></img><p>Heat Map</p></div>}>
                            fff
                        </AccordionItem>
                        <AccordionItem key="6" aria-label="Spiral Plot" title={<div className="flex items-center"><img className="mr-2" width="40" src="/radial_bar_chart.svg"></img><p>Spiral Plot</p></div>}>
                            fff
                        </AccordionItem>
                    </Accordion>
                </div>
            </CardBody>
        </Card>

    );
}
