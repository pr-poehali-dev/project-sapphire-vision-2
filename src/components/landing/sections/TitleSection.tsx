import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface Props { isActive: boolean }

export default function TitleSection({ isActive }: Props) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Badge variant="outline" className="text-white border-white text-sm tracking-widest uppercase">
          Бизнес-план
        </Badge>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[1.05] tracking-tight text-white max-w-5xl"
        initial={{ opacity: 0, y: 60 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Коворкинг<br />
        <span className="text-[#4F8EF7]">400 м²</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-neutral-400 mt-6 max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Современное рабочее пространство для фрилансеров, стартапов и малого бизнеса
      </motion.p>

      <motion.div
        className="flex gap-12 mt-16"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {[
          { value: "400", unit: "м²", label: "Площадь" },
          { value: "60", unit: "+", label: "Рабочих мест" },
          { value: "3", unit: "зала", label: "Переговорных" },
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-3xl md:text-4xl font-bold text-white">
              {stat.value}<span className="text-[#4F8EF7] ml-1">{stat.unit}</span>
            </div>
            <div className="text-sm text-neutral-500 mt-1 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
