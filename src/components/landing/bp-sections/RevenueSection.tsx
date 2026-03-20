import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from "recharts"

const monthly = [
  { month: "Янв", revenue: 180000, expenses: 704000 },
  { month: "Фев", revenue: 260000, expenses: 704000 },
  { month: "Мар", revenue: 370000, expenses: 704000 },
  { month: "Апр", revenue: 480000, expenses: 704000 },
  { month: "Май", revenue: 580000, expenses: 704000 },
  { month: "Июн", revenue: 640000, expenses: 704000 },
  { month: "Июл", revenue: 590000, expenses: 704000 },
  { month: "Авг", revenue: 610000, expenses: 704000 },
  { month: "Сен", revenue: 720000, expenses: 704000 },
  { month: "Окт", revenue: 790000, expenses: 704000 },
  { month: "Ноя", revenue: 810000, expenses: 704000 },
  { month: "Дек", revenue: 750000, expenses: 704000 },
]

const sources = [
  { name: "Open Space (дни)", plan: "240 000 ₽" },
  { name: "Абонементы 10 дней", plan: "160 000 ₽" },
  { name: "Месячные абонементы", plan: "240 000 ₽" },
  { name: "Командные офисы", plan: "100 000 ₽" },
  { name: "Переговорные (почас.)", plan: "60 000 ₽" },
  { name: "Виртуальный офис", plan: "50 000 ₽" },
]

export default function RevenueSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Смета доходов
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Плановая выручка при 100% загрузке: <span className="text-[#4F8EF7] font-semibold">850 000 ₽/мес</span>
        &nbsp;·&nbsp; Точка безубыточности: <span className="text-[#34D399] font-semibold">Сентябрь</span>
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-neutral-500 text-xs mb-2 uppercase tracking-wide">Динамика выручки vs расходы, 12 мес.</div>
          <ResponsiveContainer width="100%" height={210}>
            <LineChart data={monthly}>
              <CartesianGrid stroke="#1a1a1a" strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fill: "#555", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#555", fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000).toFixed(0)}к`} />
              <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 11 }} formatter={(v: number) => [v.toLocaleString("ru-RU") + " ₽", ""]} />
              <ReferenceLine y={704000} stroke="#FB7185" strokeDasharray="4 4" label={{ value: "break-even", fill: "#FB7185", fontSize: 10 }} />
              <Line type="monotone" dataKey="revenue" stroke="#4F8EF7" strokeWidth={2} dot={{ fill: "#4F8EF7", r: 3 }} name="Выручка" />
              <Line type="monotone" dataKey="expenses" stroke="#FB718560" strokeWidth={1.5} dot={false} name="Расходы" strokeDasharray="4 4" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="lg:w-56 space-y-2">
          <div className="text-neutral-500 text-xs mb-3 uppercase tracking-wide">Источники дохода (план/мес)</div>
          {sources.map((s, i) => (
            <motion.div
              key={s.name}
              className="flex justify-between items-center py-2 border-b border-neutral-800/50"
              initial={{ opacity: 0, x: 15 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
            >
              <span className="text-neutral-400 text-xs">{s.name}</span>
              <span className="text-white font-semibold text-xs">{s.plan}</span>
            </motion.div>
          ))}
          <motion.div
            className="flex justify-between items-center pt-2"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <span className="text-[#4F8EF7] text-sm font-bold">Итого</span>
            <span className="text-[#4F8EF7] font-bold">850 000 ₽</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
