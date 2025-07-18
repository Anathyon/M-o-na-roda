import './index.css'
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
import Footer from './components/Footer'


export default function App() {

  return (
    <>   
      <Header/>
      <Hero/>   
      <Stats_section/>
      <Services_menu/>
      <Como_funciona/>
      <Depoimentos/>
      <Advantages/>
      <Cliente_card/>
      <Profissional_card/>
      <Faq/>
      <Footer/>
    </>
  )
}

