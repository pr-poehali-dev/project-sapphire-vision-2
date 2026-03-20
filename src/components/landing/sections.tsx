import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, Legend
} from "recharts"

const BLUE = "#4F8EF7"
const GRAY = "#555"

const fadeItem = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

const revenueData = [
  { month: "Янв", доходы: 380000, расходы: 310000 },
  { month: "Фев", доходы: 420000, расходы: 310000 },
  { month: "Мар", доходы: 470000, расходы: 320000 },
  { month: "Апр", доходы: 510000, расходы: 320000 },
  { month: "Май", доходы: 560000, расходы: 325000 },
  { month: "Июн", доходы: 610000, расходы: 330000 },
]

const expenseData = [
  { name: "Аренда", value: 150000 },
  { name: "ФОТ", value: 165000 },
  { name: "Коммунальные", value: 35000 },
  { name: "Маркетинг", value: 20000 },
  { name: "Прочее", value: 40000 },
]
const PIE_COLORS = ["#4F8EF7", "#6aa3f8", "#8eb8fa", "#b3cffc", "#d7e7fd"]

const competitorData = [
  { subject: "Цена", A: 70 },
  { subject: "Локация", A: 90 },
  { subject: "Атмосфера", A: 85 },
  { subject: "Услуги", A: 80 },
  { subject: "Часы работы", A: 95 },
]

const consumerData = [
  { name: "Фрилансеры", value: 38 },
  { name: "Стартапы", value: 27 },
  { name: "Удалёнщики", value: 22 },
  { name: "Малый бизнес", value: 13 },
]
const CONSUMER_COLORS = ["#4F8EF7", "#74a9f9", "#a0c5fb", "#ccdffe"]

const profitLine = [
  { month: "Янв", прибыль: 70000 },
  { month: "Фев", прибыль: 110000 },
  { month: "Мар", прибыль: 150000 },
  { month: "Апр", прибыль: 190000 },
  { month: "Май", прибыль: 235000 },
  { month: "Июн", прибыль: 280000 },
]

function SectionTitle({ title, delay = 0 }: { title: string; delay?: number }) {
  return (
    <motion.h2 {...fadeItem(delay)} className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
      {title}
    </motion.h2>
  )
}

const TitleSection = (
  <div className="flex flex-col justify-center h-full p-8 md:p-16 lg:p-24">
    <motion.div {...fadeItem(0)} className="mb-8">
      <Badge variant="outline" className="text-white border-white/40 text-xs tracking-widest uppercase">Бизнес-план 2024</Badge>
    </motion.div>
    <motion.h1 {...fadeItem(0.1)} className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white leading-[1.05] tracking-tight max-w-4xl">
      Коворкинг<br /><span style={{ color: BLUE }}>400 м²</span>
    </motion.h1>
    <motion.p {...fadeItem(0.3)} className="text-xl text-neutral-400 mt-8 max-w-xl">
      Современное пространство для работы, роста и нетворкинга в сердце города.
    </motion.p>
    <motion.div {...fadeItem(0.5)} className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
      {[["Площадь", "400 м²"], ["Мест", "60"], ["Окупаемость", "14 мес."]] .map(([l, v]) => (
        <div key={l} className="border-t border-white/20 pt-4">
          <div className="text-neutral-500 text-xs uppercase tracking-widest">{l}</div>
          <div className="text-white text-2xl font-bold mt-1">{v}</div>
        </div>
      ))}
    </motion.div>
  </div>
)

const CharacteristicsSection = (
  <div className="flex flex-col justify-center h-full p-8 md:p-16 lg:p-24">
    <SectionTitle title="Характеристика предприятия" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 max-w-4xl">
      {[
        ["Форма собственности", "ИП / ООО"],
        ["Площадь", "400 кв. м"],
        ["Вместимость", "60 рабочих мест"],
        ["Режим работы", "08:00 – 22:00, 7 дней"],
        ["Целевой город", "Региональный центр"],
        ["Инвестиции на старт", "1 850 000 ₽"],
      ].map(([label, val], i) => (
        <motion.div key={label} {...fadeItem(i * 0.08)} className="flex justify-between items-center border-b border-white/10 py-4">
          <span className="text-neutral-400 text-base">{label}</span>
          <span className="text-white font-semibold text-base">{val}</span>
        </motion.div>
      ))}
    </div>
  </div>
)

