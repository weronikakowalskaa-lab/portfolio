import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock, User, Wrench } from "lucide-react";
import { projects } from "../data/projects";

// Figma assets
import empathyMap from "../../assets//c0fb9864bab8bfef77a2c529755c7a6cc5a55dff.png";
import calendarScreen from "../../assets//f5dff4c0526b20f42eaee5cb5a23320a2c95cbc2.png";
import homeScreen from "../../assets//f47dee5286a50ec2079d6698790c2128abea1ef0.png";
import healthScreen from "../../assets//3cce833ab7555775c9bf36426a5fe9e505886ddb.png";
import journeyMap from "../../assets//80a9b1eeaa27f7c97906eb5ddd2d2e418dd0413b.png";
import personaAnna from "../../assets//47d2fff28822c0f68ab5067ad0b5e7fe36390c71.png";
import profileScreen from "../../assets//104d683012c31a1b715589b8581bb5d4cad61904.png";
import messagesScreen from "../../assets//a62e64cbbde4e8f2d421225cca7717f6d3537442.png";

import { SurveySegmentation, SurveyCharts, InterviewTranscript } from "./SurveyVisualizations";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#E84C8B] font-medium text-sm tracking-widest uppercase mb-3">
      {children}
    </p>
  );
}

function SectionImage({
  src,
  alt,
  caption,
  contain,
}: {
  src: string;
  alt: string;
  caption?: string;
  contain?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
        <img
          src={src}
          alt={alt}
          className={`w-full ${contain ? "object-contain p-4" : "object-cover"}`}
        />
      </div>
      {caption && (
        <p className="text-sm text-[#0F172A]/45 mt-3 text-center italic">
          {caption}
        </p>
      )}
    </motion.div>
  );
}

