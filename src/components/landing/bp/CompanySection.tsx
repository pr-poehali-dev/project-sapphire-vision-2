import { motion } from "framer-motion"

const facts = [
  { label: "Форма", value: "ИП / ООО" },
  { label: "Площадь", value: "400 м²" },
  { label: "Режим работы", value: "24/7" },
  { label: "Рабочих мест", value: "60+" },
  { label: "Переговорных", value: "4 комнаты" },
  { label: "Кабин тишины", value: "8 штук" },
]

export default function CompanySection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.div
        className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        О предприятии
      </motion.div>
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Характеристика предприятия
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Современный коворкинг площадью 400 м² в центре города. Предоставляем гибкие рабочие пространства для фрилансеров, стартапов и малого бизнеса. Работаем в круглосуточном режиме с профессиональной командой управляющих.
      </motion.p>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {facts.map((f, i) => (
          <motion.div
            key={f.label}
            className="border border-white/10 rounded-xl p-4"
            initial={{ opacity: 0, y: 15 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
          >
            <div className="text-xl font-bold text-[#4F8EF7]">{f.value}</div>
            <div className="text-xs text-neutral-500 mt-1">{f.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
