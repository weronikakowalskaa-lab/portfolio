import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "../data/projects";

export function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#E84C8B] font-medium text-sm tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A]">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => navigate(`/projects/${project.slug}`)}
              className={`group cursor-pointer grid lg:grid-cols-2 gap-0 bg-gradient-to-br ${project.color} border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-[#0F172A]/5 hover:border-gray-200 transition-all duration-500`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden h-[320px] lg:h-auto ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-10 lg:p-14 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-[#0F172A] group-hover:text-[#0F172A] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#0F172A]/60 text-lg leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-white border border-gray-200 text-[#0F172A]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2.5 text-[#0F172A] font-medium group/btn group-hover:text-[#E84C8B] transition-colors">
                    <span>View case study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
