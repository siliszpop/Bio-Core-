import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function VitalCard({
  icon: Icon,
  label,
  value,
  unit,
  status = 'normal',
  trend,
  delay = 0
}) {
  const statusColors = {
    normal: 'text-accent',
    warning: 'text-yellow-500',
    critical: 'text-destructive'
  };

  const statusBg = {
    normal: 'bg-accent/10',
    warning: 'bg-yellow-500/10',
    critical: 'bg-destructive/10'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card rounded-2xl p-5 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
      
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-2.5 rounded-xl text-[#49a284]", statusBg[status])}>
          <Icon className={cn('w-5 h-5', statusColors[status])} />
        </div>
        {trend &&
        <span className={cn(
          'text-xs font-medium px-2 py-1 rounded-full',
          trend > 0 ? 'bg-accent/10 text-accent' : 'bg-destructive/10 text-destructive'
        )}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        }
      </div>
      
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-semibold tracking-tight text-[#4fd8c8]">{value}</span>
        <span className="text-sm text-muted-foreground">{unit}</span>
      </div>
    </motion.div>);

}