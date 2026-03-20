import { motion } from "framer-motion"

const staff = [
  { role: "Управляющий", count: 1, salary: "60 000", duties: "Операционное управление, маркетинг, отчётность" },
  { role: "Администратор", count: 2, salary: "35 000", duties: "Ресепшн, клиенты, бронирования (2 смены)" },
  { role: "Менеджер по продажам", count: 1, salary: "40 000 + %", duties: "Привлечение клиентов, корпоративные договоры" },
  { role: "Технический специалист", count: 1, salary: "30 000", duties: "IT-инфраструктура, оборудование, интернет" },
  { role: "Уборщик", count: 2, salary: "20 000", duties: "Поддержание чистоты, расходники (2 смены)" },
]

const total = staff.reduce((acc, s) => acc + s.count * parseInt(s.salary.replace(/\D/g, "")), 0)

export default function StaffSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.div
        className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        Персонал
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Штатное расписание
      </motion.h2>
      <div className="overflow-x-auto max-w-4xl">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left text-neutral-500 font-normal pb-3 pr-4">Должность</th>
              <th className="text-center text-neutral-500 font-normal pb-3 px-4">Кол-во</th>
              <th className="text-right text-neutral-500 font-normal pb-3 px-4">Оклад, ₽</th>
              <th className="text-left text-neutral-500 font-normal pb-3 pl-4">Обязанности</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s, i) => (
              <motion.tr
                key={s.role}
                className="border-b border-white/5"
                initial={{ opacity: 0, x: -20 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                <td className="py-3 pr-4 text-white font-medium">{s.role}</td>
                <td className="py-3 px-4 text-center text-neutral-400">{s.count}</td>
                <td className="py-3 px-4 text-right font-mono text-[#4F8EF7]">{s.salary}</td>
                <td className="py-3 pl-4 text-neutral-500 text-xs">{s.duties}</td>
              </motion.tr>
            ))}
          </tbody>
          <tfoot>
            <motion.tr
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <td className="pt-4 text-white font-semibold">Итого ФОТ</td>
              <td className="pt-4 text-center text-neutral-400">{staff.reduce((a, s) => a + s.count, 0)}</td>
              <td className="pt-4 text-right font-mono text-white font-bold">~{(total / 1000).toFixed(0)} 000 ₽/мес</td>
              <td />
            </motion.tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}
