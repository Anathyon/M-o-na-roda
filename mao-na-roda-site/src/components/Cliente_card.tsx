export default function ClientCard() {
  return (
    <div className="client-card-section">
      {/* Decorative Bubbles are now positioned relative to the viewport */}
      <div className="client-card-bubble bubble-1"></div>
      <div className="client-card-bubble bubble-2"></div>
      <div className="client-card-bubble bubble-3"></div>

      <div className="client-card-main">
        <div className="client-card-content">
          <div className="client-card-left">
            <div className="client-badge">Para Clientes</div>
            <h3 className="client-title">Seguro e Confiável</h3>
            <p className="client-desc">
              Receba ajuda especializada para todos os reparos e projetos em sua
              casa. Garanta serviços de qualidade e um lar impecável.
            </p>
            <div className="client-card-actions">
              <a
                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR"
                className="client-btn"
              >
                <i className="fas fa-download"></i>
                <span>Baixar App Cliente</span>
              </a>
              <div className="client-app-note">
                📱 App exclusivo para quem precisa de serviços
              </div>
            </div>
          </div>
          <div className="client-card-right">
            <div className="client-feature-grid">
              <div className="client-feature-item">
                <div className="client-feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <span>Profissionais verificados</span>
              </div>
              <div className="client-feature-item">
                <div className="client-feature-icon">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <span>Preços transparentes</span>
              </div>
              <div className="client-feature-item">
                <div className="client-feature-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <span>Agendamento fácil</span>
              </div>
              <div className="client-feature-item">
                <div className="client-feature-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <span>Pagamento seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes floatBubble {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-25px) scale(1.05); }
          100% { transform: translateY(0) scale(1); }
        }
        .client-card-section {
          position: relative;
          top: 6rem;
          padding: 4rem 1rem;
        }
        .client-card-main {
          max-width: 1000px;
          margin: 0 auto;
          background: #fff;
          border-radius: 1.5rem;
          box-shadow: 0 16px 48px rgba(30, 121, 247, 0.15);
          position: relative;
          border: 1px solid #e9ecef;
          z-index: 2; /* Ensures card is above bubbles */
        }
        .client-card-bubble {
          position: fixed; /* Changed from absolute to fixed */
          background: linear-gradient(135deg, rgba(30, 121, 247, 0.08), rgba(13, 110, 253, 0.1));
          border-radius: 50%;
          z-index: -1; /* Places bubbles behind all content */
          pointer-events: none;
          animation: floatBubble 10s ease-in-out infinite;
        }
        .bubble-1 {
          width: 25vw;
          height: 25vw;
          max-width: 300px;
          max-height: 300px;
          top: 15vh;
          left: 5vw;
          animation-delay: 0s;
        }
        .bubble-2 {
          width: 20vw;
          height: 20vw;
          max-width: 250px;
          max-height: 250px;
          bottom: 10vh;
          right: 8vw;
          animation-delay: 3s;
        }
        .bubble-3 {
          width: 15vw;
          height: 15vw;
          max-width: 150px;
          max-height: 150px;
          top: 60vh;
          right: 25vw;
          animation-delay: 6s;
          display: none; /* Hiding the third bubble for a cleaner look, can be re-enabled */
        }
        .client-card-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          padding: 3rem;
          position: relative;
        }
        .client-card-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .client-badge {
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          color: #fff;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 20px rgba(30, 121, 247, 0.2);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-align: center;
        }
        .client-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #212529;
          margin-bottom: 1rem;
        }
        .client-desc {
          font-size: 1.1rem;
          color: #495057;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .client-card-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .client-btn {
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          color: #fff;
          padding: 1rem 1.8rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 10px 25px rgba(30, 121, 247, 0.2);
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          justify-content: center;
        }
        .client-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(30, 121, 247, 0.3);
        }
        .client-app-note {
          font-size: 0.9rem;
          color: #6C757D;
        }
        .client-card-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .client-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          width: 100%;
        }
        .client-feature-item {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 1rem;
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.8rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .client-feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(30, 121, 247, 0.1);
        }
        .client-feature-icon {
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          color: #fff;
          border-radius: 0.8rem;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }
        .client-feature-item span {
          color: #343a40;
          font-weight: 600;
          font-size: 0.95rem;
        }
        
        @media (max-width: 992px) {
          .client-card-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 2.5rem;
          }
          .client-card-left {
            text-align: center;
            align-items: center;
          }
        }

        @media (max-width: 576px) {
          .client-card-section {
            padding: 2rem 1rem;
            top: 4rem;
          }
          .client-card-content {
            padding: 2rem 1.5rem;
          }
          .client-title {
            font-size: 1.8rem;
          }
          .client-desc {
            font-size: 1rem;
          }
          .client-feature-grid {
            gap: 1rem;
          }
          .client-feature-item {
            padding: 1rem 0.5rem;
          }
          .bubble-1, .bubble-2, .bubble-3 {
            display: none; /* Hide bubbles on small screens for better readability */
          }
        }
      `}</style>
    </div>
  );
}