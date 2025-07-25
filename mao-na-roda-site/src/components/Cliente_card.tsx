import { useEffect } from "react";

export default function ClientCard() {
  useEffect(() => {
    const icons = document.querySelectorAll(".floating-icon");
    icons.forEach((icon, idx) => {
      (icon as HTMLElement).style.animation = `floatY 3s ease-in-out infinite`;
      (icon as HTMLElement).style.animationDelay = `${idx * 0.7}s`;
    });
  }, []);

  return (
    <div
      className="advantage-card-modern client-card fade-in relative mb-16 top-[6rem]"
      style={{
        maxWidth: "1000px",
        margin: "0 auto 4rem",
        background: "white",
        borderRadius: "30px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s ease",
      }}
    >
      {/* Floating icons */}
      <div className="card-background absolute inset-0 pointer-events-none">
        <div className="floating-elements w-full h-full">
          <div
            className="floating-icon"
            style={{
              position: "absolute",
              top: "20%",
              left: "10%",
              width: 40,
              height: 40,
              background: "rgba(255,255,255,0.8)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1E79F7",
              fontSize: "1.2rem",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <img
              src="/Mao-na-roda-logo.jpg"
              alt="Mão na Roda"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                animation: "spin 4s linear infinite",
              }}
            />
          </div>
          <div
            className="floating-icon"
            style={{
              position: "absolute",
              top: "60%",
              left: "85%",
              width: 40,
              height: 40,
              background: "rgba(255,255,255,0.8)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1E79F7",
              fontSize: "1.2rem",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <i className="fas fa-tools"></i>
          </div>
          <div
            className="floating-icon"
            style={{
              position: "absolute",
              top: "30%",
              left: "80%",
              width: 40,
              height: 40,
              background: "rgba(255,255,255,0.8)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1E79F7",
              fontSize: "1.2rem",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <i className="fas fa-star"></i>
          </div>
          {/* Elemento sem ícone: adicionado ícone de usuário */}
          <div
            className="floating-icon"
            style={{
              position: "absolute",
              top: "80%",
              left: "15%",
              width: 40,
              height: 40,
              background: "rgba(255,255,255,0.8)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1E79F7",
              fontSize: "1.2rem",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
      <div className="card-content grid md:grid-cols-2 gap-8 md:gap-16 p-6 md:p-16 relative z-10" style={{ padding: "2rem 1rem" }}>
        <div className="card-left flex flex-col justify-center items-center md:items-start relative left-3">
          <div
            className="advantage-badge-modern mb-6"
            style={{
              background: "linear-gradient(135deg, #1E79F7, #0D6EFD)",
              color: "white",
              padding: "0.8rem 2rem",
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "0.9rem",
              marginBottom: "2rem",
              boxShadow: "0 8px 25px rgba(30, 121, 247, 0.3)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              display: "inline-block",
            }}
          >
            Para Clientes
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 text-center md:text-left">Seguro e Confiável</h3>
          <p className="text-base md:text-lg text-gray-500 mb-8 text-center md:text-left">
            Receba ajuda especializada para todos os reparos e projetos em sua casa. Garanta serviços de qualidade e um lar impecável.
          </p>
          <div className="flex flex-col gap-4 mt-8 w-full items-center md:items-start">
            <a
              href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR"
              className="advantage-btn-modern w-full md:w-auto"
              style={{
                background: "linear-gradient(135deg, #1E79F7, #0D6EFD)",
                color: "white",
                padding: "1.2rem 2rem",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "1.1rem",
                boxShadow: "0 10px 30px rgba(30, 121, 247, 0.3)",
                display: "inline-flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: 0,
                justifyContent: "center",
              }}
            >
              <i className="fas fa-download"></i>
              <span>Baixar App Cliente</span>
            </a>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#6C757D",
                textAlign: "center",
                opacity: 0.8,
              }}
            >
              📱 App exclusivo para quem precisa de serviços
            </div>
          </div>
        </div>
        <div className="card-right w-full">
          <div className="feature-grid grid grid-cols-2 gap-4 md:gap-6 relative top-[20%] right-[10%]">
            <div className="feature-item-modern bg-white p-4 md:p-6 rounded-2xl text-center shadow border border-blue-100 animate-fade-in-up" style={{animationDelay: "0.1s", padding:"2%"}}>
              <div className="feature-icon mx-auto mb-2 md:mb-4 bg-gradient-to-br from-[#1E79F7] to-[#0D6EFD] rounded-xl flex items-center justify-center w-[40px] md:w-[50px] h-[40px] md:h-[50px] text-white text-lg md:text-xl shadow">
                <i className="fas fa-check-circle"></i>
              </div>
              <span className="text-gray-900 font-semibold text-sm md:text-base">Profissionais verificados</span>
            </div>
            <div className="feature-item-modern bg-white p-4 md:p-6 rounded-2xl text-center shadow border border-blue-100 animate-fade-in-up" style={{ animationDelay: "0.2s", padding:"2%" }}>
              <div className="feature-icon mx-auto mb-2 md:mb-4 bg-gradient-to-br from-[#1E79F7] to-[#0D6EFD] rounded-xl flex items-center justify-center w-[40px] md:w-[50px] h-[40px] md:h-[50px] text-white text-lg md:text-xl shadow">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <span className="text-gray-900 font-semibold text-sm md:text-base">Preços transparentes</span>
            </div>
            <div className="feature-item-modern bg-white p-4 md:p-6 rounded-2xl text-center shadow border border-blue-100 animate-fade-in-up" style={{ animationDelay: "0.4s", padding:"2%" }}>
              <div className="feature-icon mx-auto mb-2 md:mb-4 bg-gradient-to-br from-[#1E79F7] to-[#0D6EFD] rounded-xl flex items-center justify-center w-[40px] md:w-[50px] h-[40px] md:h-[50px] text-white text-lg md:text-xl shadow">
                <i className="fas fa-calendar-check"></i>
              </div>
              <span className="text-gray-900 font-semibold text-sm md:text-base">Agendamento fácil</span>
            </div>
            <div className="feature-item-modern bg-white p-4 md:p-6 rounded-2xl text-center shadow border border-blue-100 animate-fade-in-up" style={{ animationDelay: "0.6s", padding:"2%" }}>
              <div className="feature-icon mx-auto mb-2 md:mb-4 bg-gradient-to-br from-[#1E79F7] to-[#0D6EFD] rounded-xl flex items-center justify-center w-[40px] md:w-[50px] h-[40px] md:h-[50px] text-white text-lg md:text-xl shadow">
                <i className="fas fa-lock"></i>
              </div>
              <span className="text-gray-900 font-semibold text-sm md:text-base">Pagamento seguro</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 480px) {
          .client-card {
            max-width: 98vw !important;
            margin: 1rem auto 2rem !important;
            border-radius: 1.2rem !important;
          }
          .card-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 1.2rem !important;
          }
          .feature-grid {
            gap: 1rem !important;
          }
          .advantage-badge-modern {
            font-size: 0.85rem !important;
            padding: 0.6rem 1.2rem !important;
          }
          .feature-icon {
            width: 36px !important;
            height: 36px !important;
            font-size: 1rem !important;
          }
          h3 {
            font-size: 1.3rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}