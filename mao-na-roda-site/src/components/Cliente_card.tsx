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
    <div className="client-card-main">
      {/* Floating icons */}
      <div className="client-card-bg">
        <div className="floating-elements">
          <div className="floating-icon client-logo">
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
          <div className="floating-icon"><i className="fas fa-tools"></i></div>
          <div className="floating-icon"><i className="fas fa-star"></i></div>
          <div className="floating-icon"><i className="fas fa-user"></i></div>
        </div>
      </div>
      <div className="client-card-content">
        <div className="client-card-left">
          <div className="client-badge">Para Clientes</div>
          <h3 className="client-title">Seguro e Confiável</h3>
          <p className="client-desc">
            Receba ajuda especializada para todos os reparos e projetos em sua casa. Garanta serviços de qualidade e um lar impecável.
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
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .client-card-main {
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
        .client-card-bg {
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
          color: #1E79F7;
          font-size: 1.2rem;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
        }
        .client-logo { top: 20%; left: 10%; }
        .floating-icon:nth-child(2) { top: 60%; left: 85%; }
        .floating-icon:nth-child(3) { top: 30%; left: 80%; }
        .floating-icon:nth-child(4) { top: 80%; left: 15%; }
        .client-card-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          padding: 2.5rem 2rem;
          position: relative;
          z-index: 2;
        }
        .client-card-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .client-badge {
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          color: #fff;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 2rem;
          box-shadow: 0 8px 25px rgba(30, 121, 247, 0.18);
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
        }
        .client-title {
          font-size: 2rem;
          font-weight: 800;
          color: #212529;
          margin-bottom: 1rem;
        }
        .client-desc {
          font-size: 1.15rem;
          color: #6C757D;
          margin-bottom: 2rem;
        }
        .client-card-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          align-items: flex-start;
        }
        .client-btn {
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          color: #fff;
          padding: 1.2rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 10px 30px rgba(30, 121, 247, 0.18);
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          justify-content: center;
          text-decoration: none;
          transition: background 0.2s;
        }
        .client-btn:hover {
          background: linear-gradient(135deg, #0D6EFD, #1E79F7);
        }
        .client-app-note {
          font-size: 0.95rem;
          color: #6C757D;
          opacity: 0.85;
        }
        .client-card-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .client-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
          width: 100%;
        }
        .client-feature-item {
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
        .client-feature-icon {
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
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
        .client-feature-item span {
          color: #212529;
          font-weight: 600;
          font-size: 1rem;
          text-align: center;
        }
        /* Tablet */
        @media (max-width: 1024px) {
          .client-card-main {
            max-width: 98vw;
            border-radius: 1.5rem;
            margin: 2rem auto 2rem auto;
          }
          .client-card-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 1rem;
          }
          .client-card-right {
            margin-top: 1.5rem;
          }
        }
        /* Mobile */
        @media (max-width: 600px) {
          .client-card-main {
            max-width: 99vw;
            border-radius: 1.1rem;
            margin: 1rem auto 1.5rem auto;
            top: 3rem;
          }
          .client-card-content {
            grid-template-columns: 1fr;
            gap: 1.2rem;
            padding: 1.2rem 0.5rem;
          }
          .client-title {
            font-size: 1.3rem;
          }
          .client-desc {
            font-size: 1rem;
          }
          .client-feature-grid {
            gap: 0.7rem;
          }
          .client-feature-item {
            padding: 0.8rem 0.3rem;
            min-width: 0;
          }
          .client-feature-icon {
            width: 32px;
            height: 32px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}