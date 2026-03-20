import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const decisionData = [
  { factor: "Цена", score: 88 },
  { factor: "Локация", score: 95 },
  { factor: "Атмосфера", score: 78 },
  { factor: "Скорость инт.", score: 82 },
  { factor: "Часы работы", score: 90 },
  { factor: "Сообщество", score: 65 },
]

export default function ConsumerAnalysisSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.div
        className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        Анализ
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Анализ потребителя
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-base mb-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Ключевые факторы выбора коворкинга по результатам опроса 200 потенциальных клиентов
      </motion.p>
      <motion.div
        className="w-full max-w-2xl h-56"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={decisionData} layout="vertical" margin={{ left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" horizontal={false} />
            <XAxis type="number" domain={[0, 100]} tick={{ fill: "#6b7280", fontSize: 11 }} tickLine={false} axisLine={false} />
            <YAxis type="category" dataKey="factor" tick={{ fill: "#9ca3af", fontSize: 12 }} tickLine={false} axisLine={false} width={80} />
            <Tooltip
              contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 12 }}
              formatter={(val: number) => [`${val}%`, "Важность"]}
            />
            <Bar dataKey="score" fill="#4F8EF7" radius={[0, 4, 4, 0]} isAnimationActive={isActive} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
      <motion.div
        className="flex gap-6 mt-6"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {[
          { label: "Опрошено", value: "200 чел." },
          { label: "Готовы платить 500 ₽/день", value: "74%" },
          { label: "Ищут постоянное место", value: "41%" },
        ].map((stat) => (
          <div key={stat.label} className="border border-white/10 rounded-xl px-5 py-3">
            <div className="text-xl font-bold text-[#4F8EF7]">{stat.value}</div>
            <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
