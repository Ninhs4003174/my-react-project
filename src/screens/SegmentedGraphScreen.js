import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function BorderRadius() {
  const layout = 'vertical'; // Fixed layout for vertical bars
  const borderRadius = 50; // Fixed border radius

  return (
    <Stack direction="column" spacing={1} sx={{ width: '100%', maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom>
        Rainfall Statistics
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Rainfall (in mm) across cities for the year
      </Typography>
      <BarChart
        series={[
          { dataKey: 'London', label: 'London', layout },
          { dataKey: 'Paris', label: 'Paris', layout },
          { dataKey: 'NewYork', label: 'New York', layout },
        ]}
        {...chartSettingsV}
        borderRadius={borderRadius} // Fixed border radius
      />
    </Stack>
  );
}

const dataset = [
  { London: 80, Paris: 60, NewYork: 90, month: 'Jan' },
  { London: 70, Paris: 50, NewYork: 85, month: 'Feb' },
  { London: 60, Paris: 55, NewYork: 95, month: 'Mar' },
  { London: 50, Paris: 45, NewYork: 70, month: 'Apr' },
  { London: 45, Paris: 40, NewYork: 65, month: 'May' },
  { London: 30, Paris: 35, NewYork: 50, month: 'Jun' },
  { London: 35, Paris: 25, NewYork: 40, month: 'Jul' },
  { London: 40, Paris: 30, NewYork: 45, month: 'Aug' },
  { London: 50, Paris: 40, NewYork: 55, month: 'Sep' },
  { London: 60, Paris: 50, NewYork: 70, month: 'Oct' },
  { London: 75, Paris: 55, NewYork: 80, month: 'Nov' },
  { London: 85, Paris: 65, NewYork: 90, month: 'Dec' },
];

const chartSettingsV = {
  dataset,
  height: 400,
  xAxis: [{ scaleType: 'band', dataKey: 'month' }],
  yAxis: [{ label: 'Rainfall (mm)' }],
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
  slotProps: {
    legend: {
      direction: 'row',
      position: { vertical: 'top', horizontal: 'center' },
      padding: -5,
    },
  },
};
