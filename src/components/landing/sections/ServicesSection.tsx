import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

interface Props { isActive: boolean }

const services = [
  { icon: "Armchair", name: "Открытое пространство", desc: "200 м² · 40 рабочих мест · от 400 ₽/день" },
  { icon: "Lock", name: "Фиксированный стол", desc: "Персональное место · хранение · от 9 000 ₽/мес" },
  { icon: "Users", name: "Переговорные комнаты", desc: "3 зала по 8–16 чел · от 600 ₽/час" },
  { icon: "Building2", name: "Виртуальный офис", desc: "Юридический адрес · почта · от 2 000 ₽/мес" },
  { icon: "Zap", name: "Event-зал", desc: "60 м² · проектор · сцена · от 3 000 ₽/час" },
  { icon: "Coffee", name: "Лаунж и кухня", desc: "Кофе, чай, закуски · включено в тариф" },
]

export default function ServicesSection({ isActive }: Props) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.p
        className="text-[#4F8EF7] text-sm tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        02 / Услуги
      </motion.p>
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-white leading-tight mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Что мы предлагаем
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="p-5 border border-neutral-800 rounded-lg hover:border-[#4F8EF7] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
          >
            <div className="text-[#4F8EF7] mb-3">
              <Icon name={s.icon as "Lock"} size={20} />
            </div>
            <div className="text-white font-medium mb-1 text-sm">{s.name}</div>
            <div className="text-neutral-500 text-xs leading-relaxed">{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
