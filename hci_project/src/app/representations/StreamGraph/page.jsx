import { Card, CardBody } from "@nextui-org/react";

const Page = () => {
    return (
        <div>
            <p className="text-3xl text-zinc-600 mb-3 ">Titolo del grafico: <a className="underline decoration-pink-500">Dio Cane</a></p>
            <div className="pt-3 mb-4">
                <p className="font-sans text-zinc-700">
                    Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
                </p>
            </div>
        </div>
    );
}

export default Page;