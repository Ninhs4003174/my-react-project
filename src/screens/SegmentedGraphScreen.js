import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const dataset = [
  { month: 'Jan', retail: 40, racing: 20, sports: 40 },
  { month: 'Feb', retail: 50, racing: 10, sports: 40 },
  { month: 'Mar', retail: 30, racing: 20, sports: 50 },
  { month: 'Apr', retail: 40, racing: 10, sports: 30 },
  { month: 'May', retail: 20, racing: 10, sports: 20 },
  { month: 'Jun', retail: 10, racing: 30, sports: 10 },
  { month: 'Jul', retail: 30, racing: 20, sports: 50 },
  { month: 'Aug', retail: 50, racing: 10, sports: 40 },
  { month: 'Sep', retail: 40, racing: 20, sports: 30 },
  { month: 'Oct', retail: 50, racing: 10, sports: 40 },
  { month: 'Nov', retail: 30, racing: 20, sports: 50 },
  { month: 'Dec', retail: 40, racing: 20, sports: 40 },
];

// Custom function to render bars with rounded tops
const RoundedBar = (props) => {
  const { x, y, width, height, fill } = props;

  // Path for rounded rectangle
  const radius = 20; // Adjust for how round you want the corners
  const adjustedHeight = height - radius; // Ensure top corners are rounded
  return (
    <path
      d={`
        M ${x},${y + radius} 
        a ${radius},${radius} 0 0 1 ${radius},-${radius}
        h ${width - 2 * radius} 
        a ${radius},${radius} 0 0 1 ${radius},${radius}
        v ${adjustedHeight} 
        h -${width} 
        z
      `}
      fill={fill}
    />
  );
};

export default function SegmentedBarGraph() {
  return (
    <div style={{ background: '#fff', color: '#000', padding: '20px', borderRadius: '8px' }}>
      <h2 style={{ color: '#000' }}>Revenue per customer type</h2>
      <p style={{ fontSize: '20px', marginBottom: '8px', color: '#000' }}>$240.8K</p>
      <BarChart
        dataset={dataset}
        series={[
          { dataKey: 'retail', label: 'Retail', barRenderer: RoundedBar, fill: '#4caf50' },
          { dataKey: 'racing', label: 'Racing', barRenderer: RoundedBar, fill: '#f9a825' },
          { dataKey: 'sports', label: 'Sports', barRenderer: RoundedBar, fill: '#1976d2' },
        ]}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        yAxis={[{ label: 'Revenue (K)' }]}
        width={800}
        height={400}
        legend={{
          position: 'top',
          labels: ['Retail', 'Racing', 'Sports'],
        }}
      />
    </div>
  );
}



