const services = [
  {
    icon: "fas fa-bolt",
    title: "Elétrica",
    desc: "Instalações e reparos elétricos",
    category: "eletrica",
  },
  {
    icon: "fas fa-wrench",
    title: "Hidráulica",
    desc: "Encanamento e sistemas hidráulicos",
    category: "hidraulica",
  },
  {
    icon: "fas fa-snowflake",
    title: "Refrigeração",
    desc: "Ar condicionado e refrigeradores",
    category: "refrigeracao",
  },
  {
    icon: "fas fa-hammer",
    title: "Marcenaria",
    desc: "Móveis sob medida e reparos",
    category: "marcenaria",
  },
  {
    icon: "fas fa-tools",
    title: "Carpintaria",
    desc: "Estruturas e acabamentos em madeira",
    category: "carpintaria",
  },
  {
    icon: "fas fa-broom",
    title: "Limpeza",
    desc: "Serviços de limpeza residencial",
    category: "limpeza",
  },
];

export default function ServicesMenuGrid() {
  return (
    <section
      id="servicos"
      className="py-32 bg-gradient-to-br from-[#fafbff] via-[#f8f9fa] to-white relative top-[6rem] gap-14"
    >
      <div className="w-full mx-auto" style={{ maxWidth: "75rem", padding: "0 5%" }}>
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Nossos Serviços</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Profissionais qualificados para todas as suas necessidades
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {services.map((service) => (
            <div
              key={service.category}
              className="relative bg-white p-10 rounded-2xl text-center shadow-lg border-2 border-transparent transition-all duration-300 cursor-pointer overflow-hidden group"
              style={{
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
              }}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30,121,247,0.02), rgba(30,121,247,0.05))",
                  zIndex: 1,
                }}
              />
              <div
                className="service-icon-container mx-auto mb-6 flex items-center justify-center rounded-full transition-all duration-300 relative z-10"
                style={{
                  width: 80,
                  height: 80,
                  background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
                  boxShadow: "0 4px 16px rgba(30,121,247,0.08)",
                }}
              >
                <i
                  className={`${service.icon} text-[2rem] transition-all duration-300`}
                  style={{
                    color: "#1E79F7",
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10 group-hover:text-[#1E79F7] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 text-base relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                {service.desc}
              </p>
              {/* Hover effects */}
              <style>{`
                .group:hover .service-icon-container {
                  background: linear-gradient(135deg, #1E79F7, #0D6EFD);
                  transform: scale(1.1);
                  box-shadow: 0 10px 30px rgba(30,121,247,0.3);
                }
                .group:hover .service-icon-container i {
                  color: white !important;
                  transform: scale(1.1);
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}