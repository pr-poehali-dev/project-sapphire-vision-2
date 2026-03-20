import { motion } from "framer-motion"

const risks = [
  { risk: "Низкая загрузка в первые месяцы", prob: "Высокая", impact: "Высокий", measure: "Промо-акции, первый день бесплатно, партнёрства", color: "#FB7185" },
  { risk: "Рост аренды помещения", prob: "Средняя", impact: "Высокий", measure: "Долгосрочный договор с фиксацией роста не более 5%/год", color: "#F59E0B" },
  { risk: "Технические сбои (интернет, оборудование)", prob: "Средняя", impact: "Средний", measure: "Резервные каналы связи, сервисный договор с подрядчиком", color: "#F59E0B" },
  { risk: "Выход нового конкурента", prob: "Средняя", impact: "Средний", measure: "Удержание клиентов через программу лояльности и качество", color: "#F59E0B" },
  { risk: "Кризис / падение платёжеспособности", prob: "Низкая", impact: "Высокий", measure: "Антикризисные тарифы, оптимизация расходов, онлайн-офис", color: "#4F8EF7" },
  { risk: "Конфликты между резидентами", prob: "Низкая", impact: "Низкий", measure: "Правила использования, раздельные зоны, медиация", color: "#34D399" },
]

export default function RisksSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Анализ рисков
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Ключевые риски и меры по их снижению
      </motion.p>

      <div className="overflow-hidden rounded-xl border border-neutral-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-800 bg-neutral-900/60">
              {["Риск", "Вероятность", "Влияние", "Меры"].map(h => (
                <th key={h} className="text-left text-neutral-500 font-medium px-4 py-3 text-xs uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {risks.map((r, i) => (
              <motion.tr
                key={r.risk}
                className="border-b border-neutral-800/50"
                initial={{ opacity: 0, x: -15 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              >
                <td className="px-4 py-3 text-white font-medium text-xs max-w-[180px]">{r.risk}</td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: r.color, background: r.color + "15" }}>
                    {r.prob}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: r.color, background: r.color + "15" }}>
                    {r.impact}
                  </span>
                </td>
                <td className="px-4 py-3 text-neutral-500 text-xs leading-relaxed">{r.measure}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
