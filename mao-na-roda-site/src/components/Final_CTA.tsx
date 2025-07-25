export default function FinalCTASection() {
  return (
    <section className="final-cta-section relative top-[6rem] w-full overflow-hidden text-white mb-0">
      {/* Top Wave SVG */}
      <div className="final-cta-top-wave w-full relative top-1" style={{ lineHeight: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1E79F7"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,117.3C384,107,480,117,576,144C672,171,768,213,864,213.3C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      {/* Content */}
      <div className="final-cta-content bg-[#1E79F7] relative overflow-hidden py-[60px] md:py-[80px] flex items-center justify-center">
        {/* SVG grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"10\" cy=\"10\" r=\"1.5\" fill=\"%23ffffff\" opacity=\"0.1\"/><circle cx=\"50\" cy=\"50\" r=\"1.5\" fill=\"%23ffffff\" opacity=\"0.1\"/><circle cx=\"90\" cy=\"90\" r=\"1.5\" fill=\"%23ffffff\" opacity=\"0.1\"/></svg>') repeat",
          }}
        />
        <div className="container mx-auto max-w-[75rem] px-4 md:px-[5%] relative z-10 flex flex-col md:flex-row items-center justify-center" style={{padding:"1rem"}}>
          {/* Text */}
          <div className="final-cta-text relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start order-1 md:order-1">
            <h2 className="final-cta-title font-extrabold mb-6 leading-tight text-white text-[2rem] md:text-[2.8rem] lg:text-[3.5rem] text-center md:text-left">
              Duas soluções em um só lugar
            </h2>
            <p className="final-cta-subtitle text-white/90 mb-8 text-base md:text-lg lg:text-xl leading-relaxed text-center md:text-left">
              App Cliente: encontre profissionais qualificados para seu lar<br />
              App Profissional: aumente sua renda prestando serviços
            </p>
            <div className="final-cta-features grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 w-full max-w-[400px] md:max-w-none mx-auto md:mx-0">
              <div className="final-cta-feature flex items-center gap-3">
                <i className="fas fa-users text-[#ffffff] text-xl"></i>
                <span className="text-base font-medium">
                  Para Clientes: Profissionais verificados ao seu alcance
                </span>
              </div>
              <div className="final-cta-feature flex items-center gap-3">
                <i className="fas fa-briefcase text-[#ffffff] text-xl"></i>
                <span className="text-base font-medium">
                  Para Profissionais: Mais oportunidades de trabalho
                </span>
              </div>
              <div className="final-cta-feature flex items-center gap-3">
                <i className="fas fa-lock text-[#ffffff] text-xl"></i>
                <span className="text-base font-medium">
                  Pagamento seguro e garantido para ambos
                </span>
              </div>
              <div className="final-cta-feature flex items-center gap-3">
                <i className="fas fa-star text-[#ffffff] text-xl"></i>
                <span className="text-base font-medium">
                  Sistema de avaliações transparente
                </span>
              </div>
            </div>
            <div className="final-cta-buttons flex flex-col sm:flex-row gap-4 md:gap-6 flex-wrap md:justify-start items-center md:items-start w-full" style={{marginTop:"2%"}}>
              <a
                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR"
                className="final-cta-btn flex items-center gap-3 text-[#ffffff] px-6 py-4 rounded-xl shadow-lg border-2 border-[#fff] transition-all hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary-blue, #1E79F7), #0D6EFD)",
                    padding:"1%"
                }}
              >
                <i className="fab fa-google-play text-2xl"></i>
                <div className="cta-btn-text flex flex-col items-start">
                  <span className="text-xs opacity-80">App Cliente</span>
                  <strong className="text-base font-bold">Google Play</strong>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodaprofissional&hl=pt_BR"
                className="final-cta-btn flex items-center gap-3 text-white px-6 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #3B82F6, #1E40AF)",
                    padding:"1%"
                }}
              >
                <i className="fab fa-google-play text-2xl"></i>
                <div className="cta-btn-text flex flex-col items-start">
                  <span className="text-xs opacity-80">App Profissional</span>
                  <strong className="text-base font-bold">Google Play</strong>
                </div>
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="final-cta-image relative flex justify-center items-center w-full md:w-1/2 order-2 md:order-2 mb-8 md:mb-0">
            <img
              src="App_mao_na_roda.png"
              alt="App Mão na Roda em uso"
              className="max-w-[340px] md:max-w-[480px] h-auto rounded-3xl shadow-2xl border-[10px] border-white/10 transition-all duration-500 mx-auto animate-cta-img"
              style={{
                transform: "rotateY(-15deg)",
              }}
            />
            <div
              className="image-decoration-1 absolute rounded-full bg-white/10 pointer-events-none animate-[float-slow_8s_ease-in-out_infinite]"
              style={{
                width: "120px",
                height: "120px",
                top: "-20px",
                right: "-20px",
                animationDelay: "0s",
              }}
            ></div>
            <div
              className="image-decoration-2 absolute rounded-full bg-white/10 pointer-events-none animate-[float-slow_8s_ease-in-out_infinite]"
              style={{
                width: "80px",
                height: "80px",
                bottom: "-16px",
                left: "-16px",
                animationDelay: "2s",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* Animation keyframes for floating decorations and image */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes cta-img-anim {
          0% { transform: scale(1) rotateY(-15deg); filter: drop-shadow(0 0 0 #1E79F7); }
          50% { transform: scale(1.04) rotateY(-10deg); filter: drop-shadow(0 8px 24px #1E79F7aa); }
          100% { transform: scale(1) rotateY(-15deg); filter: drop-shadow(0 0 0 #1E79F7); }
        }
        .animate-cta-img {
          animation: cta-img-anim 3.5s ease-in-out infinite;
        }
        @media (max-width: 900px) {
          .final-cta-content {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          .container {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .final-cta-image {
            margin-bottom: 2rem !important;
          }
          .final-cta-text {
            align-items: center !important;
            text-align: center !important;
          }
          .final-cta-title {
            font-size: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          .final-cta-title {
            font-size: 1.3rem !important;
          }
          .final-cta-subtitle {
            font-size: 1rem !important;
          }
          .final-cta-feature span {
            font-size: 0.95rem !important;
          }
          .final-cta-btn {
            padding: 1rem 1.2rem !important;
            font-size: 0.95rem !important;
          }
          .final-cta-image img {
            max-width: 90vw !important;
          }
        }
      `}</style>
    </section>
  );
}