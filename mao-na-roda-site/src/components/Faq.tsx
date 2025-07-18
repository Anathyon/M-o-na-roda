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
    <section
      id="faq"
      className="faq-section py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F8FAFF 0%, #E3F2FD 50%, #F8FAFF 100%)",
      }}
    >
      {/* SVG grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.05,
          background:
            "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"faq-grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><circle cx=\"10\" cy=\"10\" r=\"1\" fill=\"%231E79F7\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23faq-grid)\"/></svg>')",
        }}
      />
      <div className="container mx-auto relative z-10" style={{ maxWidth: "75rem", padding: "0 5%" }}>
        <div className="text-center mb-16 relative z-10">
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold mb-6"
            style={{
              background: "linear-gradient(135deg, #E8F5FF, #F0F8FF)",
              color: "#1E79F7",
              borderRadius: "2rem",
              border: "2px solid rgba(30,121,247,0.2)",
              boxShadow: "0 0.5rem 1rem rgba(30,121,247,0.1)",
            }}
          >
            <i className="fas fa-question-circle text-[1.2rem]"></i>
            <span>Central de Ajuda</span>
          </div>
          <h2
            className="font-black mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#212529",
              lineHeight: 1.1,
            }}
          >
            Perguntas{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1E79F7, #0D6EFD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Frequentes
            </span>
          </h2>
          <p
            className="text-lg mx-auto"
            style={{
              color: "#6C757D",
              maxWidth: "40rem",
            }}
          >
            Tire suas dúvidas sobre como usar o Mão na Roda
          </p>
        </div>
        <div
          className="faq-grid grid gap-6 mx-auto relative z-10"
          style={{ maxWidth: "50rem" }}
        >
          {faqs.map((faq, idx) => (
            <div
              key={faq.number}
              className="faq-item bg-white rounded-xl shadow-lg border transition-all"
              style={{
                boxShadow: open === idx ? "0 1rem 3rem rgba(30,121,247,0.2)" : "0 0.5rem 2rem rgba(30,121,247,0.1)",
                border: "1px solid rgba(30,121,247,0.1)",
                overflow: "hidden",
              }}
            >
              <button
                className="faq-question w-full flex justify-between items-center px-6 py-6 cursor-pointer transition-all"
                style={{
                  background: "linear-gradient(135deg, #FAFBFF, #F8FAFF)",
                  border: "none",
                  outline: "none",
                }}
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <h4 className="flex items-center gap-3 font-semibold text-gray-900 text-lg m-0">
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: faq.color,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}
                  >
                    {faq.number}
                  </div>
                  {faq.question}
                </h4>
                <i
                  className={`fas fa-chevron-down transition-transform duration-300 text-[1.1rem]`}
                  style={{
                    color: "#1E79F7",
                    transform: open === idx ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                ></i>
              </button>
              <div
                className="faq-answer bg-white transition-all"
                style={{
                  maxHeight: open === idx ? "500px" : "0",
                  overflow: "hidden",
                  padding: open === idx ? "0 1.5rem 1.5rem" : "0 1.5rem 0",
                  transition: "max-height 0.4s ease, padding 0.4s ease",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#6C757D",
                    lineHeight: 1.6,
                    fontSize: "1rem",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}