const ServicesSection = (
  <div className="flex flex-col justify-center h-full p-8 md:p-16 lg:p-24">
    <SectionTitle title="Описание услуг" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
      {[
        { name: "Дневной пропуск", price: "600 ₽/день", desc: "Открытое пространство, Wi-Fi, кофе" },
        { name: "Месячный абонемент", price: "8 000 ₽/мес", desc: "Фиксированное место, доп. скидки" },
        { name: "Переговорная", price: "1 500 ₽/час", desc: "До 12 чел., экран, флипчарт" },
        { name: "Офис для команды", price: "от 35 000 ₽/мес", desc: "Выделённый офис 20–40 м²" },
        { name: "Виртуальный офис", price: "2 500 ₽/мес", desc: "Юридический адрес, почта" },
        { name: "Ивент-зал", price: "5 000 ₽/вечер", desc: "Воркшопы, нетворкинг-ивенты" },
      ].map((s, i) => (
        <motion.div key={s.name} {...fadeItem(i * 0.08)} className="border border-white/10 p-5 flex flex-col gap-2 hover:border-[#4F8EF7]/50 transition-colors">
          <span className="text-white font-semibold">{s.name}</span>
          <span className="text-[#4F8EF7] text-xl font-bold">{s.price}</span>
          <span className="text-neutral-500 text-sm">{s.desc}</span>
        </motion.div>
      ))}
    </div>
  </div>
)

const StaffSection = (
  <div className="flex flex-col justify-center h-full p-8 md:p-16 lg:p-24">
    <SectionTitle title="Штатное расписание" />
    <div className="max-w-3xl w-full">
      <div className="grid grid-cols-4 text-neutral-500 text-xs uppercase tracking-widest pb-3 border-b border-white/10 mb-1">
        <span className="col-span-2">Должность</span><span className="text-center">Ставка</span><span className="text-right">ФОТ/мес</span>
      </div>
      {[
        ["Управляющий", "1.0", "55 000 ₽"],
        ["Администратор (2 чел.)", "1.0", "80 000 ₽"],
        ["Менеджер продаж", "1.0", "35 000 ₽ + %"],
        ["Уборщица", "0.5", "15 000 ₽"],
        ["Системный администратор", "0.5", "20 000 ₽"],
      ].map(([pos, rate, salary], i) => (
        <motion.div key={pos} {...fadeItem(i * 0.1)} className="grid grid-cols-4 py-4 border-b border-white/5">
          <span className="text-white col-span-2">{pos}</span>
          <span className="text-neutral-400 text-center">{rate}</span>
          <span className="text-[#4F8EF7] font-semibold text-right">{salary}</span>
        </motion.div>
      ))}
      <motion.div {...fadeItem(0.6)} className="grid grid-cols-4 py-4 mt-2">
        <span className="text-white font-bold col-span-3">Итого ФОТ</span>
        <span className="text-white font-bold text-right">205 000 ₽</span>
      </motion.div>
    </div>
  </div>
)

