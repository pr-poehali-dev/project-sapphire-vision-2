import { motion } from "framer-motion"

const swot = [
  {
    label: "Сильные стороны",
    letter: "S",
    color: "#4F8EF7",
    items: ["Удобная локация", "Режим 24/7", "Современный дизайн", "Гибкие тарифы"],
  },
  {
    label: "Слабые стороны",
    letter: "W",
    color: "#DB2777",
    items: ["Высокие стартовые затраты", "Новый бренд без репутации", "Зависимость от аренды"],
  },
  {
    label: "Возможности",
    letter: "O",
    color: "#059669",
    items: ["Рост рынка удалёнки", "Корпоративные клиенты", "Расширение на другие районы"],
  },
  {
    label: "Угрозы",
    letter: "T",
    color: "#D97706",
    items: ["Новые конкуренты", "Экономическая нестабильность", "Снижение спроса"],
  },
]

export default function SWOTSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.div
        className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        Стратегия
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        SWOT-анализ
      </motion.h2>
      <div className="grid grid-cols-2 gap-4 max-w-4xl">
        {swot.map((q, i) => (
          <motion.div
            key={q.label}
            className="border border-white/10 rounded-xl p-5"
            style={{ borderColor: q.color + "33" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: q.color + "22", color: q.color }}
              >
                {q.letter}
              </div>
              <span className="text-white text-sm font-semibold">{q.label}</span>
            </div>
            <ul className="space-y-1">
              {q.items.map((item) => (
                <li key={item} className="text-neutral-400 text-sm flex items-start gap-2">
                  <span style={{ color: q.color }} className="mt-1 text-xs">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
