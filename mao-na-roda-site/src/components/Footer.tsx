import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const modals = {
  "Sobre Nós": {
    title: "Sobre Nós",
    content: "Somos a Mão na Roda, conectando pessoas a soluções para facilitar o seu dia a dia. Nossa missão é unir clientes e profissionais de forma rápida, segura e transparente.",
  },
  "Nossa História": {
    title: "Nossa História",
    content: "Fundada em 2024, a Mão na Roda nasceu para transformar o mercado de serviços, trazendo inovação, praticidade e confiança para todos os usuários.",
  },
  "Trabalhe Conosco": {
    title: "Trabalhe Conosco",
    content: "Quer fazer parte do nosso time? Envie seu currículo e venha crescer junto com a gente!",
  },
  "Como Funciona": {
    title: "Como Funciona",
    content: "Baixe o app, escolha o serviço, selecione um profissional e agende. O pagamento é feito após a conclusão do serviço.",
  },
  "Categorias de Serviços": {
    title: "Categorias de Serviços",
    content: "Oferecemos diversas categorias: limpeza, manutenção, reformas, assistência técnica e muito mais.",
  },
  "Avaliações": {
    title: "Avaliações",
    content: "Veja avaliações reais de clientes e escolha o profissional ideal para você.",
  },
  "Cadastre-se": {
    title: "Cadastre-se",
    content: "Profissional? Cadastre-se no app e aumente sua renda prestando serviços.",
  },
  "Dicas de Sucesso": {
    title: "Dicas de Sucesso",
    content: "Confira dicas para se destacar e conquistar mais clientes na plataforma.",
  },
  "Central de Ajuda": {
    title: "Central de Ajuda",
    content: "Precisa de suporte? Acesse nossa central de ajuda para tirar dúvidas e resolver problemas.",
  },
  "Política de Privacidade": {
    title: "Política de Privacidade",
    content: "Sua privacidade é importante para nós. Leia nossa política para saber como protegemos seus dados.",
  },
  "Termos de Uso": {
    title: "Termos de Uso",
    content: "Confira os termos de uso da plataforma e saiba seus direitos e deveres.",
  },
};

const footerColumns = [
  {
    title: "A Empresa",
    items: ["Sobre Nós", "Nossa História", "Trabalhe Conosco"]
  },
  {
    title: "Para Clientes",
    items: ["Como Funciona", "Categorias de Serviços", "Avaliações"]
  },
  {
    title: "Para Profissionais",
    items: ["Cadastre-se", "Como Funciona", "Dicas de Sucesso"]
  },
  {
    title: "Suporte",
    items: ["Central de Ajuda", "Política de Privacidade", "Termos de Uso"]
  }
];

export default function Footer() {
  const [modal, setModal] = useState<{ title: string; content: string } | null>(null);

  function handleOpen(item: string) {
    if (Object.prototype.hasOwnProperty.call(modals, item)) {
      setModal((modals as Record<string, { title: string; content: string }>)[item]);
    }
  }

  return (
    <motion.footer 
      className="footer-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="footer-main">
        <div className="footer-container">
          <motion.div 
            className="footer-top"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
          >
            <motion.div 
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="logo-icon-large"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.3, type: "spring", ease: "easeOut" }}
              >
                <img src="/Mao-na-roda-logo.jpg" alt="Mão na Roda" />
              </motion.div>
              <div className="logo-text">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.25, ease: "easeOut" }}
                >
                  Mão na Roda
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.25, ease: "easeOut" }}
                >
                  Conectando pessoas a soluções
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
          <div className="footer-grid">
            {footerColumns.map((column, colIndex) => (
              <motion.div 
                key={column.title}
                className="footer-column"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + colIndex * 0.05, duration: 0.25, ease: "easeOut" }}
              >
                <h4>{column.title}</h4>
                <ul>
                  {column.items.map((item, itemIndex) => (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + colIndex * 0.05 + itemIndex * 0.025, duration: 0.2, ease: "easeOut" }}
                    >
                      <motion.button 
                        type="button" 
                        onClick={() => handleOpen(item)}
                        whileHover={{ x: 5, color: "#fff" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item}
                      </motion.button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.25, ease: "easeOut" }}
      >
        <div className="footer-bottom-container">
          <div className="footer-copyright">
            © 2025, Mão na Roda. CNPJ 49.856.962/0001-36 - Todos os direitos reservados.
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {modal && (
          <motion.div 
            className="footer-modal-bg" 
            onClick={() => setModal(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <motion.div 
              className="footer-modal" 
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.15, type: "spring", ease: "easeOut" }}
            >
              <motion.button 
                className="footer-modal-close" 
                onClick={() => setModal(null)} 
                aria-label="Fechar"
                whileHover={{ scale: 1.1, backgroundColor: "#e0e0e0" }}
                whileTap={{ scale: 0.9 }}
              >
                &times;
              </motion.button>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, ease: "easeOut" }}
              >
                {modal.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, ease: "easeOut" }}
              >
                {modal.content}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .footer-section {
          width: 100%;
          overflow: hidden;
          position: relative;
          top: 6rem;
          background: #1E79F7;
          color: #fff;
        }
        .footer-main {
          width: 100%;
          background: #1E79F7;
          padding: 4rem 0;
        }
        .footer-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .footer-top {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .logo-icon-large {
          background: #fff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          width: 60px;
          height: 60px;
          flex-shrink: 0;
        }
        .logo-icon-large img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }
        .logo-text h3 {
          font-weight: 800;
          font-size: 1.75rem;
          margin: 0 0 0.2rem 0;
          color: #fff;
        }
        .logo-text p {
          opacity: 0.8;
          font-size: 1rem;
          color: #e0f2fe;
          margin: 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
        }
        .footer-column h4 {
          font-weight: 700;
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
          color: #fff;
        }
        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-column button {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.95rem;
          padding: 0;
          width: auto;
          text-align: left;
          cursor: pointer;
          transition: color 0.2s;
        }
        .footer-column button:hover {
          color: #fff;
        }
        .footer-bottom {
          background: #0D6EFD;
          padding: 1.25rem 0;
          margin-top: 2rem;
        }
        .footer-bottom-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: center;
        }
        .footer-copyright {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          text-align: center;
        }
        /* Modal */
        .footer-modal-bg {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
        }
        .footer-modal {
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          padding: 2rem;
          max-width: 90vw;
          width: 450px;
          color: #333;
          position: relative;
        }
        .footer-modal-close {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          color: #999;
          background: #f0f0f0;
          border: none;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          line-height: 32px;
          text-align: center;
        }
        .footer-modal-close:hover {
          background: #e0e0e0;
          color: #333;
        }
        .footer-modal h3 {
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #1E79F7;
        }
        .footer-modal p {
          font-size: 1rem;
          line-height: 1.6;
          color: #555;
        }
        /* Tablet */
        @media (max-width: 992px) {
          .footer-top {
            text-align: center;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem 1.5rem;
          }
        }
        /* Mobile */
        @media (max-width: 600px) {
          .footer-main {
            padding: 3rem 0;
          }
          .footer-container {
            padding: 0 1rem;
          }
          .footer-top {
            margin-bottom: 2.5rem;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-logo h3 {
            font-size: 1.5rem;
          }
          .footer-logo p {
            font-size: 0.9rem;
          }
          .footer-column h4 {
            font-size: 1rem;
          }
        }
      `}</style>
    </motion.footer>
  );
}