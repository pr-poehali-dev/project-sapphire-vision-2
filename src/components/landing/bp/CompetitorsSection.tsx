import { motion } from "framer-motion"
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend, Tooltip } from "recharts"

const radarData = [
  { subject: "Цена", us: 90, avg: 65 },
  { subject: "Локация", us: 85, avg: 70 },
  { subject: "Удобства", us: 95, avg: 60 },
  { subject: "24/7", us: 100, avg: 40 },
  { subject: "Сообщество", us: 85, avg: 55 },
  { subject: "Дизайн", us: 90, avg: 60 },
]

export default function CompetitorsSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.div
        className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        Конкуренция
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Анализ конкурентов
      </motion.h2>
      <div className="flex flex-col lg:flex-row gap-8 items-center max-w-5xl">
        <motion.div
          className="w-full lg:w-1/2 h-72"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#9ca3af", fontSize: 12 }} />
              <Radar name="Мы" dataKey="us" stroke="#4F8EF7" fill="#4F8EF7" fillOpacity={0.25} isAnimationActive={isActive} />
              <Radar name="Конкуренты" dataKey="avg" stroke="#6B7280" fill="#6B7280" fillOpacity={0.15} isAnimationActive={isActive} />
              <Legend wrapperStyle={{ fontSize: 12, color: "#9ca3af" }} />
              <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 12 }} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
        <motion.div
          className="lg:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { label: "Главное отличие", value: "24/7 доступ + комьюнити-менеджер" },
            { label: "Ценовая позиция", value: "На 15–20% ниже крупных операторов" },
            { label: "Основные конкуренты", value: "Бизнес-центры, кафе, домашний офис" },
            { label: "Наш фокус", value: "Локальное сообщество и уют" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="border border-white/10 rounded-xl p-4"
            >
              <div className="text-xs text-neutral-500 mb-1">{item.label}</div>
              <div className="text-white text-sm font-medium">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
