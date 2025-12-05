import { motion } from "framer-motion";

export default function Hero() {
  const services = [
    { icon: "fas fa-wrench", title: "Reparo Hidráulico", price: "R$ 90" },
    { icon: "fas fa-paint-roller", title: "Pintura", price: "R$ 120" },
    { icon: "fas fa-bolt", title: "Elétrica", price: "R$ 150" },
    { icon: "fas fa-hammer", title: "Marcenaria", price: "R$ 100" },
  ];

  return (
    <article id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
            >
              <i className="fas fa-shield-alt"></i>
              <span>Profissionais 100% Verificados e Qualificados</span>
            </motion.div>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            >
              Encontre ou ofereça serviços com facilidade{" "}
              <span className="hero-title-highlight">AGORA!</span>
            </motion.h1>
            <motion.p 
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
            >
              <strong className="text-brand">Mão na Roda</strong> conecta
              <span className="text-client"> clientes</span> que precisam de serviços domésticos com{" "}
              <span className="text-pro">profissionais</span> qualificados e verificados.
              <br />
              <span className="text-client">App Cliente:</span> Solicite serviços de forma rápida e segura.
              <br />
              <span className="text-pro">App Profissional:</span> Cadastre-se, receba oportunidades e aumente sua renda!
            </motion.p>
            <motion.div 
              className="hero-solution-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.25, ease: "easeOut" }}
            >
              <p>
                <strong>📱 Dois apps, duas soluções:</strong>
                <span className="text-client"> App Cliente</span> para quem busca serviços e
                <span className="text-pro"> App Profissional</span> para quem quer trabalhar!
              </p>
            </motion.div>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
            >
              <motion.a 
                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR" 
                className="hero-btn client"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download"></i>
                <span>App Cliente</span>
              </motion.a>
              <motion.a 
                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodaprofissional&hl=pt_BR" 
                className="hero-btn pro"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download"></i>
                <span>App Profissional</span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
          >
            <motion.div 
              className="phone-mockup"
              animate={{ 
                y: [0, -12, 0],
                rotate: [-8, -6, -8]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
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
                    {services.map((service, i) => (
                      <motion.div 
                        key={service.title} 
                        className="service-card"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.05, duration: 0.2, ease: "easeOut" }}
                      >
                        <div className="service-icon"><i className={service.icon}></i></div>
                        <div className="service-info">
                          <div className="service-title">{service.title}</div>
                          <div className="service-price">A partir de {service.price}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style>{`
        .hero-section {
          display: flex;
          align-items: center;
          min-height: 100vh;
          position: relative;
          top: 0;
          background: linear-gradient(135deg, #F8FAFF 0%, #E3F2FD 100%);
          background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%231E79F7" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          overflow: hidden;
          padding: 6rem 1rem 2rem 1rem;
        }
        .hero-container { 
          width: 100%; 
          max-width: 1400px; 
          margin: 0 auto; 
        }
        .hero-grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          align-items: center; 
          gap: 3rem;
        }
        .hero-text { 
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .hero-badge { 
          display: inline-flex; 
          align-items: center; 
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          font-weight: 600; 
          background: linear-gradient(135deg, #E8F5FF, #F0F8FF); 
          color: #1E79F7; 
          border-radius: 2rem; 
          border: 1px solid rgba(30,121,247,0.2); 
          box-shadow: 0 4px 15px rgba(30,121,247,0.1); 
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .hero-title { 
          font-size: 2rem; 
          font-weight: 900; 
          line-height: 1.2; 
          color: #212529;
          margin-bottom: 1rem;
        }
        .hero-title-highlight { 
          background: linear-gradient(135deg, #1E79F7, #0D6EFD); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text; 
        }
        .hero-desc { 
          font-size: 1rem; 
          color: #6C757D; 
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .text-brand { color: #1E79F7; font-weight: 700; }
        .text-client { color: #1E79F7; font-weight: 600; }
        .text-pro { 
          background-image: linear-gradient(to right, #1e3a8a, #3b82f6); 
          color: transparent; 
          background-clip: text; 
          -webkit-background-clip: text; 
          font-weight: 600; 
        }
        .hero-solution-box { 
          background: rgba(30, 121, 247, 0.1); 
          border-radius: 1rem; 
          border-left: 4px solid #1E79F7; 
          text-align: left;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        .hero-buttons { 
          display: flex; 
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }
        .hero-btn { 
          display: flex; 
          align-items: center; 
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 2rem; 
          font-weight: 700; 
          text-decoration: none; 
          transition: all 0.3s;
          min-width: 200px;
        }
        .hero-btn.client { 
          background: linear-gradient(135deg, #1E79F7, #0D6EFD); 
          color: #fff; 
          box-shadow: 0 8px 25px rgba(30, 121, 247, 0.3); 
        }
        .hero-btn.pro { 
          background: linear-gradient(135deg, #3B82F6, #1E40AF); 
          color: #fff; 
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3); 
        }
        .hero-visual { display: none; }

        .phone-mockup { 
          width: 12rem; 
          aspect-ratio: 9/19; 
          background: #051a36bd; 
          border-radius: 2rem; 
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.2); 
        }
        .phone-screen { 
          width: 100%; 
          height: 100%; 
          background: #fff; 
          border-radius: 1.5rem; 
          overflow: hidden; 
        }
        .app-interface { 
          display: flex; 
          flex-direction: column; 
          height: 100%; 
          background: #006dffbd; 
        }
        .app-header { 
          display: flex; 
          align-items: center; 
          gap: 0.75rem;
          padding: 1rem;
          border-bottom: 1px solid #eee; 
        }
        .app-icon { 
          width: 2.5rem; 
          height: 2.5rem; 
          background: #fff; 
          border-radius: 0.5rem; 
          border: 1px solid #1E79F7;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .app-icon img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover;
          border-radius: 0.25rem;
        }
        .app-header-text { 
          display: flex; 
          flex-direction: column;
          gap: 0.25rem;
        }
        .app-header-text strong { font-size: 0.9rem; color: #fff; }
        .app-header-text span { font-size: 0.7rem; }
        .app-services-list { 
          display: flex; 
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem;
        }
        .service-card { 
          display: flex; 
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: #dbdbdb; 
          border-radius: 0.5rem; 
        }
        .service-icon { 
          width: 2rem; 
          height: 2rem; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          background: #1E79F7; 
          color: #fff; 
          border-radius: 0.5rem; 
          font-size: 0.9rem;
          flex-shrink: 0;
        }
        .service-info { 
          flex: 1; 
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .service-title { 
          font-size: 0.8rem; 
          font-weight: 600; 
          color: #212529; 
          white-space: nowrap; 
          overflow: hidden; 
          text-overflow: ellipsis; 
        }
        .service-price { font-size: 0.7rem; color: #63696e; }

        @media (min-width: 768px) {
            .hero-section { padding: 8rem 2rem 3rem 2rem; }
            .hero-grid { 
              grid-template-columns: 1fr 1fr;
              gap: 4rem;
            }
            .hero-text { 
              text-align: left;
              align-items: flex-start;
            }
            .hero-title { font-size: 2.5rem; }
            .hero-desc { font-size: 1.1rem; }
            .hero-buttons { 
              flex-direction: row;
              justify-content: flex-start;
            }
            .hero-visual { 
              display: flex; 
              justify-content: center;
              padding: 2rem;
            }
        }
        @media (min-width: 992px) {
            .hero-title { font-size: 3rem; }
        }
        @media (min-width: 1200px) {
            .hero-title { font-size: 3.5rem; }
            .hero-desc { font-size: 1.2rem; }
            .phone-mockup { width: 14rem; }
        }
        @media (min-width: 1400px) {
            .phone-mockup { width: 15rem; }
        }
      `}</style>
    </article>
  );
}