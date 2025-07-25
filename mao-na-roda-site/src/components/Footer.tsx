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
    <footer className="footer-new w-full overflow-hidden relative top-[6rem]">
      <div className="footer-main w-full overflow-hidden bg-[#1E79F7]" style={{ padding: "1rem" }}>
        <div className="container mx-auto" style={{ maxWidth: "75rem", padding: "0 5%" }}>
          <div className="footer-top flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 md:mb-16">
            <div className="footer-logo flex items-center gap-4 mb-6 md:mb-0">
              <div className="logo-icon-large bg-white rounded-[15px] flex items-center justify-center shadow" style={{ width: 70, height: 70 }}>
                <img src="/Mao-na-roda-logo.jpg" alt="Mão na Roda" style={{ width: 60, height: 60, objectFit: "contain" }} />
              </div>
              <div className="logo-text">
                <h3 className="font-extrabold text-2xl md:text-3xl mb-1 text-gray-300">Mão na Roda</h3>
                <p className="opacity-80 text-base md:text-lg text-gray-300">Conectando pessoas a soluções</p>
              </div>
            </div>
            <div className="footer-download text-right w-full md:w-auto">
              <h4 className="font-semibold text-lg md:text-xl mb-0 md:mb-0 text-gray-300">Baixe nossos apps e transforme seu lar</h4>
              {/* Botões removidos para evitar redundância */}
            </div>
          </div>
          <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full">
            <div className="footer-column">
              <h4 className="font-bold text-lg mb-4 md:mb-6 relative pb-2 md:pb-3">A Empresa</h4>
              <ul>
                <li>
                  <button type="button" onClick={() => handleOpen("Sobre Nós")} className="text-white/80 hover:text-white transition-all pl-4 block mb-2 w-full text-left bg-transparent border-none cursor-pointer">
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Nossa História")} className="text-white/80 hover:text-white transition-all pl-4 block mb-2 w-full text-left bg-transparent border-none cursor-pointer">
                    Nossa História
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Trabalhe Conosco")} className="text-white/80 hover:text-white transition-all pl-4 block mb-2 w-full text-left bg-transparent border-none cursor-pointer">
                    Trabalhe Conosco
                  </button>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="font-bold text-lg mb-4 md:mb-6 relative pb-2 md:pb-3">Para Clientes</h4>
              <ul>
                <li>
                  <button type="button" onClick={() => handleOpen("Como Funciona")} className="text-white/80 hover:text-white transition-all pl-4 block mb-2 w-full text-left bg-transparent border-none cursor-pointer">
                    Como Funciona
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Categorias de Serviços")} className="text-white/80 hover:text-white transition-all pl-4 block mb-2 w-full text-left bg-transparent border-none cursor-pointer">
                    Categorias de Serviços
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Avaliações")} className="text-white/80 hover:text-white transition-all pl-4 block mb-2 w-full text-left bg-transparent border-none cursor-pointer">
                    Avaliações
                  </button>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="font-bold text-lg mb-4 md:mb-6 relative pb-2 md:pb-3">Para Profissionais</h4>
              <ul>
                <li>
                  <button type="button" onClick={() => handleOpen("Cadastre-se")} className="text-white/80 hover:text-white transition-all pl-4 block mb-2 w-full text-left bg-transparent border-none cursor-pointer">
                    Cadastre-se
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Como Funciona")} className="text-white/80 hover:text-white transition-all pl-4 block mb-2 w-full text-left bg-transparent border-none cursor-pointer">
                    Como Funciona
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Dicas de Sucesso")} className="text-white/80 hover:text-white transition-all pl-4 block mb-2 w-full text-left bg-transparent border-none cursor-pointer">
                    Dicas de Sucesso
                  </button>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="font-bold text-lg mb-4 md:mb-6 relative pb-2 md:pb-3">Suporte</h4>
              <ul>
                <li>
                  <button type="button" onClick={() => handleOpen("Central de Ajuda")} className="text-white/80 hover:text-white transition-all pl-4 block mb-2 w-full text-left bg-transparent border-none cursor-pointer">
                    Central de Ajuda
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Política de Privacidade")} className="text-white/80 hover:text-white transition-all pl-4 block mb-2 w-full text-left bg-transparent border-none cursor-pointer">
                    Política de Privacidade
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => handleOpen("Termos de Uso")} className="text-white/80 hover:text-white transition-all pl-4 block mb-2 w-full text-left bg-transparent border-none cursor-pointer">
                    Termos de Uso
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-new bg-[#0D6EFD] py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4" style={{ maxWidth: "75rem", padding: "0 5%" }}>
          <div className="footer-copyright text-white/80 text-sm text-center md:text-left">
            © 2024, Mão na Roda. CNPJ 49.856.962/0001-36 - Todos os direitos reservados.
          </div>
        </div>
      </div>
      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40" onClick={handleClose}>
          <div
            className="bg-blue-700 rounded-2xl shadow-2xl p-8 max-w-[90vw] w-[400px] text-white relative"
            onClick={e => e.stopPropagation()}
            style={{padding:"2rem"}}
          >
            <button
              className="absolute top-3 right-3 text-[#ffffff] text-xl font-bold"
              onClick={handleClose}
              aria-label="Fechar"
            >
              &times;
            </button>
            <h3 className="font-extrabold text-xl mb-4">{modal.title}</h3>
            <p className="text-base">{modal.content}</p>
          </div>
        </div>
      )}
      <style>{`
        .footer-grid {
          margin-top: 2rem;
        }
        .footer-column h4 {
          border-bottom: 2px solid #fff3;
          width: fit-content;
        }
        @media (max-width: 900px) {
          .footer-top {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 2rem !important;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
          }
          .footer-logo h3 {
            font-size: 1.2rem !important;
          }
          .footer-logo p {
            font-size: 0.95rem !important;
          }
          .footer-column h4 {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </footer>
  );
}