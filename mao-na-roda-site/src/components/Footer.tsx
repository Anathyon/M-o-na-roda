import { useState } from "react";

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

export default function Footer() {
  const [modal, setModal] = useState<{ title: string; content: string } | null>(null);

  function handleOpen(item: string) {
    if (Object.prototype.hasOwnProperty.call(modals, item)) {
      setModal((modals as Record<string, { title: string; content: string }>)[item]);
    }
  }
  function handleClose() {
    setModal(null);
  }

  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-logo">
              <div className="logo-icon-large">
                <img src="/Mao-na-roda-logo.jpg" alt="Mão na Roda" />
              </div>
              <div className="logo-text">
                <h3>Mão na Roda</h3>
                <p>Conectando pessoas a soluções</p>
              </div>
            </div>
            <div className="footer-download">
              <h4>Baixe nossos apps e transforme seu lar</h4>
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-column">
              <h4>A Empresa</h4>
              <ul>
                <li>
                  <button type="button" onClick={() => handleOpen("Sobre Nós")}>Sobre Nós</button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Nossa História")}>Nossa História</button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Trabalhe Conosco")}>Trabalhe Conosco</button>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Para Clientes</h4>
              <ul>
                <li>
                  <button type="button" onClick={() => handleOpen("Como Funciona")}>Como Funciona</button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Categorias de Serviços")}>Categorias de Serviços</button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Avaliações")}>Avaliações</button>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Para Profissionais</h4>
              <ul>
                <li>
                  <button type="button" onClick={() => handleOpen("Cadastre-se")}>Cadastre-se</button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Como Funciona")}>Como Funciona</button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Dicas de Sucesso")}>Dicas de Sucesso</button>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Suporte</h4>
              <ul>
                <li>
                  <button type="button" onClick={() => handleOpen("Central de Ajuda")}>Central de Ajuda</button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Política de Privacidade")}>Política de Privacidade</button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Termos de Uso")}>Termos de Uso</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-copyright">
            © 2024, Mão na Roda. CNPJ 49.856.962/0001-36 - Todos os direitos reservados.
          </div>
        </div>
      </div>
      {/* Modal */}
      {modal && (
        <div className="footer-modal-bg" onClick={handleClose}>
          <div className="footer-modal" onClick={e => e.stopPropagation()}>
            <button className="footer-modal-close" onClick={handleClose} aria-label="Fechar">
              &times;
            </button>
            <h3>{modal.title}</h3>
            <p>{modal.content}</p>
          </div>
        </div>
      )}
      <style>{`
        .footer-section {
          width: 100%;
          overflow: hidden;
          position: relative;
          top: 6rem;
          background: #1E79F7;
        }
        .footer-main {
          width: 100%;
          background: #1E79F7;
          padding: 1rem 0 0 0;
        }
        .footer-container {
          max-width: 75rem;
          margin: 0 auto;
          padding: 0 5%;
        }
        .footer-top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .logo-icon-large {
          background: #fff;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 12px rgba(30,121,247,0.10);
          width: 70px;
          height: 70px;
        }
        .logo-icon-large img {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }
        .logo-text h3 {
          font-weight: 800;
          font-size: 2rem;
          margin-bottom: 0.2rem;
          color: #eaf2ff;
        }
        .logo-text p {
          opacity: 0.8;
          font-size: 1.1rem;
          color: #eaf2ff;
        }
        .footer-download h4 {
          font-weight: 600;
          font-size: 1.1rem;
          color: #eaf2ff;
          margin: 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 2.5rem;
          margin-top: 2rem;
        }
        .footer-column h4 {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 1.2rem;
          border-bottom: 2px solid #fff3;
          width: fit-content;
          color: #fff;
          padding-bottom: 0.5rem;
        }
        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-column li {
          margin-bottom: 0.5rem;
        }
        .footer-column button {
          background: transparent;
          border: none;
          color: #eaf2ffcc;
          font-size: 1rem;
          padding-left: 0.5rem;
          width: 100%;
          text-align: left;
          cursor: pointer;
          transition: color 0.2s;
        }
        .footer-column button:hover {
          color: #fff;
        }
        .footer-bottom {
          background: #0D6EFD;
          padding: 1.5rem 0;
        }
        .footer-bottom-container {
          max-width: 75rem;
          margin: 0 auto;
          padding: 0 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .footer-copyright {
          color: #eaf2ffcc;
          font-size: 0.95rem;
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
          background: rgba(0,0,0,0.4);
        }
        .footer-modal {
          background: #2563eb;
          border-radius: 1.2rem;
          box-shadow: 0 8px 32px rgba(30,121,247,0.18);
          padding: 2rem;
          max-width: 90vw;
          width: 400px;
          color: #fff;
          position: relative;
        }
        .footer-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: #fff;
          background: transparent;
          border: none;
          font-size: 1.5rem;
          font-weight: bold;
          cursor: pointer;
        }
        .footer-modal h3 {
          font-weight: 800;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        .footer-modal p {
          font-size: 1rem;
        }
        /* Tablet */
        @media (max-width: 900px) {
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        /* Mobile */
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
          .footer-logo h3 {
            font-size: 1.2rem;
          }
          .footer-logo p {
            font-size: 0.95rem;
          }
          .footer-column h4 {
            font-size: 1rem;
          }
          .footer-main {
            padding: 1rem 0 0 0;
          }
          .footer-container {
            padding: 0 2vw;
          }
        }
      `}</style>
    </footer>
  );
}