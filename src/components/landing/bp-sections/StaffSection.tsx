import { motion } from "framer-motion"

const staff = [
  { role: "Управляющий", count: 1, salary: 70000, duties: "Общее управление, развитие, партнёрства" },
  { role: "Администратор", count: 2, salary: 40000, duties: "Работа ресепшн, помощь клиентам, посменно" },
  { role: "Менеджер по продажам", count: 1, salary: 45000, duties: "Привлечение клиентов, работа с абонементами" },
  { role: "Технический специалист", count: 1, salary: 40000, duties: "IT-инфраструктура, оборудование, интернет" },
  { role: "Клининг", count: 2, salary: 25000, duties: "Поддержание чистоты, посменно" },
]

const totalFond = staff.reduce((a, s) => a + s.salary * s.count, 0)

export default function StaffSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Штатное расписание
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        7 сотрудников · ФОТ {totalFond.toLocaleString("ru-RU")} ₽/мес
      </motion.p>

      <div className="overflow-hidden rounded-xl border border-neutral-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-800 bg-neutral-900/60">
              {["Должность", "Кол-во", "Оклад", "Итого/мес", "Обязанности"].map(h => (
                <th key={h} className="text-left text-neutral-500 font-medium px-4 py-3 text-xs uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {staff.map((s, i) => (
              <motion.tr
                key={s.role}
                className="border-b border-neutral-800/50 hover:bg-neutral-800/20 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                <td className="px-4 py-3 text-white font-medium">{s.role}</td>
                <td className="px-4 py-3 text-[#4F8EF7] font-bold">{s.count}</td>
                <td className="px-4 py-3 text-neutral-300">{s.salary.toLocaleString("ru-RU")} ₽</td>
                <td className="px-4 py-3 text-white font-semibold">{(s.salary * s.count).toLocaleString("ru-RU")} ₽</td>
                <td className="px-4 py-3 text-neutral-500 text-xs">{s.duties}</td>
              </motion.tr>
            ))}
          </tbody>
          <tfoot>
            <motion.tr
              className="bg-[#4F8EF7]/10"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <td className="px-4 py-3 text-[#4F8EF7] font-bold" colSpan={3}>Итого ФОТ</td>
              <td className="px-4 py-3 text-[#4F8EF7] font-bold text-base">{totalFond.toLocaleString("ru-RU")} ₽</td>
              <td className="px-4 py-3 text-neutral-500 text-xs">+ налоги ~30% = {Math.round(totalFond * 1.3).toLocaleString("ru-RU")} ₽</td>
            </motion.tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}
