import {Card, CardBody} from "@nextui-org/react";

const Page = () => {


    return (
        <div>
            <p className="text-3xl text-white mb-3 ">Titolo del grafico: <a className="underline decoration-pink-500">Dio Cane</a></p>
            <Card className="bg-opacity-90">
                <CardBody>
                    <div className="pt-3 mb-4">
                        <p className="font-sans">
                            Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>

    );
}

export default Page;