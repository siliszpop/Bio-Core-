import { useAuth } from '@/lib/AuthContext';
import { Heart, Thermometer, Droplets, Wind, Candy, FlaskConical, Activity } from 'lucide-react';
import Header from '@/components/dashboard/Header';
import VitalCard from '@/components/dashboard/VitalCard';
import MetabolicChart from '@/components/dashboard/MetabolicChart';
import SensorStatus from '@/components/dashboard/SensorStatus';
import RecentAlerts from '@/components/dashboard/RecentAlerts';
import LiveIndicator from '@/components/dashboard/LiveIndicator';

export default function Dashboard() {
  const { user } = useAuth();

  const vitals = [
  { icon: Heart, label: 'Ritmo Cardíaco', value: '78', unit: 'bpm', status: 'normal', trend: 2 },
  { icon: Thermometer, label: 'Temperatura', value: '36.5', unit: '°C', status: 'normal' },
  { icon: Droplets, label: 'Oxígeno en Sangre', value: '98', unit: '%', status: 'normal', trend: 1 },

  { icon: Candy, label: 'Glucosa', value: '95', unit: 'mg/dL', status: 'normal', trend: -1 },
  { icon: Activity, label: 'Triglicéridos', value: '142', unit: 'mg/dL', status: 'warning', trend: 3 },
  { icon: FlaskConical, label: 'Colesterol', value: '185', unit: 'mg/dL', status: 'normal', trend: 1 }];


  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Header user={user} />
        
        <LiveIndicator />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-[hsl(var(--chart-3))]">
          {vitals.map((vital, index) =>
          <VitalCard
            key={vital.label}
            {...vital}
            delay={0.1 + index * 0.05} />

          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <MetabolicChart />
          <SensorStatus />
        </div>

        <div className="mt-6">
          <RecentAlerts />
        </div>
      </div>
    </div>);

}