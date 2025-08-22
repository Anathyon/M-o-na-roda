export default function Hero() {
  return (
    <article id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-badge">
              <i className="fas fa-shield-alt"></i>
              <span>Profissionais 100% Verificados e Qualificados</span>
            </div>
            <h1 className="hero-title">
              Encontre ou ofereça serviços com facilidade{" "}
              <span className="hero-title-highlight">AGORA!</span>
            </h1>
            <p className="hero-desc">
              <strong className="text-brand">Mão na Roda</strong> conecta
              <span className="text-client"> clientes</span> que precisam de serviços domésticos com{" "}
              <span className="text-pro">profissionais</span> qualificados e verificados.
              <br />
              <span className="text-client">App Cliente:</span> Solicite serviços de forma rápida e segura.
              <br />
              <span className="text-pro">App Profissional:</span> Cadastre-se, receba oportunidades e aumente sua renda!
            </p>
            <div className="hero-solution-box">
              <p>
                <strong>📱 Dois apps, duas soluções:</strong>
                <span className="text-client"> App Cliente</span> para quem busca serviços e
                <span className="text-pro"> App Profissional</span> para quem quer trabalhar!
              </p>
            </div>
            <div className="hero-buttons">
              <a href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR" className="hero-btn client">
                <i className="fas fa-download"></i>
                <span>App Cliente</span>
              </a>
              <a href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodaprofissional&hl=pt_BR" className="hero-btn pro">
                <i className="fas fa-download"></i>
                <span>App Profissional</span>
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-interface">
                  <div className="app-header">
                    <div className="app-icon">
                      <img src="/Mao-na-roda-logo.jpg" alt="Mão na Roda" />
                    </div>
                    <div className="app-header-text">
                      <strong>Mão na Roda</strong>
                      <span className="text-white">Serviços para seu lar</span>
                    </div>
                  </div>
                  <div className="app-services-list">
                    {[
                      {
                        icon: "fas fa-wrench",
                        title: "Reparo Hidráulico",
                        price: "R$ 90"
                      },
                      {
                        icon: "fas fa-paint-roller",
                        title: "Pintura",
                        price: "R$ 120"
                      },
                      {
                        icon: "fas fa-bolt",
                        title: "Elétrica",
                        price: "R$ 150"
                      },
                      {
                        icon: "fas fa-hammer",
                        title: "Marcenaria",
                        price: "R$ 100"
                      },
                    ].map((service) => (
                      <div key={service.title} className="service-card">
                        <div className="service-icon"><i className={service.icon}></i></div>
                        <div className="service-info">
                          <div className="service-title">{service.title}</div>
                          <div className="service-price">A partir de {service.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes hero-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes hero-float { 0%, 100% { transform: translateY(0) rotate(-8deg); } 50% { transform: translateY(-12px) rotate(-8deg); } }

        .hero-section {
          display: flex;
          align-items: center;
          min-height: 100vh;
          padding: 8rem 0 4rem 0;
          position: relative;
          top: 0;
          background: linear-gradient(135deg, #F8FAFF 0%, #E3F2FD 100%);
          background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%231E79F7" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          overflow: hidden;
        }
        .hero-container { width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 1rem; }
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
        .hero-text { text-align: center; }
        .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-weight: 600; background: linear-gradient(135deg, #E8F5FF, #F0F8FF); color: #1E79F7; padding: 0.7rem 1.2rem; border-radius: 2rem; border: 1px solid rgba(30,121,247,0.2); box-shadow: 0 4px 15px rgba(30,121,247,0.1); font-size: 0.9rem; }
        .hero-title { font-size: 2rem; font-weight: 900; margin-bottom: 1rem; line-height: 1.2; color: #212529; }
        .hero-title-highlight { background: linear-gradient(135deg, #1E79F7, #0D6EFD); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-desc { font-size: 1rem; color: #6C757D; line-height: 1.6; margin: 1.5rem 0; }
        .text-brand { color: #1E79F7; font-weight: 700; }
        .text-client { color: #1E79F7; font-weight: 600; }
        .text-pro { background-image: linear-gradient(to right, #1e3a8a, #3b82f6); color: transparent; background-clip: text; -webkit-background-clip: text; font-weight: 600; }
        .hero-solution-box { background: rgba(30, 121, 247, 0.1); padding: 1rem; border-radius: 1rem; border-left: 4px solid #1E79F7; margin-bottom: 2rem; text-align: left; }
        .hero-buttons { display: flex; flex-direction: column; gap: 1rem; }
        .hero-btn { display: flex; align-items: center; justify-content: center; gap: 0.7rem; padding: 1rem 1.5rem; border-radius: 2rem; font-weight: 700; text-decoration: none; transition: all 0.3s; }
        .hero-btn.client { background: linear-gradient(135deg, #1E79F7, #0D6EFD); color: #fff; box-shadow: 0 8px 25px rgba(30, 121, 247, 0.3); animation: hero-bounce 2.5s infinite; }
        .hero-btn.pro { background: linear-gradient(135deg, #3B82F6, #1E40AF); color: #fff; box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3); }
        .hero-btn:hover { transform: translateY(-4px); filter: brightness(1.1); }
        .hero-visual { display: none; }

        /* Phone Mockup */
        .phone-mockup { width: 12rem; aspect-ratio: 9/19; background: #051a36bd; border-radius: 2rem; padding: 0.7rem; box-shadow: 0 1rem 3rem rgba(0,0,0,0.2); animation: hero-float 6s ease-in-out infinite; }
        .phone-screen { width: 100%; height: 100%; background: #fff; border-radius: 1.5rem; overflow: hidden; }
        .app-interface { display: flex; flex-direction: column; height: 100%; padding: 0.5rem; gap: 0.5rem; background: #006dffbd; }
        .app-header { display: flex; align-items: center; gap: 0.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid #eee; }
        .app-icon { width: 2.5rem; height: 2.5rem; background: #fff; border-radius: 1.5rem; padding: 0.2rem; border: 1px solid #1E79F7; }
        .app-icon img { width: 100%; height: 100%; object-fit: contain;padding: 0.2rem; }
        .app-header-text { display: flex; flex-direction: column; }
        .app-header-text strong { font-size: 0.9rem; color: #fff;}
        .app-header-text span { font-size: 0.7rem;}
        .app-services-list { display: flex; flex-direction: column; gap: 0.5rem; }
        .service-card { display: flex; align-items: center; gap: 0.7rem; background: #dbdbdb; border-radius: 0.5rem; padding: 0.5rem; }
        .service-icon { width: 2rem; height: 2rem; display: flex; align-items: center; justify-content: center; background: #1E79F7; color: #fff; border-radius: 0.5rem; font-size: 0.9rem; }
        .service-info { flex: 1; min-width: 0; }
        .service-title { font-size: 0.8rem; font-weight: 600; color: #212529; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .service-price { font-size: 0.7rem; color: #63696e; }

        /* Tablet (md) */
        @media (min-width: 768px) {
            .hero-container { padding: 0 2rem; }
            .hero-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
            .hero-text { text-align: left; }
            .hero-title { font-size: 2.5rem; }
            .hero-desc { font-size: 1.1rem; }
            .hero-buttons { flex-direction: row; }
            .hero-visual { display: flex; justify-content: center; }
        }
        /* Desktop (lg) */
        @media (min-width: 992px) {
            .hero-title { font-size: 3rem; }
            .hero-grid { gap: 3rem; }
        }
        /* Desktop (xl) */
        @media (min-width: 1200px) {
            .hero-container { padding: 0 3rem; }
            .hero-title { font-size: 3.5rem; }
            .hero-desc { font-size: 1.2rem; }
            .phone-mockup { width: 14rem; }
        }
        /* Desktop (xxl) */
        @media (min-width: 1400px) {
            .hero-grid { gap: 5rem; }
            .phone-mockup { width: 15rem; }
        }
      `}</style>
    </article>
  );
}