import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"

const monthlyRevenue = [
  { month: "1", revenue: 120, expenses: 540 },
  { month: "2", revenue: 200, expenses: 540 },
  { month: "3", revenue: 310, expenses: 540 },
  { month: "4", revenue: 420, expenses: 540 },
  { month: "5", revenue: 490, expenses: 540 },
  { month: "6", revenue: 570, expenses: 540 },
  { month: "7", revenue: 620, expenses: 540 },
  { month: "8", revenue: 680, expenses: 540 },
  { month: "9", revenue: 720, expenses: 540 },
  { month: "10", revenue: 760, expenses: 540 },
  { month: "11", revenue: 800, expenses: 540 },
  { month: "12", revenue: 840, expenses: 540 },
]

const sources = [
  { name: "Фиксированные места", share: "45%", monthly: "270 000 ₽" },
  { name: "Горячие места", share: "20%", monthly: "120 000 ₽" },
  { name: "Переговорные", share: "15%", monthly: "90 000 ₽" },
  { name: "Приватные офисы", share: "12%", monthly: "72 000 ₽" },
  { name: "Доп. услуги", share: "8%", monthly: "48 000 ₽" },
]

export default function RevenueSection({ isActive }: { isActive: boolean }) {
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
        Смета доходов
      </motion.h2>
      <motion.div
        className="flex gap-6 mb-6"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div>
          <span className="text-neutral-500 text-sm">Прогноз 12 мес: </span>
          <span className="text-[#4F8EF7] font-bold">600 тыс ₽/мес</span>
        </div>
        <div>
          <span className="text-neutral-500 text-sm">Окупаемость: </span>
          <span className="text-white font-bold">~18 месяцев</span>
        </div>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-6 max-w-5xl">
        <motion.div
          className="flex-1 h-52"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-xs text-neutral-500 mb-2 uppercase tracking-widest">Выход на окупаемость (тыс ₽/мес)</div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
              <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 11 }} tickLine={false} axisLine={false} label={{ value: "Месяц", position: "insideBottom", fill: "#6b7280", fontSize: 10 }} />
              <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 11 }} formatter={(v: number) => [`${v} тыс ₽`]} />
              <ReferenceLine y={540} stroke="#4F8EF7" strokeDasharray="4 4" label={{ value: "Безубыточность", fill: "#4F8EF7", fontSize: 10 }} />
              <Line type="monotone" dataKey="revenue" stroke="#059669" strokeWidth={2} dot={false} isAnimationActive={isActive} name="Доход" />
              <Line type="monotone" dataKey="expenses" stroke="#DB2777" strokeWidth={2} dot={false} strokeDasharray="4 4" isAnimationActive={isActive} name="Расходы" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
        <motion.div
          className="lg:w-64 flex flex-col gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-xs text-neutral-500 mb-1 uppercase tracking-widest">Источники дохода</div>
          {sources.map((s, i) => (
            <div key={s.name} className="flex items-center justify-between border border-white/10 rounded-lg px-3 py-2">
              <div>
                <div className="text-white text-xs font-medium">{s.name}</div>
                <div className="text-neutral-500 text-xs">{s.monthly}</div>
              </div>
              <div className="text-[#4F8EF7] font-mono text-sm">{s.share}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
