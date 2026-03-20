import { motion } from "framer-motion"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const segments = [
  { name: "Фрилансеры", value: 35, color: "#4F8EF7" },
  { name: "Стартапы", value: 25, color: "#34D399" },
  { name: "Удалённые сотрудники", value: 20, color: "#F59E0B" },
  { name: "Малый бизнес", value: 12, color: "#A78BFA" },
  { name: "Самозанятые", value: 8, color: "#FB7185" },
]

const portrait = [
  { label: "Возраст", value: "25–40 лет" },
  { label: "Доход", value: "от 60 000 ₽/мес" },
  { label: "Образование", value: "высшее / незаконченное высшее" },
  { label: "Ценности", value: "гибкость, продуктивность, нетворкинг" },
  { label: "Боль", value: "дорогой офис, шум дома, изоляция" },
  { label: "Решение", value: "коворкинг — лучший баланс цены и среды" },
]

export default function ConsumerSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Образ потребителя
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Портрет целевой аудитории и структура по сегментам
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <motion.div
          className="w-full lg:w-64 h-64 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={segments} cx="50%" cy="50%" innerRadius={55} outerRadius={90} dataKey="value" stroke="none">
                {segments.map((s) => <Cell key={s.name} fill={s.color} />)}
              </Pie>
              <Tooltip
                contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 12 }}
                labelStyle={{ color: "#fff" }}
                formatter={(v: number) => [`${v}%`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {segments.map(s => (
              <div key={s.name} className="flex items-center gap-1 text-xs text-neutral-400">
                <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                {s.name}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
          {portrait.map((p, i) => (
            <motion.div
              key={p.label}
              className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40"
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              <div className="text-neutral-500 text-xs mb-1">{p.label}</div>
              <div className="text-white text-sm font-medium">{p.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
