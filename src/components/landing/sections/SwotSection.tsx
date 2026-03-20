import { motion } from "framer-motion"

interface Props { isActive: boolean }

const swot = [
  {
    label: "S — Сильные стороны",
    color: "#4F8EF7",
    bg: "rgba(79,142,247,0.07)",
    border: "rgba(79,142,247,0.25)",
    items: ["400 м² — большая площадь", "Гибкие тарифы от 1 дня", "Высокоскоростной интернет 1 Гбит/с", "Event-зал и переговорные"],
  },
  {
    label: "W — Слабые стороны",
    color: "#F7A24F",
    bg: "rgba(247,162,79,0.07)",
    border: "rgba(247,162,79,0.25)",
    items: ["Высокие стартовые затраты", "Зависимость от спроса на рынке", "Период окупаемости 18–24 мес"],
  },
  {
    label: "O — Возможности",
    color: "#4FD97A",
    bg: "rgba(79,217,122,0.07)",
    border: "rgba(79,217,122,0.25)",
    items: ["Рост удалённой занятости", "Гос. поддержка МСБ", "Партнёрства с IT-компаниями", "Расширение event-направления"],
  },
  {
    label: "T — Угрозы",
    color: "#F75454",
    bg: "rgba(247,84,84,0.07)",
    border: "rgba(247,84,84,0.25)",
    items: ["Появление новых конкурентов", "Рост аренды помещения", "Экономические спады"],
  },
]

export default function SwotSection({ isActive }: Props) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.p
        className="text-[#4F8EF7] text-sm tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        07 / Стратегия
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        SWOT-анализ
      </motion.h2>

      <div className="grid grid-cols-2 gap-4 max-w-3xl">
        {swot.map((q, i) => (
          <motion.div
            key={i}
            className="p-5 rounded-lg border"
            style={{ background: q.bg, borderColor: q.border }}
            initial={{ opacity: 0, scale: 0.93 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
          >
            <div className="text-xs font-semibold mb-3 tracking-wide" style={{ color: q.color }}>{q.label}</div>
            <ul className="space-y-1">
              {q.items.map((item, j) => (
                <li key={j} className="text-neutral-400 text-xs flex gap-2">
                  <span style={{ color: q.color }}>—</span>
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
