import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import profilePhoto from "../../assets//3714217a2cfbbca58ca74c5e16448ba004246185.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden dotted-background">
      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* Badge - moved to top */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F9A8D4]/15 to-[#C084FC]/10 border border-[#E84C8B]/20 px-5 py-2.5 rounded-full backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E84C8B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E84C8B]"></span>
                </span>
                <span className="text-sm font-medium text-[#0F172A]/80 tracking-wide">
                  Open to UX/UI opportunities
                </span>
              </div>
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-5">
              <h1 className="text-[3.5rem] lg:text-[4rem] font-bold text-[#0F172A] tracking-tight leading-[1.1]">
                Weronika<br />Kowalska
              </h1>
              <p className="text-2xl text-[#0F172A]/70 font-medium tracking-wide">
                UX/UI Designer
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-[#0F172A]/60 max-w-lg leading-relaxed">
              Research-driven UX/UI designer focused on creating intuitive digital products and solving real user problems.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[#0F172A]/50">
              {["User Research", "Wireframing", "Prototyping", "UI Design", "Usability Testing"].map(
                (skill, i, arr) => (
                  <span key={skill} className="flex items-center gap-4">
                    <span className="text-[15px]">{skill}</span>
                    {i < arr.length - 1 && (
                      <span className="text-[#E84C8B]/60 text-xs">●</span>
                    )}
                  </span>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-to-r from-[#E84C8B] to-[#D946A8] hover:from-[#D6397E] hover:to-[#C73A9A] text-white px-10 py-4 rounded-xl transition-all flex items-center gap-2.5 group shadow-lg shadow-[#E84C8B]/20 hover:shadow-xl hover:shadow-[#E84C8B]/30"
              >
                <span className="font-medium text-[15px]">View my projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <motion.button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border border-[#0F172A]/20 text-[#0F172A]/80 hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] px-10 py-4 rounded-xl transition-all text-[15px] font-medium"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                  delay: 3,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1 }}
              >
                Contact me
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Outer soft glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F9A8D4]/40 via-[#C084FC]/30 to-[#93C5FD]/35 blur-[80px]"></div>

              {/* Gradient ring */}
              <div className="absolute inset-[60px] rounded-full bg-gradient-to-br from-[#F9A8D4]/50 via-[#C084FC]/40 to-[#93C5FD]/45 p-[3px]">
                <div className="w-full h-full rounded-full bg-[#F8FAFC]"></div>
              </div>

              {/* Profile Photo */}
              <img
                src={profilePhoto}
                alt="Weronika Kowalska"
                className="absolute inset-[68px] w-[calc(100%-136px)] h-[calc(100%-136px)] object-cover rounded-full shadow-2xl z-10"
                style={{ imageRendering: "auto", WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
              />

              {/* Floating Dots */}
              <motion.div
                animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-10 w-5 h-5 rounded-full bg-gradient-to-br from-[#E84C8B]/70 to-[#F9A8D4]/60"
              ></motion.div>

              <motion.div
                animate={{ y: [0, 14, 0], x: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute bottom-16 left-8 w-4 h-4 rounded-full bg-gradient-to-br from-[#93C5FD]/60 to-[#C084FC]/50"
              ></motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], x: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute top-1/3 right-4 w-3 h-3 rounded-full bg-gradient-to-br from-[#F9A8D4]/50 to-[#C084FC]/40"
              ></motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], x: [0, 6, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute bottom-24 right-6 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#E84C8B]/40 to-[#F9A8D4]/30"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}