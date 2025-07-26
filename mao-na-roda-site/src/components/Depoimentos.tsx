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
    badgeTextColor: "#F59E0B",
    quote:
      "Contratei um eletricista para instalar um chuveiro elétrico. Chegou no horário, trabalho impecável e preço muito justo. Super recomendo!",
    type: "cliente",
    starsColor: "#F59E0B",
    cardBg: "linear-gradient(135deg, #17A2B8, #0B8FAA)",
    quoteIconBg: "#1E79F7",
  },
  {
    name: "Ana Santos",
    avatar: "A",
    service: "Hidráulica",
    badgeIcon: "fas fa-tint",
    badgeColor: "linear-gradient(135deg, #4FC3F7, #29B6F6)",
    badgeTextColor: "#e6e6e6",
    quote:
      "Vazamento no banheiro resolvido em 1 hora! O encanador foi muito profissional e deixou tudo funcionando perfeitamente. Serviço de qualidade!",
    type: "cliente",
    starsColor: "#F59E0B",
    cardBg: "#3d31e4",
    quoteIconBg: "#1E79F7",
  },
  {
    name: "Carlos Oliveira",
    avatar: "C",
    service: "Marcenaria",
    badgeIcon: "fas fa-hammer",
    badgeColor: "linear-gradient(135deg, #8D6E63, #795548)",
    badgeTextColor: "#cfcc00",
    quote:
      "Como profissional, recebi várias oportunidades pelo app. Os clientes são claros nas solicitações e o pagamento é garantido. Recomendo para quem quer aumentar a renda!",
    type: "profissional",
    starsColor: "#F59E0B",
    cardBg: "#aa700b",
    quoteIconBg: "#1E79F7",
  },
  {
    name: "Fernanda Lima",
    avatar: "F",
    service: "Carpintaria",
    badgeIcon: "fas fa-tools",
    badgeColor: "linear-gradient(135deg, #ff5c5c, #f75454)",
    badgeTextColor: "#ccdae9",
    quote:
      "Sou carpinteira e uso o app para encontrar novos clientes. O sistema facilita o contato e agiliza o serviço. Muito bom para profissionais!",
    type: "profissional",
    starsColor: "#F59E0B",
    cardBg: "#d35710",
    quoteIconBg: "#1E79F7",
  },
  {
    name: "Pedro Martins",
    avatar: "P",
    service: "Instalação",
    badgeIcon: "fas fa-plug",
    badgeColor: "linear-gradient(135deg, #FFD700, #FFA500)",
    badgeTextColor: "#d35710",
    quote:
      "Encontrei ótimos clientes pelo app e consegui fechar vários serviços de instalação elétrica. Recomendo para quem quer trabalhar com segurança e praticidade.",
    type: "profissional",
    starsColor: "#F59E0B",
    cardBg: "#c90c0c",
    quoteIconBg: "#1E79F7",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="py-24 overflow-hidden relative top-[6rem]"
      style={{
        background:
          "linear-gradient(135deg, #E8F5E8 0%, #F0FFF0 50%, #E8F5E8 100%)",
        marginTop: "3%"
      }}
    >
      {/* SVG background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.1,
          background:
            "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"stars-pattern\" width=\"30\" height=\"30\" patternUnits=\"userSpaceOnUse\"><circle cx=\"15\" cy=\"15\" r=\"0.5\" fill=\"%231E79F7\"/><circle cx=\"5\" cy=\"25\" r=\"0.3\" fill=\"%231E79F7\"/><circle cx=\"25\" cy=\"8\" r=\"0.4\" fill=\"%231E79F7\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23stars-pattern)\"/></svg>')",
        }}
      />
      <div className="w-full mx-auto relative z-10 left-20" style={{ maxWidth: "75rem", padding: "2% 5%" }}>
        <div className="text-center mb-16 relative z-10">
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold mb-6 shadow"
            style={{
              background: "linear-gradient(135deg, #1E79F7, #0D6EFD)",
              color: "white",
              borderRadius: "2rem",
              boxShadow: "0 0.5rem 1.5rem rgba(30, 121, 247, 0.3)",
              border: "2px solid rgba(255,255,255,0.2)",
              padding: "1%",
            }}
          >
            <i className="fas fa-star text-[1.1rem]"></i>
            <span>Depoimentos Verificados</span>
          </div>
          <h2
            className="font-black mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#212529",
              lineHeight: 1.1,
            }}
          >
            O que nossos{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1E79F7, #0D6EFD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              usuários dizem
            </span>
          </h2>
          <p
            className="text-lg mx-auto"
            style={{
              color: "#6C757D",
              marginBottom:"2%",
            }}
          >
            Mais de 50.000 famílias e profissionais já usam a Mão na Roda para transformar seus lares e suas carreiras.
          </p>
        </div>
        <div
          className="grid gap-8 relative z-10"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="testimonial-card relative overflow-hidden transition-all"
              style={{
                background: "white",
                borderRadius: "1.5rem",
                padding: "2rem",
                boxShadow: "0 1rem 3rem rgba(0,0,0,0.1)",
                border: "2px solid rgba(30,121,247,0.1)",
              }}
            >
              {/* Decorative circle */}
              <div
                className="absolute"
                style={{
                  top: "-1rem",
                  right: "-1rem",
                  width: "4rem",
                  height: "4rem",
                  background: t.cardBg,
                  borderRadius: "50%",
                  opacity: 0.1,
                }}
              />
              <div className="testimonial-content relative z-10">
                <div
                  className="quote-icon flex items-center justify-center mb-4 shadow"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    background: t.quoteIconBg,
                    borderRadius: "50%",
                    boxShadow: "0 0.5rem 1rem rgba(30,121,247,0.3)",
                  }}
                >
                  <i className="fas fa-quote-left text-white text-lg"></i>
                </div>
                <div
                  className="stars mb-4"
                  style={{
                    color: t.starsColor,
                    fontSize: "1.1rem",
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p
                  className="italic mb-6"
                  style={{
                    color: "#212529",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  "{t.quote}"
                </p>
              </div>
              <div
                className="testimonial-author flex items-center gap-4 pt-4 border-t"
                style={{
                  borderTop: "2px solid rgba(30,121,247,0.1)",
                }}
              >
                <div
                  className="flex items-center justify-center font-bold"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    background: t.cardBg,
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                >
                  {t.avatar}
                </div>
                <div className="author-info">
                  <h4
                    className="font-semibold mb-1"
                    style={{
                      color: "#212529",
                      fontSize: "1.1rem",
                    }}
                  >
                    {t.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <div
                      className="author-badge flex items-center gap-1 font-semibold w-auto"
                      style={{
                        background: t.badgeColor,
                        color: t.badgeTextColor,
                        padding: "0.25rem 0.75rem",
                        borderRadius: "1rem",
                        fontSize: "0.85rem",
                      }}
                    >
                      <i className={t.badgeIcon} style={{ fontSize: "0.8rem" }}></i>
                      <span>{t.service}</span>
                      <span style={{
                        fontWeight: 400,
                        fontSize: "0.8em",
                        marginLeft: "0.5em",
                        opacity: 0.7
                      }}>
                        {t.type === "profissional" ? "Profissional" : "Cliente"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {    
                #depoimentos {
                padding: 2rem 0.5rem !important;
                margin-top: 1rem !important;
              }
              #depoimentos .text-center {
                padding: 0 0.5rem !important;
              }
              #depoimentos h2 {
                font-size: 2rem !important;
                margin-bottom: 0.8rem !important;
              }
              #depoimentos p {
                font-size: 1rem !important;
                margin-bottom: 1rem !important;
                max-width: 95vw !important;
              }
              #depoimentos .grid {
                gap: 1.2rem !important;
                grid-template-columns: 1fr !important;
              }
              .testimonial-card {
                padding: 1.2rem !important;
                min-width: 0 !important;
                max-width: 98vw !important;
                margin: 0 auto !important;
              }
              .testimonial-author > div {
                width: 2.2rem !important;
                height: 2.2rem !important;
                font-size: 0.95rem !important;
              }
              .author-badge {
                font-size: 0.8rem !important;
                padding: 0.15rem 0.5rem !important;
              }
        }
                  @media (min-width: 481px) and (max-width: 1024px) {                        
                            #depoimentos {
                            padding: 2.5rem 1rem !important;
                            margin-top: 2rem !important;
                          }
                          #depoimentos .text-center {
                            padding: 0 1rem !important;
                          }
                          #depoimentos h2 {
                            font-size: 2.5rem !important;
                            margin-bottom: 1rem !important;
                          }
                          #depoimentos p {
                            font-size: 1.15rem !important;
                            margin-bottom: 1.2rem !important;
                            max-width: 80vw !important;
                          }
                          #depoimentos .grid {
                            gap: 1.5rem !important;
                            grid-template-columns: repeat(2, 1fr) !important;
                          }
                          .testimonial-card {
                            padding: 1.5rem !important;
                            min-width: 160px !important;
                            max-width: 45vw !important;
                            margin: 0 auto !important;
                          }
                          .testimonial-author > div {
                            width: 2.5rem !important;
                            height: 2.5rem !important;
                            font-size: 1rem !important;
                          }
                          .author-badge {
                            font-size: 0.85rem !important;
                            padding: 0.2rem 0.7rem !important;
                          }
                  }  
        
      `}</style>
    </section>
  );
}