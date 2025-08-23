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
        <div className="final-cta-bg-pattern" />
        <div className="final-cta-container">
          {/* Text */}
          <div className="final-cta-text">
            <h2 className="final-cta-title">Duas soluções em um só lugar</h2>
            <p className="final-cta-subtitle">
              App Cliente: encontre profissionais qualificados para seu lar
              <br />
              App Profissional: aumente sua renda prestando serviços
            </p>
            <div className="final-cta-features">
              <div className="final-cta-feature">
                <i className="fas fa-users"></i>
                <span>Para Clientes: Profissionais verificados</span>
              </div>
              <div className="final-cta-feature">
                <i className="fas fa-briefcase"></i>
                <span>Para Profissionais: Mais oportunidades</span>
              </div>
              <div className="final-cta-feature">
                <i className="fas fa-lock"></i>
                <span>Pagamento seguro e garantido</span>
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
        }
        .final-cta-top-wave {
          width: 100%;
          line-height: 0;
          position: relative;
          top: 1px; /* Prevents anti-aliasing gap */
        }
        .final-cta-content {
          background: #1E79F7;
          position: relative;
          overflow: hidden;
          padding: 4rem 0 5rem 0;
        }
        .final-cta-bg-pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="1.5" fill="%23ffffff" opacity="0.1"/><circle cx="50" cy="50" r="1.5" fill="%23ffffff" opacity="0.1"/><circle cx="90" cy="90" r="1.5" fill="%23ffffff" opacity="0.1"/></svg>') repeat;
        }
        .final-cta-container {
          max-width: 1140px;
          width: 100%;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          position: relative;
          z-index: 2;
        }
        .final-cta-text {
          flex: 1;
          max-width: 550px;
          color: #fff;
        }
        .final-cta-title {
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
          font-size: 2.5rem;
          color: #fff;
        }
        .final-cta-subtitle {
          color: #e0f2fe;
          margin-bottom: 2rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }
        .final-cta-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem 1.5rem;
          margin-bottom: 2.5rem;
        }
        .final-cta-feature {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1rem;
          color: #fff;
        }
        .final-cta-feature i {
          font-size: 1.2rem;
          color: #fff;
          width: 20px;
          text-align: center;
        }
        .final-cta-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .final-cta-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 700;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .final-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .final-cta-btn-client {
          background: transparent;
          color: #fff;
          border-color: rgba(255, 255, 255, 0.8);
        }
        .final-cta-btn-client .cta-btn-text strong,
        .final-cta-btn-client .cta-btn-text span,
        .final-cta-btn-client i {
          color: #fff;
        }
        .final-cta-btn-client:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #fff;
        }
        .final-cta-btn-prof {
          background: linear-gradient(135deg, #3B82F6, #1D4ED8);
          color: #fff;
          border-color: #3B82F6;
        }
        .final-cta-btn-prof:hover {
          background: linear-gradient(135deg, #2563EB, #1E3A8A);
        }
        .cta-btn-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.2;
        }
        .cta-btn-text span {
          font-size: 0.8rem;
          font-weight: 500;
          opacity: 0.9;
          color: #fff;
        }
        .cta-btn-text strong {
          font-size: 1rem;
          color: #fff;
        }
        .final-cta-image {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 450px;
        }
        .final-cta-img {
          width: 100%;
          max-width: 320px;
          height: auto;
          border-radius: 1.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
          border: 8px solid rgba(255,255,255,0.1);
          animation: float-slow 4s ease-in-out infinite;
        }
        .image-decoration-1,
        .image-decoration-2 {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
          animation: float-slow 8s ease-in-out infinite;
        }
        .image-decoration-1 {
          width: 100px;
          height: 100px;
          top: -10%;
          right: -10%;
          animation-delay: 0s;
        }
        .image-decoration-2 {
          width: 70px;
          height: 70px;
          bottom: -5%;
          left: -5%;
          animation-delay: 2s;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @media (max-width: 992px) {
          .final-cta-container {
            flex-direction: column;
            text-align: center;
            gap: 3rem;
          }
          .final-cta-text {
            align-items: center;
          }
          .final-cta-title {
            font-size: 2.25rem;
          }
          .final-cta-features {
            justify-content: center;
          }
          .final-cta-buttons {
            justify-content: center;
          }
          .final-cta-image {
            margin-top: 1rem;
          }
        }

        @media (max-width: 576px) {
          .final-cta-content {
            padding: 3rem 0;
          }
          .final-cta-title {
            font-size: 1.8rem;
          }
          .final-cta-subtitle {
            font-size: 1rem;
          }
          .final-cta-features {
            grid-template-columns: 1fr;
            gap: 1rem;
            width: 100%;
            max-width: 300px; /* Ensures single column items don't stretch too wide */
          }
          .final-cta-feature {
            justify-content: flex-start; /* Aligns items to the left within the centered container */
          }
          .final-cta-buttons {
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .final-cta-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}