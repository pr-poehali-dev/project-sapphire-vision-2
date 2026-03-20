import { motion } from "framer-motion"

const swot = [
  {
    label: "S — Сильные стороны",
    color: "#34D399",
    bg: "#34D39910",
    border: "#34D39930",
    items: [
      "Современное оснащение 400 м²",
      "Гибкие форматы аренды",
      "Все включено: Wi-Fi, кофе, принтер",
      "Квалифицированная команда сервиса",
    ],
  },
  {
    label: "W — Слабые стороны",
    color: "#FB7185",
    bg: "#FB718510",
    border: "#FB718530",
    items: [
      "Высокие стартовые вложения",
      "Новый бренд без репутации",
      "Зависимость от арендодателя помещения",
      "Сезонность спроса (лето, праздники)",
    ],
  },
  {
    label: "O — Возможности",
    color: "#4F8EF7",
    bg: "#4F8EF710",
    border: "#4F8EF730",
    items: [
      "Рост рынка удалённой работы",
      "Партнёрства с корпорациями",
      "Добавление образовательных программ",
      "Масштабирование в сеть коворкингов",
    ],
  },
  {
    label: "T — Угрозы",
    color: "#F59E0B",
    bg: "#F59E0B10",
    border: "#F59E0B30",
    items: [
      "Выход крупных игроков (WeWork и др.)",
      "Экономический кризис снижает спрос",
      "Рост арендных ставок на помещение",
      "Технологические изменения в работе",
    ],
  },
]

export default function SwotSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        SWOT-анализ
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Стратегическая оценка проекта
      </motion.p>

      <div className="grid grid-cols-2 gap-4">
        {swot.map((q, i) => (
          <motion.div
            key={q.label}
            className="p-5 rounded-xl"
            style={{ background: q.bg, border: `1px solid ${q.border}` }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
          >
            <div className="font-bold text-sm mb-3" style={{ color: q.color }}>{q.label}</div>
            <ul className="space-y-1.5">
              {q.items.map(item => (
                <li key={item} className="text-neutral-300 text-xs flex items-start gap-2">
                  <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: q.color }} />
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
