import { motion } from "framer-motion"

export default function TitleSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center items-center p-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-6"
      >
        <div className="w-20 h-20 mx-auto border border-[#4F8EF7]/40 rounded-2xl flex items-center justify-center mb-8">
          <div className="w-10 h-10 bg-[#4F8EF7]/20 rounded-lg" />
        </div>
        <div className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Бизнес-план</div>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Коворкинг
          <br />
          <span className="text-[#4F8EF7]">400 м²</span>
        </motion.h1>
        <motion.p
          className="text-neutral-400 text-lg md:text-xl max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Современное пространство для продуктивной работы, нетворкинга и роста бизнеса
        </motion.p>
      </motion.div>
      <motion.div
        className="flex gap-8 mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {[
          { label: "Площадь", value: "400 м²" },
          { label: "Рабочих мест", value: "60+" },
          { label: "Окупаемость", value: "18 мес" },
        ].map((item) => (
          <div key={item.label} className="border border-white/10 rounded-xl px-6 py-4">
            <div className="text-2xl font-bold text-white">{item.value}</div>
            <div className="text-xs text-neutral-500 mt-1">{item.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
