export default function FinalCTASection() {
  return (
    <section className="final-cta-section">
      {/* Top Wave SVG */}
      <div className="final-cta-top-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1E79F7"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,117.3C384,107,480,117,576,144C672,171,768,213,864,213.3C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      {/* Content */}
      <div className="final-cta-content">
        {/* SVG grid background */}
        <div className="final-cta-bg-pattern" />
        <div className="final-cta-container">
          {/* Text */}
          <div className="final-cta-text">
            <h2 className="final-cta-title">
              Duas soluções em um só lugar
            </h2>
            <p className="final-cta-subtitle">
              App Cliente: encontre profissionais qualificados para seu lar<br />
              App Profissional: aumente sua renda prestando serviços
            </p>
            <div className="final-cta-features">
              <div className="final-cta-feature">
                <i className="fas fa-users"></i>
                <span>Para Clientes: Profissionais verificados ao seu alcance</span>
              </div>
              <div className="final-cta-feature">
                <i className="fas fa-briefcase"></i>
                <span>Para Profissionais: Mais oportunidades de trabalho</span>
              </div>
              <div className="final-cta-feature">
                <i className="fas fa-lock"></i>
                <span>Pagamento seguro e garantido para ambos</span>
              </div>
              <div className="final-cta-feature">
                <i className="fas fa-star"></i>
                <span>Sistema de avaliações transparente</span>
              </div>
            </div>
            <div className="final-cta-buttons">
              <a
                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR"
                className="final-cta-btn final-cta-btn-client"
              >
                <i className="fab fa-google-play"></i>
                <div className="cta-btn-text">
                  <span>App Cliente</span>
                  <strong>Google Play</strong>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodaprofissional&hl=pt_BR"
                className="final-cta-btn final-cta-btn-prof"
              >
                <i className="fab fa-google-play"></i>
                <div className="cta-btn-text">
                  <span>App Profissional</span>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="final-cta-image">
            <img
              src="App_mao_na_roda.png"
              alt="App Mão na Roda em uso"
              className="final-cta-img"
            />
            <div className="image-decoration-1"></div>
            <div className="image-decoration-2"></div>
          </div>
        </div>
      </div>
      <style>{`
        .final-cta-section {
          position: relative;
          top: 6rem;
          width: 100%;
          overflow: hidden;
          text-white;
          margin-bottom: 0;
        }
        .final-cta-top-wave {
          width: 100%;
          line-height: 0;
          position: relative;
          top: 1px;
        }
        .final-cta-content {
          background: #1E79F7;
          position: relative;
          overflow: hidden;
          padding: 60px 0 80px 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .final-cta-bg-pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="1.5" fill="%23ffffff" opacity="0.1"/><circle cx="50" cy="50" r="1.5" fill="%23ffffff" opacity="0.1"/><circle cx="90" cy="90" r="1.5" fill="%23ffffff" opacity="0.1"/></svg>') repeat;
        }
        .final-cta-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          position: relative;
          z-index: 2;
        }
        .final-cta-text {
          width: 100%;
          max-width: 520px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: #fff;
        }
        .final-cta-title {
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          font-size: 2.8rem;
          color: #fff;
        }
        .final-cta-subtitle {
          color: #eaf2ff;
          margin-bottom: 2rem;
          font-size: 1.2rem;
          line-height: 1.5;
        }
        .final-cta-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem 2rem;
          margin-bottom: 2rem;
          width: 100%;
        }
        .final-cta-feature {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 1rem;
          color: #fff;
        }
        .final-cta-feature i {
          font-size: 1.3rem;
          color: #fff;
        }
        .final-cta-buttons {
          display: flex;
          flex-direction: row;
          gap: 1.2rem;
          flex-wrap: wrap;
          margin-top: 1rem;
          width: 100%;
          justify-content: center;
        }
        .final-cta-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1.1rem 2rem;
          border-radius: 1rem;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 10px 30px rgba(30, 121, 247, 0.18);
          border: 2px solid #fff;
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          color: #fff;
          transition: all 0.2s;
          text-decoration: none;
          min-width: 180px;
          justify-content: center;
        }
        .final-cta-btn-prof {
          background: linear-gradient(135deg, #3B82F6, #1E40AF);
        }
        .final-cta-btn:hover {
          filter: brightness(1.08);
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 16px 40px rgba(30, 121, 247, 0.22);
        }
        .cta-btn-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .cta-btn-text span {
          font-size: 0.95rem;
          opacity: 0.85;
        }
        .cta-btn-text strong {
          font-size: 1.1rem;
          font-weight: bold;
        }
        .final-cta-image {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 480px;
        }
        .final-cta-img {
          max-width: 340px;
          width: 100%;
          height: auto;
          border-radius: 1.5rem;
          box-shadow: 0 12px 40px #0d6efd33;
          border: 10px solid rgba(255,255,255,0.10);
          transition: all 0.5s;
          animation: cta-img-anim 3.5s ease-in-out infinite;
        }
        .image-decoration-1,
        .image-decoration-2 {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.10);
          pointer-events: none;
          animation: float-slow 8s ease-in-out infinite;
        }
        .image-decoration-1 {
          width: 120px;
          height: 120px;
          top: -20px;
          right: -20px;
          animation-delay: 0s;
        }
        .image-decoration-2 {
          width: 80px;
          height: 80px;
          bottom: -16px;
          left: -16px;
          animation-delay: 2s;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes cta-img-anim {
          0% { transform: scale(1) rotateY(-15deg); filter: drop-shadow(0 0 0 #1E79F7); }
          50% { transform: scale(1.04) rotateY(-10deg); filter: drop-shadow(0 8px 24px #1E79F7aa); }
          100% { transform: scale(1) rotateY(-15deg); filter: drop-shadow(0 0 0 #1E79F7); }
        }
        /* Tablet */
        @media (max-width: 1024px) {
          .final-cta-container {
            flex-direction: column;
            gap: 2rem;
            padding: 0 1rem;
          }
          .final-cta-text {
            align-items: center;
            text-align: center;
            max-width: 100vw;
          }
          .final-cta-title {
            font-size: 2rem;
          }
          .final-cta-features {
            grid-template-columns: 1fr;
            gap: 1rem;
            margin-bottom: 1.5rem;
            position: relative;
            left: 22%;
          }
          .final-cta-image {
            margin-bottom: 2rem;
            max-width: 90vw;
          }
          .final-cta-img {
            max-width: 90vw;
          }
        }
        /* Mobile */
        @media (max-width: 600px) {
          .final-cta-title {
            font-size: 1.3rem;
          }
          .final-cta-subtitle {
            font-size: 1rem;
          }
          .final-cta-feature span {
            font-size: 0.95rem;
          }
          .final-cta-btn {
            padding: 1rem 1.2rem;
            font-size: 0.95rem;
            min-width: 120px;
          }
          .final-cta-img {
            max-width: 95vw;
          }
          .final-cta-features {
            grid-template-columns: 1fr;
            gap: 0.7rem;
            position: relative;
            left: 0%; 
          }
        }
      `}</style>
    </section>
  );
}