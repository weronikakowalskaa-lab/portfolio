import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

// ============================================================
// 📧 KONFIGURACJA FORMSPREE — aby formularz wysyłał maile:
// 1. Wejdź na https://formspree.io i załóż darmowe konto
// 2. Stwórz nowy formularz (podaj email: weronikakowalska9086@gmail.com)
// 3. Skopiuj swój Form ID (np. "xpzvgkql")
// 4. Wklej go poniżej zamiast "YOUR_FORM_ID"
// Darmowy plan = 50 wiadomości/miesiąc — idealne na portfolio!
// ============================================================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqpjdwd";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        // Fallback: otwórz Gmail compose z danymi z formularza
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
          `Hi Weronika,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.open(
          `https://mail.google.com/mail/?view=cm&to=weronikakowalska9086@gmail.com&su=${subject}&body=${body}`,
          "_blank"
        );
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      // Fallback: otwórz Gmail compose z danymi z formularza
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Weronika,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(
        `https://mail.google.com/mail/?view=cm&to=weronikakowalska9086@gmail.com&su=${subject}&body=${body}`,
        "_blank"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 dotted-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Get in Touch</h2>
          <p className="text-lg text-[#0F172A]/60 mb-16 max-w-2xl">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-[#0F172A]/70 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#E84C8B] focus:ring-2 focus:ring-[#E84C8B]/20 transition-all"
                required
                disabled={status === "sending"}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A]/70 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#E84C8B] focus:ring-2 focus:ring-[#E84C8B]/20 transition-all"
                required
                disabled={status === "sending"}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A]/70 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#E84C8B] focus:ring-2 focus:ring-[#E84C8B]/20 transition-all resize-none"
                required
                disabled={status === "sending"}
              />
            </div>

            {/* Status message */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-xl">
                <CheckCircle className="w-5 h-5" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-xl">
                <AlertCircle className="w-5 h-5" />
                <span>Something went wrong. Please try again or use the email link.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#E84C8B] hover:bg-[#E84C8B]/90 text-white px-8 py-3 rounded-lg transition-all flex items-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  Sending...
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </>
              ) : status === "success" ? (
                <>
                  Sent!
                  <CheckCircle className="w-4 h-4" />
                </>
              ) : (
                <>
                  Send message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8 lg:pl-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">Let's connect</h3>
              <p className="text-[#0F172A]/60 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="https://mail.google.com/mail/?view=cm&to=weronikakowalska9086@gmail.com&su=Hello+Weronika+%E2%80%93+Let%27s+collaborate!&body=Hi+Weronika%2C%0A%0AI+came+across+your+portfolio+and+would+love+to+discuss+a+potential+project+with+you.%0A%0A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:border-[#E84C8B] hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center group-hover:bg-[#E84C8B] transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#0F172A]/50">Email</p>
                  <p className="text-[#0F172A] font-medium">weronikakowalska9086@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/weronika-kowalska-1ab50a318/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:border-[#E84C8B] hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center group-hover:bg-[#E84C8B] transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#0F172A]/50">LinkedIn</p>
                  <p className="text-[#0F172A] font-medium">Weronika Kowalska</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:border-[#E84C8B] hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center group-hover:bg-[#E84C8B] transition-colors">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#0F172A]/50">GitHub</p>
                  <p className="text-[#0F172A] font-medium">@weronikakowalska</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#0F172A]/40">
            © 2026 Weronika Kowalska. Designed with care.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-sm text-[#0F172A]/40">Made with</span>
            <span className="text-[#E84C8B]">♥</span>
          </div>
        </div>
      </div>
    </section>
  );
}