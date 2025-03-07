import React from 'react';
import { Card, Grid, Metric, Text } from '@tremor/react';
import { Battery, Zap, SunMedium } from 'lucide-react';
import { formatKWh, calculateCost } from '../lib/utils';

interface EnergyStatsProps {
  consumption: number;
  solar: number;
  grid: number;
}

export function EnergyStats({ consumption, solar, grid }: EnergyStatsProps) {
  return (
    <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-4">
      <div className="gradient-border">
        <div className="p-4 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Zap className="w-6 h-6 text-blue-500" />
            </div>
            <Text>Total Consumption</Text>
          </div>
          <Metric className="text-blue-600">{formatKWh(consumption)}</Metric>
          <Text className="text-tremor-default text-blue-900/60">
            Cost: ${calculateCost(consumption).toFixed(2)}
          </Text>
        </div>
      </div>
      
      <div className="gradient-border">
        <div className="p-4 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <SunMedium className="w-6 h-6 text-yellow-500" />
            </div>
            <Text>Solar Generation</Text>
          </div>
          <Metric className="text-yellow-600">{formatKWh(solar)}</Metric>
          <Text className="text-tremor-default text-yellow-900/60">
            Savings: ${calculateCost(solar).toFixed(2)}
          </Text>
        </div>
      </div>
      
      <div className="gradient-border">
        <div className="p-4 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-red-50 rounded-lg">
              <Battery className="w-6 h-6 text-red-500" />
            </div>
            <Text>Grid Usage</Text>
          </div>
          <Metric className="text-red-600">{formatKWh(grid)}</Metric>
          <Text className="text-tremor-default text-red-900/60">
            Cost: ${calculateCost(grid).toFixed(2)}
          </Text>
        </div>
      </div>
    </Grid>
  );
}