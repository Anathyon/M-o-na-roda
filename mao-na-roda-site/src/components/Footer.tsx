
export default function Footer() {
  return (
    <footer className="footer-new w-full overflow-hidden relative top-[6rem]">
      <div className="footer-main w-full overflow-hidden bg-[#1E79F7]">
        <div className="container mx-auto" style={{ maxWidth: "75rem", padding: "0 5%" }}>
          <div className="footer-top flex flex-wrap justify-between items-center gap-8 mb-16">
            <div className="footer-logo flex items-center gap-4">
              <div className="logo-icon-large bg-white rounded-[15px] flex items-center justify-center shadow" style={{ width: 70, height: 70 }}>
                <img src="/Mao-na-roda-logo.jpg" alt="Mão na Roda" style={{ width: 60, height: 60, objectFit: "contain" }} />
              </div>
              <div className="logo-text">
                <h3 className="font-extrabold text-2xl mb-1">Mão na Roda</h3>
                <p className="opacity-80 text-base">Conectando pessoas a soluções</p>
              </div>
            </div>
            <div className="footer-download text-center">
              <h4 className="font-semibold text-lg mb-4">Baixe nossos apps e transforme seu lar</h4>
              <div className="download-buttons flex gap-4 flex-wrap justify-center">
                <a href="#" className="footer-btn flex items-center gap-2 bg-white text-[#1E79F7] px-4 py-3 rounded-lg transition-all shadow">
                  <i className="fab fa-google-play text-xl"></i>
                  <div className="btn-text flex flex-col">
                    <span className="text-xs opacity-80">App Cliente</span>
                    <strong className="text-base">Google Play</strong>
                  </div>
                </a>
                <a
                  href="#"
                  className="footer-btn flex items-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6, #1E40AF)",
                    color: "white",
                  }}
                >
                  <i className="fab fa-google-play text-xl"></i>
                  <div className="btn-text flex flex-col">
                    <span className="text-xs opacity-80">App Profissional</span>
                    <strong className="text-base">Google Play</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="footer-column">
              <h4 className="font-bold text-lg mb-6 relative pb-3">A Empresa</h4>
              <ul>
                <li><a href="#" className="text-white/80 hover:text-white transition-all pl-4 block mb-2">Sobre Nós</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-all pl-4 block mb-2">Nossa História</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-all pl-4 block mb-2">Trabalhe Conosco</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="font-bold text-lg mb-6 relative pb-3">Para Clientes</h4>
              <ul>
                <li><a href="#" className="text-white/80 hover:text-white transition-all pl-4 block mb-2">Como Funciona</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-all pl-4 block mb-2">Categorias de Serviços</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-all pl-4 block mb-2">Avaliações</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="font-bold text-lg mb-6 relative pb-3">Para Profissionais</h4>
              <ul>
                <li><a href="#" className="text-white/80 hover:text-white transition-all pl-4 block mb-2">Cadastre-se</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-all pl-4 block mb-2">Como Funciona</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-all pl-4 block mb-2">Dicas de Sucesso</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="font-bold text-lg mb-6 relative pb-3">Suporte</h4>
              <ul>
                <li><a href="#" className="text-white/80 hover:text-white transition-all pl-4 block mb-2">Central de Ajuda</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-all pl-4 block mb-2">Política de Privacidade</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-all pl-4 block mb-2">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-new bg-[#0D6EFD] py-6">
        <div className="container mx-auto flex justify-between items-center flex-wrap gap-4" style={{ maxWidth: "75rem", padding: "0 5%" }}>
          <div className="footer-copyright text-white/80 text-sm">
            © 2024, Mão na Roda. CNPJ 49.856.962/0001-36 - Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}