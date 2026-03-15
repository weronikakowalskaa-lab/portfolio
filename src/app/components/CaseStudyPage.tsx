import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock, User, Wrench } from "lucide-react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#0F172A]">
            Project not found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-[#E84C8B] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </button>
        </div>
      </div>
    );
  }

  const cs = project.caseStudy;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

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
      <section className="relative">
        <div className="h-[50vh] md:h-[60vh] relative overflow-hidden">
          <ImageWithFallback
            src={cs.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap gap-2.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-white/20 backdrop-blur-sm text-white border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
                  {project.title}
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                  {project.description}
                </p>
              </motion.div>
            </div>
          </div>
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
                <p className="text-[#0F172A] font-medium">{cs.role}</p>
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
                <p className="text-[#0F172A] font-medium">{cs.duration}</p>
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
                  {cs.tools.join(", ")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Overview</h2>
          <p className="text-lg text-[#0F172A]/70 leading-relaxed">
            {cs.overview}
          </p>
        </motion.section>

        {/* Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
            The Challenge
          </h2>
          <div className="bg-gradient-to-br from-[#F9A8D4]/10 to-[#C084FC]/10 border border-[#E84C8B]/15 rounded-2xl p-8">
            <p className="text-lg text-[#0F172A]/70 leading-relaxed">
              {cs.challenge}
            </p>
          </div>
        </motion.section>

        {/* Design Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#0F172A] mb-10">
            Design Process
          </h2>
          <div className="space-y-16">
            {cs.process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E84C8B] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0F172A]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[#0F172A]/65 text-lg leading-relaxed pl-14">
                  {step.description}
                </p>
                <div className="pl-14">
                  <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Results</h2>
          <p className="text-lg text-[#0F172A]/70 leading-relaxed mb-10">
            {cs.outcome}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cs.results.map((result, i) => (
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
