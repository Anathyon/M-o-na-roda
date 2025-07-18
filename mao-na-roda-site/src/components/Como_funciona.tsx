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
      className="py-24 bg-gradient-to-br from-[#fafbff] via-[#f8f9fa] to-white relative"
    >
      <div className="w-full mx-auto" style={{ maxWidth: "75rem", padding: "0 5%" }}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-[#1E79F7] bg-white border-2 border-[#1E79F7] mb-4 shadow"
            style={{
              fontSize: "1rem",
              boxShadow: "0 4px 15px rgba(30,121,247,0.08)",
            }}
          >
            <i className="fas fa-cogs"></i>
            Como Funciona
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Simples, Rápido e Eficiente</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Encontre o profissional ideal em apenas 3 passos
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8 relative">
          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center text-center relative z-10">
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
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="bg-white rounded-xl px-6 py-6 shadow-md border border-gray-100 w-[250px] md:w-[220px]">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-base">{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block"
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
    </section>
  );
}