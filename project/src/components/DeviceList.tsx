import React from 'react';
import { Card, List, ListItem, Text, Badge } from '@tremor/react';
import { Plug, WifiOff, Activity } from 'lucide-react';
import { useEnergyStore } from '../lib/store';
import { formatKWh } from '../lib/utils';

export function DeviceList() {
  const devices = useEnergyStore((state) => state.devices);

  return (
    <div className="gradient-border">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Text className="font-medium">Connected Devices</Text>
          <Badge color="blue" icon={Activity}>
            {devices.filter(d => d.status === 'online').length} Active
          </Badge>
        </div>
        <List>
          {devices.map((device) => (
            <ListItem key={device.id} className="hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${device.status === 'online' ? 'bg-green-50' : 'bg-red-50'}`}>
                  <Plug className={`w-5 h-5 ${device.status === 'online' ? 'text-green-500' : 'text-red-500'}`} />
                </div>
                <div>
                  <span className="font-medium">{device.name}</span>
                  <Text className="text-xs text-gray-500">{device.type}</Text>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Text className="font-medium">{formatKWh(device.consumption)}</Text>
                {device.status === 'online' ? (
                  <Badge color="green" className="animate-pulse-subtle">Online</Badge>
                ) : (
                  <Badge color="red" icon={WifiOff}>Offline</Badge>
                )}
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}