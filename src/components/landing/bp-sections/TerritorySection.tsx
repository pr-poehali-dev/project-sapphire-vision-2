import { motion } from "framer-motion"

const zones = [
  { id: "open", label: "Open Space", area: 180, x: 0, y: 0, w: 60, h: 60, color: "#4F8EF7", desc: "60 рабочих мест" },
  { id: "quiet", label: "Тихая зона", area: 80, x: 62, y: 0, w: 36, h: 40, color: "#34D399", desc: "Без переговоров" },
  { id: "meeting1", label: "Переговорная A", area: 30, x: 62, y: 42, w: 17, h: 16, color: "#F59E0B", desc: "до 8 человек" },
  { id: "meeting2", label: "Переговорная B", area: 30, x: 81, y: 42, w: 17, h: 16, color: "#F59E0B", desc: "до 8 человек" },
  { id: "lounge", label: "Лаунж", area: 60, x: 0, y: 62, w: 36, h: 36, color: "#A78BFA", desc: "Отдых и кофе" },
  { id: "admin", label: "Ресепшн", area: 20, x: 38, y: 62, w: 20, h: 16, color: "#FB7185", desc: "Вход и сервис" },
]

export default function TerritorySection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Планировка территории
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        400 м² · 3 формата работы · всё под одной крышей
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <motion.div
          className="relative w-full lg:w-[400px] h-[280px] flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ position: "relative" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ border: "1px solid #222", borderRadius: 8 }}>
            <rect width="100" height="100" fill="#0a0a0a" />
            {zones.map((z, i) => (
              <motion.g key={z.id}
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <rect
                  x={z.x + 0.5} y={z.y + 0.5}
                  width={z.w - 1} height={z.h - 1}
                  fill={z.color + "18"}
                  stroke={z.color}
                  strokeWidth="0.5"
                  rx="1"
                />
                <text
                  x={z.x + z.w / 2} y={z.y + z.h / 2 - 1}
                  textAnchor="middle" dominantBaseline="middle"
                  fill={z.color} fontSize="3.5" fontWeight="600"
                >
                  {z.label}
                </text>
                <text
                  x={z.x + z.w / 2} y={z.y + z.h / 2 + 4}
                  textAnchor="middle" dominantBaseline="middle"
                  fill="#666" fontSize="2.5"
                >
                  {z.area} м²
                </text>
              </motion.g>
            ))}
            <text x="50" y="82" textAnchor="middle" fill="#333" fontSize="2.5">Технические помещения · 20 м²</text>
          </svg>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1">
          {zones.map((z, i) => (
            <motion.div
              key={z.id}
              className="rounded-lg p-4"
              style={{ background: z.color + "10", border: `1px solid ${z.color}33` }}
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
            >
              <div className="text-xl font-bold" style={{ color: z.color }}>{z.area} м²</div>
              <div className="text-white text-sm font-medium mt-1">{z.label}</div>
              <div className="text-neutral-500 text-xs mt-0.5">{z.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
