import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from "recharts"

interface Props { isActive: boolean }

const MONTHLY_COSTS = 950000
const months = ["М1", "М2", "М3", "М4", "М5", "М6", "М7", "М8", "М9", "М10", "М11", "М12"]

const revenue = [320000, 480000, 620000, 750000, 870000, 950000, 1020000, 1100000, 1150000, 1200000, 1240000, 1280000]

const data = months.map((m, i) => ({
  month: m,
  revenue: revenue[i],
  costs: MONTHLY_COSTS,
  profit: revenue[i] - MONTHLY_COSTS,
}))

const streams = [
  { name: "Дневные/часовые тарифы", share: 30, monthly: 384000 },
  { name: "Фиксированные столы", share: 40, monthly: 512000 },
  { name: "Переговорные комнаты", share: 15, monthly: 192000 },
  { name: "Event-зал", share: 10, monthly: 128000 },
  { name: "Виртуальный офис / доп.", share: 5, monthly: 64000 },
]

export default function RevenueSection({ isActive }: Props) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.p
        className="text-[#4F8EF7] text-sm tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        11 / Финансы
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Смета доходов
      </motion.h2>

      <motion.div
        className="flex gap-8 mb-6"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {[
          { label: "Целевая выручка (12 мес)", value: "1,28 млн ₽/мес" },
          { label: "Выручка за год", value: "11,4 млн ₽" },
          { label: "Точка безубыточности", value: "Месяц 6" },
        ].map((s, i) => (
          <div key={i}>
            <div className="text-neutral-500 text-xs uppercase tracking-wider mb-1">{s.label}</div>
            <div className="text-xl font-bold text-white">{s.value}</div>
          </div>
        ))}
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
        <motion.div
          className="flex-1 h-48"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-neutral-600 text-xs uppercase tracking-wider mb-2">Выручка vs расходы (год 1)</p>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#1a1a1a" strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fill: "#555", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#555", fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000).toFixed(0)}к`} width={40} />
              <Tooltip
                contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 12 }}
                itemStyle={{ color: "#aaa" }}
                formatter={(v: number) => [`${v.toLocaleString("ru")} ₽`, ""]}
              />
              <ReferenceLine y={MONTHLY_COSTS} stroke="#333" strokeDasharray="4 4" />
              <Line type="monotone" dataKey="revenue" stroke="#4F8EF7" strokeWidth={2} dot={false} name="Выручка" />
              <Line type="monotone" dataKey="costs" stroke="#444" strokeWidth={1.5} dot={false} name="Расходы" strokeDasharray="4 4" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="flex-shrink-0 w-full md:w-52 space-y-3">
          <p className="text-neutral-600 text-xs uppercase tracking-wider">Структура доходов</p>
          {streams.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
            >
              <div className="flex justify-between text-xs mb-1">
                <span className="text-neutral-400 leading-tight">{s.name}</span>
                <span className="text-white ml-2 flex-shrink-0">{s.share}%</span>
              </div>
              <div className="h-0.5 bg-neutral-800 rounded-full">
                <motion.div
                  className="h-full bg-[#4F8EF7] rounded-full"
                  initial={{ width: 0 }}
                  animate={isActive ? { width: `${s.share * 2}%` } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
