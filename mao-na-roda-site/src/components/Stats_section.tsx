import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    icon: "fas fa-users",
    number: 30,
    label: "Clientes Atendidos",
    subtitle: "Famílias em todo o Brasil",
    suffix: "K+",
  },
  {
    icon: "fas fa-user-check",
    number: 10,
    label: "Profissionais",
    subtitle: "Com antecedentes e referências verificadas",
    suffix: "K+",
  },
  {
    icon: "fas fa-shield-alt",
    number: 98,
    label: "Satisfação",
    subtitle: "Avaliação 4.8/5 em plataformas",
    suffix: "%",
  },
  {
    icon: "fas fa-clock",
    number: 15,
    label: "Minutos",
    subtitle: "Tempo médio para encontrar um profissional",
    suffix: "",
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      ref={ref} 
      className="stats-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="stats-container">
        <motion.div 
          className="stats-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="stats-title">
            Números que <span className="stats-title-highlight">Impressionam</span>
          </h2>
          <p className="stats-subtitle">Nossa comunidade não para de crescer. Veja nossos resultados.</p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label} 
              className="stats-card"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.4, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div 
                className="stats-icon"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.6, duration: 0.5, type: "spring" }}
              >
                <i className={stat.icon}></i>
              </motion.div>
              <div className="stats-content">
                <motion.div 
                  className="stats-number"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.8, duration: 0.5 }}
                >
                  {isInView && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    >
                      {stat.number}{stat.suffix}
                    </motion.span>
                  )}
                </motion.div>
                <motion.h3 
                  className="stats-label"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 1, duration: 0.4 }}
                >
                  {stat.label}
                </motion.h3>
                <motion.p 
                  className="stats-card-subtitle"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 1.2, duration: 0.4 }}
                >
                  {stat.subtitle}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .stats-section {
          position: relative;
          top: 6rem;
          background: #f8f9fa;
          overflow: hidden;
          padding: 5rem 0;
        }
        .stats-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .stats-header {
          text-align: center;
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .stats-title {
          font-size: 2.2rem;
          font-weight: 900;
          color: #212529;
          margin: 0;
        }
        .stats-title-highlight {
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stats-subtitle {
          font-size: 1.1rem;
          color: #6C757D;
          max-width: 600px;
          margin: 0 auto;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .stats-card {
          background: #fff;
          border-radius: 1.25rem;
          box-shadow: 0 1rem 2.5rem rgba(30, 121, 247, 0.08);
          border: 1px solid #e9ecef;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          padding: 2.5rem 1.5rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .stats-icon {
          width: 5rem;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          border-radius: 50%;
          font-size: 2rem;
          color: #fff;
          box-shadow: 0 0.5rem 1.5rem rgba(30, 121, 247, 0.25);
        }
        .stats-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .stats-number {
          font-size: 3rem;
          font-weight: 900;
          color: #2d5ed0;
          margin: 0;
        }
        .stats-label {
          font-size: 1.2rem;
          font-weight: 700;
          color: #343a40;
          margin: 0;
        }
        .stats-card-subtitle {
          font-size: 0.95rem;
          color: #6C757D;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 576px) {
          .stats-section { padding: 3rem 0; }
          .stats-container { padding: 0 1rem; }
          .stats-header { margin-bottom: 2.5rem; }
          .stats-card { padding: 2rem 1rem; }
        }

        @media (min-width: 576px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .stats-title { font-size: 2.5rem; }
        }

        @media (min-width: 992px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .stats-number { font-size: 3.5rem; }
        }

        @media (min-width: 1200px) {
          .stats-title { font-size: 2.8rem; }
          .stats-icon { width: 5.5rem; height: 5.5rem; font-size: 2.2rem; }
          .stats-number { font-size: 4rem; }
        }
      `}</style>
    </motion.section>
  );
}