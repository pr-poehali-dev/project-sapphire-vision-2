import { motion } from "framer-motion"

const risks = [
  { name: "Низкая заполняемость", prob: "Средняя", impact: "Высокий", mitigation: "Агрессивный маркетинг в первые 3 месяца, пробный день", color: "#DB2777" },
  { name: "Рост аренды помещения", prob: "Низкая", impact: "Высокий", mitigation: "Долгосрочный договор аренды с фиксацией ставки", color: "#D97706" },
  { name: "Поломка оборудования", prob: "Средняя", impact: "Средний", mitigation: "Резервный фонд 10% от выручки, сервисный договор", color: "#D97706" },
  { name: "Уход ключевых клиентов", prob: "Средняя", impact: "Средний", mitigation: "Программа лояльности, корпоративные контракты", color: "#D97706" },
  { name: "Форс-мажор (пандемия)", prob: "Низкая", impact: "Критический", mitigation: "Гибридный формат, онлайн-пакеты и виртуальный офис", color: "#DB2777" },
  { name: "Конкуренты рядом", prob: "Высокая", impact: "Средний", mitigation: "Уникальное комьюнити, мероприятия, скидки для постоянных", color: "#059669" },
]

const levelColor = (level: string) => {
  if (level === "Высокий" || level === "Критический") return "#DB2777"
  if (level === "Средний") return "#D97706"
  return "#059669"
}

export default function RisksSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.div
        className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        Риски
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Анализ рисков
      </motion.h2>
      <div className="overflow-x-auto max-w-5xl">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left text-neutral-500 font-normal pb-3 pr-4">Риск</th>
              <th className="text-center text-neutral-500 font-normal pb-3 px-3">Вероятность</th>
              <th className="text-center text-neutral-500 font-normal pb-3 px-3">Влияние</th>
              <th className="text-left text-neutral-500 font-normal pb-3 pl-4">Митигация</th>
            </tr>
          </thead>
          <tbody>
            {risks.map((r, i) => (
              <motion.tr
                key={r.name}
                className="border-b border-white/5"
                initial={{ opacity: 0, x: -15 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                <td className="py-3 pr-4 text-white">{r.name}</td>
                <td className="py-3 px-3 text-center">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: levelColor(r.prob), backgroundColor: levelColor(r.prob) + "22" }}>
                    {r.prob}
                  </span>
                </td>
                <td className="py-3 px-3 text-center">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: levelColor(r.impact), backgroundColor: levelColor(r.impact) + "22" }}>
                    {r.impact}
                  </span>
                </td>
                <td className="py-3 pl-4 text-neutral-500 text-xs">{r.mitigation}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
