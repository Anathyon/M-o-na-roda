import { motion } from "framer-motion";

export default function ClientCard() {
  const features = [
    { icon: "fas fa-check-circle", text: "Profissionais verificados" },
    { icon: "fas fa-dollar-sign", text: "Preços transparentes" },
    { icon: "fas fa-calendar-check", text: "Agendamento fácil" },
    { icon: "fas fa-lock", text: "Pagamento seguro" },
  ];

  return (
    <motion.div 
      className="client-card-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="client-card-bubble bubble-1"
        animate={{ 
          y: [0, -25, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="client-card-bubble bubble-2"
        animate={{ 
          y: [0, -25, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      <motion.div 
        className="client-card-main"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="client-card-content">
          <motion.div 
            className="client-card-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div 
              className="client-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Para Clientes
            </motion.div>
            <motion.h3 
              className="client-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Seguro e Confiável
            </motion.h3>
            <motion.p 
              className="client-desc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Receba ajuda especializada para todos os reparos e projetos em sua
              casa. Garanta serviços de qualidade e um lar impecável.
            </motion.p>
            <motion.div 
              className="client-card-actions"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR"
                className="client-btn"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download"></i>
                <span>Baixar App Cliente</span>
              </motion.a>
              <motion.div 
                className="client-app-note"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                📱 App exclusivo para quem precisa de serviços
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="client-card-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="client-feature-grid">
              {features.map((feature, i) => (
                <motion.div 
                  key={feature.text}
                  className="client-feature-item"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <motion.div 
                    className="client-feature-icon"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.6, type: "spring" }}
                  >
                    <i className={feature.icon}></i>
                  </motion.div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <style>{`
        .client-card-section {
          position: relative;
          top: 6rem;
          padding: 3rem 0;
        }
        .client-card-main {
          max-width: 1000px;
          margin: 0 auto;
          background: #fff;
          border-radius: 1.5rem;
          box-shadow: 0 16px 48px rgba(30, 120, 247, 0.616);
          position: relative;
          border: 1px solid #e9ecef;
          z-index: 2;
        }
        .client-card-bubble {
          position: fixed;
          background: linear-gradient(135deg, rgba(30, 121, 247, 0.08), rgba(13, 110, 253, 0.1));
          border-radius: 50%;
          z-index: -1;
          pointer-events: none;
        }
        .bubble-1 {
          width: 25vw;
          height: 25vw;
          max-width: 300px;
          max-height: 300px;
          top: 15vh;
          left: 5vw;
        }
        .bubble-2 {
          width: 20vw;
          height: 20vw;
          max-width: 250px;
          max-height: 250px;
          bottom: 10vh;
          right: 8vw;
        }
        .client-card-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          gap: 3rem;
          padding: 3rem;
        }
        .client-card-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
        }
        .client-badge {
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          color: #fff;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 8px 20px rgba(30, 121, 247, 0.2);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-align: center;
          padding: 0.75rem 1.5rem;
          display: inline-block;
        }
        .client-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #212529;
          margin: 0;
        }
        .client-desc {
          font-size: 1.1rem;
          color: #495057;
          line-height: 1.6;
          margin: 0;
        }
        .client-card-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .client-btn {
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          color: #fff;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 10px 25px rgba(30, 121, 247, 0.2);
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
        }
        .client-app-note {
          font-size: 0.9rem;
          color: #6C757D;
          margin: 0;
        }
        .client-card-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .client-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          gap: 1rem;
        }
        .client-feature-item {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          padding: 1.5rem 1rem;
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
          margin: 0;
        }
        
        @media (max-width: 992px) {
          .client-card-content {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
          .client-card-left {
            text-align: center;
            align-items: center;
          }
        }

        @media (max-width: 576px) {
          .client-card-section {
            top: 4rem;
            padding: 2rem 0;
          }
          .client-card-content {
            padding: 1.5rem;
          }
          .client-title {
            font-size: 1.8rem;
          }
          .client-desc {
            font-size: 1rem;
          }
          .bubble-1, .bubble-2 {
            display: none;
          }
        }
      `}</style>
    </motion.div>
  );
}