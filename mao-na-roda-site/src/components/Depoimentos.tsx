const testimonials = [
  {
    name: "Mariana Silva",
    avatar: "M",
    service: "Refrigeração",
    badgeIcon: "fas fa-snowflake",
    badgeColor: "linear-gradient(135deg, #E0F2FE, #BAE6FD)",
    badgeTextColor: "#0369A1",
    quote:
      "Minha geladeira parou de funcionar e encontrei um técnico em refrigeração pelo app. Em 2 horas estava funcionando perfeitamente! Excelente profissional.",
    type: "cliente",
    starsColor: "#F59E0B",
    cardBg: "linear-gradient(135deg, #1E79F7, #0D6EFD)",
    quoteIconBg: "linear-gradient(135deg, #1E79F7, #0D6EFD)",
  },
  {
    name: "Roberto Costa",
    avatar: "R",
    service: "Elétrica",
    badgeIcon: "fas fa-bolt",
    badgeColor: "linear-gradient(135deg, #FEF3C7, #FDE68A)",
    badgeTextColor: "#B45309",
    quote:
      "Contratei um eletricista para instalar um chuveiro elétrico. Chegou no horário, trabalho impecável e preço muito justo. Super recomendo!",
    type: "cliente",
    starsColor: "#F59E0B",
    cardBg: "linear-gradient(135deg, #FBBF24, #F59E0B)",
    quoteIconBg: "linear-gradient(135deg, #FBBF24, #F59E0B)",
  },
  {
    name: "Ana Santos",
    avatar: "A",
    service: "Hidráulica",
    badgeIcon: "fas fa-tint",
    badgeColor: "linear-gradient(135deg, #C7D2FE, #A5B4FC)",
    badgeTextColor: "#4338CA",
    quote:
      "Vazamento no banheiro resolvido em 1 hora! O encanador foi muito profissional e deixou tudo funcionando perfeitamente. Serviço de qualidade!",
    type: "cliente",
    starsColor: "#F59E0B",
    cardBg: "linear-gradient(135deg, #6366F1, #4F46E5)",
    quoteIconBg: "linear-gradient(135deg, #6366F1, #4F46E5)",
  },
  {
    name: "Carlos Oliveira",
    avatar: "C",
    service: "Marcenaria",
    badgeIcon: "fas fa-hammer",
    badgeColor: "linear-gradient(135deg, #D1C4E9, #B39DDB)",
    badgeTextColor: "#512DA8",
    quote:
      "Como profissional, recebi várias oportunidades pelo app. Os clientes são claros nas solicitações e o pagamento é garantido. Recomendo para quem quer aumentar a renda!",
    type: "profissional",
    starsColor: "#F59E0B",
    cardBg: "linear-gradient(135deg, #9575CD, #673AB7)",
    quoteIconBg: "linear-gradient(135deg, #9575CD, #673AB7)",
  },
  {
    name: "Fernanda Lima",
    avatar: "F",
    service: "Carpintaria",
    badgeIcon: "fas fa-tools",
    badgeColor: "linear-gradient(135deg, #FFCCBC, #FFAB91)",
    badgeTextColor: "#D84315",
    quote:
      "Sou carpinteira e uso o app para encontrar novos clientes. O sistema facilita o contato e agiliza o serviço. Muito bom para profissionais!",
    type: "profissional",
    starsColor: "#F59E0B",
    cardBg: "linear-gradient(135deg, #FF8A65, #FF5722)",
    quoteIconBg: "linear-gradient(135deg, #FF8A65, #FF5722)",
  },
  {
    name: "Pedro Martins",
    avatar: "P",
    service: "Limpeza",
    badgeIcon: "fas fa-broom",
    badgeColor: "linear-gradient(135deg, #A5D6A7, #81C784)",
    badgeTextColor: "#2E7D32",
    quote:
      "Encontrei ótimos clientes pelo app e consegui fechar vários serviços de limpeza pós-obra. Recomendo para quem quer trabalhar com segurança e praticidade.",
    type: "profissional",
    starsColor: "#F59E0B",
    cardBg: "linear-gradient(135deg, #66BB6A, #43A047)",
    quoteIconBg: "linear-gradient(135deg, #66BB6A, #43A047)",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="testimonials-section"
    >
      {/* SVG background pattern */}
      <div
        className="testimonials-bg-pattern"
      />
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <i className="fas fa-star"></i>
            <span>Depoimentos Verificados</span>
          </div>
          <h2 className="testimonials-title">
            O que nossos{" "}
            <span className="testimonials-title-gradient">
              usuários dizem
            </span>
          </h2>
          <p className="testimonials-subtitle">
            Mais de 50.000 famílias e profissionais já usam a Mão na Roda para transformar seus lares e suas carreiras.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="testimonial-card"
            >
              {/* Decorative circle */}
              <div
                className="testimonial-card-circle"
                style={{
                  background: t.cardBg,
                }}
              />
              <div className="testimonial-content">
                <div
                  className="testimonial-quote-icon"
                  style={{
                    background: t.quoteIconBg,
                  }}
                >
                  <i className="fas fa-quote-left"></i>
                </div>
                <div
                  className="testimonial-stars"
                  style={{
                    color: t.starsColor,
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="testimonial-quote">
                  "{t.quote}"
                </p>
              </div>
              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={{
                    background: t.cardBg,
                    padding: "1.3rem",
                  }}
                >
                  {t.avatar}
                </div>
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">
                    {t.name}
                  </h4>
                  <div
                    className="testimonial-service-badge"
                    style={{
                      background: t.badgeColor,
                      color: t.badgeTextColor,
                    }}
                  >
                    <i className={t.badgeIcon}></i>
                    <span>{t.service}</span>
                    <span className="testimonial-badge-type">
                      {t.type === "profissional" ? "Profissional" : "Cliente"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <style>{`
        .testimonials-section {
          padding: 5rem 0 4rem 0;
          overflow: hidden;
          position: relative;
          top: 6rem;
          background: linear-gradient(135deg, #E8F5E8 0%, #F0FFF0 50%, #E8F5E8 100%);
          margin-top: 3%;
        }
        .testimonials-bg-pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.08;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stars-pattern" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="0.5" fill="%231E79F7"/><circle cx="5" cy="25" r="0.3" fill="%231E79F7"/><circle cx="25" cy="8" r="0.4" fill="%231E79F7"/></pattern></defs><rect width="100" height="100" fill="url(%23stars-pattern)"/></svg>');
        }
        .testimonials-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
          padding: 0 2rem;
        }
        .testimonials-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .testimonials-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.5rem;
          border-radius: 2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          color: #fff;
          box-shadow: 0 0.5rem 1.5rem rgba(30, 121, 247, 0.15);
          border: 2px solid rgba(255,255,255,0.2);
          font-size: 1.1rem;
        }
        .testimonials-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #212529;
          margin-bottom: 1rem;
          line-height: 1.1;
        }
        .testimonials-title-gradient {
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .testimonials-subtitle {
          color: #6C757D;
          font-size: 1.2rem;
          margin-bottom: 0;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          width: 100%;
        }
        .testimonial-card {
          background: #fff;
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.08);
          border: 2px solid rgba(30,121,247,0.08);
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1.2rem 3.5rem rgba(30,121,247,0.15);
        }
        .testimonial-card-circle {
          position: absolute;
          top: -1rem;
          right: -1rem;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          opacity: 0.12;
          z-index: 1;
        }
        .testimonial-content {
          position: relative;
          z-index: 2;
        }
        .testimonial-quote-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: #fff;
          font-size: 1.3rem;
          box-shadow: 0 0.5rem 1rem rgba(30,121,247,0.18);
        }
        .testimonial-quote-icon i {
          color: #fff;
        }
        .testimonial-stars {
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        .testimonial-quote {
          color: #212529;
          font-size: 1.05rem;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 1.5rem;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 2px solid rgba(30,121,247,0.08);
        }
        .testimonial-avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          color: #fff;
          font-weight: bold;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .testimonial-author-info {
          display: flex;
          flex-direction: column;
        }
        .testimonial-author-name {
          font-weight: 600;
          color: #212529;
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
        }
        .testimonial-service-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border-radius: 1rem;
          padding: 0.3rem 0.75rem;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .testimonial-badge-type {
          font-weight: 400;
          font-size: 0.9em;
          margin-left: 0.5em;
          opacity: 0.8;
        }
        /* Tablet */
        @media (max-width: 1024px) {
          .testimonials-section {
            padding: 2.5rem 0.5rem;
            margin-top: 2rem;
          }
          .testimonials-title {
            font-size: 2rem;
          }
          .testimonials-grid {
            gap: 1.2rem;
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonial-card {
            padding: 1.2rem;
            min-width: 0;
            max-width: 98vw;
            margin: 0 auto;
          }
        }
        /* Mobile */
        @media (max-width: 600px) {
          .testimonials-section {
            padding: 1.5rem 0.2rem;
            margin-top: 1rem;
          }
          .testimonials-container {
            padding: 0 0.2rem;
          }
          .testimonials-title {
            font-size: 1.3rem;
            margin-bottom: 0.7rem;
          }
          .testimonials-subtitle {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          .testimonials-grid {
            gap: 1rem;
            grid-template-columns: 1fr;
          }
          .testimonial-card {
            padding: 1rem;
            min-width: 0;
            max-width: 98vw;
            margin: 0 auto;
          }
          .testimonial-avatar {
            width: 2.2rem;
            height: 2.2rem;
            font-size: 0.95rem;
          }
          .testimonial-service-badge {
            font-size: 0.8rem;
            padding: 0.15rem 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}