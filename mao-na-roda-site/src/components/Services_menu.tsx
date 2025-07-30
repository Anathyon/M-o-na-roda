import { useState, useEffect, useRef } from "react";

type Service = {
  icon: string;
  title: string;
  desc: string;
  category: string;
  color: string;
  gradient: string;
  services: string[];
};

const services: Service[] = [
  {
    icon: "fas fa-bolt",
    title: "Elétrica",
    desc: "Instalações e reparos elétricos",
    category: "eletrica",
    color: "#FFD600",
    gradient: "linear-gradient(135deg, #FFD600 0%, #FFFDE7 100%)",
    services: [
      "Instalação de tomadas e interruptores",
      "Troca de disjuntores e fusíveis",
      "Instalação de ventiladores de teto",
      "Reparo em circuitos elétricos",
      "Instalação de lustres e luminárias",
      "Quadros elétricos residenciais",
    ],
  },
  {
    icon: "fas fa-wrench",
    title: "Hidráulica",
    desc: "Encanamento e sistemas hidráulicos",
    category: "hidraulica",
    color: "#1E79F7",
    gradient: "linear-gradient(135deg, #1E79F7 0%, #E3F2FD 100%)",
    services: [
      "Desentupimento de pias e vasos",
      "Reparo de vazamentos",
      "Instalação de torneiras e registros",
      "Troca de tubulações",
      "Instalação de chuveiros elétricos",
      "Manutenção de caixas d'água",
    ],
  },
  {
    icon: "fas fa-snowflake",
    title: "Refrigeração",
    desc: "Ar condicionado e refrigeradores",
    category: "refrigeracao",
    color: "#00BFFF",
    gradient: "linear-gradient(135deg, #00BFFF 0%, #E0F7FA 100%)",
    services: [
      "Instalação de ar condicionado",
      "Manutenção preventiva",
      "Reparo de geladeiras e freezers",
      "Limpeza de evaporadores",
      "Recarga de gás refrigerante",
      "Instalação de split e janela",
    ],
  },
  {
    icon: "fas fa-hammer",
    title: "Marcenaria",
    desc: "Móveis sob medida e reparos",
    category: "marcenaria",
    color: "#FF9800",
    gradient: "linear-gradient(135deg, #FF9800 0%, #FFF3E0 100%)",
    services: [
      "Móveis planejados",
      "Armários e estantes",
      "Mesas e cadeiras",
      "Portas e janelas",
      "Acabamentos em madeira",
      "Restauração de móveis",
    ],
  },
  {
    icon: "fas fa-tools",
    title: "Carpintaria",
    desc: "Estruturas e acabamentos em madeira",
    category: "carpintaria",
    color: "#1976D2",
    gradient: "linear-gradient(135deg, #1976D2 0%, #E3F2FD 100%)",
    services: [
      "Telhados e coberturas",
      "Pergolados e deck",
      "Escadas de madeira",
      "Forros e divisórias",
      "Reparos estruturais",
      "Construção de galpões",
    ],
  },
  {
    icon: "fas fa-broom",
    title: "Limpeza",
    desc: "Serviços de limpeza residencial",
    category: "limpeza",
    color: "#00C853",
    gradient: "linear-gradient(135deg, #00C853 0%, #E8F5E9 100%)",
    services: [
      "Limpeza pós-obra",
      "Limpeza pesada",
      "Lavagem de estofados",
      "Limpeza de vidros",
      "Enceramento de pisos",
      "Organização de ambientes",
    ],
  },
];

