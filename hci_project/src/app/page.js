import Scatterplot from "./graphs/ScatterPlot";
import data from "./data/data";
import {Button} from "@nextui-org/button";

export default function Home() {
    return (
        <>


            <div className="flex justify-center">

                <p className="text-3xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Group
                    BeViCi</p>
            </div>

            <div className="pt-3">
                <p className="font-sans">
                    I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at{" "}
                    <a className="underline decoration-sky-500">My Company, Inc</a>.
                    Outside of work, I like to <a className="underline decoration-pink-500">watch
                    pod-racing</a> and have <a className="underline decoration-indigo-500">light-saber</a> fights.
                </p>
            </div>

        </>
    );
}
