import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock, User, Wrench } from "lucide-react";
import { projects } from "../data/projects";

// Figma assets — wireframes (lo-fi)
import wireframeStep1 from "../../assets//378359cf1e83f1dc06afd0a0ad28eec57ca8c7f7.png";
import wireframeStep2 from "../../assets//72af8507f150fede5a30d8c1a2afb300757d465d.png";

// Figma assets — hi-fi screens
import hifiStep1 from "../../assets//32777d74e30209cf1caaf0c4bb31be28d6e9e94d.png";
import hifiStep2 from "../../assets//1577bcde9a93e4b7ea3f5273474e7e6ffdb127ff.png";
import hifiTableMap from "../../assets//2528dd54d71925062846acd8ef3c0d2c323a29f4.png";
import hifiConfirmation from "../../assets//55b8605ba322134c6c4495418eb6db9085d7738d.png";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#E84C8B] font-medium text-sm tracking-widest uppercase mb-3">
      {children}
    </p>
  );
}

function PhoneFrame({
  src,
  alt,
  caption,
  delay = 0,
}: {
  src: string;
  alt: string;
  caption?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-3"
    >
      <div className="rounded-[2rem] overflow-hidden border-[3px] border-gray-200 shadow-lg bg-white mx-auto max-w-[280px]">
        <img src={src} alt={alt} className="w-full object-contain" />
      </div>
      {caption && (
        <p className="text-sm text-[#0F172A]/50 text-center">{caption}</p>
      )}
    </motion.div>
  );
}

