"use client"

import {Accordion, AccordionItem, Button, Card, CardBody} from "@nextui-org/react";

export default function Home() {
    return (
        <div className="">

            <Card shadow="lg" className="bg-opacity-90">
                <CardBody>
                    <div className="flex justify-center">

                        <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 inline-block text-transparent bg-clip-text">Group
                            BeViCi</p>

                    </div>

                    <div className="pt-3 mb-4">
                        <p className="font-sans">
                            I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at{" "}
                            <a className="underline decoration-sky-500">My Company, Inc</a>.
                            Outside of work, I like to <a className="underline decoration-pink-500">watch
                            pod-racing</a> and have <a
                            className="underline decoration-indigo-500">light-saber</a> fights.
                        </p>
                    </div>

                    <Accordion variant="splitted">
                        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                            <div className="flex">
                                <p>dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg
                                    dfgdfgdsfg dfgdfgdsfg</p>
                                <div className=" flex justify-center">
                                    <Button color="primary">Show</Button>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            fff
                        </AccordionItem><AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                        fff
                    </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>


        </div>
    );
}
