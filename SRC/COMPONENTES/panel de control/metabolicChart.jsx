import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const generateData = () => {
  const data = [];
  for (let i = 0; i < 12; i++) {
    const hour = i * 2;
    data.push({
      time: `${hour.toString().padStart(2, '0')}:00`,
      glucosa: Math.floor(Math.random() * 30) + 80,
      trigliceridos: Math.floor(Math.random() * 40) + 120,
      colesterol: Math.floor(Math.random() * 30) + 170,
    });
  }
  return data;
};

const data = generateData();

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 text-xs shadow-md space-y-1">
        <p className="font-medium text-foreground mb-2">{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} style={{ color: entry.color }}>
            {entry.name}: <span className="font-semibold">{entry.value} mg/dL</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function MetabolicChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-card rounded-2xl p-6 shadow-sm border border-border/50"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-lg">Métricas Metabólicas</h3>
          <p className="text-sm text-muted-foreground">Últimas 24 horas</p>
        </div>
        <div className="flex flex-col gap-1 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded-full bg-[hsl(var(--chart-4))] inline-block" />
            Glucosa
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded-full bg-[hsl(var(--chart-3))] inline-block" />
            Triglicéridos
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded-full bg-[hsl(var(--chart-1))] inline-block" />
            Colesterol
          </span>
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
              interval={2}
            />
            <YAxis
              domain={[60, 240]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
              width={35}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="glucosa"
              name="Glucosa"
              stroke="hsl(var(--chart-4))"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="trigliceridos"
              name="Triglicéridos"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="colesterol"
              name="Colesterol"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}