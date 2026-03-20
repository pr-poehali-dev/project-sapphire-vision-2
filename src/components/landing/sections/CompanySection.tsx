import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

interface Props { isActive: boolean }

const features = [
  { icon: "MapPin", label: "Расположение", value: "Центр города, 5 мин от метро" },
  { icon: "Clock", label: "Режим работы", value: "Пн–Вс, 08:00–22:00" },
  { icon: "Wifi", label: "Инфраструктура", value: "Интернет 1 Гбит/с, ИБП" },
  { icon: "Shield", label: "Безопасность", value: "Видеонаблюдение 24/7, СКУД" },
]

export default function CompanySection({ isActive }: Props) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.p
        className="text-[#4F8EF7] text-sm tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        01 / Характеристика
      </motion.p>
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        О предприятии
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg max-w-2xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        ООО «Коворкинг 400» — современное пространство площадью 400 м² для профессиональной работы. Форма собственности: ООО. Сфера деятельности: аренда рабочих мест и офисной инфраструктуры.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 p-5 border border-neutral-800 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
          >
            <div className="text-[#4F8EF7] mt-0.5">
              <Icon name={f.icon as "MapPin"} size={18} />
            </div>
            <div>
              <div className="text-neutral-500 text-xs uppercase tracking-wider mb-1">{f.label}</div>
              <div className="text-white text-sm">{f.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <div className="h-px w-12 bg-[#4F8EF7]" />
        <span className="text-neutral-500 text-sm">Площадь территории: <span className="text-white">400 м²</span></span>
      </motion.div>
    </section>
  )
}
