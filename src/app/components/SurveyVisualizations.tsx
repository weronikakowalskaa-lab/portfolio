import { motion } from "motion/react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/* ═══════════════════════════════════════════
   1. SEGMENTACJA RESPONDENTÓW (DONUT CHART)
   ═══════════════════════════════════════════ */

const segmentData = [
  { name: "Właściciele zwierząt", value: 81.7, color: "#E84C8B" },
  { name: "Lekarze weterynarii", value: 16.0, color: "#0F172A" },
  { name: "Inni (technicy, studenci)", value: 2.3, color: "#94A3B8" },
];

const petTypeData = [
  { name: "Koty", value: 55, color: "#F9A8D4" },
  { name: "Psy", value: 38, color: "#E84C8B" },
  { name: "Inne (gryzonie, ptaki)", value: 7, color: "#C084FC" },
];

const ageData = [
  { name: "18–25 lat", value: 42, color: "#F9A8D4" },
  { name: "26–35 lat", value: 33, color: "#E84C8B" },
  { name: "36–45 lat", value: 16, color: "#C084FC" },
  { name: "46+ lat", value: 9, color: "#0F172A" },
];

function DonutChart({
  data,
  title,
  centerLabel,
  chartId,
}: {
  data: { name: string; value: number; color: string }[];
  title: string;
  centerLabel?: string;
  chartId: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <h4 className="font-semibold text-[#0F172A] mb-4 text-center">
        {title}
      </h4>
      <div className="w-full h-[200px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`${chartId}-cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => `${value}%`}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                fontSize: "13px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        {centerLabel && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs text-[#0F172A]/50 font-medium">
              {centerLabel}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-xs text-[#0F172A]/60">
              {entry.name}{" "}
              <span className="font-medium text-[#0F172A]/80">
                {entry.value}%
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SurveySegmentation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-100 shadow-sm bg-white p-6 md:p-8"
    >
      <div className="text-center mb-8">
        <p className="text-xs text-[#E84C8B] font-medium tracking-widest uppercase mb-1">
          Quantitative research
        </p>
        <h3 className="text-xl font-semibold text-[#0F172A]">
          Segmentation of 131 respondents
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <DonutChart
          data={segmentData}
          title="Who are the respondents?"
          centerLabel="n=131"
          chartId="segment"
        />
        <DonutChart
          data={petTypeData}
          title="What pets do they own?"
          centerLabel="pets"
          chartId="pettype"
        />
        <DonutChart
          data={ageData}
          title="Age structure"
          centerLabel="age"
          chartId="age"
        />
      </div>

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-6 border-t border-gray-100">
        {[
          { value: "131", label: "Respondents" },
          { value: "81,7%", label: "Pet owners" },
          { value: "76%", label: "Women" },
          { value: "62%", label: "City residents 100k+" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-3 rounded-xl bg-[#F8FAFC]"
          >
            <p className="text-xl font-bold text-[#E84C8B]">{stat.value}</p>
            <p className="text-xs text-[#0F172A]/50 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   2. WYKRESY SŁUPKOWE — WYNIKI ANKIETY
   ═══════════════════════════════════════════ */

const forgettingData = [
  { category: "Szczepienie", procent: 47.3 },
  { category: "Podanie leku", procent: 38.9 },
  { category: "Badanie okresowe", procent: 35.1 },
  { category: "Wizyta kontrolna", procent: 29.0 },
  { category: "Odrobaczanie", procent: 26.7 },
  { category: "Nie zapominam", procent: 18.3 },
];

const infoSourceData = [
  { source: "Weterynarz (wizyta)", procent: 78.6 },
  { source: "Internet / Google", procent: 61.8 },
  { source: "Social media / grupy", procent: 43.5 },
  { source: "Znajomi / rodzina", procent: 32.1 },
  { source: "Aplikacja mobilna", procent: 11.5 },
];

const communicationData = [
  { channel: "Telefon", procent: 68.7 },
  { channel: "Messenger", procent: 52.3 },
  { channel: "Osobiście (na wizycie)", procent: 48.1 },
  { channel: "SMS", procent: 22.9 },
  { channel: "E-mail", procent: 14.5 },
  { channel: "Aplikacja", procent: 6.1 },
];

function CustomBarTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-3 text-sm">
      <p className="font-medium text-[#0F172A] mb-1">{label}</p>
      <p className="text-[#E84C8B] font-semibold">{payload[0].value}%</p>
    </div>
  );
}

export function SurveyCharts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-100 shadow-sm bg-white p-6 md:p-8 space-y-10"
    >
      <div className="text-center">
        <p className="text-xs text-[#E84C8B] font-medium tracking-widest uppercase mb-1">
          Key findings
        </p>
        <h3 className="text-xl font-semibold text-[#0F172A]">
          What does the data say? Scale of the problem
        </h3>
      </div>

      {/* Chart 1: Forgetting */}
      <div>
        <h4 className="font-semibold text-[#0F172A] mb-1">
          "Have you ever forgotten about...?"
        </h4>
        <p className="text-sm text-[#0F172A]/50 mb-4">
          % of respondents who admitted to forgetting (multiple choice)
        </p>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={forgettingData}
              layout="vertical"
              margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
              barCategoryGap="20%"
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
                stroke="#E2E8F0"
              />
              <XAxis
                type="number"
                domain={[0, 60]}
                tickFormatter={(v) => `${v}%`}
                tick={{ fontSize: 11, fill: "#94A3B8" }}
              />
              <YAxis
                dataKey="category"
                type="category"
                width={120}
                tick={{ fontSize: 12, fill: "#475569" }}
              />
              <Tooltip content={<CustomBarTooltip />} />
              <Bar
                dataKey="procent"
                fill="#E84C8B"
                radius={[0, 6, 6, 0]}
                barSize={20}
                name="forgetting"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Info sources */}
      <div>
        <h4 className="font-semibold text-[#0F172A] mb-1">
          Main sources of pet care information
        </h4>
        <p className="text-sm text-[#0F172A]/50 mb-4">
          Where do owners get their knowledge? (multiple choice)
        </p>
        <div className="h-[230px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={infoSourceData}
              layout="vertical"
              margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
              barCategoryGap="20%"
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
                stroke="#E2E8F0"
              />
              <XAxis
                type="number"
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
                tick={{ fontSize: 11, fill: "#94A3B8" }}
              />
              <YAxis
                dataKey="source"
                type="category"
                width={150}
                tick={{ fontSize: 12, fill: "#475569" }}
              />
              <Tooltip content={<CustomBarTooltip />} />
              <Bar
                dataKey="procent"
                fill="#0F172A"
                radius={[0, 6, 6, 0]}
                barSize={20}
                name="infosource"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 3: Communication channels */}
      <div>
        <h4 className="font-semibold text-[#0F172A] mb-1">
          Communication channels with the veterinarian
        </h4>
        <p className="text-sm text-[#0F172A]/50 mb-4">
          What channels do owners use to contact the clinic?
        </p>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={communicationData}
              layout="vertical"
              margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
              barCategoryGap="20%"
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
                stroke="#E2E8F0"
              />
              <XAxis
                type="number"
                domain={[0, 80]}
                tickFormatter={(v) => `${v}%`}
                tick={{ fontSize: 11, fill: "#94A3B8" }}
              />
              <YAxis
                dataKey="channel"
                type="category"
                width={150}
                tick={{ fontSize: 12, fill: "#475569" }}
              />
              <Tooltip content={<CustomBarTooltip />} />
              <Bar
                dataKey="procent"
                fill="#C084FC"
                radius={[0, 6, 6, 0]}
                barSize={20}
                name="communication"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key insight callout */}
      <div className="bg-gradient-to-r from-[#F9A8D4]/10 to-[#C084FC]/10 border border-[#E84C8B]/15 rounded-xl p-5">
        <p className="text-sm font-semibold text-[#E84C8B] mb-1">
          Key insight
        </p>
        <p className="text-[#0F172A]/65 text-sm leading-relaxed">
          Nearly half of owners forget about vaccinations, while only 11.5%
          use a mobile app as a source of information. The main contact
          channels (phone + Messenger) generate chaos — this is a clear
          niche for a dedicated mobile tool.
        </p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   3. TRANSKRYPCJA WYWIADU (IDI)
   ═══════════════════════════════════════════ */

const interviewExcerpts = [
  {
    speaker: "Moderator",
    text: "Opowiedz mi, jak wygląda Twoja typowa wizyta u weterynarza?",
  },
  {
    speaker: "R1",
    text: "Zazwyczaj dzwonię do kliniki, czekam na połączenie — czasem kilka minut. Umawiam się na wizytę, a potem staram się to jakoś zapamiętać. Często zapominam i muszę dzwonić ponownie, żeby potwierdzić termin.",
    highlight: true,
  },
  {
    speaker: "Moderator",
    text: "A jak przechowujesz informacje o zdrowiu swojego zwierzęcia? Zalecenia, recepty?",
  },
  {
    speaker: "R1",
    text: "Szczerze? To jest mój największy problem. Dostaję karteczkę od weterynarza z zapisanymi lekami i dawkami, ale gubię ją w ciągu tygodnia. Albo robię zdjęcie telefonem, ale potem nie mogę go znaleźć w galerii wśród setek innych zdjęć.",
    highlight: true,
  },
  {
    speaker: "Moderator",
    text: "Czy próbowałaś korzystać z jakiejś aplikacji do tego?",
  },
  {
    speaker: "R1",
    text: "Szukałam, ale nic nie pasowało. Albo są po angielsku, albo wyglądają jak z 2010 roku, albo nie mają tego, czego potrzebuję — prostego kalendarza z przypomnieniami i możliwości napisania do weterynarza bez dzwonienia.",
    highlight: true,
  },
  {
    speaker: "Moderator",
    text: "Gdybyś mogła mieć jedną funkcję w takiej aplikacji, co by to było?",
  },
  {
    speaker: "R1",
    text: "Przypomnienia. Zdecydowanie. Żeby aplikacja sama mi powiedziała: 'Hej, za tydzień szczepienie Mruczka, umów wizytę.' To by było złoto.",
    highlight: true,
  },
];

const participantInfo = {
  id: "Rozmówca 1 (R1)",
  age: "22 lata",
  occupation: "Studentka grafiki",
  pet: "Kot (rasa brytyjska), 1,5 roku",
  experience: "Pierwsza właścicielka zwierzęcia",
  duration: "ok. 60 minut",
};

export function InterviewTranscript() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-100 shadow-sm bg-white overflow-hidden"
    >
      {/* Header */}
      <div className="bg-[#0F172A] px-6 py-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-xs text-white/50 tracking-widest uppercase">
              Wywiad pogłębiony (IDI)
            </p>
            <h3 className="text-lg font-semibold text-white">
              Fragment transkrypcji — {participantInfo.id}
            </h3>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#E84C8B] text-white">
            {participantInfo.duration}
          </span>
        </div>
      </div>

      {/* Participant info */}
      <div className="px-6 py-4 bg-[#F8FAFC] border-b border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: "Wiek", value: participantInfo.age },
            { label: "Zawód", value: participantInfo.occupation },
            { label: "Zwierzę", value: participantInfo.pet },
            {
              label: "Doświadczenie",
              value: participantInfo.experience,
            },
            { label: "Czas wywiadu", value: participantInfo.duration },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[10px] text-[#0F172A]/40 uppercase tracking-wider">
                {item.label}
              </p>
              <p className="text-xs font-medium text-[#0F172A]/70">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Transcript */}
      <div className="px-6 py-5 space-y-4">
        {interviewExcerpts.map((line, i) => (
          <div
            key={i}
            className={`flex gap-3 ${line.highlight ? "bg-[#E84C8B]/[0.04] -mx-3 px-3 py-2.5 rounded-xl border-l-3 border-[#E84C8B]/30" : ""}`}
          >
            <span
              className={`text-xs font-semibold mt-0.5 flex-shrink-0 w-20 ${
                line.speaker === "Moderator"
                  ? "text-[#0F172A]/40"
                  : "text-[#E84C8B]"
              }`}
            >
              {line.speaker === "Moderator" ? "MOD" : line.speaker}:
            </span>
            <p
              className={`text-sm leading-relaxed ${
                line.speaker === "Moderator"
                  ? "text-[#0F172A]/50 italic"
                  : "text-[#0F172A]/75"
              }`}
            >
              {line.text}
            </p>
          </div>
        ))}
      </div>

      {/* Key quotes */}
      <div className="px-6 py-4 bg-gradient-to-r from-[#F9A8D4]/10 to-[#C084FC]/10 border-t border-[#E84C8B]/10">
        <p className="text-xs font-semibold text-[#E84C8B] mb-2 tracking-wider uppercase">
          Kluczowe cytaty z wywiadu
        </p>
        <div className="space-y-2">
          {[
            "\"Gubię karteczkę od weterynarza w ciągu tygodnia.\"",
            "\"Żeby aplikacja sama mi powiedziała: 'Hej, za tydzień szczepienie Mruczka.'\"",
            "\"Szukałam aplikacji, ale nic nie pasowało — albo po angielsku, albo wyglądają jak z 2010.\"",
          ].map((quote, i) => (
            <p key={i} className="text-sm text-[#0F172A]/60 italic pl-3 border-l-2 border-[#E84C8B]/30">
              {quote}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}