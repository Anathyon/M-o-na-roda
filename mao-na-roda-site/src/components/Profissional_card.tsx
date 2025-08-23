export default function ProfissionalCard() {
  return (
    <div className="prof-card-section">
      <div className="prof-card-main">
        <div className="prof-card-content">
          <div className="prof-card-left">
            <div className="prof-badge">Para Profissionais</div>
            <h3 className="prof-title">Mais Oportunidades</h3>
            <p className="prof-desc">
              Aumente sua renda e conquiste novos clientes. Defina sua agenda,
              mostre seu talento e destaque-se em sua área.
            </p>
            <div className="prof-card-actions">
              <a
                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodaprofissional&hl=pt_BR"
                className="prof-btn"
              >
                <i className="fas fa-download"></i>
                <span>Baixar App Profissional</span>
              </a>
              <div className="prof-app-note">
                🛠️ App exclusivo para prestadores de serviços
              </div>
            </div>
          </div>
          <div className="prof-card-right">
            <div className="prof-feature-grid">
              <div className="prof-feature-item">
                <div className="prof-feature-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span>Clientes próximos a você</span>
              </div>
              <div className="prof-feature-item">
                <div className="prof-feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <span>Controle total da agenda</span>
              </div>
              <div className="prof-feature-item">
                <div className="prof-feature-icon">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <span>Recebimento garantido</span>
              </div>
              <div className="prof-feature-item">
                <div className="prof-feature-icon">
                  <i className="fas fa-thumbs-up"></i>
                </div>
                <span>Avaliações dos clientes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .prof-card-section {
          position: relative;
          top: 6rem;
          padding: 4rem 1rem;
        }
        .prof-card-main {
          max-width: 1000px;
          margin: 0 auto;
          background: #fff;
          border-radius: 1.5rem;
          box-shadow: 0 16px 48px rgba(59, 130, 246, 0.15);
          overflow: hidden;
          position: relative;
          border: 1px solid #e2e8f0;
        }
        .prof-card-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          padding: 3rem;
        }
        .prof-card-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .prof-badge {
          background: linear-gradient(135deg, #3B82F6, #1D4ED8);
          color: #fff;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.2);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .prof-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        .prof-desc {
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .prof-card-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .prof-btn {
          background: linear-gradient(135deg, #3B82F6, #1D4ED8);
          color: #fff;
          padding: 1rem 1.8rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .prof-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(59, 130, 246, 0.3);
        }
        .prof-app-note {
          font-size: 0.9rem;
          color: #64748b;
        }
        .prof-card-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .prof-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          width: 100%;
        }
        .prof-feature-item {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 1rem;
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.8rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .prof-feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.1);
        }
        .prof-feature-icon {
          background: linear-gradient(135deg, #3B82F6, #1D4ED8);
          color: #fff;
          border-radius: 0.8rem;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }
        .prof-feature-item span {
          color: #334155;
          font-weight: 600;
          font-size: 0.95rem;
        }
        
        @media (max-width: 992px) {
          .prof-card-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 2.5rem;
          }
          .prof-card-left {
            text-align: center;
            align-items: center;
          }
        }

        @media (max-width: 576px) {
          .prof-card-section {
            padding: 2rem 1rem;
            top: 4rem;
          }
          .prof-card-content {
            padding: 2rem 1.5rem;
          }
          .prof-title {
            font-size: 1.8rem;
          }
          .prof-desc {
            font-size: 1rem;
          }
          .prof-feature-grid {
            gap: 1rem;
          }
          .prof-feature-item {
            padding: 1rem 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}