export function LittleLemonCaseStudy() {
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === "little-lemon")!;
  const nextProject = projects.find((p) => p.slug === "petcare-app")!;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFC]/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-[#0F172A] rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-semibold">WK</span>
            </div>
          </button>
          <button
            onClick={() => navigate("/")}
            className="hidden md:inline-flex items-center gap-2 text-[#0F172A]/70 hover:text-[#E84C8B] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#93C5FD]/15 via-[#C084FC]/10 to-[#F9A8D4]/15">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex flex-wrap gap-2.5 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-white border border-gray-200 text-[#0F172A]/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#0F172A] mb-5">
              Little Lemon
            </h1>
            <p className="text-xl md:text-2xl text-[#0F172A]/60 leading-relaxed max-w-2xl">
              A UX case study for a Mediterranean restaurant — redesigning the
              table reservation system to boost conversions and enhance the
              user experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E84C8B]/10 flex items-center justify-center">
                <User className="w-5 h-5 text-[#E84C8B]" />
              </div>
              <div>
                <p className="text-xs text-[#0F172A]/50 uppercase tracking-wider">
                  Role
                </p>
                <p className="text-[#0F172A] font-medium">UX/UI Designer</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E84C8B]/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#E84C8B]" />
              </div>
              <div>
                <p className="text-xs text-[#0F172A]/50 uppercase tracking-wider">
                  Duration
                </p>
                <p className="text-[#0F172A] font-medium">2 weeks</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E84C8B]/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-[#E84C8B]" />
              </div>
              <div>
                <p className="text-xs text-[#0F172A]/50 uppercase tracking-wider">
                  Tools
                </p>
                <p className="text-[#0F172A] font-medium">
                  Figma, FigJam, Optimal Workshop
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Introduction</SectionLabel>
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
            About the project
          </h2>
          <p className="text-lg text-[#0F172A]/70 leading-relaxed">
            Little Lemon is a family-owned Mediterranean restaurant that needed
            a modern online reservation system. Their existing phone-based
            booking process led to double bookings, long wait times, and a 25%
            no-show rate. This project focused on designing an intuitive,
            4-step reservation flow — from selecting a date and time, through
            choosing party size and seating zone, to an interactive table map
            and booking confirmation.
          </p>
        </motion.section>

        {/* Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Problem</SectionLabel>
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
            The Challenge
          </h2>
          <div className="bg-gradient-to-br from-[#93C5FD]/10 to-[#C084FC]/10 border border-[#93C5FD]/20 rounded-2xl p-8">
            <p className="text-lg text-[#0F172A]/70 leading-relaxed">
              The phone-based reservation system created long wait times, double
              bookings, and a 25% no-show rate. Customers frequently abandoned
              the process out of frustration — they couldn't check real-time
              availability, choose a preferred seating area, or see exactly where
              they'd be sitting. The challenge was to design a digital booking
              flow that feels warm and personal (consistent with the
              restaurant's brand) while being efficient and reducing operational
              overhead for the staff.
            </p>
          </div>
        </motion.section>

        {/* ========== WIREFRAMES ========== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div>
            <SectionLabel>Phase 1</SectionLabel>
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
              Wireframing — Lo-Fi Sketches
            </h2>
            <p className="text-lg text-[#0F172A]/70 leading-relaxed">
              The design process started with low-fidelity wireframes. The goal
              was to quickly map out the key screens of the reservation flow and
              test the information architecture with users before investing time
              in visual design. Wireframes were intentionally stripped of color
              and branding to keep testers focused on usability rather than
              aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl mx-auto">
            <PhoneFrame
              src={wireframeStep1}
              alt="Wireframe — Step 1: Date and time selection"
              caption="Step 1 — Select date, day of week, and visit time"
            />
            <PhoneFrame
              src={wireframeStep2}
              alt="Wireframe — Step 2: Party size and zone"
              caption="Step 2 — Party size and zone preference (Hall / Outside / Terrace)"
              delay={0.1}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto"
          >
            <h4 className="font-semibold text-[#0F172A] mb-3">
              Key decisions at the wireframe stage
            </h4>
            <ul className="space-y-2 text-[#0F172A]/65 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-[#E84C8B] mt-1.5 flex-shrink-0">
                  &bull;
                </span>
                <span>
                  A 4-step flow instead of a single long form — reducing
                  cognitive load with a clear progress bar
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#E84C8B] mt-1.5 flex-shrink-0">
                  &bull;
                </span>
                <span>
                  Quick day-of-week picker (FRI / SAT / SUN) instead of a full
                  calendar — most reservations are for weekends
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#E84C8B] mt-1.5 flex-shrink-0">
                  &bull;
                </span>
                <span>
                  Visual zone icons (Hall / Outside / Terrace) with a "Choose on
                  map" option for more demanding guests
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#E84C8B] mt-1.5 flex-shrink-0">
                  &bull;
                </span>
                <span>
                  Time slot grid with color-highlighted selection — enabling
                  quick scanning of availability
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.section>

        {/* ========== HI-FI DESIGNS ========== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div>
            <SectionLabel>Phase 2</SectionLabel>
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
              High-Fidelity Design (Hi-Fi)
            </h2>
            <p className="text-lg text-[#0F172A]/70 leading-relaxed">
              Based on wireframe testing results, high-fidelity designs were
              created. The color palette — golden yellow (#F4CE14), dark green
              (#495E57), and creamy background (#FEFCE8) — reflects the
              Mediterranean brand identity. The key innovation is an interactive
              table map where users can see the exact restaurant layout and
              choose their specific seat.
            </p>
          </div>

          {/* Step 1 & 2 */}
          <div>
            <h3 className="text-2xl font-semibold text-[#0F172A] mb-8 text-center">
              Reservation Flow — Steps 1 & 2
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl mx-auto">
              <PhoneFrame
                src={hifiStep1}
                alt="Hi-Fi — Step 1: Date and time"
                caption="Step 1 — Date and time selection with color-coded availability grid"
              />
              <PhoneFrame
                src={hifiStep2}
                alt="Hi-Fi — Step 2: Party size and zone"
                caption="Step 2 — Party size picker and zone icons in dark green brand color"
                delay={0.1}
              />
            </div>
          </div>

          {/* Table Map & Confirmation */}
          <div>
            <h3 className="text-2xl font-semibold text-[#0F172A] mb-8 text-center">
              Table Map & Confirmation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl mx-auto">
              <PhoneFrame
                src={hifiTableMap}
                alt="Hi-Fi — Interactive table map"
                caption="Step 3 — Interactive table map with legend (available / occupied / selected)"
              />
              <PhoneFrame
                src={hifiConfirmation}
                alt="Hi-Fi — Booking confirmation"
                caption="Step 4 — Confirmation screen with details and 'Add to Calendar' option"
                delay={0.1}
              />
            </div>
          </div>

          {/* Design Decisions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto"
          >
            <h4 className="font-semibold text-[#0F172A] mb-3">
              Evolution from wireframe to hi-fi
            </h4>
            <ul className="space-y-2 text-[#0F172A]/65 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-[#E84C8B] mt-1.5 flex-shrink-0">
                  &bull;
                </span>
                <span>
                  Added Little Lemon logo and branding in the header — building
                  brand recognition at every step
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#E84C8B] mt-1.5 flex-shrink-0">
                  &bull;
                </span>
                <span>
                  Progress bar changed from gray to yellow gradient — better
                  visibility and consistency with the brand palette
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#E84C8B] mt-1.5 flex-shrink-0">
                  &bull;
                </span>
                <span>
                  Interactive table map — the key innovation: users in testing
                  emphasized wanting to see the exact seat, not just the zone
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#E84C8B] mt-1.5 flex-shrink-0">
                  &bull;
                </span>
                <span>
                  Confirmation screen with "Add to Calendar" button — reducing
                  no-shows through automatic reminders
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.section>

        {/* ========== RESULTS ========== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Results</SectionLabel>
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
            Outcomes & Impact
          </h2>
          <p className="text-lg text-[#0F172A]/70 leading-relaxed mb-10">
            The redesigned reservation system dramatically improved restaurant
            operations. The intuitive 4-step flow reduced booking time by 60%,
            and the automated reminder system (calendar integration) cut
            no-shows in half. The restaurant reported a 40% increase in online
            reservations within the first month of launch.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Booking Time Reduced", value: "-60%" },
              { label: "No-show Rate Drop", value: "50%" },
              { label: "Online Bookings Up", value: "+40%" },
              { label: "User Satisfaction", value: "4.7/5" },
            ].map((result, i) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-[#E84C8B] hover:shadow-lg transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#E84C8B] mb-2">
                  {result.value}
                </p>
                <p className="text-sm text-[#0F172A]/55">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Learnings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Reflection</SectionLabel>
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
            What I Learned
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Lo-fi saves time",
                desc: "Wireframes without branding kept testers focused on the flow rather than aesthetics. This helped us catch the full-calendar problem (too many options) and replace it with a simplified day-of-week picker — before investing in visual design.",
              },
              {
                title: "Map beats list",
                desc: "Users strongly preferred the interactive table map over a list with descriptions. Visualizing the space reduced uncertainty and increased the sense of control — 89% of testers chose a table from the map instead of random assignment.",
              },
              {
                title: "Branding builds trust",
                desc: "Comparing wireframes with hi-fi showed that the presence of a logo, brand colors, and consistent typography increased trust in the reservation process. Users felt it was the restaurant's 'official' page, not a generic form.",
              },
              {
                title: "Confirmation isn't the end",
                desc: "The confirmation screen with 'Add to Calendar' proved crucial for reducing no-shows. In A/B testing, the variant with the calendar button reduced no-shows by 18% compared to a simple confirmation message.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#E84C8B]/30 transition-colors"
              >
                <h4 className="font-semibold text-[#0F172A] mb-2">
                  {item.title}
                </h4>
                <p className="text-[#0F172A]/60 leading-relaxed text-[15px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Next Project */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <p className="text-sm text-[#0F172A]/50 uppercase tracking-widest">
              Next Project
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              {nextProject.title}
            </h3>
            <button
              onClick={() => {
                navigate(`/projects/${nextProject.slug}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5 bg-[#E84C8B] hover:bg-[#D6397E] text-white px-8 py-3.5 rounded-xl transition-all font-medium group"
            >
              View case study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#0F172A]/40">
            &copy; 2026 Weronika Kowalska. Designed with care.
          </p>
          <button
            onClick={() => navigate("/")}
            className="text-sm text-[#0F172A]/40 hover:text-[#E84C8B] transition-colors"
          >
            Back to portfolio
          </button>
        </div>
      </div>
    </div>
  );
}