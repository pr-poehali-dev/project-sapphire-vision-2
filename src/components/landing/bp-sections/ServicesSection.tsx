import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const services = [
  { icon: "Armchair", name: "Дневной доступ", price: "500 ₽/день", desc: "Любое рабочее место в Open Space, Wi-Fi, кофе" },
  { icon: "CalendarDays", name: "Абонемент 10 дней", price: "4 000 ₽", desc: "Гибкий график, фиксированное место не нужно" },
  { icon: "Star", name: "Месячный абонемент", price: "8 000 ₽", desc: "Фиксированное место, хранение вещей, скидки" },
  { icon: "Users", name: "Командный офис", price: "от 25 000 ₽/мес", desc: "Отдельная зона до 10 чел, своя переговорная" },
  { icon: "Video", name: "Переговорная (почасово)", price: "800 ₽/час", desc: "До 8 человек, проектор, маркерная доска" },
  { icon: "Coffee", name: "Виртуальный офис", price: "2 500 ₽/мес", desc: "Юридический адрес + обработка корреспонденции" },
]

export default function ServicesSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Описание услуг
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        6 форматов — для каждого найдётся подходящий
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-[#4F8EF7]/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
          >
            <Icon name={s.icon} size={22} className="text-[#4F8EF7] mb-3" />
            <div className="text-white font-semibold text-sm mb-1">{s.name}</div>
            <div className="text-[#4F8EF7] font-bold text-lg mb-2">{s.price}</div>
            <div className="text-neutral-500 text-xs leading-relaxed">{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
