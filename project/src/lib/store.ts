import { create } from 'zustand';

interface Device {
  id: string;
  name: string;
  type: 'appliance' | 'meter' | 'solar';
  consumption: number;
  status: 'online' | 'offline';
}

interface Budget {
  daily: number;
  monthly: number;
}

interface EnergyStore {
  devices: Device[];
  budget: Budget;
  setBudget: (budget: Budget) => void;
  updateDevice: (deviceId: string, data: Partial<Device>) => void;
}

export const useEnergyStore = create<EnergyStore>((set) => ({
  devices: [
    {
      id: '1',
      name: 'Smart Meter',
      type: 'meter',
      consumption: 0,
      status: 'online',
    },
    {
      id: '2',
      name: 'Solar Panels',
      type: 'solar',
      consumption: 0,
      status: 'online',
    },
    {
      id: '3',
      name: 'HVAC System',
      type: 'appliance',
      consumption: 0,
      status: 'online',
    },
    {
      id: '4',
      name: 'Water Heater',
      type: 'appliance',
      consumption: 0,
      status: 'online',
    },
  ],
  budget: {
    daily: 10,
    monthly: 300,
  },
  setBudget: (budget) => set({ budget }),
  updateDevice: (deviceId, data) =>
    set((state) => ({
      devices: state.devices.map((device) =>
        device.id === deviceId ? { ...device, ...data } : device
      ),
    })),
}));