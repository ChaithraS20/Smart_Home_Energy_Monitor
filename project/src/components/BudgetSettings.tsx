import React, { useState } from 'react';
import { Text, TextInput, Button } from '@tremor/react';
import { useEnergyStore } from '../lib/store';
import toast from 'react-hot-toast';
import { Settings, Save } from 'lucide-react';

export function BudgetSettings() {
  const { budget, setBudget } = useEnergyStore();
  const [daily, setDaily] = useState(budget.daily.toString());
  const [monthly, setMonthly] = useState(budget.monthly.toString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBudget = {
      daily: parseFloat(daily),
      monthly: parseFloat(monthly),
    };
    setBudget(newBudget);
    toast.success('Budget updated successfully');
  };

  return (
    <div className="gradient-border">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-4">
          <div className="p-2 bg-purple-50 rounded-lg">
            <Settings className="w-5 h-5 text-purple-500" />
          </div>
          <Text className="font-medium">Energy Budget Settings</Text>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Text>Daily Budget (kWh)</Text>
            <TextInput
              value={daily}
              onChange={(e) => setDaily(e.target.value)}
              type="number"
              step="0.1"
              min="0"
              className="mt-1"
            />
          </div>
          <div>
            <Text>Monthly Budget (kWh)</Text>
            <TextInput
              value={monthly}
              onChange={(e) => setMonthly(e.target.value)}
              type="number"
              step="1"
              min="0"
              className="mt-1"
            />
          </div>
          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all"
            icon={Save}
          >
            Save Budget
          </Button>
        </form>
      </div>
    </div>
  );
}