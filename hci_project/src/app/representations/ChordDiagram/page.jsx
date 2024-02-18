"use client"

import {useEffect, useRef, useState} from "react";
import {ChordDiagram} from "@/app/graphs/ChordDiagram/ChordDagram";


const Page = () => {

    const parentRef = useRef(null);
    const [width, setWidth] = useState(400);

    //Serve per ridimensionare il grafico
    useEffect(() => {
        const ro = new ResizeObserver((entries) => {
            entries.forEach((entry) => setWidth(entry.contentRect.width));
        });
        ro.observe(parentRef.current);
        return () => ro.disconnect();
    }, []);

    return (
        <div ref={parentRef}>
            <p className="text-3xl text-zinc-600 mb-3 ">Titolo del grafico: <a
                className="underline decoration-pink-500">Chord Diagram</a></p>
            <div className="pt-3 mb-4">
                <p className="font-sans text-zinc-700">
                    Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. È
                    sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione,
                    pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei
                    fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più
                    recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem
                    Ipsum.
                </p>
            </div>
            <div className="flex justify-center">
                <ChordDiagram width={width} height={400} groups={["Barcelona", "Paris", "Dakar", "NY"]}/>
            </div>
        </div>
    );
}

export default Page;