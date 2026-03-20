import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"

const startup = [
  { name: "Ремонт и отделка", amount: 1200000 },
  { name: "Мебель и оборудование", amount: 800000 },
  { name: "IT и интернет", amount: 150000 },
  { name: "Регистрация и юр. услуги", amount: 80000 },
  { name: "Маркетинг (запуск)", amount: 200000 },
  { name: "Оборотный капитал (3 мес)", amount: 570000 },
]

const monthly = [
  { name: "Аренда помещения", amount: 280000 },
  { name: "ФОТ + налоги", amount: 299000 },
  { name: "Коммунальные услуги", amount: 40000 },
  { name: "Интернет + сервисы", amount: 15000 },
  { name: "Расходники, клининг", amount: 20000 },
  { name: "Маркетинг (регулярный)", amount: 30000 },
  { name: "Прочие расходы", amount: 20000 },
]

const totalStartup = startup.reduce((a, s) => a + s.amount, 0)
const totalMonthly = monthly.reduce((a, s) => a + s.amount, 0)

export default function ExpensesSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Смета расходов
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Стартовые вложения: <span className="text-white font-semibold">{totalStartup.toLocaleString("ru-RU")} ₽</span>
        &nbsp;·&nbsp; Ежемесячные: <span className="text-white font-semibold">{totalMonthly.toLocaleString("ru-RU")} ₽</span>
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-6">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-neutral-500 text-xs mb-2 uppercase tracking-wide">Стартовые вложения</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={startup} layout="vertical" barSize={14}>
              <XAxis type="number" tick={{ fill: "#555", fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000).toFixed(0)}к`} />
              <YAxis type="category" dataKey="name" tick={{ fill: "#888", fontSize: 10 }} width={130} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 11 }} formatter={(v: number) => [v.toLocaleString("ru-RU") + " ₽", ""]} cursor={{ fill: "#ffffff05" }} />
              <Bar dataKey="amount" radius={[0, 4, 4, 0]} fill="#4F8EF7" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="text-neutral-500 text-xs mb-2 uppercase tracking-wide">Ежемесячные расходы</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthly} layout="vertical" barSize={14}>
              <XAxis type="number" tick={{ fill: "#555", fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000).toFixed(0)}к`} />
              <YAxis type="category" dataKey="name" tick={{ fill: "#888", fontSize: 10 }} width={130} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", borderRadius: 8, fontSize: 11 }} formatter={(v: number) => [v.toLocaleString("ru-RU") + " ₽", ""]} cursor={{ fill: "#ffffff05" }} />
              <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
                {monthly.map((_, i) => <Cell key={i} fill={`hsl(${215 + i * 8}, 80%, ${55 + i * 2}%)`} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  )
}
