import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function TitleSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center items-center text-center p-8 md:p-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Badge variant="outline" className="text-white border-white text-sm px-4 py-1">Бизнес-план</Badge>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Коворкинг
      </motion.h1>

      <motion.p
        className="text-2xl md:text-3xl text-[#4F8EF7] font-light mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        400 м²  пространства для роста
      </motion.p>

      <motion.div
        className="mt-12 grid grid-cols-3 gap-8 md:gap-16"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {[
          { val: "400", unit: "м²", label: "Площадь" },
          { val: "60+", unit: "", label: "Рабочих мест" },
          { val: "3", unit: "зоны", label: "Форматов работы" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">
              {item.val}<span className="text-[#4F8EF7] text-xl ml-1">{item.unit}</span>
            </div>
            <div className="text-neutral-500 text-sm mt-1">{item.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2 text-neutral-600 text-xs">
          <span>листать вниз</span>
          <motion.div
            className="w-px h-8 bg-neutral-600"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  )
}
