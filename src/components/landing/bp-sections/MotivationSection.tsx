import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const items = [
  {
    icon: "TrendingUp",
    title: "KPI-бонусы",
    desc: "Менеджер по продажам получает 5% от продаж абонементов сверх плана. Администраторы — бонус за оценки клиентов выше 4.5",
  },
  {
    icon: "Gift",
    title: "Нематериальная мотивация",
    desc: "Бесплатный доступ к коворкингу для сотрудников, корпоративные мероприятия, обучение за счёт компании",
  },
  {
    icon: "Award",
    title: "Лучший сотрудник месяца",
    desc: "Дополнительный день отпуска + сертификат 3 000 ₽ в любой магазин. Голосование публичное",
  },
  {
    icon: "Zap",
    title: "Квартальная премия",
    desc: "При выполнении плана выручки на 100%+ — квартальная премия 10% от оклада для всех сотрудников",
  },
]

export default function MotivationSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Стимулирование персонала
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-10"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Материальные и нематериальные инструменты удержания команды
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className="flex gap-5 p-5 rounded-xl border border-neutral-800 bg-neutral-900/40"
            initial={{ opacity: 0, y: 25 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-xl bg-[#4F8EF7]/10 flex items-center justify-center flex-shrink-0">
              <Icon name={item.icon} size={22} className="text-[#4F8EF7]" />
            </div>
            <div>
              <div className="text-white font-semibold mb-1">{item.title}</div>
              <div className="text-neutral-500 text-sm leading-relaxed">{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
