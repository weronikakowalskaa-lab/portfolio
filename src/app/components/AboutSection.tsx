import { motion } from "motion/react";
import profilePhoto from "../../assets//3714217a2cfbbca58ca74c5e16448ba004246185.png";

export function AboutSection() {
  return (
    <section id="about" className="py-24 dotted-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#0F172A] mb-16">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#F9A8D4] via-[#C084FC] to-[#93C5FD] opacity-20 blur-2xl"></div>
              <img
                src={profilePhoto}
                alt="Weronika Kowalska"
                className="relative w-[360px] h-[360px] object-cover rounded-3xl shadow-lg border-4 border-white"
                style={{ imageRendering: "auto", WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
              />
              {/* Decorative dot */}
              <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-[#E84C8B]"></div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-lg text-[#0F172A]/80 leading-relaxed">
              Hi! I'm <span className="text-[#E84C8B] font-semibold">Weronika</span> — a UX/UI designer passionate about creating digital products that are not only beautiful but truly useful. I believe great design starts with understanding real users and their needs.
            </p>
            <p className="text-lg text-[#0F172A]/70 leading-relaxed">
              My approach combines thorough user research with clean, modern visual design. I love turning complex problems into simple, intuitive interfaces that people enjoy using every day.
            </p>
            <p className="text-lg text-[#0F172A]/70 leading-relaxed">
              When I'm not designing, you can find me exploring new design trends, reading about psychology, designing clothes, or drawing in my sketchbook.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Figma", "Adobe XD", "Sketch", "Miro", "FigJam", "Canva", "Ibis Paint"].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#0F172A]/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}