export function PetCareCaseStudy() {
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === "petcare-app")!;
  const nextProject = projects.find((p) => p.slug === "little-lemon")!;

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
      <section className="relative bg-gradient-to-br from-[#F9A8D4]/15 via-[#C084FC]/10 to-[#93C5FD]/15">
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
              PetCare App
            </h1>
            <p className="text-xl md:text-2xl text-[#0F172A]/60 leading-relaxed max-w-2xl">
              A mobile app for managing pet health and communicating with
              veterinary clinics — from user research to final design.
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
                <p className="text-[#0F172A] font-medium">
                  Lead UX/UI Designer
                </p>
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
                <p className="text-[#0F172A] font-medium">8 weeks</p>
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
                  Figma, Miro, Maze, Google Forms
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
            PetCare is a mobile application designed for pet owners who want
            to manage their pets' health in a simple way. The app allows
            tracking veterinary visits, vaccinations, medication, and direct
            communication with the veterinary clinic. The goal was to create
            an intuitive, stress-free experience for pet owners who often
            lose control of their pets' health schedule.
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
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Challenge</h2>
          <div className="bg-gradient-to-br from-[#F9A8D4]/10 to-[#C084FC]/10 border border-[#E84C8B]/15 rounded-2xl p-8">
            <p className="text-lg text-[#0F172A]/70 leading-relaxed">
              Pet owners juggle multiple systems for managing their pets'
              health — paper cards with recommendations, phone calls to the
              veterinarian, scattered reminders in different apps. Survey
              results showed that almost half of the owners forgot about
              vaccinations, medication, or check-ups. At the same time,
              veterinarians struggle with chaotic communication — questions
              come through Messenger, SMS, Instagram, and phone. The
              challenge was to build one tool that would unify these
              scattered experiences.
            </p>
          </div>
        </motion.section>

        {/* ========== RESEARCH PHASE ========== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div>
            <SectionLabel>Phase 1</SectionLabel>
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
              User research
            </h2>
            <p className="text-lg text-[#0F172A]/70 leading-relaxed">
              The project began with a deep understanding of the needs of
              both target groups: pet owners and veterinarians. Quantitative
              (online survey, 131 respondents) and qualitative (in-depth
              interviews with 12 participants) research was conducted.
            </p>
          </div>

          {/* Survey Results */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#0F172A]">
              Quantitative survey
            </h3>
            <p className="text-[#0F172A]/65 text-lg leading-relaxed">
              An online survey about veterinary care, communication, and
              technological needs collected responses from 131 respondents —
              81.7% were pet owners, and 16% were veterinarians. The results
              confirmed the scale of the problem: more than 47% of owners
              admitted to forgetting about vaccinations, medication, routine
              checks, or check-ups.
            </p>
            <SurveySegmentation />
            <SurveyCharts />
          </div>

          {/* Interviews */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#0F172A]">
              In-depth interviews (IDI)
            </h3>
            <p className="text-[#0F172A]/65 text-lg leading-relaxed">
              12 in-depth interviews were conducted — with pet owners and
              veterinary clinic staff. Conversations revealed key pain points:
              losing recommendation cards, difficult contact with the
              veterinarian after a visit, writing medication information in
              notebooks and on Messenger, and stress related to uncertainty
              about whether everything was done correctly.
            </p>
            <InterviewTranscript />
          </div>
        </motion.section>

        {/* ========== ANALYSIS PHASE ========== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div>
            <SectionLabel>Phase 2</SectionLabel>
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
              Analysis and synthesis
            </h2>
            <p className="text-lg text-[#0F172A]/70 leading-relaxed">
              Based on the collected data, user personas, empathy map, and
              customer journey map were created. These artifacts helped
              identify key moments of frustration and opportunities to design
              a better experience.
            </p>
          </div>

          {/* Persona - Anna (Vet) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#0F172A]">
              Persona: Anna — Veterinarian
            </h3>
            <p className="text-[#0F172A]/65 text-lg leading-relaxed">
              Anna (29 years old) works as a veterinarian for 5 years in a
              private clinic in Warsaw. She sees 15 to 20 patients daily, and
              part of the recommendations is still written manually on cards.
              She dreams of one tool that would unify communication and
              relieve her from repetitive questions. Her key frustration:
              owners lose cards, mix up doses, and contact her through five
              different channels at once.
            </p>
            <SectionImage
              src={personaAnna}
              alt="Persona — Anna, veterinarian"
              caption="Persona created based on IDI interviews — rational type"
              contain
            />
          </div>

          {/* Empathy Map - Natalia (Pet Owner) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#0F172A]">
              Empathy map: Natalia — Cat owner
            </h3>
            <p className="text-[#0F172A]/65 text-lg leading-relaxed">
              Natalia (26 years old) is a marketing specialist and has been
              taking care of a British cat for 2 years. She is digital,
              active on social media, eco-conscious, and values convenience.
              She worries about her cat's health, loses recommendations from
              the veterinarian, and feels frustrated when she doesn't know if
              she is doing the right thing. Her main pain points are losing
              recommendation cards, difficult contact with the veterinarian,
              and the lack of quick, reliable information in one place.
            </p>
            <SectionImage
              src={empathyMap}
              alt="Empathy map — Natalia"
              caption="Empathy map of the persona Natalia — perspective of a cat owner"
              contain
            />
          </div>

          {/* Customer Journey Map */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#0F172A]">
              Customer journey map — veterinarian's perspective
            </h3>
            <p className="text-[#0F172A]/65 text-lg leading-relaxed">
              The customer journey map covers 5 stages: from the moment of
              receiving the patient (Awareness), through diagnostic tests
              (Consideration), diagnosis (Decision), implementation of
              recommendations (Onboarding), to follow-up visits (Retention).
              At each stage, actions, thoughts, emotions, pain points, and
              opportunities for improvement were identified. Key insight:
              chaotic communication and manual writing of test results are
              the main sources of frustration for veterinarians.
            </p>
            <SectionImage
              src={journeyMap}
              alt="Customer Journey Map — veterinarian's perspective"
              caption="5-stage customer journey map from the perspective of a veterinarian"
              contain
            />
          </div>
        </motion.section>

        {/* ========== DESIGN PHASE ========== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div>
            <SectionLabel>Phase 3</SectionLabel>
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
              UI design
            </h2>
            <p className="text-lg text-[#0F172A]/70 leading-relaxed">
              Based on the collected insights, the application interface
              was designed in Figma. The design is based on a warm, natural
              color palette (olive green, cream backgrounds) with readable
              cards and intuitive bottom navigation. The application
              consists of 5 main screens: the home screen with a list of
              pets, the visit calendar, a detailed view of the pet's health,
              messages from the veterinarian, and the user profile.
            </p>
          </div>

          {/* App Screens */}
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold text-[#0F172A]">
              Main app screens
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Home Screen */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white p-3">
                  <img
                    src={homeScreen}
                    alt="Home screen — My pets"
                    className="w-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">
                    Home screen
                  </h4>
                  <p className="text-sm text-[#0F172A]/55 leading-relaxed">
                    List of pets with their health status, upcoming events,
                    and quick access to adding new visits. Each pet has a
                    card with a photo, breed, and current health status.
                  </p>
                </div>
              </motion.div>

              {/* Calendar Screen */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white p-3">
                  <img
                    src={calendarScreen}
                    alt="Visit calendar"
                    className="w-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">
                    Calendar
                  </h4>
                  <p className="text-sm text-[#0F172A]/55 leading-relaxed">
                    Calendar view with marked visits and reminders. Colored
                    dots indicate the type of event, and below the calendar
                    is a list of today's tasks with status indication
                    (scheduled / reminder).
                  </p>
                </div>
              </motion.div>

              {/* Health Screen */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white p-3">
                  <img
                    src={healthScreen}
                    alt="Pet health screen"
                    className="w-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">
                    Health
                  </h4>
                  <p className="text-sm text-[#0F172A]/55 leading-relaxed">
                    Detailed review of the pet's health status: health score
                    (Health Score), weight chart, parameters (temperature,
                    hydration, heart rate), and a full history of
                    vaccinations with upcoming terms.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Second row — Messages & Profile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[calc(66.666%+1rem)] mx-auto">
              {/* Messages Screen */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4"
              >
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white p-3">
                  <img
                    src={messagesScreen}
                    alt="Messages — chat with the veterinarian"
                    className="w-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">
                    Messages
                  </h4>
                  <p className="text-sm text-[#0F172A]/55 leading-relaxed">
                    Direct communication with the veterinary clinic in one
                    place. List of conversations with veterinarians and
                    reception, quick preview of the last messages, and
                    indication of unread ones. End of conversations spread
                    across Messenger, SMS, and Instagram.
                  </p>
                </div>
              </motion.div>

              {/* Profile Screen */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white p-3">
                  <img
                    src={profileScreen}
                    alt="User profile"
                    className="w-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">
                    My profile
                  </h4>
                  <p className="text-sm text-[#0F172A]/55 leading-relaxed">
                    Account settings, managing notifications (push, SMS,
                    email), display preferences (dark mode, language), and
                    access to subscriptions, privacy, and help center.
                    User statistics: number of pets, visits, and membership
                    status.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
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
            Results and conclusions
          </h2>
          <p className="text-lg text-[#0F172A]/70 leading-relaxed mb-10">
            The final design received very positive feedback during
            validation tests. Users praised the clean interface, intuitive
            navigation, and peace of mind that comes with having all pet
            health information in one place. Veterinarians emphasized that
            the application could significantly reduce the number of
            repetitive questions and improve communication with owners.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Task Success Rate", value: "94%" },
              { label: "SUS Score", value: "87/100" },
              { label: "Onboarding Completion", value: "91%" },
              { label: "User Satisfaction", value: "4.8/5" },
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
            What I learned
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Two-sided perspective",
                desc: "Designing for two user groups (owners and veterinarians) requires continuous balancing of needs. The customer journey map from the veterinarian's perspective was a breakthrough in understanding the full context.",
              },
              {
                title: "Quantitative + Qualitative Data",
                desc: "The survey provided the scale of the problem (numbers), but interviews revealed emotions and true frustrations. Combining both methods gave a full picture of needs.",
              },
              {
                title: "Simplicity over functionality",
                desc: "Users preferred fewer functions, but well-working ones. Reducing onboarding from 6 to 3 steps increased completion by 35%.",
              },
              {
                title: "Iteration is key",
                desc: "Two rounds of usability testing completely changed the calendar view — from a list to a calendar. What seemed intuitive on wireframes didn't work in practice.",
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
              Next project
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