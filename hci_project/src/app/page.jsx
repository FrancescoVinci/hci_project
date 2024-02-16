"use client"

import { Accordion, AccordionItem, Button, Card, CardBody } from "@nextui-org/react";

export default function Home() {
    return (
        <div className="">


            <div className="flex justify-center">

                <p className="text-4xl pt-4 font-bold text-blue-600 inline-block">Group
                    BeViCi
                </p>

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
                    <div className="flex flex-col">
                        <p>dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg dfgdfgdsfg
                            dfgdfgdsfg dfgdfgdsfg</p>
                        <div className=" flex justify-center pt-4">
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
                <AccordionItem key="4" aria-label="Accordion 4" title="Accordion 3">
                    fff
                </AccordionItem>
                <AccordionItem key="5" aria-label="Accordion 5" title="Accordion 3">
                    fff
                </AccordionItem>
                <AccordionItem key="6" aria-label="Accordion 6" title="Accordion 3">
                    fff
                </AccordionItem>

            </Accordion>




        </div>
    );
}
