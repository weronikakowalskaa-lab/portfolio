import { useNavigate, useLocation } from "react-router";

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
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

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("projects")}
            className="text-[#0F172A] hover:text-[#E84C8B] transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="text-[#0F172A] hover:text-[#E84C8B] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("skills")}
            className="text-[#0F172A] hover:text-[#E84C8B] transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo("certificates")}
            className="text-[#0F172A] hover:text-[#E84C8B] transition-colors"
          >
            Certificates
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="text-[#0F172A] hover:text-[#E84C8B] transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}