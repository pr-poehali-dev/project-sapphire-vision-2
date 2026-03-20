import { motion } from "framer-motion"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from "recharts"

const radarData = [
  { subject: "Цена", us: 90, avg: 60 },
  { subject: "Локация", us: 85, avg: 70 },
  { subject: "Сервис", us: 95, avg: 65 },
  { subject: "Атмосфера", us: 90, avg: 55 },
  { subject: "Интернет", us: 95, avg: 80 },
  { subject: "Гибкость", us: 100, avg: 60 },
]

const competitors = [
  { name: "Конкурент A", price: "650 ₽/д", seats: 40, plus: "Центр", minus: "Мало переговорных" },
  { name: "Конкурент B", price: "800 ₽/д", seats: 80, plus: "Большой", minus: "Высокая цена" },
  { name: "Конкурент C", price: "400 ₽/д", seats: 25, plus: "Дёшево", minus: "Нет инфраструктуры" },
  { name: "Наш коворкинг", price: "500 ₽/д", seats: 60, plus: "Всё вкл., сервис", minus: "Новый игрок", highlight: true },
]

export default function CompetitorsSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Анализ конкурентов
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Позиционирование на рынке по ключевым параметрам
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <motion.div
          className="w-full lg:w-72 h-56 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="#222" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#666", fontSize: 11 }} />
              <Radar name="Мы" dataKey="us" stroke="#4F8EF7" fill="#4F8EF7" fillOpacity={0.2} />
              <Radar name="Конкуренты" dataKey="avg" stroke="#555" fill="#555" fillOpacity={0.1} />
              <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 12 }} />
            </RadarChart>
          </ResponsiveContainer>
          <div className="flex gap-4 justify-center text-xs text-neutral-500 mt-1">
            <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-[#4F8EF7] inline-block" /> Мы</span>
            <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-neutral-500 inline-block" /> Конкуренты</span>
          </div>
        </motion.div>

        <div className="flex-1 overflow-hidden rounded-xl border border-neutral-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/60">
                {["", "Цена/день", "Мест", "Преимущество", "Слабость"].map(h => (
                  <th key={h} className="text-left text-neutral-500 font-medium px-3 py-2 text-xs">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, i) => (
                <motion.tr
                  key={c.name}
                  className={`border-b border-neutral-800/50 ${c.highlight ? "bg-[#4F8EF7]/5" : ""}`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  <td className={`px-3 py-3 font-semibold text-sm ${c.highlight ? "text-[#4F8EF7]" : "text-neutral-400"}`}>{c.name}</td>
                  <td className="px-3 py-3 text-white">{c.price}</td>
                  <td className="px-3 py-3 text-neutral-300">{c.seats}</td>
                  <td className="px-3 py-3 text-green-400 text-xs">{c.plus}</td>
                  <td className="px-3 py-3 text-red-400/70 text-xs">{c.minus}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