const StimulationSection = (
  <div className="flex flex-col justify-center h-full p-8 md:p-16 lg:p-24">
    <SectionTitle title="Стимулирование продаж" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
      {[
        { icon: "🎯", title: "Реферальная программа", desc: "−20% на следующий месяц за каждого приведённого участника" },
        { icon: "📅", title: "Длинные абонементы", desc: "3 мес — скидка 10%, 6 мес — скидка 18%, год — скидка 25%" },
        { icon: "🌐", title: "Таргетированная реклама", desc: "ВКонтакте, Telegram-каналы. Бюджет 20 000 ₽/мес" },
        { icon: "🤝", title: "Партнёрства", desc: "Коллаборации с банками, акселераторами, университетами" },
        { icon: "🎉", title: "Бесплатные ивенты", desc: "Еженедельные нетворкинг-встречи для привлечения аудитории" },
        { icon: "💳", title: "Программа лояльности", desc: "Накопительные баллы: каждые 10 посещений — 1 день бесплатно" },
      ].map((item, i) => (
        <motion.div key={item.title} {...fadeItem(i * 0.08)} className="flex gap-4 p-5 border border-white/10 hover:border-[#4F8EF7]/40 transition-colors">
          <span className="text-2xl">{item.icon}</span>
          <div>
            <div className="text-white font-semibold mb-1">{item.title}</div>
            <div className="text-neutral-500 text-sm">{item.desc}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
)

const ConsumerImageSection = (
  <div className="flex flex-col justify-center h-full p-8 md:p-16 lg:p-24">
    <SectionTitle title="Образ потребителя" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
      <div>
        {[
          ["Возраст", "24–42 года"],
          ["Доход", "от 60 000 ₽/мес"],
          ["Сфера", "IT, дизайн, маркетинг, консалтинг"],
          ["Статус", "Фрилансер / удалённый сотрудник"],
          ["Ценности", "Продуктивность, гибкость, нетворкинг"],
        ].map(([k, v], i) => (
          <motion.div key={k} {...fadeItem(i * 0.08)} className="flex justify-between border-b border-white/10 py-3">
            <span className="text-neutral-400">{k}</span>
            <span className="text-white font-medium">{v}</span>
          </motion.div>
        ))}
      </div>
      <motion.div {...fadeItem(0.4)}>
        <div className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Сегменты по объёму</div>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={consumerData} cx="50%" cy="50%" innerRadius={50} outerRadius={85} dataKey="value" paddingAngle={3}>
              {consumerData.map((_, index) => (
                <Cell key={index} fill={CONSUMER_COLORS[index]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", color: "#fff" }} />
            <Legend iconType="circle" wrapperStyle={{ color: "#888", fontSize: 12 }} />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  </div>
)

const CompetitorsSection = (
  <div className="flex flex-col justify-center h-full p-8 md:p-16 lg:p-24">
    <SectionTitle title="Анализ конкурентов" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl items-start">
      <div>
        {[
          { name: "Конкурент А", price: "750 ₽/д", strong: "Центр города" },
          { name: "Конкурент Б", price: "550 ₽/д", strong: "Низкая цена" },
          { name: "Конкурент В", price: "900 ₽/д", strong: "Премиум-сервис" },
          { name: "Мы", price: "600 ₽/д", strong: "Баланс цены и качества" },
        ].map((c, i) => (
          <motion.div key={c.name} {...fadeItem(i * 0.1)} className={`flex items-center gap-4 py-3 border-b border-white/10 ${c.name === "Мы" ? "text-[#4F8EF7]" : "text-white"}`}>
            <span className="w-28 font-semibold text-sm">{c.name}</span>
            <span className="w-20 text-sm opacity-70">{c.price}</span>
            <span className="flex-1 text-xs text-neutral-500">✓ {c.strong}</span>
          </motion.div>
        ))}
        <motion.div {...fadeItem(0.5)} className="mt-6 p-4 border border-[#4F8EF7]/20 bg-[#4F8EF7]/5">
          <div className="text-neutral-500 text-xs uppercase tracking-widest mb-2">Наше УТП</div>
          <div className="text-white text-sm">Оптимальная цена + максимальное количество форматов + 400 м² без ощущения тесноты</div>
        </motion.div>
      </div>
      <motion.div {...fadeItem(0.4)}>
        <div className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Наши показатели</div>
        <ResponsiveContainer width="100%" height={240}>
          <RadarChart data={competitorData}>
            <PolarGrid stroke="#333" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: "#666", fontSize: 12 }} />
            <Radar name="Наш коворкинг" dataKey="A" stroke={BLUE} fill={BLUE} fillOpacity={0.25} />
            <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", color: "#fff" }} />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  </div>
)

const SWOTSection = (
  <div className="flex flex-col justify-center h-full p-8 md:p-16 lg:p-24">
    <SectionTitle title="SWOT-анализ" />
    <div className="grid grid-cols-2 gap-4 max-w-4xl">
      {[
        { label: "S — Сильные стороны", color: BLUE, items: ["400 м² современного пространства", "6 форматов аренды", "Режим 7/7 с 8:00 до 22:00", "Конкурентная цена"] },
        { label: "W — Слабые стороны", color: "#888", items: ["Новый бренд без репутации", "Высокие начальные инвестиции", "Зависимость от заполняемости", "Конкуренция за локацию"] },
        { label: "O — Возможности", color: BLUE, items: ["Рост удалённой работы", "Господдержка стартапов", "Партнёрства с вузами", "Франчайзинг в будущем"] },
        { label: "T — Угрозы", color: "#888", items: ["Экономический спад", "Появление новых конкурентов", "Рост арендных ставок", "Снижение спроса"] },
      ].map((block, i) => (
        <motion.div key={block.label} {...fadeItem(i * 0.12)} className="border border-white/10 p-5">
          <div className="text-xs uppercase tracking-widest mb-3" style={{ color: block.color }}>{block.label}</div>
          <ul className="space-y-1">
            {block.items.map(it => <li key={it} className="text-neutral-300 text-sm">— {it}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
)

const ConsumerAnalysisSection = (
  <div className="flex flex-col justify-center h-full p-8 md:p-16 lg:p-24">
    <SectionTitle title="Анализ потребителей" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
      <div className="space-y-5">
        {[
          { label: "Выбирают гибкость", pct: 78 },
          { label: "Важна атмосфера", pct: 65 },
          { label: "Ищут нетворкинг", pct: 54 },
          { label: "Готовы доплатить за переговорную", pct: 47 },
          { label: "Рассматривают виртуальный офис", pct: 32 },
        ].map((item, i) => (
          <motion.div key={item.label} {...fadeItem(i * 0.1)}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-neutral-400">{item.label}</span>
              <span className="text-white font-semibold">{item.pct}%</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: BLUE }}
                initial={{ width: 0 }}
                animate={{ width: `${item.pct}%` }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div {...fadeItem(0.4)}>
        <div className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Частота посещений</div>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={[
            { name: "Ежедневно", value: 34 },
            { name: "3–4/нед", value: 28 },
            { name: "1–2/нед", value: 24 },
            { name: "Редко", value: 14 },
          ]} barSize={28}>
            <XAxis dataKey="name" tick={{ fill: "#666", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", color: "#fff" }} formatter={(v) => [`${v}%`, "Доля"]} />
            <Bar dataKey="value" fill={BLUE} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  </div>
)

const RisksSection = (
  <div className="flex flex-col justify-center h-full p-8 md:p-16 lg:p-24">
    <SectionTitle title="Анализ рисков" />
    <div className="max-w-4xl w-full">
      <div className="grid grid-cols-4 text-neutral-500 text-xs uppercase tracking-widest pb-3 border-b border-white/10 mb-1">
        <span className="col-span-2">Риск</span><span className="text-center">Вероятность</span><span className="text-right">Влияние</span>
      </div>
      {[
        ["Низкая заполняемость на старте", "Средняя", "Высокое"],
        ["Рост арендной платы", "Низкая", "Среднее"],
        ["Уход ключевых клиентов", "Средняя", "Среднее"],
        ["Технический сбой", "Низкая", "Низкое"],
        ["Ужесточение конкуренции", "Высокая", "Среднее"],
        ["Экономический спад", "Средняя", "Высокое"],
      ].map(([risk, prob, impact], i) => {
        const probColor = prob === "Высокая" ? "#f87171" : prob === "Средняя" ? "#facc15" : "#4ade80"
        const impactColor = impact === "Высокое" ? "#f87171" : impact === "Среднее" ? "#facc15" : "#4ade80"
        return (
          <motion.div key={risk} {...fadeItem(i * 0.08)} className="grid grid-cols-4 py-3 border-b border-white/5">
            <span className="text-white text-sm col-span-2">{risk}</span>
            <span className="text-center text-sm font-medium" style={{ color: probColor }}>{prob}</span>
            <span className="text-right text-sm font-medium" style={{ color: impactColor }}>{impact}</span>
          </motion.div>
        )
      })}
    </div>
  </div>
)

const ExpensesSection = (
  <div className="flex flex-col justify-center h-full p-8 md:p-16 lg:p-24">
    <SectionTitle title="Смета расходов" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl items-center">
      <div>
        {[
          ["Аренда помещения", "150 000 ₽"],
          ["Фонд оплаты труда", "205 000 ₽"],
          ["Коммунальные услуги", "35 000 ₽"],
          ["Интернет / телефония", "8 000 ₽"],
          ["Маркетинг и реклама", "20 000 ₽"],
          ["Расходные материалы", "12 000 ₽"],
          ["Прочие расходы", "20 000 ₽"],
        ].map(([label, val], i) => (
          <motion.div key={label} {...fadeItem(i * 0.07)} className="flex justify-between border-b border-white/10 py-3">
            <span className="text-neutral-400 text-sm">{label}</span>
            <span className="text-white font-semibold">{val}</span>
          </motion.div>
        ))}
        <motion.div {...fadeItem(0.6)} className="flex justify-between py-4 mt-2">
          <span className="text-white font-bold">Итого/мес</span>
          <span className="text-[#4F8EF7] font-bold text-lg">450 000 ₽</span>
        </motion.div>
      </div>
      <motion.div {...fadeItem(0.4)}>
        <div className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Структура расходов</div>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie data={expenseData} cx="50%" cy="50%" outerRadius={90} dataKey="value" paddingAngle={2} label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`} labelLine={false}>
              {expenseData.map((_, index) => (
                <Cell key={index} fill={PIE_COLORS[index]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", color: "#fff" }} formatter={(v: number) => [`${v.toLocaleString()} ₽`, ""]} />
            <Legend iconType="circle" wrapperStyle={{ color: "#888", fontSize: 12 }} />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  </div>
)

const IncomeSection = (
  <div className="flex flex-col justify-center h-full p-8 md:p-16 lg:p-24">
    <SectionTitle title="Смета доходов" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl items-start">
      <div>
        {[
          ["Дневные пропуска (×40/мес)", "240 000 ₽"],
          ["Месячные абонементы (×20)", "160 000 ₽"],
          ["Переговорные комнаты", "60 000 ₽"],
          ["Командные офисы (×2)", "70 000 ₽"],
          ["Виртуальные офисы (×10)", "25 000 ₽"],
          ["Ивент-зал", "20 000 ₽"],
          ["Дополнительные услуги", "15 000 ₽"],
        ].map(([label, val], i) => (
          <motion.div key={label} {...fadeItem(i * 0.07)} className="flex justify-between border-b border-white/10 py-3">
            <span className="text-neutral-400 text-sm">{label}</span>
            <span className="text-white font-semibold">{val}</span>
          </motion.div>
        ))}
        <motion.div {...fadeItem(0.6)} className="flex justify-between py-4 mt-2">
          <span className="text-white font-bold">Итого/мес (прогноз)</span>
          <span className="text-[#4F8EF7] font-bold text-lg">590 000 ₽</span>
        </motion.div>
        <motion.div {...fadeItem(0.7)} className="flex justify-between py-2">
          <span className="text-neutral-400">Чистая прибыль/мес</span>
          <span className="text-green-400 font-bold text-lg">140 000 ₽</span>
        </motion.div>
      </div>
      <motion.div {...fadeItem(0.4)} className="space-y-6">
        <div>
          <div className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Доходы vs Расходы</div>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={revenueData} barSize={14} barGap={3}>
              <XAxis dataKey="month" tick={{ fill: "#666", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", color: "#fff" }} formatter={(v: number) => [`${v.toLocaleString()} ₽`, ""]} />
              <Bar dataKey="доходы" fill={BLUE} radius={[3, 3, 0, 0]} />
              <Bar dataKey="расходы" fill={GRAY} radius={[3, 3, 0, 0]} />
              <Legend iconType="circle" wrapperStyle={{ color: "#888", fontSize: 11 }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <div className="text-neutral-500 text-xs uppercase tracking-widest mb-3">Рост прибыли</div>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={profitLine}>
              <XAxis dataKey="month" tick={{ fill: "#666", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip contentStyle={{ background: "#111", border: "1px solid #333", color: "#fff" }} formatter={(v: number) => [`${v.toLocaleString()} ₽`, "Прибыль"]} />
              <Line type="monotone" dataKey="прибыль" stroke={BLUE} strokeWidth={2} dot={{ fill: BLUE, r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  </div>
)

const TerritorySection = (
  <div className="flex flex-col justify-center h-full p-8 md:p-16 lg:p-24">
    <SectionTitle title="Территория 400 м²" />
    <motion.p {...fadeItem(0.1)} className="text-neutral-400 text-base mb-8 max-w-lg">
      Функциональное зонирование — каждый квадратный метр работает на продуктивность
    </motion.p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mb-8">
      {[
        { zone: "Открытый зал", area: "150 м²", seats: "40 мест", color: BLUE },
        { zone: "Тихая зона", area: "60 м²", seats: "12 мест", color: "#74a9f9" },
        { zone: "Переговорные", area: "80 м²", seats: "3 комнаты", color: "#a0c5fb" },
        { zone: "Командные офисы", area: "70 м²", seats: "2 офиса", color: "#ccdffe" },
        { zone: "Ресепшн / лаунж", area: "25 м²", seats: "—", color: "#888" },
        { zone: "Кухня / кофе-зона", area: "15 м²", seats: "—", color: "#666" },
      ].map((z, i) => (
        <motion.div key={z.zone} {...fadeItem(i * 0.08)} className="border border-white/10 p-4">
          <div className="w-full h-1 mb-3 rounded" style={{ background: z.color }} />
          <div className="text-white font-semibold text-sm">{z.zone}</div>
          <div className="text-2xl font-bold mt-1" style={{ color: z.color }}>{z.area}</div>
          <div className="text-neutral-500 text-xs mt-1">{z.seats}</div>
        </motion.div>
      ))}
    </div>
    <motion.div {...fadeItem(0.7)} className="flex items-center gap-8">
      {[["Общая площадь", "400 м²"], ["Рабочих мест", "60"], ["Переговорных", "3"]].map(([l, v], i) => (
        <div key={l} className={`border-l-2 pl-4 ${i === 0 ? "" : "border-white/20"}`} style={i === 0 ? { borderColor: BLUE } : {}}>
          <div className="text-neutral-500 text-xs uppercase tracking-widest">{l}</div>
          <div className="text-white text-3xl font-bold">{v}</div>
        </div>
      ))}
    </motion.div>
  </div>
)

export const sections = [
  { id: "title", title: "Титульный лист", fullCustom: true, customContent: TitleSection },
  { id: "characteristics", title: "Характеристика предприятия", fullCustom: true, customContent: CharacteristicsSection },
  { id: "territory", title: "Территория", fullCustom: true, customContent: TerritorySection },
  { id: "services", title: "Описание услуг", fullCustom: true, customContent: ServicesSection },
  { id: "staff", title: "Штатное расписание", fullCustom: true, customContent: StaffSection },
  { id: "stimulation", title: "Стимулирование", fullCustom: true, customContent: StimulationSection },
  { id: "consumer-image", title: "Образ потребителя", fullCustom: true, customContent: ConsumerImageSection },
  { id: "competitors", title: "Анализ конкурентов", fullCustom: true, customContent: CompetitorsSection },
  { id: "swot", title: "SWOT-анализ", fullCustom: true, customContent: SWOTSection },
  { id: "consumer-analysis", title: "Анализ потребителей", fullCustom: true, customContent: ConsumerAnalysisSection },
  { id: "risks", title: "Анализ рисков", fullCustom: true, customContent: RisksSection },
  { id: "expenses", title: "Смета расходов", fullCustom: true, customContent: ExpensesSection },
  { id: "income", title: "Смета доходов", fullCustom: true, customContent: IncomeSection },
]
