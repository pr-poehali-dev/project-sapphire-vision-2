import { motion } from "framer-motion"

const items = [
  { title: "Бонус от выручки", desc: "Управляющий и менеджер получают 5% от превышения плана", icon: "📈" },
  { title: "KPI администраторов", desc: "Ежемесячная премия за NPS > 8 и заполняемость > 80%", icon: "⭐" },
  { title: "Реферальная программа", desc: "Сотрудник приводит клиента — получает 3 000 ₽", icon: "🤝" },
  { title: "Обучение и рост", desc: "Оплата курсов, конференций и профессионального развития", icon: "🎓" },
  { title: "Гибкий график", desc: "Возможность частичной удалённой работы для части ролей", icon: "🕐" },
  { title: "Льготное членство", desc: "Сотрудники пользуются коворкингом бесплатно", icon: "🏢" },
]

export default function MotivationSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.div
        className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        Мотивация
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Стимулирование персонала
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className="border border-white/10 rounded-xl p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
          >
            <div className="text-2xl mb-3">{item.icon}</div>
            <div className="text-white font-semibold mb-1">{item.title}</div>
            <div className="text-neutral-500 text-sm">{item.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
