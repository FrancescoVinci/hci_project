"use client"

import {Card, CardBody, Divider} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <Card isBlurred className="border-none bg-background/60">
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
                            This web application was developed for the <a className="text-secondary font-medium">Human-Computer
                            Interaction and Information Visualization</a> course [CM0482].
                            It features six distinct types of visual representations showcasing the data collected in
                            Venice on November 30, 2023, from <a
                            className="text-secondary font-medium">mobile</a> and <a
                            className="text-secondary font-medium">fixed</a> stations.
                            The data gathered from fixed stations are obtained from monitoring stations located at
                            university sites.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 pt-3 mb-7 px-4">
                        <Card className="hover:cursor-pointer" >
                            <CardBody onClick={() => router.push('/representations/HeatMap')}>
                                <div className="flex items-center">
                                    <img className="mr-4" width="40" src="/heat_map.svg"></img>
                                    <p className="bg-gradient-to-r from-blue-600 via-purle-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold">Heatmap</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="hover:cursor-pointer">
                            <CardBody onClick={() => router.push('/representations/SpiralPlot')}>
                                <div className="flex items-center">
                                    <img className="mr-4" width="40" src="/radial_bar_chart.svg"></img>
                                    <p className="bg-gradient-to-r from-blue-600 via-purle-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold">Spiral
                                        Plot</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="hover:cursor-pointer">
                            <CardBody onClick={() => router.push('/representations/AreaRange')}>
                                <div className="flex items-center">
                                    <img className="mr-4" width="40" src="/area_graph.svg"></img>
                                    <p className="bg-gradient-to-r from-blue-600 via-purle-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold">Area
                                        Range Plot</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="hover:cursor-pointer">
                            <CardBody onClick={() => router.push('/representations/CompositeChart')}>
                                <div className="flex items-center">
                                    <img className="mr-4" width="40" src="/multiset_bar_chart.svg"></img>
                                    <p className="bg-gradient-to-r from-blue-600 via-purle-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold">Composite
                                        Chart</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="hover:cursor-pointer">
                            <CardBody onClick={() => router.push('/representations/ParallelCoordinatePlot')}>
                                <div className="flex items-center">
                                    <img className="mr-4" width="40" src="/parallel_coordinates.svg"></img>
                                    <p className="bg-gradient-to-r from-blue-600 via-purle-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold">Parallel
                                        Coordinates Plot</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="hover:cursor-pointer">
                            <CardBody onClick={() => router.push('/representations/LollipopSeries')}>
                                <div className="flex items-center">
                                    <img className="mr-4" width="40" src="/lollipop_chart.png"></img>
                                    <p className="bg-gradient-to-r from-blue-600 via-purle-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold">Lollipop
                                        Series</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <Divider className="my-5"/>

                    <div className="pt-3 mb-7 px-4">
                        <p className="text-2xl font-bold mb-2 text-blue-600">Built with:</p>
                        <p>
                            The website was developed using <a className="text-secondary font-medium">Next.js</a> and <a
                            className="text-secondary font-medium">NextUI</a> and <a
                            className="text-secondary font-medium">Highcharts</a>, three advanced technologies in
                            the field of web development.
                        </p>

                        <ul className="list-disc pt-3 mb-7 px-4">
                            <li><a className="text-sky-500" href="https://nextjs.org/">Next.js</a>, a powerful React
                                framework, offers an excellent development experience with features like server-side
                                rendering and static site generation.
                            </li>
                            <li><a className="text-sky-500" href="https://nextui.org/">NextUI</a>, on the other hand, is
                                a UI component library that makes it easier and faster to
                                create modern and responsive user interfaces.
                            </li>
                            <li><a className="text-sky-500" href="https://nextui.org/">Highcharts</a> is a
                                sophisticated charting library that enables the integration of interactive
                                and visually appealing charts and graphs.
                            </li>
                        </ul>
                    </div>

                    <Divider className="my-5"/>
                    <div className="pt-3 mb-7 px-4">
                        <p className="text-2xl font-bold mb-2 text-blue-600">Developed By:</p>
                        <ul className="list-disc mb-7 px-4">
                            <li>Bedon Filippo (869863)</li>
                            <li>Cimino Antonio (897613)</li>
                            <li>Vinci Francesco (868164)</li>
                        </ul>
                    </div>


                </div>
            </CardBody>
        </Card>

    );
}
