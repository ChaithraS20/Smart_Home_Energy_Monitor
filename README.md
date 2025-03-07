# Smart Home Energy Monitor

A modern, real-time energy monitoring system for smart homes built with React and TypeScript. This application provides an intuitive interface for tracking energy consumption, solar generation, and grid usage with beautiful visualizations and live updates.

![Smart Home Energy Monitor](https://images.unsplash.com/photo-1558449907-39d65710c603?auto=format&fit=crop&q=80&w=1200)

## Features

### Real-Time Monitoring
- Live energy consumption tracking
- Solar power generation metrics
- Grid usage statistics
- Automatic updates every 5 seconds
- Visual indicators for live data updates

### Device Management
- Connected device status monitoring
- Individual device energy consumption tracking
- Real-time device status indicators
- Automatic status updates
- Device type categorization

### Energy Budget Management
- Daily and monthly budget settings
- Budget alerts and notifications
- Interactive budget adjustment interface
- Success notifications for updates

### Data Visualization
- 24-hour historical data trends
- Interactive charts with hover effects
- Color-coded metrics for different energy sources
- Responsive design for all screen sizes

## Technical Implementation

### Frontend Architecture
- **React** with **TypeScript** for type safety
- **Tailwind CSS** for responsive styling
- **Tremor** for data visualization components
- **Zustand** for state management
- **React Hot Toast** for notifications

### UI Components
- Custom gradient borders and animations
- Glass effect header with sticky positioning
- Animated status indicators
- Responsive grid layouts
- Interactive hover effects

### Design Features
- Modern gradient color scheme
- Professional animations and transitions
- Consistent visual hierarchy
- Responsive layout system
- Accessibility considerations

### State Management
- Centralized store for device data
- Real-time data simulation
- Efficient state updates
- Persistent budget settings

## Performance Optimizations
- Efficient component rendering
- Optimized animations
- Responsive image loading
- Minimal bundle size
- Smart state updates

## Future Enhancements
- Machine learning for energy predictions
- Voice assistant integration
- Mobile application development
- Additional device integrations
- Advanced analytics features

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Tech Stack
- React 18
- TypeScript
- Tailwind CSS
- Tremor
- Zustand
- Lucide React Icons
- React Hot Toast
- Vite

## Project Structure
```
src/
├── components/
│   ├── BudgetSettings.tsx
│   ├── DeviceList.tsx
│   ├── EnergyChart.tsx
│   └── EnergyStats.tsx
├── lib/
│   ├── store.ts
│   └── utils.ts
├── App.tsx
└── main.tsx
```
