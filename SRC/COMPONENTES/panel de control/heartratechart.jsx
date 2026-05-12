import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Heart } from 'lucide-react';

const generateHeartRateData = () => {
  const data = [];
  for (let i = 0; i < 24; i++) {
    data.push({
      time: `${i.toString().padStart(2, '0')}:00`,
      bpm: Math.floor(Math.random() * 30) + 65
    });
  }
  return data;
};

const data = generateHeartRateData();

export default function HeartRateChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-card rounded-2xl p-6 shadow-sm border border-border/50"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-lg">Ritmo Cardíaco</h3>
          <p className="text-sm text-muted-foreground">Últimas 24 horas</p>
        </div>
        <div className="flex items-center gap-2 bg-destructive/10 px-3 py-1.5 rounded-full">
          <Heart className="w-4 h-4 text-destructive fill-destructive" />
          <span className="text-sm font-medium text-destructive">78 bpm</span>
        </div>
      </div>

      <div className="h-[200px] -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
              interval={5}
            />
            <YAxis 
              domain={[50, 110]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
              width={35}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '12px'
              }}
              formatter={(value) => [`${value} bpm`, 'Ritmo']}
            />
            <Line 
              type="monotone" 
              dataKey="bpm" 
              stroke="hsl(var(--destructive))"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: 'hsl(var(--destructive))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}