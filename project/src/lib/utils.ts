import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useEnergyStore } from './store';
import toast from 'react-hot-toast';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateEnergyData() {
  const now = new Date();
  const consumption = Math.random() * 5 + 2;
  const solar = Math.random() * 3;
  const grid = Math.random() * 4 + 1;

  // Check budget alerts
  const { budget } = useEnergyStore.getState();
  if (consumption > budget.daily) {
    toast.error('Daily energy budget exceeded!');
  }

  return {
    timestamp: now.toISOString(),
    consumption,
    solar,
    grid,
  };
}

export function generateHistoricalData(hours: number) {
  const data = [];
  const now = new Date();
  
  for (let i = hours; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000);
    data.push({
      timestamp: timestamp.toISOString(),
      consumption: Math.random() * 5 + 2,
      solar: Math.random() * 3,
      grid: Math.random() * 4 + 1,
    });
  }
  
  return data;
}

export function formatKWh(value: number): string {
  return `${value.toFixed(2)} kWh`;
}

export function calculateCost(kWh: number): number {
  const ratePerKWh = 0.15;
  return kWh * ratePerKWh;
}

export function simulateDeviceData() {
  const store = useEnergyStore.getState();
  store.devices.forEach((device) => {
    const consumption = Math.random() * (device.type === 'appliance' ? 2 : 5);
    const status = Math.random() > 0.95 ? 'offline' : 'online';
    store.updateDevice(device.id, { consumption, status });
  });
}