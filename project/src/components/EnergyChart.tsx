import React from 'react';
import { AreaChart, Card, Title } from '@tremor/react';
import { format } from 'date-fns';

interface EnergyData {
  timestamp: string;
  consumption: number;
  solar: number;
  grid: number;
}

interface EnergyChartProps {
  data: EnergyData[];
}

export function EnergyChart({ data }: EnergyChartProps) {
  const formattedData = data.map(item => ({
    timestamp: format(new Date(item.timestamp), 'HH:mm'),
    Consumption: item.consumption,
    'Solar Generation': item.solar,
    'Grid Usage': item.grid,
  }));

  return (
    <Card>
      <Title>Energy Usage Over Time</Title>
      <AreaChart
        className="h-72 mt-4"
        data={formattedData}
        index="timestamp"
        categories={['Consumption', 'Solar Generation', 'Grid Usage']}
        colors={['blue', 'yellow', 'red']}
        valueFormatter={(value) => `${value.toFixed(2)} kWh`}
      />
    </Card>
  );
}