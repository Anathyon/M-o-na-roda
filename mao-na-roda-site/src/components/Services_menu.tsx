import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Service = {
  icon: string;
  title: string;
  desc: string;
  category: string;
  color: string;
  gradient: string;
  services: string[];
};

const services: Service[] = [
  {
    icon: "fas fa-bolt",
    title: "Elétrica",
    desc: "Instalações e reparos elétricos",
    category: "eletrica",
    color: "#FFD600",
    gradient: "linear-gradient(135deg, #FFD600 0%, #FFFDE7 100%)",
    services: [
      "Instalação de tomadas e interruptores",
      "Troca de disjuntores e fusíveis",
      "Instalação de ventiladores de teto",
      "Reparo em circuitos elétricos",
      "Instalação de lustres e luminárias",
      "Quadros elétricos residenciais",
    ],
  },
  {
    icon: "fas fa-wrench",
    title: "Hidráulica",
    desc: "Encanamento e sistemas hidráulicos",
    category: "hidraulica",
    color: "#1E79F7",
    gradient: "linear-gradient(135deg, #1E79F7 0%, #E3F2FD 100%)",
    services: [
      "Desentupimento de pias e vasos",
      "Reparo de vazamentos",
      "Instalação de torneiras e registros",
      "Troca de tubulações",
      "Instalação de chuveiros elétricos",
      "Manutenção de caixas d'água",
    ],
  },
  {
    icon: "fas fa-snowflake",
    title: "Refrigeração",
    desc: "Ar condicionado e refrigeradores",
    category: "refrigeracao",
    color: "#00BFFF",
    gradient: "linear-gradient(135deg, #00BFFF 0%, #E0F7FA 100%)",
    services: [
      "Instalação de ar condicionado",
      "Manutenção preventiva",
      "Reparo de geladeiras e freezers",
      "Limpeza de evaporadores",
      "Recarga de gás refrigerante",
      "Instalação de split e janela",
    ],
  },
  {
    icon: "fas fa-hammer",
    title: "Marcenaria",
    desc: "Móveis sob medida e reparos",
    category: "marcenaria",
    color: "#FF9800",
    gradient: "linear-gradient(135deg, #FF9800 0%, #FFF3E0 100%)",
    services: [
      "Móveis planejados",
      "Armários e estantes",
      "Mesas e cadeiras",
      "Portas e janelas",
      "Acabamentos em madeira",
      "Restauração de móveis",
    ],
  },
  {
    icon: "fas fa-tools",
    title: "Carpintaria",
    desc: "Estruturas e acabamentos em madeira",
    category: "carpintaria",
    color: "#1976D2",
    gradient: "linear-gradient(135deg, #1976D2 0%, #E3F2FD 100%)",
    services: [
      "Telhados e coberturas",
      "Pergolados e deck",
      "Escadas de madeira",
      "Forros e divisórias",
      "Reparos estruturais",
      "Construção de galpões",
    ],
  },
  {
    icon: "fas fa-broom",
    title: "Limpeza",
    desc: "Serviços de limpeza residencial",
    category: "limpeza",
    color: "#00C853",
    gradient: "linear-gradient(135deg, #00C853 0%, #E8F5E9 100%)",
    services: [
      "Limpeza pós-obra",
      "Limpeza pesada",
      "Lavagem de estofados",
      "Limpeza de vidros",
      "Enceramento de pisos",
      "Organização de ambientes",
    ],
  },
];

