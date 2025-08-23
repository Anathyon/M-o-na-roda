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
                <div className="como-funciona-step-connector" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <style>{`
        .como-funciona-section {
          padding: 5rem 1rem;
          background: linear-gradient(135deg, #fafbff 0%, #f8f9fa 50%, #fff 100%);
          position: relative;
          top: 6rem;
        }
        .como-funciona-container {
          max-width: 1140px;
          margin: 0 auto;
        }
        .como-funciona-header {
          text-align: center;
          margin-bottom: 3.5rem;
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
          border: 2px solid #e3eefd;
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
          align-items: flex-start;
          justify-content: center;
          gap: 2rem;
        }
        .como-funciona-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 280px;
        }
        .como-funciona-step-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #e8e8e8, #ddd);
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
          border: 3px solid #fff;
          box-shadow: 0 2px 8px rgba(30,121,247,0.12);
        }
        .como-funciona-step-card {
          background: #fff;
          border-radius: 1.2rem;
          padding: 1.5rem;
          box-shadow: 0 2px 12px rgba(30,121,247,0.07);
          border: 1px solid #e9ecef;
          width: 100%;
        }
        .como-funciona-step-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #212529;
          margin-bottom: 0.5rem;
        }
        .como-funciona-step-card p {
          color: #6C757D;
          font-size: 1rem;
          line-height: 1.5;
        }
        .como-funciona-step-connector {
          flex-shrink: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #cddcff 0%, #a3baff 100%);
          border-radius: 2px;
          align-self: center;
          margin-top: 40px; /* Aligns with icon center */
        }
        
        /* Tablet */
        @media (max-width: 992px) {
          .como-funciona-steps {
            gap: 1.5rem;
          }
          .como-funciona-step-connector {
            width: 40px;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .como-funciona-section {
            padding: 3rem 1rem;
          }
          .como-funciona-title {
            font-size: 2rem;
          }
          .como-funciona-subtitle {
            font-size: 1.1rem;
          }
          .como-funciona-steps {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .como-funciona-step {
            max-width: 400px; /* Prevents card from being too wide on mobile */
          }
          .como-funciona-step-connector {
            width: 4px;
            height: 40px;
            margin: 0; /* Reset margin */
          }
        }
      `}</style>
    </section>
  );
}