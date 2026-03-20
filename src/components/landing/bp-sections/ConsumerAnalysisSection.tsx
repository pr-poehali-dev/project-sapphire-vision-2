import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"

const demandData = [
  { name: "Пн", value: 85 },
  { name: "Вт", value: 90 },
  { name: "Ср", value: 95 },
  { name: "Чт", value: 88 },
  { name: "Пт", value: 80 },
  { name: "Сб", value: 45 },
  { name: "Вс", value: 30 },
]

const needs = [
  { need: "Стабильный быстрый интернет", pct: 96 },
  { need: "Тихое рабочее пространство", pct: 88 },
  { need: "Переговорная комната", pct: 75 },
  { need: "Кофе / кухня", pct: 82 },
  { need: "Гибкий график", pct: 91 },
  { need: "Парковка", pct: 60 },
]

export default function ConsumerAnalysisSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Анализ потребителя
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Загрузка по дням недели и ключевые потребности клиентов
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-neutral-500 text-xs mb-3 uppercase tracking-wide">Загрузка по дням недели, %</div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={demandData} barSize={28}>
              <XAxis dataKey="name" tick={{ fill: "#555", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#555", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
              <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 12 }} cursor={{ fill: "#ffffff08" }} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {demandData.map((d) => (
                  <Cell key={d.name} fill={d.value > 80 ? "#4F8EF7" : "#4F8EF750"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="flex-1 space-y-3">
          <div className="text-neutral-500 text-xs mb-3 uppercase tracking-wide">Ключевые потребности (опрос 200 чел.)</div>
          {needs.map((n, i) => (
            <motion.div
              key={n.need}
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
            >
              <div className="flex justify-between text-xs mb-1">
                <span className="text-neutral-300">{n.need}</span>
                <span className="text-[#4F8EF7] font-bold">{n.pct}%</span>
              </div>
              <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "#4F8EF7" }}
                  initial={{ width: 0 }}
                  animate={isActive ? { width: `${n.pct}%` } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.07 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
