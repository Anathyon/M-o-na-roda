import { useState, useEffect, useRef, useCallback } from "react";

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
  const intervalRef = useRef<number | null>(null);

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

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 480;

  // Usa useCallback para memorizar a função stopAutoPlay
  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  // Usa useCallback para memorizar a função startAutoPlay
  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    intervalRef.current = window.setInterval(() => {
      setCarouselIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 4000); // Passa para o próximo item a cada 4 segundos
  }, [stopAutoPlay]); // Adiciona stopAutoPlay como dependência

  useEffect(() => {
    if (isMobile) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isMobile, startAutoPlay, stopAutoPlay]);

  const handlePrev = () => {
    stopAutoPlay();
    setCarouselIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    stopAutoPlay();
    setCarouselIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section
        id="servicos"
        className="services-section bg-gradient-to-br from-[#fafbff] via-[#f8f9fa] to-white relative top-[6rem]"
        style={{ margin: "2% 0" }}
      >
        <div className="services-container w-full mx-auto" style={{ maxWidth: "75rem", padding: "2% 5%" }}>
          <div className="services-header text-center mb-10">
            <h2 className="services-title-h2 text-4xl font-extrabold text-gray-900 mb-2">
              Nossos Serviços
            </h2>
            <p className="services-subtitle text-lg text-gray-500 max-w-xl mx-auto" style={{ padding: "1rem 0" }}>
              Profissionais qualificados para todas as suas necessidades
            </p>
          </div>
          {/* MOBILE CAROUSEL */}
          {isMobile ? (
            <div
              className="services-carousel-wrapper flex flex-col items-center w-full relative"
              style={{ minHeight: "370px" }}
              onMouseEnter={stopAutoPlay}
              onMouseLeave={startAutoPlay}
              onTouchStart={stopAutoPlay}
              onTouchEnd={startAutoPlay}
            >
              <div className="services-carousel-controls flex w-full justify-between items-center mb-4 px-2 relative z-20" style={{paddingBottom:"5%"}}>
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
            <div className="services-grid">
              {services.map((service) => (
                <button
                  key={service.category}
                  className="services-card group"
                  onClick={() => setModal(service)}
                  style={{
                    background: "#fff",
                    borderRadius: "1.5rem",
                    boxShadow: "0 8px 30px rgba(30,121,247,0.08)",
                    padding: "2.2rem 1.2rem",
                    minWidth: 220,
                    maxWidth: 340,
                    width: "100%",
                    margin: 0,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "box-shadow 0.2s",
                    position: "relative",
                  }}
                >
                  <div
                    className="services-icon"
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "#f8f9fa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                      fontSize: "2.2rem",
                      boxShadow: "0 4px 16px rgba(30,121,247,0.08)",
                      transition: "background 0.2s, transform 0.2s",
                    }}
                  >
                    <i
                      className={service.icon}
                      style={{
                        color: service.color,
                        fontSize: "2rem",
                        transition: "color 0.2s",
                      }}
                    />
                  </div>
                  <h3
                    className="services-title"
                    style={{
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#212529",
                      marginBottom: "0.5rem",
                      transition: "color 0.2s",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="services-desc"
                    style={{
                      color: "#6C757D",
                      fontSize: "1rem",
                      margin: 0,
                    }}
                  >
                    {service.desc}
                  </p>
                  <style>{`
                    .services-card:hover .services-icon {
                      background: ${service.gradient};
                      transform: scale(1.08);
                    }
                    .services-card:hover .services-title {
                      color: ${service.color};
                    }
                    .services-card:hover .services-icon i {
                      color: ${service.color};
                    }
                  `}</style>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/40"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-[95vw] w-[350px] sm:w-[420px] relative"
            style={{
              boxShadow: "0 8px 32px rgba(30,121,247,0.18)",
              border: `2px solid ${modal.color}`,
              padding: "1rem"
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
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
            <p className="text-gray-600 mb-4 flex justify-center">{modal.desc}</p>
            <h4 className="font-semibold text-gray-800 mb-2 flex justify-center">Serviços Inclusos:</h4>
            <ul className="flex flex-col items-center" style={{ gap: "0.5rem", paddingBottom:"2%" }}>
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
              className="block w-auto text-center bg-[#1E79F7] text-white font-bold py-3 rounded-lg text-base mt-2 transition hover:bg-[#0D6EFD]"
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
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2.5rem;
          max-width: 1050px;
          margin: 0 auto;
          justify-items: center;
        }
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            max-width: 98vw;
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
            max-width: 100vw;
          }
          .services-card {
            min-width: 0 !important;
            max-width: 95vw !important;
            padding: 1.5rem 0.7rem !important;
          }
        }
        /* Mantém responsividade e visual dos botões do carrossel mobile */
        @media (max-width: 480px) {
          .services-carousel-btn {
            width: 54px !important;
            height: 54px !important;
            font-size: 2rem !important;
            box-shadow: 0 2px 10px rgba(30,121,247,0.08) !important;
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
        @media (min-width: 1025px) {  
          .services-subtitle{
            position: relative;
            left: 28%;
          }  
          .services-grid {
            position: relative;
            left: 7%;
          }
          .services-title-h2 {
            position: relative;
            left: 7%;
          }    
        }
        @media (min-width: 481px) and (max-width: 1024px) {
            .services-subtitle{
            position: relative;
            left: 12%;
          }
        }  
      `}</style>
    </>
  );
}