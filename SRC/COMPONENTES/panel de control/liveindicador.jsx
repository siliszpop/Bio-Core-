import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export default function LiveIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <Activity className="w-6 h-6 text-accent" />
          </div>
          <div className="absolute inset-0 w-12 h-12 rounded-full bg-accent/30 animate-pulse-ring" />
        </div>
        <div>
          <p className="font-semibold">Monitoreo en Vivo</p>
          <p className="text-sm text-muted-foreground">Datos actualizándose cada 5 seg</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
        </span>
        <span className="text-sm font-medium text-accent">Activo</span>
      </div>
    </motion.div>
  );
}