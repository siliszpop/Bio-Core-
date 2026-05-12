import { motion } from 'framer-motion';
import { Bluetooth, Battery, Signal, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SensorStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
      
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg">Estado del Sensor</h3>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-[#789dd3]">
            <span className="text-2xl font-bold text-primary-foreground">BC</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-card" />
        </div>
        <div>
          <p className="font-medium">Bio Core Sensor</p>
          <p className="text-sm text-muted-foreground">v2.1.4 • Conectado</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Bluetooth className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm">Conexión</span>
          </div>
          <span className="text-sm font-medium text-accent">Activa</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Battery className="w-4 h-4 text-accent" />
            </div>
            <span className="text-sm">Batería</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-accent rounded-full" />
            </div>
            <span className="text-sm font-medium">85%</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Signal className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm">Señal</span>
          </div>
          <span className="text-sm font-medium">Excelente</span>
        </div>
      </div>
    </motion.div>);

}