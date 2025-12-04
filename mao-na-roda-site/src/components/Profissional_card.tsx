import { motion } from "framer-motion";

export default function ProfissionalCard() {
  const features = [
    { icon: "fas fa-map-marker-alt", text: "Clientes próximos a você" },
    { icon: "fas fa-clock", text: "Controle total da agenda" },
    { icon: "fas fa-hand-holding-usd", text: "Recebimento garantido" },
    { icon: "fas fa-thumbs-up", text: "Avaliações dos clientes" },
  ];

  return (
    <motion.div 
      className="prof-card-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="prof-card-main"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="prof-card-content">
          <motion.div 
            className="prof-card-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div 
              className="prof-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Para Profissionais
            </motion.div>
            <motion.h3 
              className="prof-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Mais Oportunidades
            </motion.h3>
            <motion.p 
              className="prof-desc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Aumente sua renda e conquiste novos clientes. Defina sua agenda,
              mostre seu talento e destaque-se em sua área.
            </motion.p>
            <motion.div 
              className="prof-card-actions"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodaprofissional&hl=pt_BR"
                className="prof-btn"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download"></i>
                <span>Baixar App Profissional</span>
              </motion.a>
              <motion.div 
                className="prof-app-note"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                🛠️ App exclusivo para prestadores de serviços
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="prof-card-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="prof-feature-grid">
              {features.map((feature, i) => (
                <motion.div 
                  key={feature.text}
                  className="prof-feature-item"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <motion.div 
                    className="prof-feature-icon"
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
        .prof-card-section {
          position: relative;
          top: 6rem;
          padding: 3rem 0;
        }
        .prof-card-main {
          max-width: 1000px;
          margin: 0 auto;
          background: #fff;
          border-radius: 1.5rem;
          box-shadow: 0 16px 48px rgba(30, 120, 247, 0.616);
          overflow: hidden;
          position: relative;
          border: 1px solid #e2e8f0;
        }
        .prof-card-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          padding: 3rem;
        }
        .prof-card-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
        }
        .prof-badge {
          background: linear-gradient(135deg, #3B82F6, #1D4ED8);
          color: #fff;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.2);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 0.75rem 1.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .prof-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0;
        }
        .prof-desc {
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }
        .prof-card-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .prof-btn {
          background: linear-gradient(135deg, #3B82F6, #1D4ED8);
          color: #fff;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          gap: 0.75rem;
          padding: 1rem 2rem;
          justify-content: center;
        }
        .prof-app-note {
          font-size: 0.9rem;
          color: #64748b;
          margin: 0;
        }
        .prof-card-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .prof-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          gap: 1rem;
        }
        .prof-feature-item {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          padding: 1.5rem 1rem;
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
          margin: 0;
        }
        
        @media (max-width: 992px) {
          .prof-card-content {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
          .prof-card-left {
            text-align: center;
            align-items: center;
          }
        }

        @media (max-width: 576px) {
          .prof-card-section {
            top: 4rem;
            padding: 2rem 0;
          }
          .prof-card-content {
            padding: 1.5rem;
          }
          .prof-title {
            font-size: 1.8rem;
          }
          .prof-desc {
            font-size: 1rem;
          }
        }
      `}</style>
    </motion.div>
  );
}