export default function ServicesMenuGrid() {
  const [modal, setModal] = useState<Service | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modal]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    intervalRef.current = window.setInterval(() => {
      setCarouselIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 4000);
  }, [stopAutoPlay]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return stopAutoPlay;
  }, [isMobile, startAutoPlay, stopAutoPlay]);

  const handlePrev = () => {
    stopAutoPlay();
    setCarouselIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    startAutoPlay();
  };

  const handleNext = () => {
    stopAutoPlay();
    setCarouselIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    startAutoPlay();
  };

  return (
    <>
      <motion.section
        id="servicos"
        className="services-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="services-container">
          <motion.div 
            className="services-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
          >
            <motion.h2 
              className="services-title-h2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.25, ease: "easeOut" }}
            >
              Nossos Serviços
            </motion.h2>
            <motion.p 
              className="services-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.25, ease: "easeOut" }}
            >
              Profissionais qualificados para todas as suas necessidades
            </motion.p>
          </motion.div>
          {isMobile ? (
            <motion.div
              className="services-carousel-wrapper"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.3, ease: "easeOut" }}
              onMouseEnter={stopAutoPlay}
              onMouseLeave={startAutoPlay}
              onTouchStart={stopAutoPlay}
              onTouchEnd={startAutoPlay}
            >
              <div className="services-carousel-controls">
                <motion.button
                  className="services-carousel-btn"
                  onClick={handlePrev}
                  aria-label="Anterior"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-chevron-left"></i>
                </motion.button>
                <motion.button
                  className="services-carousel-btn"
                  onClick={handleNext}
                  aria-label="Próximo"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-chevron-right"></i>
                </motion.button>
              </div>
              <AnimatePresence mode="wait">
                <motion.button
                  key={services[carouselIndex].category}
                  className="services-carousel-card"
                  onClick={() => setModal(services[carouselIndex])}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="services-carousel-icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", ease: "easeOut" }}
                  >
                    <i
                      className={services[carouselIndex].icon}
                      style={{ color: services[carouselIndex].color }}
                    />
                  </motion.div>
                  <motion.h3 
                    className="services-carousel-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {services[carouselIndex].title}
                  </motion.h3>
                  <motion.p 
                    className="services-carousel-desc"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {services[carouselIndex].desc}
                  </motion.p>
                </motion.button>
              </AnimatePresence>
              <div className="services-carousel-indicators">
                {services.map((_, idx) => (
                  <motion.span
                    key={idx}
                    className={`indicator-dot ${carouselIndex === idx ? 'active' : ''}`}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setCarouselIndex(idx)}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="services-grid">
              {services.map((service, i) => (
                <motion.button
                  key={service.category}
                  className="services-card"
                  onClick={() => setModal(service)}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.25, duration: 0.3, ease: "easeOut" }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="services-icon"
                    style={{ background: service.gradient }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <i
                      className={service.icon}
                      style={{ color: service.color }}
                    />
                  </motion.div>
                  <h3 className="services-title">{service.title}</h3>
                  <p className="services-desc">{service.desc}</p>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </motion.section>
      <AnimatePresence>
        {modal && (
          <motion.div
            className="modal-overlay"
            onClick={() => setModal(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <motion.div
              className="modal-content"
              style={{ border: `2px solid ${modal.color}` }}
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.15, type: "spring", ease: "easeOut" }}
            >
              <div className="modal-header">
                <motion.h2 
                  className="modal-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {modal.title}
                </motion.h2>
                <motion.button
                  className="modal-close"
                  onClick={() => setModal(null)}
                  aria-label="Fechar"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
              </div>
              <motion.p 
                className="modal-desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {modal.desc}
              </motion.p>
              <motion.h4 
                className="modal-services-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Serviços Inclusos:
              </motion.h4>
              <motion.ul 
                className="modal-services-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {modal.services.map((item: string, i: number) => (
                  <motion.li
                    key={item}
                    className="modal-service-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <i
                      className="fas fa-check-circle"
                      style={{ color: modal.color }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.a
                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="modal-cta-btn"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-mobile-alt"></i>
                Solicitar Serviço
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .services-section {
          position: relative;
          top: 6rem;
          background-color: #f8f9fa;
          padding: 5rem 0;
        }
        .services-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .services-header {
          text-align: center;
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .services-title-h2 {
          font-size: 2.5rem;
          font-weight: 900;
          color: #212529;
          margin: 0;
        }
        .services-subtitle {
          font-size: 1.125rem;
          color: #6C757D;
          max-width: 520px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .services-card {
          background: #fff;
          border-radius: 1.25rem;
          text-align: center;
          border: 1px solid #e9ecef;
          box-shadow: 0 8px 25px rgba(0,0,0,0.05);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          padding: 2.5rem 1.5rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .services-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 2rem;
        }
        .services-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #212529;
          margin: 0;
        }
        .services-desc {
          font-size: 1rem;
          color: #6C757D;
          line-height: 1.5;
          margin: 0;
        }

        .services-carousel-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          padding: 0 1rem;
        }
        .services-carousel-controls {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          order: 2;
          padding: 0 1rem;
        }
        .services-carousel-btn {
          background-color: #fff;
          border: 1.5px solid #e0e0e0;
          border-radius: 50%;
          width: 54px;
          height: 54px;
          font-size: 1.5rem;
          color: #1E79F7;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .services-carousel-card {
          background: #fff;
          border-radius: 1.5rem;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          width: 100%;
          max-width: 320px;
          margin: 0 auto;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          order: 1;
          padding: 2rem 1.5rem;
          gap: 1.5rem;
          border: 1px solid #e9ecef;
        }
        .services-carousel-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          box-shadow: 0 4px 16px rgba(30,121,247,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 2rem;
        }
        .services-carousel-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #212529;
          margin: 0;
        }
        .services-carousel-desc {
          font-size: 1rem;
          color: #6C757D;
          margin: 0;
          line-height: 1.5;
        }
        .services-carousel-indicators {
          display: flex;
          justify-content: center;
          order: 3;
          gap: 0.5rem;
          padding: 0.5rem;
        }
        .indicator-dot {
          width: 12px; 
          height: 12px; 
          border-radius: 50%; 
          background: #d1d5db;
          border: none; 
          cursor: pointer; 
          transition: all 0.3s;
        }
        .indicator-dot.active { 
          background: #1E79F7;
          transform: scale(1.2);
        }
        
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.4);
          padding: 1rem;
          overflow-y: auto;
        }
        .modal-content {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 8px 32px rgba(30,121,247,0.18);
          max-width: 90vw;
          max-height: 90vh;
          width: 420px;
          position: relative;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-y: auto;
        }
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .modal-title {
          font-weight: bold;
          font-size: 1.5rem;
          color: #212529;
          margin: 0;
          text-align: center;
          flex: 1;
        }
        .modal-close {
          color: #6c757d;
          font-size: 1.5rem;
          font-weight: bold;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-desc {
          color: #6c757d;
          text-align: center;
          font-size: 1rem;
          margin: 0;
          line-height: 1.5;
        }
        .modal-services-title {
          font-weight: 600;
          color: #343a40;
          text-align: center;
          font-size: 1.1rem;
          margin: 0;
        }
        .modal-services-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }
        .modal-service-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #f8f9fa;
          border-radius: 0.75rem;
          padding: 1rem;
          border: 1px solid #e9ecef;
        }
        .modal-service-item i {
          font-size: 1rem;
          flex-shrink: 0;
        }
        .modal-service-item span {
          color: #343a40;
          font-weight: 500;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        .modal-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          width: 100%;
          background: #1E79F7;
          color: white;
          font-weight: bold;
          font-size: 1rem;
          border-radius: 0.75rem;
          text-decoration: none;
          transition: background 0.2s;
          padding: 1rem 1.5rem;
          margin-top: 0.5rem;
        }
        .modal-cta-btn:hover {
          background: #0D6EFD;
        }
        .modal-cta-btn i {
          color: white;
          font-size: 1.1rem;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 767px) {
          .services-section { padding: 3rem 0; }
          .services-container { padding: 0 1rem; }
          .services-header { margin-bottom: 2.5rem; }
          .services-title-h2 { font-size: 2rem; }
          .services-subtitle { font-size: 1rem; }
          .services-grid { 
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .services-card { padding: 2rem 1rem; }
          .modal-content {
            width: 85vw;
            max-width: 380px;
            padding: 1.25rem;
            gap: 1rem;
            max-height: 85vh;
          }
          .modal-title {
            font-size: 1.25rem;
          }
          .modal-service-item {
            padding: 0.75rem;
          }
        }
      `}</style>
    </>
  );
}