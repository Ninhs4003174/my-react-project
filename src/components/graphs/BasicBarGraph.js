import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { basicDataset, valueFormatter } from '../../dataset/basicData';

const chartSettings = {
  yAxis: [
    {
      label: 'Percentage (%)',
    },
  ],
  width: 500,
  height: 300,
  margin: { top: 10, bottom: 30, left: 40, right: 10 },
};

export default function BasicBarGraph() {
  return (
    <BarChart
      dataset={basicDataset}
      xAxis={[{ scaleType: 'band', dataKey: 'category' }]}
      series={[
        { dataKey: 'value', label: 'Basic Values', valueFormatter },
      ]}
      {...chartSettings}
    />
  );
}
