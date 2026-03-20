import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"

interface Props { isActive: boolean }

const startup = [
  { name: "Ремонт и дизайн", value: 1200000 },
  { name: "Мебель и оборудование", value: 900000 },
  { name: "IT-инфраструктура", value: 400000 },
  { name: "Вывески и брендинг", value: 150000 },
  { name: "Юр. оформление", value: 80000 },
  { name: "Маркетинг запуска", value: 200000 },
]

const monthly = [
  { name: "Аренда помещения", value: 350000 },
  { name: "ФОТ (с налогами)", value: 425000 },
  { name: "Коммунальные", value: 60000 },
  { name: "Интернет и тел.", value: 25000 },
  { name: "Маркетинг", value: 50000 },
  { name: "Прочее", value: 40000 },
]

const TOTAL_START = startup.reduce((s, i) => s + i.value, 0)
const TOTAL_MONTHLY = monthly.reduce((s, i) => s + i.value, 0)

export default function ExpensesSection({ isActive }: Props) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.p
        className="text-[#4F8EF7] text-sm tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        10 / Финансы
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Смета расходов
      </motion.h2>

      <motion.div
        className="flex gap-8 mb-6"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div>
          <div className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Стартовые</div>
          <div className="text-2xl font-bold text-white">{(TOTAL_START / 1000000).toFixed(1)} млн ₽</div>
        </div>
        <div>
          <div className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Ежемесячные</div>
          <div className="text-2xl font-bold text-white">{TOTAL_MONTHLY.toLocaleString("ru")} ₽</div>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-neutral-600 text-xs uppercase tracking-wider mb-3">Стартовые инвестиции</p>
          <div className="space-y-2">
            {startup.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : {}} transition={{ delay: 0.3 + i * 0.06 }}>
                <div className="flex justify-between text-xs mb-0.5">
                  <span className="text-neutral-400">{item.name}</span>
                  <span className="text-white">{(item.value / 1000).toFixed(0)}к ₽</span>
                </div>
                <div className="h-0.5 bg-neutral-800 rounded-full">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "#4F8EF7" }}
                    initial={{ width: 0 }}
                    animate={isActive ? { width: `${(item.value / 1200000) * 100}%` } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.06 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-neutral-600 text-xs uppercase tracking-wider mb-3">Ежемесячные расходы</p>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthly} layout="vertical" barSize={8}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" tick={{ fill: "#666", fontSize: 10 }} width={120} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 12 }}
                  itemStyle={{ color: "#aaa" }}
                  formatter={(v: number) => [`${v.toLocaleString("ru")} ₽`, ""]}
                />
                <Bar dataKey="value" radius={[0, 3, 3, 0]} fill="#4F8EF7" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
