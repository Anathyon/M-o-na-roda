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

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="como-funciona-section">
      <div className="como-funciona-container">
        <div className="como-funciona-header">
          <div className="como-funciona-badge">
            <i className="fas fa-cogs"></i>
            Como Funciona
          </div>
          <h2 className="como-funciona-title">Simples, Rápido e Eficiente</h2>
          <p className="como-funciona-subtitle">
            Encontre o profissional ideal em apenas 3 passos
          </p>
        </div>
        <div className="como-funciona-steps">
          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              <div className="como-funciona-step">
                <div className="como-funciona-step-icon">
                  <i className={step.icon}></i>
                  <span className="como-funciona-step-number">{step.number}</span>
                </div>
                <div className="como-funciona-step-card">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <>
                  <div className="como-funciona-step-connector desktop" />
                  <div className="como-funciona-step-connector mobile" />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <style>{`
        .como-funciona-section {
          padding: 5rem 0 4rem 0;
          background: linear-gradient(135deg, #fafbff 0%, #f8f9fa 50%, #fff 100%);
          position: relative;
          top: 6rem;
        }
        .como-funciona-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .como-funciona-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .como-funciona-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.5rem;
          border-radius: 2rem;
          font-weight: 600;
          background: #fff;
          color: #1E79F7;
          border: 2px solid #1E79F7;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(30,121,247,0.08);
          margin-bottom: 1.5rem;
        }
        .como-funciona-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #212529;
          margin-bottom: 1rem;
        }
        .como-funciona-subtitle {
          font-size: 1.2rem;
          color: #6C757D;
          margin-bottom: 0;
        }
        .como-funciona-steps {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .como-funciona-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          min-width: 220px;
          max-width: 260px;
          flex: 1 1 220px;
        }
        .como-funciona-step-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #1E79F7;
          box-shadow: 0 4px 16px rgba(30,121,247,0.08);
          margin-bottom: 1rem;
          position: relative;
        }
        .como-funciona-step-number {
          position: absolute;
          bottom: -12px;
          right: -12px;
          background: #1E79F7;
          color: #fff;
          border-radius: 50%;
          width: 2rem;
          height: 2rem;
          font-size: 1.1rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #fff;
          box-shadow: 0 2px 8px rgba(30,121,247,0.12);
        }
        .como-funciona-step-card {
          background: #fff;
          border-radius: 1.2rem;
          padding: 1.2rem 1rem;
          box-shadow: 0 2px 12px rgba(30,121,247,0.07);
          border: 1.5px solid #e3eefd;
          width: 100%;
          min-width: 0;
        }
        .como-funciona-step-card h3 {
          font-size: 1.1rem;
          font-weight: bold;
          color: #212529;
          margin-bottom: 0.5rem;
        }
        .como-funciona-step-card p {
          color: #6C757D;
          font-size: 1rem;
        }
        .como-funciona-step-connector.desktop {
          display: block;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #1E79F7 0%, #0D6EFD 100%);
          border-radius: 2px;
          align-self: center;
          margin: 0 1rem;
        }
        .como-funciona-step-connector.mobile {
          display: none;
        }
        /* Tablet */
        @media (max-width: 1024px) {
          .como-funciona-title {
            font-size: 2rem;
          }
          .como-funciona-subtitle {
            font-size: 1.1rem;
          }
          .como-funciona-steps {
            gap: 1.2rem;
          }
          .como-funciona-step {
            min-width: 180px;
            max-width: 220px;
          }
        }
        /* Mobile */
        @media (max-width: 600px) {
          .como-funciona-section {
            padding: 2rem 0.5rem;
          }
          .como-funciona-header {
            padding: 0 0.5rem;
          }
          .como-funciona-title {
            font-size: 1.3rem;
            margin-bottom: 0.7rem;
          }
          .como-funciona-subtitle {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          .como-funciona-steps {
            flex-direction: column;
            gap: 1.2rem;
            align-items: stretch;
            position: relative;
            right: 11%;
          }
          .como-funciona-step {
            min-width: 0;
            max-width: 98vw;
            margin: 0 auto;
          }
          .como-funciona-step-icon {
            width: 56px;
            height: 56px;
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
          }
          .como-funciona-step-number {
            width: 1.6rem;
            height: 1.6rem;
            font-size: 0.9rem;
            right: -0.7rem;
            bottom: -0.7rem;
          }
          .como-funciona-step-card {
            padding: 1rem 0.5rem;
            width: 95vw;
            min-width: 0;
            box-sizing: border-box;
          }
          .como-funciona-step-connector.desktop {
            display: none;
          }
          .como-funciona-step-connector.mobile {
            display: block;
            width: 0.3rem;
            height: 2rem;
            margin: 0.5rem auto;
            background: linear-gradient(180deg, #1E79F7 0%, #0D6EFD 100%);
            border-radius: 2px;
          }
        }
      `}</style>
    </section>
  );
}