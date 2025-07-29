import { useEffect, useState } from "react";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Fecha o menu mobile ao navegar para um link interno ou externo
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            setSidebarOpen(false);
            const el = document.querySelector(href);
            if (el) {
                window.scrollTo({
                    top: (el as HTMLElement).offsetTop - 80,
                    behavior: "smooth"
                });
            }
        } else {
            setSidebarOpen(false);
            // Para links externos, deixa o comportamento padrão
        }
    };

    useEffect(() => {
        const onScroll = () => {
            const header = document.querySelector(".header-main");
            if (header) {
                if (window.scrollY > 100) {
                    (header as HTMLElement).style.background = "linear-gradient(135deg, #1E79F7, #0D6EFD)";
                    (header as HTMLElement).style.boxShadow = "0 2px 20px rgba(30, 121, 247, 0.3)";
                } else {
                    (header as HTMLElement).style.background = "linear-gradient(135deg, #1E79F7, #0D6EFD)";
                    (header as HTMLElement).style.boxShadow = "0 2px 10px rgba(30, 121, 247, 0.2)";
                }
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className="header-main fixed top-0 w-full z-[1000] border-b border-white/20"
                style={{
                    background: 'linear-gradient(135deg, #1E79F7, #0D6EFD)',
                    backdropFilter: 'blur(0.625rem)',
                    padding: '1rem 0'
                }}
            >
                <div
                    className="header-container flex justify-between items-center w-full mx-auto"
                    style={{ maxWidth: '75rem', padding: '0 5%' }}
                >
                    {/* Logo */}
                    <div className="header-logo flex items-center gap-3 text-[1.6rem] font-extrabold text-white">
                        <div
                            className="header-logo-img flex items-center justify-center rounded-[0.75rem] bg-white shadow-lg"
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
                        <div className="header-links md:flex gap-6 order-1 w-full justify-center mt-2 hidden md:flex">
                            <a
                                href="#home"
                                className="header-link text-[0.9rem] py-2 text-white/90 font-medium transition-all relative flex items-center gap-2 hover:text-white"
                            >
                                Home
                            </a>
                            <a
                                href="#servicos"
                                className="header-link text-[0.9rem] py-2 text-white/90 font-medium transition-all relative flex items-center gap-2 hover:text-white"
                            >
                                Serviços
                            </a>
                            <a
                                href="#como-funciona"
                                className="header-link text-[0.9rem] py-2 text-white/90 font-medium transition-all relative flex items-center gap-2 hover:text-white"
                            >
                                Como Funciona
                            </a>
                        </div>
                        <div className="header-btns md:flex flex-row gap-4 order-2 justify-center hidden md:flex">
                            <a
                                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR"
                                className="header-btn-app flex items-center gap-2 rounded-full border-2 border-gray-300 text-white font-semibold transition-all text-[0.95rem] bg-transparent hover:bg-white/10"
                                style={{
                                    boxShadow: '0 0.25rem 0.94rem rgba(30,121,247,0.3)',
                                    padding: '0.5rem 1.25rem'
                                }}
                                target="_blank" rel="noopener noreferrer"
                            >
                                <i className="fas fa-mobile-alt text-[1.1rem]"></i>
                                App Cliente
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodaprofissional&hl=pt_BR"
                                className="header-btn-pro flex items-center gap-2 rounded-full text-white font-semibold transition-all text-[0.95rem]"
                                style={{
                                    background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
                                    boxShadow: '0 0.25rem 0.94rem rgba(30,121,247,0.3)',
                                    padding: '0.5rem 1.25rem'
                                }}
                                target="_blank" rel="noopener noreferrer"
                            >
                                <i className="fas fa-tools text-[1.1rem]"></i>
                                App Pro
                            </a>
                        </div>
                    </nav>

                    {/* Mobile menu toggle */}
                    <div
                        className="header-menu-toggle md:hidden ml-4 cursor-pointer flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full hover:bg-white/10 transition"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <i className="fas fa-bars text-white text-xl"></i>
                    </div>
                </div>
            </header>

            {/* Sidebar Mobile */}
            <aside
                className={`sidebar-mobile fixed top-0 left-0 h-full w-[80vw] max-w-[320px] bg-gradient-to-br from-[#1E79F7] to-[#0D6EFD] shadow-2xl z-[2000] transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
                style={{
                    borderTopRightRadius: "1.5rem",
                    borderBottomRightRadius: "1.5rem",
                    boxShadow: "0 0.5rem 2rem rgba(30,121,247,0.15)",
                    padding: "0.5rem"
                }}
            >
                <div className="sidebar-content flex flex-col h-full">
                    <div className="sidebar-header flex items-center justify-between px-6 py-4 border-b border-white/20" style={{ padding: "2%" }}>
                        <div className="sidebar-logo flex items-center gap-2 font-extrabold text-white text-xl">
                            <img src="/Mao-na-roda-logo.jpg" alt="Logo" className="w-8 h-8 object-contain rounded-lg bg-white" />
                            Mão na Roda
                        </div>
                        <button
                            className="sidebar-close text-white text-2xl"
                            onClick={() => setSidebarOpen(false)}
                            aria-label="Fechar menu"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <nav className="sidebar-links flex flex-col gap-2 px-6 py-6" style={{ padding: "5%" }}>
                        <a
                            href="#home"
                            className="sidebar-link text-white font-semibold text-lg py-2 rounded-lg hover:bg-white/10 transition z-[999999]"
                            onClick={e => handleNavClick(e, "#home")}
                        >
                            Home
                        </a>
                        <a
                            href="#servicos"
                            className="sidebar-link text-white font-semibold text-lg py-2 rounded-lg hover:bg-white/10 transition z-[999999]"
                            onClick={e => handleNavClick(e, "#servicos")}
                        >
                            Serviços
                        </a>
                        <a
                            href="#como-funciona"
                            className="sidebar-link text-white font-semibold text-lg py-2 rounded-lg hover:bg-white/10 transition z-[999999]"
                            onClick={e => handleNavClick(e, "#como-funciona")}
                        >
                            Como Funciona
                        </a>
                    </nav>
                    <div className="sidebar-btns flex flex-col gap-3 px-6 mt-auto pb-8">
                        <a
                            href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR"
                            className="sidebar-btn-app flex items-center gap-2 rounded-full border-2 border-white text-white font-semibold transition-all text-base bg-transparent hover:bg-white/10 px-4 py-3 z-[999999]"
                            style={{ padding: '0.75rem 1.25rem' }}
                            target="_blank" rel="noopener noreferrer"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <i className="fas fa-mobile-alt text-lg"></i>
                            App Cliente
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodaprofissional&hl=pt_BR"
                            className="sidebar-btn-pro flex items-center gap-2 rounded-full text-white font-semibold transition-all text-base z-[999999]"
                            style={{
                                background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
                                boxShadow: '0 0.25rem 0.94rem rgba(30,121,247,0.3)',
                                padding: '0.75rem 1.25rem'
                            }}
                            target="_blank" rel="noopener noreferrer"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <i className="fas fa-tools text-lg"></i>
                            App Pro
                        </a>
                    </div>
                </div>
                {/* Overlay para fechar ao clicar fora */}
                <div
                    className={`sidebar-overlay fixed inset-0 bg-black/40 z-[1999] ${sidebarOpen ? "block" : "hidden"}`}
                    onClick={() => setSidebarOpen(false)}
                />
            </aside>

            <style>{`
                /* MOBILE */
                @media (max-width: 480px) {
                    .header-main {
                        padding: 0.7rem 0 !important;
                    }
                    .header-container {
                        padding: 0 2vw !important;
                        max-width: 100vw !important;
                    }
                    .header-logo {
                        font-size: 1.1rem !important;
                        gap: 0.7rem !important;
                    }
                    .header-logo-img {
                        width: 2.1rem !important;
                        height: 2.1rem !important;
                        padding: 0.15rem !important;
                    }
                    .header-nav {
                        display: none !important;
                    }
                    .header-menu-toggle {
                        margin-left: 0 !important;
                        width: 2.2rem !important;
                        height: 2.2rem !important;
                    }
                    .sidebar-mobile {
                        display: block !important;
                        width: 100vw !important;
                        max-width: 100vw !important;
                        border-radius: 0 !important;
                        padding: 0 !important;
                    }
                    .sidebar-header {
                        padding: 1rem 1.2rem !important;
                    }
                    .sidebar-logo {
                        font-size: 1.1rem !important;
                        gap: 0.5rem !important;
                    }
                    .sidebar-links {
                        padding: 1.2rem 1.2rem !important;
                        gap: 0.5rem !important;
                    }
                    .sidebar-link {
                        font-size: 1rem !important;
                        padding: 0.7rem 0.5rem !important;
                    }
                    .sidebar-btns {
                        gap: 0.7rem !important;
                        padding-left: 1.2rem !important;
                        padding-right: 1.2rem !important;
                        padding-bottom: 1.2rem !important;
                        z-index: 99999999 !important;
                    }
                    .sidebar-btn-app, .sidebar-btn-pro {
                        font-size: 1rem !important;
                        padding: 0.7rem 1rem !important;
                        z-index: 99999999 !important;
                    }
                }
                /* TABLET */
                @media (min-width: 481px) and (max-width: 1024px) {
                    .header-main {
                        padding: 0.9rem 0 !important;
                    }
                    .header-container {
                        padding: 0 3vw !important;
                        max-width: 98vw !important;
                    }
                    .header-logo {
                        font-size: 1.3rem !important;
                        gap: 1rem !important;
                    }
                    .header-logo-img {
                        width: 2.3rem !important;
                        height: 2.3rem !important;
                        padding: 0.2rem !important;
                    }
                    .header-nav {
                        display: flex !important;
                        gap: 2.5vw !important;
                    }
                    .header-links {
                        gap: 2vw !important;
                        margin-top: 0 !important;
                    }
                    .header-link {
                        font-size: 1rem !important;
                        padding: 0.7rem 0.5rem !important;
                    }
                    .header-btns {
                        gap: 1vw !important;
                    }
                    .header-btn-app, .header-btn-pro {
                        font-size: 1rem !important;
                        padding: 0.6rem 1.1rem !important;
                    }
                    .header-menu-toggle {
                        margin-left: 0.5rem !important;
                        width: 2.3rem !important;
                        height: 2.3rem !important;
                    }
                    .sidebar-mobile {
                        display: none !important;
                    }
                }
                /* DESKTOP */
                @media (min-width: 1025px) {
                    .header-main {
                        padding: 1.1rem 0 !important;
                    }
                    .header-container {
                        padding: 0 5vw !important;
                        max-width: 75rem !important;
                    }
                    .header-logo {
                        font-size: 1.6rem !important;
                        gap: 1.2rem !important;
                    }
                    .header-logo-img {
                        width: 2.8rem !important;
                        height: 2.8rem !important;
                        padding: 0.3rem !important;
                    }
                    .header-nav {
                        display: flex !important;
                        gap: 3vw !important;
                    }
                    .header-links {
                        gap: 2vw !important;
                        margin-top: 0 !important;
                    }
                    .header-link {
                        font-size: 1.1rem !important;
                        padding: 0.8rem 0.7rem !important;
                    }
                    .header-btns {
                        gap: 1.2vw !important;
                    }
                    .header-btn-app, .header-btn-pro {
                        font-size: 1.05rem !important;
                        padding: 0.7rem 1.3rem !important;
                    }
                    .header-menu-toggle {
                        display: none !important;
                    }
                    .sidebar-mobile {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
}