export default function ServicesMenuGrid() {
  const [modal, setModal] = useState<Service | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);

  // Responsivo: detecta mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 480;

  // Carousel handlers
  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCarouselIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section
        id="servicos"
        className="services-section-main bg-gradient-to-br from-[#fafbff] via-[#f8f9fa] to-white relative top-[6rem] gap-14"
        style={{ margin: "2% 0" }}
      >
        <div className="services-section-container w-full mx-auto" style={{ maxWidth: "75rem", padding: "2% 5%" }}>
          <div className="services-section-header text-center mb-10">
            <h2 className="services-section-title text-4xl font-extrabold text-gray-900 mb-2">
              Nossos Serviços
            </h2>
            <p className="services-section-subtitle text-lg text-gray-500 max-w-xl mx-auto" style={{ padding: "1rem 0" }}>
              Profissionais qualificados para todas as suas necessidades
            </p>
          </div>
          {/* MOBILE CAROUSEL */}
          {isMobile ? (
            <div className="services-carousel-wrapper flex flex-col items-center w-full relative" style={{ minHeight: "370px" }}>
              <div className="services-carousel-controls flex w-full justify-between items-center mb-4 px-2 relative z-20">
                <button
                  className="services-carousel-btn bg-white rounded-full shadow-lg flex items-center justify-center"
                  style={{
                    width: 54,
                    height: 54,
                    fontSize: "2rem",
                    border: "1.5px solid #e0e0e0",
                    marginRight: "0.5rem",
                  }}
                  onClick={handlePrev}
                  aria-label="Anterior"
                >
                  <i className="fas fa-chevron-left text-[#1E79F7]"></i>
                </button>
                <button
                  className="services-carousel-btn bg-white rounded-full shadow-lg flex items-center justify-center"
                  style={{
                    width: 54,
                    height: 54,
                    fontSize: "2rem",
                    border: "1.5px solid #e0e0e0",
                    marginLeft: "0.5rem",
                  }}
                  onClick={handleNext}
                  aria-label="Próximo"
                >
                  <i className="fas fa-chevron-right text-[#1E79F7]"></i>
                </button>
              </div>
              <div className="services-carousel-card-wrapper flex justify-center w-full relative z-10" ref={carouselRef}>
                <button
                  key={services[carouselIndex].category}
                  className="services-carousel-card bg-white rounded-2xl text-center shadow-lg border-2 border-transparent transition-all duration-300 cursor-pointer overflow-hidden group flex flex-col items-center"
                  style={{
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                    minWidth: "90vw",
                    maxWidth: "95vw",
                    padding: "2.2rem 1.2rem",
                  }}
                  onClick={() => setModal(services[carouselIndex])}
                >
                  <div
                    className="services-carousel-gradient absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: services[carouselIndex].gradient,
                      zIndex: 1,
                    }}
                  />
                  <div
                    className="services-carousel-icon mx-auto mb-6 flex items-center justify-center rounded-full transition-all duration-300 relative z-10"
                    style={{
                      width: 60,
                      height: 60,
                      background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
                      boxShadow: "0 4px 16px rgba(30,121,247,0.08)",
                    }}
                  >
                    <i
                      className={`${services[carouselIndex].icon} text-[2rem] transition-all duration-300`}
                      style={{
                        color: services[carouselIndex].color,
                      }}
                    />
                  </div>
                  <h3 className="services-carousel-title text-xl font-bold text-gray-900 mb-2 relative z-10 group-hover:text-[#1E79F7] transition-colors duration-300">
                    {services[carouselIndex].title}
                  </h3>
                  <p className="services-carousel-desc text-gray-500 text-base relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                    {services[carouselIndex].desc}
                  </p>
                </button>
              </div>
              {/* Indicadores */}
              <div className="services-carousel-indicators flex justify-center gap-2 mt-5">
                {services.map((_, idx) => (
                  <span
                    key={idx}
                    className={`block w-3 h-3 rounded-full ${carouselIndex === idx ? "bg-[#1E79F7]" : "bg-gray-300"}`}
                    style={{ transition: "background 0.3s" }}
                  />
                ))}
              </div>
            </div>
          ) : (
            // DESKTOP/TABLET GRID
            <div className="services-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map((service) => (
                <button
                  key={service.category}
                  className="services-grid-card bg-white rounded-2xl text-center shadow-lg border-2 border-transparent transition-all duration-300 cursor-pointer overflow-hidden group flex flex-col items-center"
                  style={{
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                    padding: "2.2rem 1.2rem",
                  }}
                  onClick={() => setModal(service)}
                >
                  <div
                    className="services-grid-gradient absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: service.gradient,
                      zIndex: 1,
                    }}
                  />
                  <div
                    className="services-grid-icon mx-auto mb-6 flex items-center justify-center rounded-full transition-all duration-300 relative z-10"
                    style={{
                      width: 70,
                      height: 70,
                      background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
                      boxShadow: "0 4px 16px rgba(30,121,247,0.08)",
                    }}
                  >
                    <i
                      className={`${service.icon} text-[2rem] transition-all duration-300`}
                      style={{
                        color: service.color,
                      }}
                    />
                  </div>
                  <h3 className="services-grid-title text-xl font-bold text-gray-900 mb-2 relative z-10 group-hover:text-[#1E79F7] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="services-grid-desc text-gray-500 text-base relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                    {service.desc}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {modal && (
        <div
          className="services-modal-overlay fixed inset-0 z-[3000] flex items-center justify-center bg-black/40"
          onClick={() => setModal(null)}
        >
          <div
            className="services-modal-content bg-white rounded-2xl shadow-2xl max-w-[95vw] w-[350px] sm:w-[420px] relative"
            style={{
              boxShadow: "0 8px 32px rgba(30,121,247,0.18)",
              border: `2px solid ${modal.color}`,
              padding: "1rem"
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="services-modal-header flex items-center justify-between mb-4">
              <div className="flex items-center justify-center w-full">
                <h2 className="font-bold text-xl text-gray-900">{modal.title}</h2>
              </div>
              <button
                className="text-gray-500 text-xl font-bold"
                onClick={() => setModal(null)}
                aria-label="Fechar"
              >
                ×
              </button>
            </div>
            <p className="services-modal-desc text-gray-600 mb-4 flex justify-center">{modal.desc}</p>
            <h4 className="services-modal-list-title font-semibold text-gray-800 mb-2 flex justify-center">Serviços Inclusos:</h4>
            <ul className="services-modal-list flex flex-col items-center" style={{ gap: "0.5rem", paddingBottom:"2%" }}>
              {modal.services.map((item: string) => (
                <li
                  key={item}
                  className="flex items-center gap-2 mb-2 p-2 bg-[#f8f9fa] rounded-lg"
                >
                  <i
                    className="fas fa-check-circle"
                    style={{ color: modal.color, fontSize: "1rem" }}
                  />
                  <span className="text-gray-800 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className="services-modal-btn block w-auto text-center bg-[#1E79F7] text-white font-bold py-3 rounded-lg text-base mt-2 transition hover:bg-[#0D6EFD]"
              style={{
                padding: "3% 0"
              }}
            >
              <i className="fas fa-mobile-alt" style={{marginRight:"2%"}}></i>
              Solicitar Serviço
            </a>
          </div>
        </div>
      )}
      <style>{`
        /* MOBILE */
        @media (max-width: 480px) {
          .services-section-main {
            padding: 2rem 0.5rem !important;
          }
          .services-section-container {
            padding: 0 0.5rem !important;
            max-width: 100vw !important;
          }
          .services-section-header {
            margin-bottom: 2rem !important;
          }
          .services-section-title {
            font-size: 2rem !important;
            padding: 0.5rem 0 !important;
            text-align: center !important;
          }
          .services-section-subtitle {
            font-size: 1.1rem !important;
            text-align: center !important;
            padding: 0.5rem 0 !important;
          }
          .services-carousel-wrapper {
            min-height: 370px !important;
            width: 100vw !important;
          }
          .services-carousel-controls {
            margin-bottom: 0.5rem !important;
            padding: 0 0.5rem !important;
            width: 100vw !important;
            justify-content: space-between !important;
          }
          .services-carousel-btn {
            width: 54px !important;
            height: 54px !important;
            font-size: 2rem !important;
            box-shadow: 0 2px 10px rgba(30,121,247,0.08) !important;
          }
          .services-carousel-card-wrapper {
            width: 100vw !important;
            justify-content: center !important;
            align-items: center !important;
          }
          .services-carousel-card {
            min-width: 90vw !important;
            max-width: 95vw !important;
            padding: 2.2rem 1.2rem !important;
            margin: 0 auto !important;
            border-radius: 1.2rem !important;
            font-size: 1rem !important;
          }
          .services-carousel-icon {
            width: 3.2rem !important;
            height: 3.2rem !important;
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }
          .services-carousel-title {
            font-size: 1.2rem !important;
            margin-bottom: 0.3rem !important;
          }
          .services-carousel-desc {
            font-size: 1rem !important;
          }
          .services-carousel-indicators {
            margin-top: 1.2rem !important;
          }
        }
        /* TABLET */
        @media (min-width: 481px) and (max-width: 1024px) {
          .services-section-main {
            padding: 2.5rem 1rem !important;
          }
          .services-section-container {
            padding: 0 1.5rem !important;
            max-width: 98vw !important;
          }
          .services-section-header {
            margin-bottom: 2.5rem !important;
          }
          .services-section-title {
            font-size: 2.3rem !important;
            padding: 0.7rem 0 !important;
            text-align: center !important;
          }
          .services-section-subtitle {
            font-size: 1.2rem !important;
            text-align: center !important;
            padding: 0.7rem 0 !important;
          }
          .services-grid {
            gap: 2rem !important;
            padding: 1rem 0.5rem !important;
            grid-template-columns: repeat(2, 1fr) !important;
            max-width: 90vw !important;
          }
          .services-grid-card {
            min-width: 180px !important;
            max-width: 45vw !important;
            padding: 2rem 1.2rem !important;
            font-size: 1.05rem !important;
            margin: 0.5rem auto !important;
            border-radius: 1.1rem !important;
          }
          .services-grid-icon {
            width: 3.7rem !important;
            height: 3.7rem !important;
            font-size: 1.7rem !important;
            margin-bottom: 1rem !important;
          }
          .services-grid-title {
            font-size: 1.15rem !important;
            margin-bottom: 0.4rem !important;
          }
          .services-grid-desc {
            font-size: 1rem !important;
          }
        }
        /* DESKTOP */
        @media (min-width: 1025px) {
          .services-section-main {
            padding: 3% 0 !important;
          }
          .services-section-container {
            padding: 0 5% !important;
            max-width: 75rem !important;
          }
          .services-section-header {
            margin-bottom: 3rem !important;
          }
          .services-section-title {
            font-size: 2.5rem !important;
            padding: 1rem 0 !important;
            text-align: center !important;
          }
          .services-section-subtitle {
            font-size: 1.3rem !important;
            text-align: center !important;
            padding: 1rem 0 !important;
          }
          .services-grid {
            gap: 2.5rem !important;
            padding: 1rem 2rem !important;
            grid-template-columns: repeat(3, 1fr) !important;
            max-width: 70vw !important;
          }
          .services-grid-card {
            min-width: 220px !important;
            max-width: 340px !important;
            padding: 2.2rem 1.2rem !important;
            font-size: 1.1rem !important;
            margin: 1rem auto !important;
            border-radius: 1.25rem !important;
          }
          .services-grid-icon {
            width: 4.4rem !important;
            height: 4.4rem !important;
            font-size: 2rem !important;
            margin-bottom: 1.2rem !important;
          }
          .services-grid-title {
            font-size: 1.3rem !important;
            margin-bottom: 0.7rem !important;
          }
          .services-grid-desc {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </>
  );
}