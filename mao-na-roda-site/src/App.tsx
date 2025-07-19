import './index.css'
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats_section from './components/Stats_section'
import Services_menu from './components/Services_menu'
import Como_funciona from './components/Como_funciona'
import Depoimentos from './components/Depoimentos'
import Advantages from './components/Advantages'
import Cliente_card from './components/Cliente_card'
import Profissional_card from './components/Profissional_card'
import Faq from './components/Faq'
import Final_CTA from './components/Final_CTA'
import Footer from './components/Footer'


export default function App() {
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
      <Header />
      <Hero />
      <Stats_section />
      <Services_menu />
      <Como_funciona />
      <Depoimentos />
      <Advantages />
      <Cliente_card />
      <Profissional_card />
      <Faq />
      <Final_CTA />
      <Footer />
    </>
  )
}

