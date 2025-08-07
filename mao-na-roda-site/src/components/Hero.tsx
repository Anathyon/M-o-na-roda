export default function Hero() {
  return (
    <article
      id="home"
      className="hero-article relative flex items-center min-h-screen py-12 top-[5.5rem]"
      style={{
        background: "linear-gradient(135deg, #F8FAFF 0%, #E3F2FD 50%, #F8FAFF 100%)",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%231E79F7" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>')`
      }}
    >
      <div className="hero-container w-full mx-auto max-w-[90rem] px-[5vw]">
        <div className="hero-grid grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center relative z-10 w-full">
          {/* Texto */}
          <div className="hero-text flex flex-col justify-center items-start">
            <div
              className="hero-badge flex justify-center items-center gap-[0.5em] mb-[1.5em] font-semibold w-auto text-sm sm:text-base"
              style={{
                background: "linear-gradient(135deg, #E8F5E8, #F0FFF0)",
                color: "#22C55E",
                padding: "0.8em 1.5em",
                borderRadius: "9999px",
                border: "1px solid rgba(34, 197, 94, 0.2)",
                boxShadow: "0 0.25em 0.9em rgba(34, 197, 94, 0.1)",
              }}
            >
              <i className="fas fa-shield-check text-[1em]"></i>
              Profissionais 100% Verificados e Qualificados
            </div>
            <h1
              className="hero-title font-black mb-[1em] leading-tight text-gray-900 border-b-4 border-blue-400 pb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
              }}
            >
              Encontre ou ofereça serviços com facilidade{" "}
              <span
                className="highlight"
                style={{
                  background: "linear-gradient(135deg, #1E79F7, #0D6EFD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AGORA!
              </span>
            </h1>
            <p className="hero-desc text-gray-500 text-base sm:text-lg leading-relaxed max-w-[90%] sm:max-w-full" style={{ margin: "1rem 0" }}>
              <strong className="text-blue-700">Mão na Roda</strong> conecta
              <span style={{ color: "#1E79F7", fontWeight: 600 }}> clientes</span> que precisam de serviços domésticos com{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(#0f172a, #1e3a8a, #3b82f6)",
                  color: "black",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                profissionais
              </span>{" "}
              qualificados e verificados.
              <br />
              <span style={{ color: "#1E79F7", fontWeight: 600 }}>App Cliente:</span>
              Solicite serviços de forma rápida e segura.<br />
              <span
                style={{
                  backgroundImage: "linear-gradient(#0f172a, #1e3a8a, #3b82f6)",
                  color: "black",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 600,
                }}
              >
                App Profissional:
              </span>{" "}
              Cadastre-se, receba oportunidades e aumente sua renda!
            </p>
            <div
              className="hero-solucao text-sm sm:text-base w-full sm:w-auto"
              style={{
                background: "rgba(30, 121, 247, 0.1)",
                padding: "1.2em",
                borderRadius: "1em",
                borderLeft: "0.4em solid #1E79F7",
                marginBottom: "1.5em",
              }}
            >
              <p className="m-0 text-gray-800">
                <strong>📱 Dois apps, duas soluções:</strong>
                <span style={{ color: "#1E79F7", fontWeight: 600 }}> App Cliente</span> para quem busca serviços e
                <span
                  style={{
                    backgroundImage: "linear-gradient(#0f172a, #1e3a8a, #3b82f6)",
                    color: "black",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 600,
                  }}
                >
                  {" "}
                  App Profissional
                </span>{" "}
                para quem quer trabalhar!
              </p>
            </div>
            <div className="hero-bts-download flex flex-wrap gap-[0.8em] justify-start mb-[1em] w-full">
              <a
                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR"
                className="hero-btn-app flex items-center gap-[0.75em] rounded-full font-semibold transition-all"
                style={{
                  background: "linear-gradient(135deg, #1E79F7, #0D6EFD)",
                  color: "white",
                  padding: "1em 2em",
                  fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                  boxShadow: "0 0.8em 1.8em rgba(30, 121, 247, 0.5)",
                  animation: "bounce 2s infinite",
                }}
              >
                <i className="fas fa-download text-[1em]"></i>
                App Cliente
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodaprofissional&hl=pt_BR"
                className="hero-btn-app flex items-center gap-[0.75em] rounded-full font-semibold transition-all"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #1E40AF)",
                  color: "white",
                  padding: "1em 2em",
                  fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                  boxShadow: "0 0.8em 1.8em rgba(59, 130, 246, 0.4)",
                }}
              >
                <i className="fas fa-download text-[1em]"></i>
                App Profissional
              </a>
            </div>
          </div>
          {/* Visual */}
          <div className="hero-visual flex justify-center items-center mt-8 md:mt-0">
            <div
              className="phone-mockup"
              style={{
                width: "clamp(10rem, 20vw, 14rem)",
                aspectRatio: "1/2",
                background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
                borderRadius: "2em",
                padding: "0.6em",
                boxShadow: "0 1em 2em rgba(0,0,0,0.25)",
                transform: "rotate(-10deg)",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <div
                className="phone-screen"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, #1E79F7, #0D6EFD)",
                  borderRadius: "1.5em",
                  padding: "1em 0.4em 0.4em",
                  overflow: "hidden",
                }}
              >
                <div className="app-interface flex flex-col gap-[0.5em] bg-white h-full rounded-xl p-[0.4em]">
                  {/* Cabeçalho */}
                  <div className="app-header flex items-center gap-[0.5em] pb-[0.4em] border-b-2 border-gray-200" style={{ fontSize: "1.4rem", paddingLeft: "2%" }}>
                    <div
                      className="app-icon flex items-center justify-center rounded-lg"
                      style={{
                        width: "2em",
                        height: "2em",
                        background: "#1E79F7",
                        fontSize: "0.7em",
                      }}
                    >
                      <img
                        src="/Mao-na-roda-logo.jpg"
                        alt="Mão na Roda"
                        className="w-full h-full object-contain rounded-r-lg"
                      />
                    </div>
                    <div>
                      <strong style={{ fontSize: "0.95em" }}>Mão na Roda</strong>
                      <div className="text-[0.6em] text-gray-500">Serviços para seu lar</div>
                    </div>
                  </div>
                  {/* Serviços */}
                  {[
                    { icon: "fas fa-wrench", title: "Reparo Hidráulico", price: "R$ 90" },
                    { icon: "fas fa-paint-roller", title: "Pintura", price: "R$ 120" },
                    { icon: "fas fa-bolt", title: "Elétrica", price: "R$ 150" },
                    { icon: "fas fa-hammer", title: "Marcenaria", price: "R$ 100" },
                    { icon: "fas fa-tools", title: "Carpintaria", price: "R$ 80" },
                    { icon: "fas fa-broom", title: "Serviços de limpeza", price: "R$ 70" },
                  ].map((service) => (
                    <div key={service.title} className="service-card flex items-center gap-[0.5em] bg-gray-50 rounded-lg p-[0.5em]" style={{ fontSize: "1.4rem" }}>
                      <div
                        className="service-icon flex items-center justify-center rounded-lg"
                        style={{
                          width: "2em",
                          height: "2em",
                          background: "#1E79F7",
                          color: "white",
                          fontSize: "0.8em",
                        }}
                      >
                        <i className={service.icon}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold truncate text-xs">{service.title}</div>
                        <div className="text-[0.6em] text-gray-500 truncate">A partir de {service.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Keyframes e responsividade */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-0.6rem); }
        }
        @keyframes float {
          0%, 100% { transform: rotate(-10deg) translateY(0); }
          50% { transform: rotate(-10deg) translateY(-0.6rem); }
        }
        /* MOBILE */
        @media (max-width: 480px) {
          .hero-article {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          .hero-grid {
            gap: 1.2rem !important;
          }
          .hero-text {
            align-items: center !important;
            text-align: center !important;
            width: 100% !important;
            max-width: 98vw !important;
            margin: 0 auto !important;
          }
          .hero-badge {
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: 100% !important;
            justify-content: center !important;
            margin-bottom: 2em !important;
          }
          .hero-title {
            width: 100% !important;
            font-size: 1.5rem !important;
            padding-bottom: 0.8rem !important;
            border-bottom-width: 2px !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .hero-desc {
            width: 100% !important;
            margin: 1rem 0 !important;
            text-align: center !important;
            max-width: 100% !important;
          }
          .hero-solucao {
            width: 100% !important;
            margin: 0 0 1.2em 0 !important;
            left: 0 !important;
          }
          .hero-bts-download {
            width: 100% !important;
            justify-content: center !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .hero-btn-app {
            width: 100% !important;
            justify-content: center !important;
            min-width: 0 !important;
          }
          .hero-visual {
            margin-top: 2rem !important;
            min-width: 160px !important;
            max-width: 95vw !important;
            justify-content: center !important;
          }
          .phone-mockup {
            width: 9rem !important;
            min-width: 140px !important;
            border-radius: 1em !important;
            padding: 0.2em !important;
            margin: 0 auto !important;
          }
          .phone-screen {
            border-radius: 0.8em !important;
            padding: 0.4em 0.1em 0.1em !important;
          }
          .app-header {
            font-size: 1rem !important;
            padding-left: 0.3em !important;
          }
          .app-icon,
          .service-icon {
            width: 2em !important;
            height: 2em !important;
            font-size: 0.65em !important;
          }
          .service-card {
            font-size: 0.9rem !important;
            gap: 0.2em !important;
            padding: 0.2em !important;
          }
        }
        /* TABLET */
        @media (min-width: 481px) and (max-width: 1024px) {
          .hero-article {
            padding-top: 3.5rem !important;
            padding-bottom: 3.5rem !important;
          }
          .hero-grid {
            gap: 2rem !important;
          }
          .hero-text {
            align-items: flex-start !important;
            text-align: left !important;
            width: 100% !important;
            max-width: 90vw !important;
            margin: 0 auto !important;
            padding-left: 10% !important;
          }
          .hero-badge {
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: 80% !important;
            justify-content: flex-start !important;
            margin-bottom: 1.7em !important;
          }
          .hero-title {
            width: 95% !important;
            font-size: 2.1rem !important;
            padding-bottom: 1rem !important;
            border-bottom-width: 3px !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .hero-desc {
            width: 100% !important;
            margin: 1rem 0 !important;
            text-align: left !important;
            max-width: 100% !important;
          }
          .hero-solucao {
            width: 100% !important;
            margin: 0 0 1.5em 0 !important;
            left: 0 !important;
          }
          .hero-bts-download {
            width: 100% !important;
            justify-content: flex-start !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .hero-btn-app {
            min-width: 180px !important;
            justify-content: flex-start !important;
          }
          .hero-visual {
            min-width: 180px !important;
            max-width: 350px !important;
            justify-content: center !important;
          }
          .phone-mockup {
            width: 11rem !important;
            border-radius: 1.2em !important;
            padding: 0.4em !important;
            margin: 0 auto !important;
          }
          .phone-screen {
            border-radius: 1em !important;
            padding: 0.6em 0.2em 0.2em !important;
          }
          .app-header {
            font-size: 1.1rem !important;
            padding-left: 0.7em !important;
          }
          .app-icon,
          .service-icon {
            width: 1.3em !important;
            height: 1.3em !important;
            font-size: 0.7em !important;
          }
          .service-card {
            font-size: 1.05rem !important;
            gap: 0.3em !important;
            padding: 0.3em !important;
          }
        }
        /* DESKTOP */
        @media (min-width: 1025px) {
          .hero-article {
            padding-top: 5.5rem !important;
            padding-bottom: 5.5rem !important;
          }
          .hero-grid {
            gap: 2.5rem !important;
          }
          .hero-text {
            align-items: flex-start !important;
            text-align: left !important;
            width: 100% !important;
            max-width: 40vw !important;
            margin: 0 auto !important;
          }
          .hero-badge {
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: auto !important;
            justify-content: flex-start !important;
            margin-bottom: 1em !important;
          }
          .hero-title {
            width: 80% !important;
            font-size: clamp(2rem, 5vw, 3.5rem) !important;
            padding-bottom: 1.5rem !important;
            border-bottom-width: 4px !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .hero-desc {
            width: 100% !important;
            margin: 1rem 0 !important;
            text-align: left !important;
            max-width: 100% !important;
          }
          .hero-solucao {
            width: 100% !important;
            margin: 0 0 1.5em 0 !important;
            left: 0 !important;
          }
          .hero-bts-download {
            width: 100% !important;
            justify-content: flex-start !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .hero-btn-app {
            min-width: 180px !important;
            justify-content: flex-start !important;
          }
          .hero-visual {
            min-width: 240px !important;
            max-width: 420px !important;
            justify-content: center !important;
          }
          .phone-mockup {
            width: 14rem !important;
            border-radius: 2em !important;
            padding: 0.6em !important;
            margin: 0 auto !important;
          }
          .phone-screen {
            border-radius: 1.5em !important;
            padding: 1em 0.4em 0.4em !important;
          }
          .app-header {
            font-size: 1.4rem !important;
            padding-left: 2% !important;
          }
          .app-icon,
          .service-icon {
            width: 2em !important;
            height: 2em !important;
            font-size: 0.8em !important;
          }
          .service-card {
            font-size: 1.4rem !important;
            gap: 0.5em !important;
            padding: 0.5em !important;
          }
        }
      `}</style>
    </article>
  );
}