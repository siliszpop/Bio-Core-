import { motion } from 'framer-motion';
import { AlertTriangle, Info, CheckCircle, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const alerts = [
  {
    id: 1,
    type: 'warning',
    message: 'Glucosa elevada: 95 mg/dL detectada',
    time: 'Hace 1 hora',
    icon: AlertTriangle
  },
  {
    id: 2,
    type: 'warning',
    message: 'Triglicéridos elevados: 142 mg/dL',
    time: 'Hace 3 horas',
    icon: AlertTriangle
  },
  {
    id: 3,
    type: 'info',
    message: 'Colesterol en límite: 185 mg/dL',
    time: 'Hace 5 horas',
    icon: Info
  },
  {
    id: 4,
    type: 'info',
    message: 'Sincronización de datos completada',
    time: 'Hace 4 horas',
    icon: Info
  },
  {
    id: 5,
    type: 'success',
    message: 'Todos los signos vitales normales',
    time: 'Hace 6 horas',
    icon: CheckCircle
  }
];

const typeStyles = {
  warning: {
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-600',
    border: 'border-yellow-500/20'
  },
  info: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary/20'
  },
  success: {
    bg: 'bg-accent/10',
    text: 'text-accent',
    border: 'border-accent/20'
  }
};

export default function RecentAlerts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-card rounded-2xl p-6 shadow-sm border border-border/50"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-lg">Alertas Recientes</h3>
        <button className="text-sm text-primary hover:underline">Ver todas</button>
      </div>

      <div className="space-y-3">
        {alerts.map((alert, index) => {
          const Icon = alert.icon;
          const styles = typeStyles[alert.type];
          
          return (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className={cn(
                'flex items-center gap-3 p-3 rounded-xl border cursor-pointer hover:shadow-sm transition-shadow',
                styles.bg,
                styles.border
              )}
            >
              <div className={cn('p-2 rounded-lg', styles.bg)}>
                <Icon className={cn('w-4 h-4', styles.text)} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{alert.message}</p>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}