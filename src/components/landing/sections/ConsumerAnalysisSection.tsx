import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"

interface Props { isActive: boolean }

const demand = [
  { month: "Янв", score: 62 },
  { month: "Фев", score: 68 },
  { month: "Мар", score: 78 },
  { month: "Апр", score: 82 },
  { month: "Май", score: 88 },
  { month: "Июн", score: 75 },
  { month: "Июл", score: 65 },
  { month: "Авг", score: 72 },
  { month: "Сен", score: 90 },
  { month: "Окт", score: 95 },
  { month: "Ноя", score: 92 },
  { month: "Дек", score: 80 },
]

const factors = [
  { label: "Цена", weight: 38 },
  { label: "Локация", weight: 28 },
  { label: "Инфраструктура", weight: 20 },
  { label: "Атмосфера", weight: 14 },
]

export default function ConsumerAnalysisSection({ isActive }: Props) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.p
        className="text-[#4F8EF7] text-sm tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        08 / Спрос
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Анализ потребителя
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full">
        <motion.div
          className="flex-1 h-48"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">Сезонный спрос (индекс)</p>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={demand} barSize={14}>
              <XAxis dataKey="month" tick={{ fill: "#555", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis hide domain={[0, 100]} />
              <Tooltip
                contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 12 }}
                itemStyle={{ color: "#aaa" }}
                cursor={{ fill: "rgba(255,255,255,0.03)" }}
              />
              <Bar dataKey="score" radius={[3, 3, 0, 0]}>
                {demand.map((entry, i) => (
                  <Cell key={i} fill={entry.score >= 85 ? "#4F8EF7" : "#2a2a2a"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="flex-shrink-0 w-full md:w-56 space-y-4">
          <p className="text-neutral-500 text-xs uppercase tracking-wider">Факторы выбора</p>
          {factors.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              <div className="flex justify-between text-sm mb-1">
                <span className="text-neutral-400">{f.label}</span>
                <span className="text-white">{f.weight}%</span>
              </div>
              <div className="h-1 bg-neutral-800 rounded-full">
                <motion.div
                  className="h-full bg-[#4F8EF7] rounded-full"
                  initial={{ width: 0 }}
                  animate={isActive ? { width: `${f.weight}%` } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
