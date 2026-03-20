import { motion } from "framer-motion"

interface Props { isActive: boolean }

const staff = [
  { role: "Управляющий", count: 1, salary: 80000, total: 80000 },
  { role: "Администратор", count: 2, salary: 45000, total: 90000 },
  { role: "Менеджер по продажам", count: 1, salary: 50000, total: 50000 },
  { role: "Технический специалист", count: 1, salary: 55000, total: 55000 },
  { role: "Уборщица", count: 2, salary: 30000, total: 60000 },
  { role: "Бухгалтер (аутсорс)", count: 1, salary: 20000, total: 20000 },
]

const total = staff.reduce((s, r) => s + r.total, 0)
const maxTotal = Math.max(...staff.map(r => r.total))

export default function StaffSection({ isActive }: Props) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.p
        className="text-[#4F8EF7] text-sm tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        03 / Штат
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Штатное расписание
      </motion.h2>

      <div className="max-w-2xl w-full space-y-3">
        {staff.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
          >
            <div className="flex justify-between text-sm mb-1">
              <span className="text-neutral-300">{row.role} <span className="text-neutral-600">× {row.count}</span></span>
              <span className="text-white font-medium">{row.total.toLocaleString("ru")} ₽</span>
            </div>
            <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#4F8EF7] rounded-full"
                initial={{ width: 0 }}
                animate={isActive ? { width: `${(row.total / maxTotal) * 100}%` } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 flex items-center gap-6"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        <div className="h-px w-12 bg-[#4F8EF7]" />
        <span className="text-neutral-400 text-sm">
          Итого ФОТ: <span className="text-white font-semibold">{total.toLocaleString("ru")} ₽/мес</span>
          <span className="text-neutral-600 ml-2">({(total * 12).toLocaleString("ru")} ₽/год)</span>
        </span>
      </motion.div>
    </section>
  )
}
