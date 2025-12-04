import { motion } from "framer-motion";

const steps = [
  {
    icon: "fas fa-mobile-alt",
    number: 1,
    title: "Solicite o Serviço",
    desc: "Baixe o app e descreva o que você precisa. É rápido e totalmente gratuito!",
  },
  {
    icon: "fas fa-users",
    number: 2,
    title: "Receba Propostas",
    desc: "Profissionais qualificados entram em contato com você em instantes!",
  },
  {
    icon: "fas fa-thumbs-up",
    number: 3,
    title: "Escolha e Contrate",
    desc: "Compare preços, avaliações e escolha o melhor profissional para você!",
  },
];

export default function ComoFunciona() {
  return (
    <motion.section 
      id="como-funciona" 
      className="como-funciona-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="como-funciona-container">
        <motion.div 
          className="como-funciona-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div 
            className="como-funciona-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <i className="fas fa-cogs"></i>
            Como Funciona
          </motion.div>
          <motion.h2 
            className="como-funciona-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Simples, Rápido e Eficiente
          </motion.h2>
          <motion.p 
            className="como-funciona-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Encontre o profissional ideal em apenas 3 passos
          </motion.p>
        </motion.div>
        <div className="como-funciona-steps">
          {steps.map((step, i) => (
            <motion.div key={step.number} className="step-wrapper">
              <motion.div 
                className="como-funciona-step"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.6, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="como-funciona-step-icon"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.8, duration: 0.6, type: "spring" }}
                >
                  <i className={step.icon}></i>
                  <span className="como-funciona-step-number">{step.number}</span>
                </motion.div>
                <motion.div 
                  className="como-funciona-step-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 1, duration: 0.5 }}
                >
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div 
                  className="como-funciona-step-connector"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 1.2, duration: 0.8 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .como-funciona-section {
          background: linear-gradient(135deg, #fafbff 0%, #f8f9fa 50%, #fff 100%);
          position: relative;
          top: 6rem;
          padding: 5rem 0;
        }
        .como-funciona-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .como-funciona-header {
          text-align: center;
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .como-funciona-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-weight: 600;
          background: #fff;
          color: #1E79F7;
          border: 2px solid #e3eefd;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(30,121,247,0.08);
        }
        .como-funciona-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #212529;
          margin: 0;
        }
        .como-funciona-subtitle {
          font-size: 1.2rem;
          color: #6C757D;
          margin: 0;
        }
        .como-funciona-steps {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 2rem;
        }
        .step-wrapper {
          display: flex;
          align-items: center;
          flex: 1;
        }
        .como-funciona-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 280px;
          gap: 1.5rem;
        }
        .como-funciona-step-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #e8e8e8, #ddd);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #1E79F7;
          box-shadow: 0 4px 16px rgba(30,121,247,0.08);
          position: relative;
        }
        .como-funciona-step-number {
          position: absolute;
          bottom: -12px;
          right: -12px;
          background: #1E79F7;
          color: #fff;
          border-radius: 50%;
          width: 2rem;
          height: 2rem;
          font-size: 1.1rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #fff;
          box-shadow: 0 2px 8px rgba(30,121,247,0.12);
        }
        .como-funciona-step-card {
          background: #fff;
          border-radius: 1.2rem;
          box-shadow: 0 2px 12px rgba(30,121,247,0.07);
          border: 1px solid #e9ecef;
          width: 100%;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .como-funciona-step-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #212529;
          margin: 0;
        }
        .como-funciona-step-card p {
          color: #6C757D;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
        }
        .como-funciona-step-connector {
          flex-shrink: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #cddcff 0%, #a3baff 100%);
          border-radius: 2px;
          transform-origin: left;
        }
        
        @media (max-width: 992px) {
          .como-funciona-step-connector {
            width: 40px;
          }
        }

        @media (max-width: 767px) {
          .como-funciona-section { padding: 3rem 0; }
          .como-funciona-container { padding: 0 1rem; }
          .como-funciona-header { margin-bottom: 2.5rem; }
          .como-funciona-title {
            font-size: 2rem;
          }
          .como-funciona-subtitle {
            font-size: 1.1rem;
          }
          .como-funciona-steps {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }
          .step-wrapper {
            flex-direction: column;
            width: 100%;
          }
          .como-funciona-step {
            max-width: 400px;
          }
          .como-funciona-step-connector {
            width: 4px;
            height: 40px;
            transform-origin: top;
          }
        }
      `}</style>
    </motion.section>
  );
}