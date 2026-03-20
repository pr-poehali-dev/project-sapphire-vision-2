import { motion } from "framer-motion"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const segments = [
  { name: "Фрилансеры", value: 35, color: "#4F8EF7" },
  { name: "Стартапы", value: 25, color: "#7C3AED" },
  { name: "Удалённые сотрудники", value: 20, color: "#059669" },
  { name: "Малый бизнес", value: 15, color: "#D97706" },
  { name: "Студенты / другие", value: 5, color: "#6B7280" },
]

const portrait = [
  { label: "Возраст", value: "24–40 лет" },
  { label: "Доход", value: "60 000–150 000 ₽/мес" },
  { label: "Занятость", value: "Self-employed / удалёнка" },
  { label: "Ценности", value: "Продуктивность, нетворкинг" },
  { label: "Боли", value: "Отвлекает дом, дорогая аренда" },
]

export default function ConsumerSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.div
        className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        Маркетинг
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Образ потребителя
      </motion.h2>
      <div className="flex flex-col lg:flex-row gap-8 items-center max-w-5xl">
        <motion.div
          className="w-full lg:w-1/2 h-64"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={segments}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
                isAnimationActive={isActive}
              >
                {segments.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 12 }}
                formatter={(val: number) => [`${val}%`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
        <div className="flex flex-col gap-3 lg:w-1/2">
          <div className="flex flex-col gap-2 mb-4">
            {segments.map((s, i) => (
              <motion.div
                key={s.name}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.07 }}
              >
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                <span className="text-neutral-400 text-sm flex-1">{s.name}</span>
                <span className="text-white font-mono text-sm">{s.value}%</span>
              </motion.div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-4">
            {portrait.map((p, i) => (
              <motion.div
                key={p.label}
                className="flex justify-between py-1.5 border-b border-white/5"
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.07 }}
              >
                <span className="text-neutral-500 text-sm">{p.label}</span>
                <span className="text-white text-sm">{p.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
