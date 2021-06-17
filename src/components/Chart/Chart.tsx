import { Month } from '../../types/commonTypes';
import ChartBar from './ChartBar';
import Card from '../UI/Card';
import './Chart.css';

type ChartDataPoints = {
  label: Month
  value: number
}

type ChartProps = {
  dataPoints: ChartDataPoints[]
}

const Chart = (props: ChartProps) => {
  const dataPointValues: number[] = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum: number = Math.max(...dataPointValues);

  return (
    <Card className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </Card>
  );
};

export default Chart;
