import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const totalMaximum = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );

  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMaximum}
          label={data.label}
        />
      ))}
    </div>
  );
}

export default Chart;
