
export default function ClientCard() {
  return (
    <div
      className="advantage-card-modern client-card fade-in relative mb-16"
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
              animationDelay: "0s",
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
            <img src="/Mao-na-roda-logo.jpg" alt="Mão na Roda" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div
            className="floating-icon"
            style={{
              position: "absolute",
              top: "60%",
              left: "85%",
              animationDelay: "1s",
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
              animationDelay: "2s",
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
        </div>
      </div>
      <div className="card-content grid md:grid-cols-2 gap-16 p-16 relative z-10">
        <div className="card-left flex flex-col justify-center">
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
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Seguro e Confiável</h3>
          <p className="text-lg text-gray-500 mb-8">
            Receba ajuda especializada para todos os reparos e projetos em sua casa. Garanta serviços de qualidade e um lar impecável.
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <a
              href="#"
              className="advantage-btn-modern"
              style={{
                background: "linear-gradient(135deg, #1E79F7, #0D6EFD)",
                color: "white",
                padding: "1.5rem 3rem",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "1.1rem",
                boxShadow: "0 10px 30px rgba(30, 121, 247, 0.3)",
                display: "inline-flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: 0,
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
        <div className="card-right">
          <div className="feature-grid grid grid-cols-2 gap-6">
            <div className="feature-item-modern bg-white p-6 rounded-2xl text-center shadow border border-blue-100">
              <div className="feature-icon mx-auto mb-4 bg-gradient-to-br from-[#1E79F7] to-[#0D6EFD] rounded-xl flex items-center justify-center w-[50px] h-[50px] text-white text-xl shadow">
                <i className="fas fa-shield-check"></i>
              </div>
              <span className="text-gray-900 font-semibold text-base">Profissionais verificados</span>
            </div>
            <div className="feature-item-modern bg-white p-6 rounded-2xl text-center shadow border border-blue-100">
              <div className="feature-icon mx-auto mb-4 bg-gradient-to-br from-[#1E79F7] to-[#0D6EFD] rounded-xl flex items-center justify-center w-[50px] h-[50px] text-white text-xl shadow">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <span className="text-gray-900 font-semibold text-base">Preços transparentes</span>
            </div>
            <div className="feature-item-modern bg-white p-6 rounded-2xl text-center shadow border border-blue-100">
              <div className="feature-icon mx-auto mb-4 bg-gradient-to-br from-[#1E79F7] to-[#0D6EFD] rounded-xl flex items-center justify-center w-[50px] h-[50px] text-white text-xl shadow">
                <i className="fas fa-calendar-check"></i>
              </div>
              <span className="text-gray-900 font-semibold text-base">Agendamento fácil</span>
            </div>
            <div className="feature-item-modern bg-white p-6 rounded-2xl text-center shadow border border-blue-100">
              <div className="feature-icon mx-auto mb-4 bg-gradient-to-br from-[#1E79F7] to-[#0D6EFD] rounded-xl flex items-center justify-center w-[50px] h-[50px] text-white text-xl shadow">
                <i className="fas fa-lock"></i>
              </div>
              <span className="text-gray-900 font-semibold text-base">Pagamento seguro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}