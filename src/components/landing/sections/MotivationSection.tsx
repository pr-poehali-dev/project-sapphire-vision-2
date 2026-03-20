import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

interface Props { isActive: boolean }

const items = [
  { icon: "TrendingUp", title: "KPI-бонусы", desc: "До 30% от оклада при выполнении плана по заполняемости" },
  { icon: "Star", title: "Лучший сотрудник", desc: "Ежеквартальная премия 10 000 ₽ по итогам голосования" },
  { icon: "Heart", title: "ДМС", desc: "Добровольное медицинское страхование с 6-го месяца работы" },
  { icon: "Coffee", title: "Корпоративный комфорт", desc: "Бесплатные кофе и обеды, гибкий график для администраторов" },
  { icon: "GraduationCap", title: "Обучение", desc: "Курсы и тренинги за счёт компании раз в полгода" },
  { icon: "Percent", title: "Скидки и привилегии", desc: "Скидка 50% на личное использование пространства" },
]

export default function MotivationSection({ isActive }: Props) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.p
        className="text-[#4F8EF7] text-sm tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        04 / Мотивация
      </motion.p>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white leading-tight mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Стимулирование персонала
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="p-5 border border-neutral-800 rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
          >
            <div className="text-[#4F8EF7] mb-3">
              <Icon name={item.icon as "Star"} size={18} />
            </div>
            <div className="text-white font-medium text-sm mb-1">{item.title}</div>
            <div className="text-neutral-500 text-xs leading-relaxed">{item.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
