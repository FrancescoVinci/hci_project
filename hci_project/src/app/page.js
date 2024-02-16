import Scatterplot from "./graphs/ScatterPlot";
import data from "./data/data";

export default function Home() {
  return (
    <div>
      <Scatterplot data={data} width={700} height={400} />
    </div>
  );
}
