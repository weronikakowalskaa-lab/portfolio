import { motion } from "motion/react";
import { Search, Layout, PenTool, Users, MousePointerClick, Layers, Code, BarChart3 } from "lucide-react";

const skills = [
  {
    id: 1,
    icon: Search,
    title: "User Research",
    description: "Conducting interviews, surveys, and usability tests to uncover real user needs and pain points.",
  },
  {
    id: 2,
    icon: Layout,
    title: "Wireframing",
    description: "Creating low and mid-fidelity wireframes to map out user flows and validate ideas early.",
  },
  {
    id: 3,
    icon: PenTool,
    title: "UI Design",
    description: "Crafting visually appealing, consistent interfaces with attention to typography, color, and spacing.",
  },
  {
    id: 4,
    icon: MousePointerClick,
    title: "Prototyping",
    description: "Building interactive prototypes in Figma to test and refine user experiences before development.",
  },
  {
    id: 5,
    icon: Users,
    title: "Usability Testing",
    description: "Running moderated and unmoderated tests to measure and improve product usability.",
  },
  {
    id: 6,
    icon: Layers,
    title: "Design Systems",
    description: "Building scalable component libraries and design tokens for consistent product experiences.",
  },
  {
    id: 7,
    icon: Code,
    title: "Web Basics",
    description: "Foundational knowledge of HTML, CSS, and how designs translate into code for better dev collaboration.",
  },
  {
    id: 8,
    icon: BarChart3,
    title: "SEO & Analytics",
    description: "Understanding of SEO principles and Google Analytics to design data-informed, discoverable products.",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Skills & Expertise</h2>
          <p className="text-lg text-[#0F172A]/60 mb-16 max-w-2xl">
            Core competencies I bring to every project, from initial research through final delivery.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-8 rounded-2xl border border-gray-200 bg-[#F8FAFC] hover:border-[#E84C8B] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F172A] flex items-center justify-center mb-5 group-hover:bg-[#E84C8B] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">{skill.title}</h3>
                <p className="text-[#0F172A]/60 leading-relaxed">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}