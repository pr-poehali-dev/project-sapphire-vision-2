import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const facts = [
  { icon: "MapPin", label: "Адрес", value: "Центр города, удобная парковка и метро" },
  { icon: "Building2", label: "Площадь", value: "400 м² на одном этаже" },
  { icon: "Clock", label: "Режим работы", value: "Пн–Пт 8:00–22:00, Сб–Вс 10:00–20:00" },
  { icon: "Users", label: "Вместимость", value: "До 60 человек одновременно" },
  { icon: "Wifi", label: "Интернет", value: "Выделенная линия 1 Гбит/с" },
  { icon: "Shield", label: "Безопасность", value: "Видеонаблюдение, СКУД, охрана" },
]

export default function CompanySection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Характеристика предприятия
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-10"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        ООО «Коворкинг» · форма собственности: ООО · система налогообложения: УСН 6%
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {facts.map((f, i) => (
          <motion.div
            key={f.label}
            className="flex gap-4 items-start p-4 rounded-xl border border-neutral-800 bg-neutral-900/40"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
          >
            <div className="w-10 h-10 rounded-lg bg-[#4F8EF7]/10 flex items-center justify-center flex-shrink-0">
              <Icon name={f.icon} size={18} className="text-[#4F8EF7]" />
            </div>
            <div>
              <div className="text-neutral-500 text-xs mb-0.5">{f.label}</div>
              <div className="text-white text-sm font-medium">{f.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 p-5 rounded-xl border border-[#4F8EF7]/20 bg-[#4F8EF7]/5"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <p className="text-neutral-300 text-sm leading-relaxed">
          Коворкинг — современное гибкое пространство для работы, нацеленное на фрилансеров,
          стартапы, удалённые команды и малый бизнес. Миссия: создать среду, где профессионалы
          могут работать продуктивно, нетворкить и развиваться без лишних затрат на аренду офиса.
        </p>
      </motion.div>
    </section>
  )
}
