import { motion, AnimatePresence } from "motion/react";
import { Award, X, ZoomIn } from "lucide-react";
import { useState } from "react";
import certUdemy from "../../assets//455e5ec50c297a2d85d423df128a03becb222c81.png";
import certCoursera from "../../assets//9e9441ae2a2d69c2b7cb29175ecaa1dc08694cf5.png";
import certMeta from "../../assets//9f636c19c05f0ff42fe5d3cfd55749c8d9b3a427.png";

const certificates = [
  {
    id: 1,
    title: "Kompletny Kurs UX/UI: Opanuj Figme i Zostan Designerem",
    platform: "Udemy",
    instructor: "Karol Wozniak",
    date: "March 9, 2026",
    duration: "21 total hours",
    image: certUdemy,
    rotation: 0,
  },
  {
    id: 2,
    title: "UX Research at Scale: Surveys, Analytics, Online Testing",
    platform: "Coursera / University of Michigan",
    instructor: "Lija Hogan",
    date: "March 4, 2026",
    duration: null,
    image: certCoursera,
    rotation: 90,
  },
  {
    id: 3,
    title: "Principles of UX/UI Design",
    platform: "Coursera / Meta",
    instructor: "Meta Experts",
    date: "March 3, 2026",
    duration: null,
    image: certMeta,
    rotation: 90,
  },
];

function CertificateCard({
  cert,
  index,
  onOpen,
}: {
  cert: (typeof certificates)[0];
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-[#E84C8B] hover:shadow-lg transition-all duration-300"
    >
      {/* Certificate image */}
      <div
        className="relative cursor-pointer overflow-hidden bg-gray-50 aspect-[4/3] flex items-center justify-center"
        onClick={onOpen}
      >
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-contain p-2"
          style={{ imageOrientation: "from-image", transform: cert.rotation ? `rotate(${cert.rotation}deg)` : undefined, maxWidth: cert.rotation ? '133%' : undefined }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <ZoomIn className="w-5 h-5 text-[#0F172A]" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#E84C8B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Award className="w-4.5 h-4.5 text-[#E84C8B]" />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-[#0F172A] leading-snug mb-1">
              {cert.title}
            </h3>
            <p className="text-sm text-[#0F172A]/50">{cert.platform}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
          <span className="px-2.5 py-1 rounded-full text-xs bg-[#F8FAFC] text-[#0F172A]/60 border border-gray-100">
            {cert.date}
          </span>
          {cert.duration && (
            <span className="px-2.5 py-1 rounded-full text-xs bg-[#F8FAFC] text-[#0F172A]/60 border border-gray-100">
              {cert.duration}
            </span>
          )}
          {cert.instructor && (
            <span className="px-2.5 py-1 rounded-full text-xs bg-[#E84C8B]/5 text-[#E84C8B] border border-[#E84C8B]/10">
              {cert.instructor}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Lightbox({
  cert,
  onClose,
}: {
  cert: (typeof certificates)[0];
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Certificate image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={cert.image}
            alt={cert.title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            style={{ imageOrientation: "from-image", transform: cert.rotation ? `rotate(${cert.rotation}deg)` : undefined }}
          />
        </motion.div>

        {/* Title below */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
          <p className="text-white font-medium">{cert.title}</p>
          <p className="text-white/60 text-sm">{cert.platform}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function CertificatesSection() {
  const [activeCert, setActiveCert] = useState<
    (typeof certificates)[0] | null
  >(null);

  return (
    <>
      <section id="certificates" className="py-24 dotted-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
              Certificates
            </h2>
            <p className="text-lg text-[#0F172A]/60 mb-16 max-w-2xl">
              Continuous learning is key — here are certifications I've earned to
              deepen my design expertise.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                index={index}
                onOpen={() => setActiveCert(cert)}
              />
            ))}
          </div>
        </div>
      </section>

      {activeCert && (
        <Lightbox cert={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </>
  );
}