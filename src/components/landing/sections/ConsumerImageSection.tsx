import { motion } from "framer-motion"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

interface Props { isActive: boolean }

const segments = [
  { name: "Фрилансеры", value: 35, color: "#4F8EF7" },
  { name: "Стартапы", value: 25, color: "#6FA8FF" },
  { name: "Удалённые команды", value: 20, color: "#3A6FD8" },
  { name: "Малый бизнес", value: 12, color: "#2454B8" },
  { name: "Студенты/МСП", value: 8, color: "#1A3A8A" },
]

const profiles = [
  { label: "Возраст", value: "25–40 лет" },
  { label: "Доход", value: "от 60 000 ₽/мес" },
  { label: "Образование", value: "Высшее / незаконченное высшее" },
  { label: "Мотив", value: "Продуктивность, нетворкинг, статус" },
]

export default function ConsumerImageSection({ isActive }: Props) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.p
        className="text-[#4F8EF7] text-sm tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        05 / Аудитория
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Образ потребителя
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10 items-start max-w-4xl">
        <motion.div
          className="w-full md:w-64 h-64 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={segments} cx="50%" cy="50%" innerRadius={55} outerRadius={90} dataKey="value" paddingAngle={3}>
                {segments.map((s, i) => <Cell key={i} fill={s.color} stroke="none" />)}
              </Pie>
              <Tooltip
                contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 12 }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#aaa" }}
                formatter={(v: number) => [`${v}%`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="flex-1 space-y-2">
          {segments.map((s, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
            >
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} />
              <span className="text-neutral-400 text-sm flex-1">{s.name}</span>
              <span className="text-white text-sm font-medium">{s.value}%</span>
            </motion.div>
          ))}

          <div className="border-t border-neutral-800 my-4" />

          {profiles.map((p, i) => (
            <motion.div
              key={i}
              className="flex justify-between text-sm"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
            >
              <span className="text-neutral-500">{p.label}</span>
              <span className="text-white">{p.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
