import { motion } from "framer-motion"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Legend, Tooltip } from "recharts"

interface Props { isActive: boolean }

const data = [
  { metric: "Цена", us: 90, comp1: 60, comp2: 75 },
  { metric: "Локация", us: 85, comp1: 90, comp2: 70 },
  { metric: "Инфраструктура", us: 95, comp1: 70, comp2: 80 },
  { metric: "Сервис", us: 90, comp1: 65, comp2: 75 },
  { metric: "Площадь", us: 80, comp1: 85, comp2: 60 },
  { metric: "Гибкость", us: 95, comp1: 55, comp2: 70 },
]

export default function CompetitorsSection({ isActive }: Props) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.p
        className="text-[#4F8EF7] text-sm tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        06 / Рынок
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Анализ конкурентов
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 items-center max-w-4xl w-full">
        <motion.div
          className="w-full md:w-80 h-72 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data}>
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="metric" tick={{ fill: "#777", fontSize: 11 }} />
              <Radar name="Мы" dataKey="us" stroke="#4F8EF7" fill="#4F8EF7" fillOpacity={0.25} />
              <Radar name="Конкурент A" dataKey="comp1" stroke="#555" fill="#555" fillOpacity={0.15} />
              <Radar name="Конкурент B" dataKey="comp2" stroke="#888" fill="#888" fillOpacity={0.1} />
              <Legend wrapperStyle={{ fontSize: 11, color: "#777" }} />
              <Tooltip
                contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 12 }}
                itemStyle={{ color: "#aaa" }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="flex-1 space-y-4">
          {[
            { name: "Мы", color: "#4F8EF7", points: ["Конкурентная цена", "Лучшая инфраструктура", "Максимальная гибкость тарифов"] },
            { name: "Конкурент A", color: "#555", points: ["Сильная локация", "Большая площадь", "Слабый сервис"] },
            { name: "Конкурент B", color: "#888", points: ["Средние показатели", "Нет event-зала", "Ограниченный режим"] },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                <span className="text-white text-sm font-medium">{c.name}</span>
              </div>
              <ul className="pl-4 space-y-0.5">
                {c.points.map((p, j) => (
                  <li key={j} className="text-neutral-500 text-xs">{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
