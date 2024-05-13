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


                    <div className="pt-3 mb-7 px-4">
                        <p>
                            This web application was developed for the <a className="text-secondary font-bold">Human-Computer
                            Interaction and Information Visualization</a> course [CM0482].
                            It features six distinct types of visual representations showcasing the data collected in
                            Venice on November 30, 2023, from <a className="text-secondary font-bold">mobile</a> and <a
                            className="text-secondary font-bold">fixed</a> stations.
                            The data gathered from fixed stations are obtained from monitoring stations located at
                            university sites.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-5 ">
                        <div className="flex items-center">
                            <img className="mr-2" width="40" src="/heat_map.svg"></img>
                            <p>Heatmap</p>
                        </div>
                        <div className="flex items-center">
                            <img className="mr-2" width="40" src="/radial_bar_chart.svg"></img>
                            <p>Spiral Plot</p>
                        </div>
                        <div className="flex items-center">
                            <img className="mr-2" width="40" src="/area_graph.svg"></img>
                            <p>Area Range Plot</p>
                        </div>
                        <div className="flex items-center">
                            <img className="mr-2" width="40" src="/multiset_bar_chart.svg"></img>
                            <p>Composite Chart</p>
                        </div>
                        <div className="flex items-center">
                            <img className="mr-2" width="40" src="/parallel_coordinates.svg"></img>
                            <p>Parallel Coordinates Plot</p>
                        </div>
                        <div className="flex items-center">
                            <img className="mr-2" width="40" src="/lollipop_chart.png"></img>
                            <p>Lollipop Series</p>
                        </div>
                    </div>


                </div>
            </CardBody>
        </Card>

    );
}
