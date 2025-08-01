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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      {/* SVG grid background */}
      <div className="faq-bg-pattern" />
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-badge">
            <i className="fas fa-question-circle"></i>
            <span>Central de Ajuda</span>
          </div>
          <h2 className="faq-title">
            Perguntas{" "}
            <span className="faq-title-gradient">Frequentes</span>
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
                <h4 className={`faq-question-title${open === idx ? " open" : ""}`}>
                  <div
                    className="faq-number"
                    style={{ background: faq.color }}
                  >
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
                  maxHeight: open === idx ? "500px" : "0",
                  padding: open === idx ? "0 1.5rem 1.5rem" : "0 1.5rem 0",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .faq-section {
          padding: 4rem 0 4rem 0;
          background: linear-gradient(135deg, #F8FAFF 0%, #E3F2FD 50%, #F8FAFF 100%);
          position: relative;
          top: 6rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .faq-bg-pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.05;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="faq-grid" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%231E79F7"/></pattern></defs><rect width="100" height="100" fill="url(%23faq-grid)"/></svg>');
        }
        .faq-container {
          max-width: 75rem;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 10;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .faq-header {
          text-align: center;
          margin-bottom: 2.5rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .faq-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.5rem;
          border-radius: 2rem;
          font-weight: 600;
          background: linear-gradient(135deg, #E8F5FF, #F0F8FF);
          color: #1E79F7;
          border: 2px solid rgba(30,121,247,0.2);
          box-shadow: 0 0.5rem 1rem rgba(30,121,247,0.1);
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        .faq-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #212529;
          margin-bottom: 1rem;
          line-height: 1.1;
        }
        .faq-title-gradient {
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .faq-subtitle {
          color: #6C757D;
          font-size: 1.2rem;
          margin-bottom: 0;
          max-width: 40rem;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          width: 100%;
          max-width: 50rem;
          margin: 0 auto;
        }
        .faq-item {
          background: #fff;
          border-radius: 1.2rem;
          box-shadow: 0 0.5rem 2rem rgba(30,121,247,0.1);
          border: 1px solid rgba(30,121,247,0.1);
          overflow: hidden;
          transition: box-shadow 0.3s;
        }
        .faq-item-open {
          box-shadow: 0 1rem 3rem rgba(30,121,247,0.2);
        }
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 1.5rem 1.5rem 1.5rem;
          background: linear-gradient(135deg, #FAFBFF, #F8FAFF);
          border: none;
          outline: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .faq-question-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 600;
          color: #212529;
          font-size: 1.1rem;
          margin: 0;
        }
        .faq-question-title.open {
          color: #1E79F7;
        }
        .faq-number {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
        }
        .faq-chevron {
          color: #1E79F7;
          font-size: 1.1rem;
          transition: transform 0.3s;
        }
        .faq-answer {
          background: #fff;
          transition: max-height 0.4s ease, padding 0.4s ease;
          overflow: hidden;
        }
        .faq-answer p {
          color: #6C757D;
          font-size: 1rem;
          margin: 0;
          line-height: 1.6;
        }
        /* Tablet */
        @media (max-width: 1024px) {
          .faq-title {
            font-size: 2rem;
          }
          .faq-subtitle {
            font-size: 1.1rem;
          }
        }
        /* Mobile */
        @media (max-width: 600px) {
          .faq-section {
            padding: 2.5rem 0.5rem;
          }
          .faq-title {
            font-size: 1.3rem;
          }
          .faq-subtitle {
            font-size: 1rem;
          }
          .faq-grid {
            gap: 1rem;
            max-width: 98vw;
          }
          .faq-item {
            border-radius: 1rem;
          }
          .faq-question {
            padding: 1rem;
          }
          .faq-number {
            width: 2rem;
            height: 2rem;
            font-size: 0.95rem;
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
}