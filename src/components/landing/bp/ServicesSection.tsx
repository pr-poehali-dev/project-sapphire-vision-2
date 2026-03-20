import { motion } from "framer-motion"

const services = [
  { name: "Горячее место", desc: "Любое свободное место в открытой зоне", price: "500 ₽/день", icon: "☀️" },
  { name: "Фиксированное место", desc: "Постоянное рабочее место с тумбой", price: "12 000 ₽/мес", icon: "📍" },
  { name: "Приватный кабинет", desc: "Изолированный офис на 2–6 человек", price: "от 35 000 ₽/мес", icon: "🔒" },
  { name: "Переговорная", desc: "Комната для встреч и переговоров", price: "800 ₽/час", icon: "💬" },
  { name: "Кабина тишины", desc: "Звукоизолированное место для звонков", price: "300 ₽/час", icon: "🎧" },
  { name: "Виртуальный офис", desc: "Юридический адрес и почтовый адрес", price: "3 000 ₽/мес", icon: "📮" },
]

export default function ServicesSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.div
        className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        Услуги
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Описание услуг
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            className="border border-white/10 rounded-xl p-5 flex flex-col gap-2 hover:border-[#4F8EF7]/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
          >
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-white font-semibold">{s.name}</div>
            <div className="text-neutral-500 text-sm flex-1">{s.desc}</div>
            <div className="text-[#4F8EF7] font-mono text-sm mt-2">{s.price}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
