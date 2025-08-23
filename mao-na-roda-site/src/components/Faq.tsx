import { useState } from "react";

const faqs = [
  {
    number: 1,
    color: "linear-gradient(135deg, #1E79F7, #0D6EFD)",
    question: "Como funciona a contratação de serviços?",
    answer:
      "É muito simples! Baixe o app, crie sua conta, escolha o serviço desejado, selecione um profissional próximo a você e agende. O pagamento é feito apenas após a conclusão satisfatória do serviço.",
  },
  {
    number: 2,
    color: "linear-gradient(135deg, #10B981, #059669)",
    question: "Os profissionais são verificados?",
    answer:
      "Sim! Todos os profissionais passam por um rigoroso processo de verificação que inclui checagem de documentos, antecedentes criminais e avaliação de experiência profissional.",
  },
  {
    number: 3,
    color: "linear-gradient(135deg, #17A2B8, #0B8FAA)",
    question: "E se eu não ficar satisfeito com o serviço?",
    answer:
      "Oferecemos garantia de satisfação. Se você não ficar satisfeito, entre em contato conosco em até 24h e resolveremos a situação, incluindo reembolso quando necessário.",
  },
  {
    number: 4,
    color: "linear-gradient(135deg, #F59E0B, #D97706)",
    question: "O app é gratuito?",
    answer:
      "Sim! O download e uso do app são 100% gratuitos. Você paga apenas pelos serviços contratados, sem taxas escondidas ou mensalidades.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-bg-pattern" />
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-badge">
            <i className="fas fa-question-circle"></i>
            <span>Central de Ajuda</span>
          </div>
          <h2 className="faq-title">
            Perguntas <span className="faq-title-gradient">Frequentes</span>
          </h2>
          <p className="faq-subtitle">
            Tire suas dúvidas sobre como usar o Mão na Roda
          </p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, idx) => (
            <div
              key={faq.number}
              className={`faq-item${open === idx ? " faq-item-open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-answer-${faq.number}`}
              >
                <h4
                  className={`faq-question-title${open === idx ? " open" : ""}`}
                >
                  <div className="faq-number" style={{ background: faq.color }}>
                    {faq.number}
                  </div>
                  {faq.question}
                </h4>
                <i
                  className="fas fa-chevron-down faq-chevron"
                  style={{
                    transform: open === idx ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                ></i>
              </button>
              <div
                id={`faq-answer-${faq.number}`}
                className="faq-answer"
                style={{
                  maxHeight: open === idx ? "200px" : "0",
                }}
              >
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .faq-section {
          padding: 5rem 1rem;
          background: #f8f9fa;
          position: relative;
          top: 6rem;
          overflow: hidden;
        }
        .faq-bg-pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.04;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="faq-grid" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%231E79F7"/></pattern></defs><rect width="100" height="100" fill="url(%23faq-grid)"/></svg>');
        }
        .faq-container {
          max-width: 800px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }
        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .faq-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: 2rem;
          font-weight: 600;
          background: #fff;
          color: #1E79F7;
          border: 1px solid #dee2e6;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }
        .faq-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #212529;
          margin-bottom: 1rem;
        }
        .faq-title-gradient {
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .faq-subtitle {
          color: #6C757D;
          font-size: 1.125rem;
          margin: 0 auto;
          max-width: 600px;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .faq-item {
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
          border: 1px solid #e9ecef;
          overflow: hidden;
          transition: box-shadow 0.3s;
        }
        .faq-item-open {
          box-shadow: 0 8px 24px rgba(30,121,247,0.1);
          border-color: rgba(30,121,247,0.2);
        }
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          text-align: left;
        }
        .faq-question-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 600;
          color: #343a40;
          font-size: 1.1rem;
          margin: 0;
          transition: color 0.3s;
        }
        .faq-question-title.open {
          color: #0D6EFD;
        }
        .faq-number {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .faq-chevron {
          color: #0D6EFD;
          font-size: 1rem;
          transition: transform 0.3s ease-in-out;
        }
        .faq-answer {
          transition: max-height 0.4s ease-in-out;
          overflow: hidden;
        }
        .faq-answer-content {
          padding: 0 1.5rem 1.25rem 4.75rem; /* Aligns with question text */
        }
        .faq-answer p {
          color: #495057;
          font-size: 1rem;
          margin: 0;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .faq-section {
            padding: 4rem 1rem;
          }
          .faq-title {
            font-size: 2rem;
          }
          .faq-subtitle {
            font-size: 1rem;
          }
          .faq-question-title {
            font-size: 1rem;
          }
          .faq-answer-content {
            padding: 0 1.25rem 1.25rem 4.25rem;
          }
        }

        @media (max-width: 576px) {
          .faq-section {
            top: 4rem;
          }
          .faq-question {
            padding: 1rem;
          }
          .faq-question-title {
            gap: 0.75rem;
          }
          .faq-number {
            width: 2rem;
            height: 2rem;
            font-size: 0.9rem;
          }
          .faq-answer-content {
            padding: 0 1rem 1rem 3.75rem;
          }
        }
      `}</style>
    </section>
  );
}