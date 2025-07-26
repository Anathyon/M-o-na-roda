import React from "react";

const steps = [
  {
    icon: "fas fa-mobile-alt",
    number: 1,
    title: "Solicite o Serviço",
    desc: "Baixe o app e descreva o que você precisa. É rápido e totalmente gratuito!",
  },
  {
    icon: "fas fa-users",
    number: 2,
    title: "Receba Propostas",
    desc: "Profissionais qualificados entram em contato com você em instantes!",
  },
  {
    icon: "fas fa-thumbs-up",
    number: 3,
    title: "Escolha e Contrate",
    desc: "Compare preços, avaliações e escolha o melhor profissional para você!",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 bg-gradient-to-br from-[#fafbff] via-[#f8f9fa] to-white relative top-[6rem]"
    >
      <div className="w-full mx-auto" style={{ maxWidth: "75rem", padding: "2% 5%" }}>
        
        <div className="text-center mb-12 flex flex-col items-center justify-center relative left-16">

          <div className="inline-flex items-center gap-2 rounded-full font-semibold text-[#1E79F7] bg-white border-2 border-[#1E79F7] shadow"
            style={{
              fontSize: "1rem",
              boxShadow: "0 4px 15px rgba(30,121,247,0.08)",
              padding:"0.7%",
              marginBottom:"1.5%"
            }}
          >
            <i className="fas fa-cogs"></i>
            Como Funciona
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Simples, Rápido e Eficiente</h2>

          <p className="text-lg text-gray-500 max-w-xl mx-auto relative ">
            Encontre o profissional ideal em apenas 3 passos
          </p>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8 relative">
          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center text-center relative z-10 left-20">
                <div
                  className="flex items-center justify-center rounded-full mb-4 relative"
                  style={{
                    width: 80,
                    height: 80,
                    background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
                    boxShadow: "0 4px 16px rgba(30,121,247,0.08)",
                  }}
                >
                  <i
                    className={`${step.icon} text-[2rem]`}
                    style={{ color: "#1E79F7" }}
                  />
                  <span
                    className="absolute -bottom-3 -right-3 bg-[#1E79F7] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow"
                    style={{
                      fontSize: "1.1rem",
                      border: "2px solid #fff",
                      margin:"2% 5% 10% 8%"
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                
                <div className="bg-white rounded-xl px-6 py-6 shadow-md border border-gray-100 w-[250px] md:w-[220px]" style={{padding: "auto"}}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-base">{step.desc}</p>
                </div>

              </div>
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block relative left-20"
                  style={{
                    width: 60,
                    height: 4,
                    background: "linear-gradient(90deg, #1E79F7 0%, #0D6EFD 100%)",
                    borderRadius: 2,
                    margin: "0 1rem",
                    alignSelf: "center",
                  }}
                />
              )}
              {i < steps.length - 1 && (
                <div
                  className="block md:hidden w-1 h-8 my-2"
                  style={{
                    background: "linear-gradient(180deg, #1E79F7 0%, #0D6EFD 100%)",
                    borderRadius: 2,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) { 
                  #como-funciona {
                    padding: 2rem 0.5rem !important;
                  }
                  #como-funciona .text-center {
                    left: 0 !important;
                    padding: 0 0.5rem !important;
                  }
                  #como-funciona h2 {
                    font-size: 2rem !important;
                    margin-bottom: 0.8rem !important;
                  }
                  #como-funciona p {
                    font-size: 1rem !important;
                    margin-bottom: 1rem !important;
                  }
                  #como-funciona .flex-col {
                    gap: 1.2rem !important;
                  }
                  #como-funciona .flex-col > div {
                    left: 0 !important;
                    width: 100% !important;
                    max-width: 95vw !important;
                    margin: 0 auto !important;
                  }
                  #como-funciona .rounded-full {
                    width: 56px !important;
                    height: 56px !important;
                    font-size: 1.3rem !important;
                    margin-bottom: 0.5rem !important;
                  }
                  #como-funciona .absolute {
                    width: 2rem !important;
                    height: 2rem !important;
                    font-size: 0.9rem !important;
                    right: -0.7rem !important;
                    bottom: -0.7rem !important;
                  }
                  #como-funciona .bg-white {
                    padding: 1rem 0.5rem !important;
                    width: 95vw !important;
                    min-width: 0 !important;
                    box-sizing: border-box !important;
                  }
                  #como-funciona .block.md\\:hidden {
                    width: 0.3rem !important;
                    height: 2rem !important;
                    margin: 0.5rem auto !important;
                  }
          }
            @media (min-width: 481px) and (max-width: 1024px) {
                #como-funciona {
                  padding: 2.5rem 1rem !important;
                }
                #como-funciona .text-center {
                  left: 0 !important;
                  padding: 0 1rem !important;
                }
                #como-funciona h2 {
                  font-size: 2.5rem !important;
                  margin-bottom: 1rem !important;
                }
                #como-funciona p {
                  font-size: 1.2rem !important;
                  margin-bottom: 1.2rem !important;
                }
                #como-funciona .flex-col {
                  gap: 1.5rem !important;
                }
                #como-funciona .flex-col > div {
                  left: 0 !important;
                  width: 80vw !important;
                  max-width: 350px !important;
                  margin: 0 auto !important;
                }
                #como-funciona .rounded-full {
                  width: 64px !important;
                  height: 64px !important;
                  font-size: 1.5rem !important;
                  margin-bottom: 0.7rem !important;
                }
                #como-funciona .absolute {
                  width: 2.5rem !important;
                  height: 2.5rem !important;
                  font-size: 1rem !important;
                  right: -1rem !important;
                  bottom: -1rem !important;
                }
                #como-funciona .bg-white {
                  padding: 1.2rem 1rem !important;
                  width: 80vw !important;
                  min-width: 0 !important;
                  box-sizing: border-box !important;
                }
                #como-funciona .block.md\\:hidden {
                  width: 0.4rem !important;
                  height: 2.5rem !important;
                  margin: 0.7rem auto !important;
            }     
      `}</style>
    </section>
  )
}