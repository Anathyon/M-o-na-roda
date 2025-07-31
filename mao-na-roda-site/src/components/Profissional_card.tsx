import { useEffect } from "react";

export default function ProfissionalCard() {
  useEffect(() => {
    const icons = document.querySelectorAll(".floating-icon");
    icons.forEach((icon, idx) => {
      (icon as HTMLElement).style.animation = `floatY 3s ease-in-out infinite`;
      (icon as HTMLElement).style.animationDelay = `${idx * 0.7 + 0.5}s`;
    });
  }, []);

  return (
    <div className="prof-card-main">
      {/* Floating icons */}
      <div className="prof-card-bg">
        <div className="floating-elements">
          <div className="floating-icon prof-float1">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="floating-icon prof-float2">
            <i className="fas fa-money-bill-wave"></i>
          </div>
          <div className="floating-icon prof-float3">
            <i className="fas fa-briefcase"></i>
          </div>
        </div>
      </div>
      <div className="prof-card-content">
        <div className="prof-card-left">
          <div className="prof-badge">Para Profissionais</div>
          <h3 className="prof-title">Mais Oportunidades</h3>
          <p className="prof-desc">
            Aumente sua renda e conquiste novos clientes. Defina sua agenda, mostre seu talento e destaque-se em sua área.
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
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .prof-card-main {
          max-width: 1000px;
          margin: 4rem auto 4rem auto;
          background: #fff;
          border-radius: 2rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.10);
          overflow: hidden;
          position: relative;
          top: 6rem;
          transition: all 0.4s;
        }
        .prof-card-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .floating-elements {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .floating-icon {
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3B82F6;
          font-size: 1.2rem;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
        }
        .prof-float1 { top: 22%; left: 10%; }
        .prof-float2 { top: 60%; left: 85%; }
        .prof-float3 { top: 30%; left: 80%; }
        .prof-card-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          padding: 2.5rem 2rem;
          position: relative;
          z-index: 2;
        }
        .prof-card-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .prof-badge {
          background: linear-gradient(135deg, #3B82F6, #1E40AF);
          color: #fff;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 2rem;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.18);
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
        }
        .prof-title {
          font-size: 2rem;
          font-weight: 800;
          color: #212529;
          margin-bottom: 1rem;
        }
        .prof-desc {
          font-size: 1.15rem;
          color: #6C757D;
          margin-bottom: 2rem;
        }
        .prof-card-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          align-items: flex-start;
        }
        .prof-btn {
          background: linear-gradient(135deg, #3B82F6, #1E40AF);
          color: #fff;
          padding: 1.2rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.18);
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          justify-content: center;
          text-decoration: none;
          transition: background 0.2s;
        }
        .prof-btn:hover {
          background: linear-gradient(135deg, #1E40AF, #3B82F6);
        }
        .prof-app-note {
          font-size: 0.95rem;
          color: #6C757D;
          opacity: 0.85;
        }
        .prof-card-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .prof-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
          width: 100%;
        }
        .prof-feature-item {
          background: #fff;
          border: 1.5px solid #e3eefd;
          border-radius: 1.2rem;
          box-shadow: 0 2px 12px rgba(30,121,247,0.07);
          padding: 1.2rem 0.7rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.7rem;
          min-width: 120px;
        }
        .prof-feature-icon {
          background: linear-gradient(135deg, #3B82F6, #1E40AF);
          color: #fff;
          border-radius: 0.7rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 0.3rem;
        }
        .prof-feature-item span {
          color: #212529;
          font-weight: 600;
          font-size: 1rem;
          text-align: center;
        }
        /* Tablet */
        @media (max-width: 1024px) {
          .prof-card-main {
            max-width: 98vw;
            border-radius: 1.5rem;
            margin: 2rem auto 2rem auto;
          }
          .prof-card-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 1rem;
          }
          .prof-card-right {
            margin-top: 1.5rem;
          }
        }
        /* Mobile */
        @media (max-width: 600px) {
          .prof-card-main {
            max-width: 99vw;
            border-radius: 1.1rem;
            margin: 1rem auto 1.5rem auto;
            top: 3rem;
          }
          .prof-card-content {
            grid-template-columns: 1fr;
            gap: 1.2rem;
            padding: 1.2rem 0.5rem;
          }
          .prof-title {
            font-size: 1.3rem;
          }
          .prof-desc {
            font-size: 1rem;
          }
          .prof-feature-grid {
            gap: 0.7rem;
          }
          .prof-feature-item {
            padding: 0.8rem 0.3rem;
            min-width: 0;
          }
          .prof-feature-icon {
            width: 32px;
            height: 32px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}