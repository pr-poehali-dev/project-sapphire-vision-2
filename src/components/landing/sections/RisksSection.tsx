import { motion } from "framer-motion"

interface Props { isActive: boolean }

const risks = [
  { name: "Низкая заполняемость", prob: "Средняя", impact: "Высокий", color: "#F7A24F", action: "Гибкие тарифы, активный маркетинг в первые 3 мес" },
  { name: "Рост аренды", prob: "Средняя", impact: "Средний", color: "#F7D84F", action: "Долгосрочный договор аренды с фиксированной ставкой" },
  { name: "Технические сбои", prob: "Низкая", impact: "Высокий", color: "#F7A24F", action: "ИБП, резервный провайдер, сервисный договор" },
  { name: "Появление конкурента", prob: "Средняя", impact: "Средний", color: "#F7D84F", action: "Программа лояльности, уникальный сервис, сообщество" },
  { name: "Экономический спад", prob: "Низкая", impact: "Высокий", color: "#F7A24F", action: "Антикризисные тарифы, подписки со скидкой" },
  { name: "Текучесть кадров", prob: "Низкая", impact: "Низкий", color: "#4FD97A", action: "Система мотивации, корпоративная культура" },
]

const probColor: Record<string, string> = { "Высокая": "#F75454", "Средняя": "#F7A24F", "Низкая": "#4FD97A" }
const impactColor: Record<string, string> = { "Высокий": "#F75454", "Средний": "#F7A24F", "Низкий": "#4FD97A" }

export default function RisksSection({ isActive }: Props) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.p
        className="text-[#4F8EF7] text-sm tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        09 / Риски
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Анализ рисков
      </motion.h2>

      <div className="max-w-4xl w-full overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-neutral-600 text-xs uppercase tracking-wider">
              <th className="text-left pb-3 pr-4 font-normal">Риск</th>
              <th className="text-left pb-3 pr-4 font-normal">Вероятность</th>
              <th className="text-left pb-3 pr-4 font-normal">Влияние</th>
              <th className="text-left pb-3 font-normal">Мера</th>
            </tr>
          </thead>
          <tbody>
            {risks.map((r, i) => (
              <motion.tr
                key={i}
                className="border-t border-neutral-800/60"
                initial={{ opacity: 0, x: -20 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              >
                <td className="py-3 pr-4 text-neutral-300">{r.name}</td>
                <td className="py-3 pr-4">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: probColor[r.prob], background: `${probColor[r.prob]}18` }}>
                    {r.prob}
                  </span>
                </td>
                <td className="py-3 pr-4">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: impactColor[r.impact], background: `${impactColor[r.impact]}18` }}>
                    {r.impact}
                  </span>
                </td>
                <td className="py-3 text-neutral-500 text-xs max-w-xs">{r.action}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
