import React, { useEffect, useState } from 'react';
import { generateEnergyData, generateHistoricalData, simulateDeviceData } from './lib/utils';
import { EnergyChart } from './components/EnergyChart';
import { EnergyStats } from './components/EnergyStats';
import { DeviceList } from './components/DeviceList';
import { BudgetSettings } from './components/BudgetSettings';
import { HomeIcon, Sparkles } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

function App() {
  const [currentData, setCurrentData] = useState(generateEnergyData());
  const [historicalData, setHistoricalData] = useState(generateHistoricalData(24));

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generateEnergyData();
      setCurrentData(newData);
      setHistoricalData(prev => [...prev.slice(1), newData]);
      simulateDeviceData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <Toaster position="top-right" />
      
      {/* Header */}
      <div className="glass-effect sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="gradient-border">
                <div className="p-2">
                  <HomeIcon className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Smart Home Energy Monitor
              </h1>
            </div>
            <div className="flex items-center space-x-2 text-blue-600">
              <Sparkles className="w-5 h-5 animate-pulse-subtle" />
              <span className="text-sm font-medium">Live Updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Current Stats */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <span>Current Energy Usage</span>
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse-subtle"></div>
              </h2>
              <EnergyStats
                consumption={currentData.consumption}
                solar={currentData.solar}
                grid={currentData.grid}
              />
            </section>

            {/* Historical Chart */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">24-Hour Energy Trends</h2>
              <div className="chart-container">
                <EnergyChart data={historicalData} />
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <DeviceList />
            <BudgetSettings />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;