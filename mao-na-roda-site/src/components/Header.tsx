import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
        }
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.header 
                className={`header-main ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="header-container">
                    <motion.a 
                        href="#home" 
                        className="header-logo" 
                        onClick={(e) => handleNavClick(e, "#home")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="header-logo-img">
                            <img src="/Mao-na-roda-logo.jpg" alt="Mão na Roda" />
                        </div>
                        <span>Mão na Roda</span>
                    </motion.a>

                    <nav className="header-nav">
                        {["Home", "Serviços", "Como Funciona"].map((item, i) => (
                            <motion.a 
                                key={item}
                                href={`#${item === "Home" ? "home" : item === "Serviços" ? "servicos" : "como-funciona"}`} 
                                className="header-link" 
                                onClick={(e) => handleNavClick(e, `#${item === "Home" ? "home" : item === "Serviços" ? "servicos" : "como-funciona"}`)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                                whileHover={{ y: -2 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <motion.a 
                            href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR" 
                            className="header-btn-app" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className="fas fa-mobile-alt"></i>
                            <span>App Cliente</span>
                        </motion.a>
                        <motion.a 
                            href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodaprofissional&hl=pt_BR" 
                            className="header-btn-pro" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className="fas fa-tools"></i>
                            <span>App Pro</span>
                        </motion.a>
                    </div>

                    <motion.button 
                        className="header-menu-toggle" 
                        onClick={() => setSidebarOpen(true)} 
                        aria-label="Abrir menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <i className="fas fa-bars"></i>
                    </motion.button>
                </div>
            </motion.header>

            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        <motion.div 
                            className="sidebar-overlay" 
                            onClick={() => setSidebarOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.aside 
                            className="sidebar-mobile"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            <div className="sidebar-header">
                                <div className="sidebar-logo">
                                    <img src="/Mao-na-roda-logo.jpg" alt="Logo" />
                                    <span>Mão na Roda</span>
                                </div>
                                <motion.button 
                                    className="sidebar-close" 
                                    onClick={() => setSidebarOpen(false)} 
                                    aria-label="Fechar menu"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <i className="fas fa-times"></i>
                                </motion.button>
                            </div>
                            <nav className="sidebar-links">
                                {["Home", "Serviços", "Como Funciona"].map((item, i) => (
                                    <motion.a 
                                        key={item}
                                        href={`#${item === "Home" ? "home" : item === "Serviços" ? "servicos" : "como-funciona"}`} 
                                        onClick={e => handleNavClick(e, `#${item === "Home" ? "home" : item === "Serviços" ? "servicos" : "como-funciona"}`)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 + 0.2 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </nav>
                            <div className="sidebar-btns">
                                <motion.a 
                                    href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodacliente&hl=pt_BR" 
                                    className="sidebar-btn-app" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <i className="fas fa-mobile-alt"></i>
                                    <span>App Cliente</span>
                                </motion.a>
                                <motion.a 
                                    href="https://play.google.com/store/apps/details?id=digital.inovasoft.maonarodaprofissional&hl=pt_BR" 
                                    className="sidebar-btn-pro" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <i className="fas fa-tools"></i>
                                    <span>App Pro</span>
                                </motion.a>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
    
            <style>{`
                .header-main {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 1000;
                    background: linear-gradient(135deg, #1E79F7, #0D6EFD);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 1rem 0;
                    transition: all 0.3s ease;
                }
                .header-main.scrolled {
                    box-shadow: 0 2px 20px rgba(30, 121, 247, 0.3);
                    padding: 0.8rem 0;
                }
                .header-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                .header-logo {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: #fff;
                    text-decoration: none;
                }
                .header-logo-img {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.75rem;
                    background: #fff;
                    width: 2.5rem;
                    height: 2.5rem;
                    padding: 0.2rem;
                    overflow: hidden;
                }
                .header-logo-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
                .header-nav { display: none; }
                .header-actions { display: none; }
                .header-menu-toggle {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    background: transparent;
                    border: none;
                    color: #fff;
                    font-size: 1.2rem;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                .header-menu-toggle:hover { background: rgba(255,255,255,0.1); }
                
                .sidebar-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.4);
                    z-index: 1999;
                }
                .sidebar-mobile {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 80vw;
                    max-width: 300px;
                    background: linear-gradient(135deg, #1E79F7, #0D6EFD);
                    box-shadow: 0 0 2rem rgba(0,0,0,0.2);
                    z-index: 2000;
                    display: flex;
                    flex-direction: column;
                }
                .sidebar-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 1.2rem;
                    border-bottom: 1px solid rgba(255,255,255,0.2);
                }
                .sidebar-logo { display: flex; align-items: center; gap: 0.7rem; font-weight: 700; color: #fff; }
                .sidebar-logo img { width: 2rem; height: 2rem; border-radius: 0.5rem; background: #fff; object-fit: contain; padding: 0.1rem; }
                .sidebar-close { background: none; border: none; color: #fff; font-size: 1.5rem; cursor: pointer; }
                .sidebar-links { display: flex; flex-direction: column; gap: 0.5rem; padding: 1.2rem; }
                .sidebar-links a { color: #fff; font-weight: 500; padding: 0.8rem 1rem; border-radius: 0.5rem; text-decoration: none; transition: background 0.2s; }
                .sidebar-links a:hover { background: rgba(255,255,255,0.1); }
                .sidebar-btns { display: flex; flex-direction: column; gap: 1rem; padding: 1.2rem; margin-top: auto; }
                .sidebar-btn-app, .sidebar-btn-pro { display: flex; align-items: center; justify-content: center; gap: 0.7rem; padding: 0.8rem; border-radius: 2rem; font-weight: 600; text-decoration: none; transition: all 0.2s; }
                .sidebar-btn-app { border: 2px solid #fff; color: #fff; }
                .sidebar-btn-app:hover { background: #fff; color: #1E79F7; }
                .sidebar-btn-pro { background: linear-gradient(135deg, #3B82F6, #1E40AF); color: #fff; border: 2px solid transparent; }
                .sidebar-btn-pro:hover { filter: brightness(1.1); }

                @media (min-width: 768px) {
                    .header-container { padding: 0 2rem; }
                    .header-menu-toggle { display: none; }
                    .header-nav { display: flex; align-items: center; gap: 1rem; }
                    .header-link { color: rgba(255,255,255,0.9); font-weight: 500; text-decoration: none; padding: 0.5rem; transition: color 0.2s; }
                    .header-link:hover { color: #fff; }
                    .header-actions { display: flex; align-items: center; gap: 0.8rem; }
                    .header-btn-app, .header-btn-pro { display: flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.2rem; border-radius: 2rem; font-weight: 600; text-decoration: none; transition: all 0.2s; font-size: 0.9rem; }
                    .header-btn-app { border: 2px solid rgba(255,255,255,0.8); color: #fff; }
                    .header-btn-app:hover { background: #fff; color: #1E79F7; }
                    .header-btn-pro { background: linear-gradient(135deg, #3B82F6, #1E40AF); color: #fff; }
                    .header-btn-pro:hover { filter: brightness(1.1); }
                }
                @media (min-width: 992px) {
                    .header-nav { gap: 1.5rem; }
                }
                @media (min-width: 1200px) {
                    .header-container { padding: 0 3rem; }
                    .header-nav { gap: 2rem; }
                    .header-link { font-size: 1rem; }
                }
            `}</style>
        </>
    );
}