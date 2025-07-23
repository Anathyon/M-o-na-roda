import { useState, useEffect } from "react";

const services = [
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
  const [modal, setModal] = useState<null | typeof services[0]>(null);
 

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

  return (
    <>
      <section
        id="servicos"
        className="bg-gradient-to-br from-[#fafbff] via-[#f8f9fa] to-white relative top-[6rem] gap-14"
        style={{ margin: "2% 0" }}
      >
        <div className="w-full mx-auto" style={{ maxWidth: "75rem", padding: "2% 5%" }}>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2 relative left-24">Nossos Serviços</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto relative left-80" style={{ padding: "1rem 0" }} >
              Profissionais qualificados para todas as suas necessidades
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative left-36">
            {services.map((service) => (
                <button
                  key={service.category}
                  className="service-category-card relative bg-white p-10 rounded-2xl text-center shadow-lg border-2 border-transparent transition-all duration-300 cursor-pointer overflow-hidden group"
                  style={{
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                    padding: "1%"
                  }}
                  onClick={() => setModal(service)}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: service.gradient,
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
                        color: service.color,
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10 group-hover:text-[#1E79F7] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-base relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                    {service.desc}
                  </p>
                  <style>{`
                    .group:hover .service-icon-container {
                      background: ${service.gradient};
                      transform: scale(1.1);
                      box-shadow: 0 10px 30px ${service.color}33;
                    }
                    .group:hover .service-icon-container i {
                      color: ${service.color} !important;
                      background: rgba(255,255,255,0.25);
                      border-radius: 50%;
                      padding: 0.3em;
                      transform: scale(1.1);
                      transition: background 0.3s;
                    }
                    .group:hover h3 {
                      color: ${service.color} !important;
                    }
                  `}</style>
                </button>
              ))}
          </div>
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
              {modal.services.map((item) => (
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
    </>
  )
}