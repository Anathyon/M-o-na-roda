import { useEffect, useState } from "react";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const header = document.querySelector("header");
            if (header) {
                if (window.scrollY > 100) {
                    header.style.background = "linear-gradient(135deg, #1E79F7, #0D6EFD)";
                    header.style.boxShadow = "0 2px 20px rgba(30, 121, 247, 0.3)";
                } else {
                    header.style.background = "linear-gradient(135deg, #1E79F7, #0D6EFD)";
                    header.style.boxShadow = "0 2px 10px rgba(30, 121, 247, 0.2)";
                }
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
        <header
            className="fixed top-0 w-full z-[1000] border-b border-white/20"
            style={{
                background: 'linear-gradient(135deg, #1E79F7, #0D6EFD)',
                backdropFilter: 'blur(0.625rem)',
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

                {/* Navigation - PC/Tablet */}
                <nav className="header-nav flex items-center gap-8 relative">
                    <div className="md:flex gap-6 order-1 w-full justify-center mt-2 hidden md:flex">
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
                    <div className="md:flex flex-row gap-4 order-2 justify-center hidden md:flex" style={{ width: '170%' }}>
                        <a
                            href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR"
                            className="flex items-center gap-2 rounded-full border-2 border-gray-300 text-white font-semibold transition-all text-[0.95rem] bg-transparent hover:bg-white/10"
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
                <div
                    className="md:hidden ml-4 cursor-pointer flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full hover:bg-white/10 transition"
                    onClick={() => setSidebarOpen(true)}
                >
                    <i className="fas fa-bars text-white text-xl"></i>
                </div>
            </div>
        </header>

        {/* Sidebar Mobile */}
        <aside className={`sidebar-mobile fixed top-0 left-0 h-full w-[80vw] max-w-[320px] bg-white shadow-2xl z-[2000] transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <div className="flex items-center gap-2 font-extrabold text-blue-700 text-xl">
                        <img src="/Mao-na-roda-logo.jpg" alt="Logo" className="w-8 h-8 object-contain rounded-lg" />
                        Mão na Roda
                    </div>
                    <button
                        className="text-gray-500 text-2xl"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Fechar menu"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <nav className="flex flex-col gap-4 px-6 py-6">
                    <a href="#home" className="text-blue-700 font-semibold text-lg py-2 border-b border-gray-100" onClick={() => setSidebarOpen(false)}>
                        Home
                    </a>
                    <a href="#servicos" className="text-blue-700 font-semibold text-lg py-2 border-b border-gray-100" onClick={() => setSidebarOpen(false)}>
                        Serviços
                    </a>
                    <a href="#como-funciona" className="text-blue-700 font-semibold text-lg py-2 border-b border-gray-100 w-auto" onClick={() => setSidebarOpen(false)}>
                        Como Funciona
                    </a>
                </nav>
                <div className="flex flex-col gap-3 px-6 mt-auto pb-8">
                    <a
                        href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR"
                        className="flex items-center gap-2 rounded-full border-2 border-blue-600 text-blue-700 font-semibold transition-all text-base bg-transparent hover:bg-blue-50 px-4 py-3"
                    >
                        <i className="fas fa-mobile-alt text-lg"></i>
                        App Cliente
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodaprofissional&hl=pt_BR"
                        className="flex items-center gap-2 rounded-full text-white font-semibold transition-all text-base"
                        style={{
                            background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
                            boxShadow: '0 0.25rem 0.94rem rgba(30,121,247,0.3)',
                            padding: '0.75rem 1.25rem'
                        }}
                    >
                        <i className="fas fa-tools text-lg"></i>
                        App Pro
                    </a>
                </div>
            </div>
            {/* Overlay para fechar ao clicar fora */}
            <div
                className={`fixed inset-0 bg-black/40 z-[1999] ${sidebarOpen ? "block" : "hidden"}`}
                onClick={() => setSidebarOpen(false)}
            />
        </aside>
        </>
    )
}