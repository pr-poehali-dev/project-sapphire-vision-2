import { motion } from "framer-motion"

const zones = [
  { label: "Открытое пространство", w: 55, h: 45, x: 0, y: 0, color: "#4F8EF7", area: 120 },
  { label: "Переговорные", w: 25, h: 25, x: 55, y: 0, color: "#7C3AED", area: 40 },
  { label: "Тихие кабины", w: 20, h: 25, x: 80, y: 0, color: "#059669", area: 30 },
  { label: "Лаунж / кофе", w: 30, h: 30, x: 0, y: 45, color: "#D97706", area: 60 },
  { label: "Ресепшн", w: 25, h: 30, x: 30, y: 45, color: "#DB2777", area: 40 },
  { label: "Серверная / склад", w: 15, h: 25, x: 55, y: 45, color: "#6B7280", area: 30 },
  { label: "Санузлы", w: 15, h: 30, x: 70, y: 45, color: "#374151", area: 30 },
  { label: "Коридоры / переходы", w: 15, h: 30, x: 85, y: 45, color: "#1F2937", area: 50 },
]

export default function TerritorySection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.div
        className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        Планировка
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Территория 400 м²
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Floor plan */}
        <motion.div
          className="relative w-full lg:w-2/3 aspect-video border border-white/10 rounded-xl overflow-hidden bg-black/40"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {zones.map((zone, i) => (
            <motion.div
              key={zone.label}
              className="absolute flex items-center justify-center group cursor-default"
              style={{
                left: `${zone.x}%`,
                top: `${zone.y}%`,
                width: `${zone.w}%`,
                height: `${zone.h}%`,
                backgroundColor: zone.color + "22",
                borderRight: "1px solid " + zone.color + "44",
                borderBottom: "1px solid " + zone.color + "44",
              }}
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
            >
              <div className="text-center px-1">
                <div className="w-2 h-2 rounded-full mx-auto mb-1" style={{ backgroundColor: zone.color }} />
                <span className="text-[10px] text-white/60 leading-tight hidden md:block">{zone.label}</span>
              </div>
            </motion.div>
          ))}
          <div className="absolute bottom-2 right-2 text-[10px] text-white/30">400 м² · не в масштабе</div>
        </motion.div>

        {/* Legend */}
        <motion.div
          className="flex flex-col gap-2 lg:w-1/3"
          initial={{ opacity: 0, x: 20 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {zones.map((zone) => (
            <div key={zone.label} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: zone.color }} />
                <span className="text-xs text-neutral-400">{zone.label}</span>
              </div>
              <span className="text-xs font-mono text-white/60">{zone.area} м²</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
