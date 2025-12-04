import { motion } from "framer-motion";

export default function AdvantagesSection() {
  return (
    <motion.section 
      id="sobre" 
      className="advantages-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="advantages-container">
        <motion.div 
          className="advantages-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.h2 
            className="advantages-title"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Uma plataforma, duas soluções
          </motion.h2>
          <motion.p 
            className="advantages-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Conectamos quem precisa com quem sabe fazer
          </motion.p>
        </motion.div>
      </div>
      <style>{`
        .advantages-section {
          background: #fff;
          border-radius: 1.5rem;
          position: relative;
          top: 6rem;
          max-width: 1140px;
          box-shadow: 0 4px 24px rgba(30, 120, 247, 0.459);
          padding: 4rem 2rem;
          margin: 3rem auto 0 auto;
        }
        .advantages-container {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .advantages-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }
        .advantages-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #212529;
          margin: 0;
        }
        .advantages-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          margin: 0;
        }

        @media (max-width: 992px) {
          .advantages-section {
            top: 4rem;
            padding: 3rem 1.5rem;
            margin: 2rem auto 0 auto;
          }
          .advantages-title {
            font-size: 2rem;
          }
          .advantages-subtitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 576px) {
          .advantages-section {
            padding: 2rem 1rem;
            margin: 4rem auto 0 auto;
          }
          .advantages-title {
            font-size: 1.5rem;
          }
          .advantages-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </motion.section>
  );
}