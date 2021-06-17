import { Month } from '../../types/commonTypes';
import './ChartBar.css';

type ChartBarProps = {
  key: Month
  value: number
  maxValue: number
  label: Month
}

const ChartBar = (props: ChartBarProps) => {
  let barFillHeight: string = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
