export default function AdvantageProfessionalCard() {
  return (
    <div
      className="advantage-card-modern professional-card fade-in relative mb-16"
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
              top: "25%",
              left: "15%",
              animationDelay: "0.5s",
              width: 40,
              height: 40,
              background: "rgba(255,255,255,0.8)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#17A2B8",
              fontSize: "1.2rem",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <i className="fas fa-chart-line"></i>
          </div>
          <div
            className="floating-icon"
            style={{
              position: "absolute",
              top: "50%",
              left: "80%",
              animationDelay: "1.5s",
              width: 40,
              height: 40,
              background: "rgba(255,255,255,0.8)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#17A2B8",
              fontSize: "1.2rem",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <i className="fas fa-briefcase"></i>
          </div>
          <div
            className="floating-icon"
            style={{
              position: "absolute",
              top: "70%",
              left: "85%",
              animationDelay: "2.5s",
              width: 40,
              height: 40,
              background: "rgba(255,255,255,0.8)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#17A2B8",
              fontSize: "1.2rem",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <i className="fas fa-money-bill-wave"></i>
          </div>
        </div>
      </div>
      <div className="card-content grid md:grid-cols-2 gap-16 p-16 relative z-10">
        <div className="card-left flex flex-col justify-center">
          <div
            className="advantage-badge-modern professional mb-6"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #1E40AF)",
              color: "white",
              padding: "0.8rem 2rem",
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "0.9rem",
              marginBottom: "2rem",
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              display: "inline-block",
            }}
          >
            Para Profissionais
          </div>
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Mais Oportunidades</h3>
          <p className="text-lg text-gray-500 mb-8">
            Aumente sua renda e conquiste novos clientes. Defina sua agenda, mostre seu talento e destaque-se em sua área.
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <a
              href="#"
              className="advantage-btn-modern professional"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #1E40AF)",
                color: "white",
                padding: "1.5rem 3rem",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "1.1rem",
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                display: "inline-flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: 0,
              }}
            >
              <i className="fas fa-download"></i>
              <span>Baixar App Profissional</span>
            </a>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#6C757D",
                textAlign: "center",
                opacity: 0.8,
              }}
            >
              🛠️ App exclusivo para prestadores de serviços
            </div>
          </div>
        </div>
        <div className="card-right">
          <div className="feature-grid grid grid-cols-2 gap-6">
            <div className="feature-item-modern bg-white p-6 rounded-2xl text-center shadow border border-blue-100">
              <div className="feature-icon mx-auto mb-4 bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] rounded-xl flex items-center justify-center w-[50px] h-[50px] text-white text-xl shadow">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <span className="text-gray-900 font-semibold text-base">Clientes próximos a você</span>
            </div>
            <div className="feature-item-modern bg-white p-6 rounded-2xl text-center shadow border border-blue-100">
              <div className="feature-icon mx-auto mb-4 bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] rounded-xl flex items-center justify-center w-[50px] h-[50px] text-white text-xl shadow">
                <i className="fas fa-clock"></i>
              </div>
              <span className="text-gray-900 font-semibold text-base">Controle total da agenda</span>
            </div>
            <div className="feature-item-modern bg-white p-6 rounded-2xl text-center shadow border border-blue-100">
              <div className="feature-icon mx-auto mb-4 bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] rounded-xl flex items-center justify-center w-[50px] h-[50px] text-white text-xl shadow">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <span className="text-gray-900 font-semibold text-base">Recebimento garantido</span>
            </div>
            <div className="feature-item-modern bg-white p-6 rounded-2xl text-center shadow border border-blue-100">
              <div className="feature-icon mx-auto mb-4 bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] rounded-xl flex items-center justify-center w-[50px] h-[50px] text-white text-xl shadow">
                <i className="fas fa-thumbs-up"></i>
              </div>
              <span className="text-gray-900 font-semibold text-base">Avaliações dos clientes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}