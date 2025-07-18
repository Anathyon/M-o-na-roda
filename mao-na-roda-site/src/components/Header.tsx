export default function Header() {
    return (
        <header
            className="fixed top-0 w-full z-[1000] border-b border-white/20"
            style={{
                background: 'linear-gradient(135deg, #1E79F7, #0D6EFD)',
                backdropFilter: 'blur(0.625rem)', // 10px
                padding: '1rem 0'
            }}
        >
            <div
                className="flex justify-between items-center w-full mx-auto"
                style={{ maxWidth: '75rem', padding: '0 5%' }}
            >
                {/* Logo */}
                <div className="flex items-center gap-3 text-[1.6rem] font-extrabold text-white">
                    <div
                        className="flex items-center justify-center rounded-[0.75rem] bg-white shadow-lg"
                        style={{
                            width: '2.8rem',
                            height: '2.8rem',
                            color: '#1E79F7',
                            fontSize: '1.3rem',
                            boxShadow: '0 0.25rem 0.94rem rgba(30,121,247,0.3)',
                            padding: '0.3rem',
                            overflow: 'hidden'
                        }}
                    >
                        <img
                            src="/Mao-na-roda-logo.jpg"
                            alt="Mão na Roda"
                            style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                    Mão na Roda
                </div>

                {/* Navigation */}
                <nav className="flex items-center gap-8 relative">
                    {/* Nav links */}
                    <div className="md:flex gap-6 order-1 w-full justify-center mt-2">
                        <a
                            href="#home"
                            className="text-[0.9rem] py-2 text-white/90 font-medium transition-all relative flex items-center gap-2 hover:text-white">
                                Home
                        </a> 
                        
                        <a
                            href="#servicos"
                            className="text-[0.9rem] py-2 text-white/90 font-medium transition-all relative flex items-center gap-2 hover:text-white"
                        >
                            Serviços
                        </a>
                        
                        <a
                            href="#como-funciona"
                            className="text-[0.9rem] py-2 text-white/90 font-medium transition-all relative flex items-center gap-2 hover:text-white"
                        >
                            Como Funciona
                        </a>
                       
                    </div>

                    {/* App buttons */}
                    <div className="flex flex-row gap-4 order-2 justify-center" style={{ width: '170%' }}>
                        <a
                            href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR"
                            className="flex items-center gap-2 rounded-full border-2 border-white text-white font-semibold transition-all text-[0.95rem] bg-transparent hover:bg-white/10"
                            style={{
                                boxShadow: '0 0.25rem 0.94rem rgba(30,121,247,0.3)',
                                padding: '0.5rem 1.25rem'
                            }}
                        >
                            <i className="fas fa-mobile-alt text-[1.1rem]"></i>
                            App Cliente
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodaprofissional&hl=pt_BR"
                            className="flex items-center gap-2 rounded-full text-white font-semibold transition-all text-[0.95rem]"
                            style={{
                                background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
                                boxShadow: '0 0.25rem 0.94rem rgba(30,121,247,0.3)',
                                padding: '0.5rem 1.25rem'
                            }}
                        >
                            <i className="fas fa-tools text-[1.1rem]"></i>
                            App Pro
                        </a>
                    </div>
                </nav>

                {/* Mobile menu toggle */}
                <div className="md:hidden ml-4 cursor-pointer flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full hover:bg-white/10 transition">
                    <i className="fas fa-bars text-white text-xl"></i>
                </div>
            </div>
        </header>
    );
}
