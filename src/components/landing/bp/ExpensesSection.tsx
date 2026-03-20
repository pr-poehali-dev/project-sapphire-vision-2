import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

const startup = [
  { name: "Ремонт / отделка", value: 800000 },
  { name: "Мебель", value: 600000 },
  { name: "IT и оборудование", value: 300000 },
  { name: "Залог аренды", value: 400000 },
  { name: "Маркетинг (запуск)", value: 150000 },
  { name: "Прочее", value: 100000 },
]

const monthly = [
  { name: "Аренда помещения", value: 250000 },
  { name: "ФОТ", value: 185000 },
  { name: "Коммунальные", value: 40000 },
  { name: "Интернет / связь", value: 15000 },
  { name: "Расходники", value: 20000 },
  { name: "Маркетинг", value: 30000 },
]

const totalStartup = startup.reduce((a, b) => a + b.value, 0)
const totalMonthly = monthly.reduce((a, b) => a + b.value, 0)

const fmt = (v: number) => (v / 1000).toFixed(0) + " тыс"

export default function ExpensesSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.div
        className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        Финансы
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Смета расходов
      </motion.h2>
      <motion.div
        className="flex gap-6 mb-6"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div>
          <span className="text-neutral-500 text-sm">Стартовые: </span>
          <span className="text-white font-bold">{(totalStartup / 1000000).toFixed(1)} млн ₽</span>
        </div>
        <div>
          <span className="text-neutral-500 text-sm">Ежемесячные: </span>
          <span className="text-[#4F8EF7] font-bold">{fmt(totalMonthly)} тыс ₽</span>
        </div>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-6 max-w-5xl">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-xs text-neutral-500 mb-2 uppercase tracking-widest">Стартовые</div>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={startup} margin={{ bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 9 }} tickLine={false} axisLine={false} />
                <YAxis tickFormatter={fmt} tick={{ fill: "#6b7280", fontSize: 10 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 11 }} formatter={(v: number) => [`${(v / 1000).toFixed(0)} тыс ₽`]} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive={isActive}>
                  {startup.map((_, i) => <Cell key={i} fill={`hsl(${210 + i * 10}, 80%, ${55 - i * 3}%)`} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-xs text-neutral-500 mb-2 uppercase tracking-widest">Ежемесячные</div>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthly}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 9 }} tickLine={false} axisLine={false} />
                <YAxis tickFormatter={fmt} tick={{ fill: "#6b7280", fontSize: 10 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 11 }} formatter={(v: number) => [`${(v / 1000).toFixed(0)} тыс ₽`]} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive={isActive}>
                  {monthly.map((_, i) => <Cell key={i} fill={`hsl(${260 + i * 15}, 70%, ${55 - i * 3}%)`} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
