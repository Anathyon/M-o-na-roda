import { useEffect, useRef, useMemo } from "react";

const stats = [
  {
    icon: "fas fa-users",
    number: 30000,
    label: "Clientes Atendidos",
    subtitle: "Famílias em todo o Brasil",
    suffix: "K+",
  },
  {
    icon: "fas fa-user-check",
    number: 10000,
    label: "Profissionais",
    subtitle: "Com antecedentes e referências verificadas",
    suffix: "K+",
  },
  {
    icon: "fas fa-shield-alt",
    number: 98,
    label: "Satisfação",
    subtitle: "Avaliação 4.8/5 no ReclameAqui e Google",
    suffix: "%",
  },
  {
    icon: "fas fa-clock",
    number: 15,
    label: "Minutos",
    subtitle: "Tempo médio para encontrar um profissional",
    suffix: "",
  },
];

function animateCountUp(
  ref: React.RefObject<HTMLDivElement | null>,
  target: number,
  suffix: string
) {
  let current = 0;
  const duration = 1500;
  const increment = target / (duration / 16);
  let frame: number;

  function animate() {
    current += increment;
    if (current >= target) current = target;
    if (ref.current) {
      if (target >= 1000) {
        ref.current.textContent = Math.floor(current / 1000) + suffix;
      } else {
        ref.current.textContent = Math.floor(current) + suffix;
      }
    }
    if (current < target) frame = requestAnimationFrame(animate);
  }

  animate();
  return () => cancelAnimationFrame(frame);
}

export default function StatsSection() {
  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const refs = useMemo(() => [ref0, ref1, ref2, ref3], []);

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    stats.forEach((stat, i) => {
      const cleanup = animateCountUp(refs[i], stat.number, stat.suffix);
      cleanups.push(cleanup);
    });

    return () => cleanups.forEach((fn) => fn && fn());
  }, [refs]);

  return (
    <section
      className="stats-section-main py-20 relative overflow-hidden top-[6rem] flex justify-center items-center"
      style={{
        background: "linear-gradient(135deg, #d1d1d1 0%, #e7e7e7 100%)",
        padding: "3% 0",
      }}
    >
      <div className="stats-section-container w-full mx-auto" style={{ maxWidth: "75rem", padding: "0 5%" }}>
        <div className="stats-section-header text-center mb-12">
          <h2 className="stats-section-title text-[2.5rem] font-extrabold text-shadow-gray-900 text-gray-700 p-4">
            Números que Impressionam
          </h2>
        </div>

        <div className="stats-section-grid w-auto flex flex-wrap justify-center gap-12 relative z-10" style={{ padding: "1rem 2rem" }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stats-section-card flex-1 w-auto text-center relative"
              style={{
                background: "linear-gradient(135deg, rgba(30, 121, 247, 0.05), rgba(30, 121, 247, 0.1))",
                padding: "3rem 2rem",
                borderRadius: "1.25rem",
                boxShadow: "0 1.25rem 2.5rem rgba(30, 121, 247, 0.15)",
                minWidth: "220px",
                maxWidth: "340px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div
                className="stats-section-icon mx-auto mb-8 flex items-center justify-center"
                style={{
                  width: "6.25rem",
                  height: "6.25rem",
                  background: "white",
                  borderRadius: "50%",
                  fontSize: "2.5rem",
                  color: "#1E79F7",
                  boxShadow: "0 0.9375rem 2.1875rem rgba(30, 121, 247, 0.2)",
                  marginBottom: "2rem"
                }}
              >
                <i className={stat.icon}></i>
              </div>
              <div className="stats-section-content flex flex-col items-center">
                <div
                  ref={refs[i]}
                  className="stats-section-number"
                  style={{
                    fontSize: "4.5rem",
                    fontWeight: 900,
                    background: "linear-gradient(135deg, #1E79F7, #0D6EFD)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "1rem",
                  }}
                >
                  0
                </div>
                <div
                  className="stats-section-label"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#212529",
                    marginBottom: "1rem",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  className="stats-section-subtitle"
                  style={{
                    fontSize: "1rem",
                    color: "#6C757D",
                  }}
                >
                  {stat.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        /* MOBILE */
        @media (max-width: 480px) {
          .stats-section-main {
            padding: 2rem 0.5rem !important;
          }
          .stats-section-container {
            padding: 0 0.5rem !important;
            max-width: 100vw !important;
          }
          .stats-section-header {
            margin-bottom: 2rem !important;
          }
          .stats-section-title {
            font-size: 1.5rem !important;
            padding: 0.5rem 0 !important;
          }
          .stats-section-grid {
            gap: 1.2rem !important;
            padding: 0 !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .stats-section-card {
            max-width: 95vw !important;
            min-width: 0 !important;
            padding: 1.5rem 0.7rem !important;
            font-size: 0.95rem !important;
            margin: 0 auto 0 auto !important;
            border-radius: 1rem !important;
          }
          .stats-section-icon {
            width: 3.5rem !important;
            height: 3.5rem !important;
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }
          .stats-section-number {
            font-size: 2.2rem !important;
            margin-bottom: 0.5rem !important;
          }
          .stats-section-label {
            font-size: 1.1rem !important;
            margin-bottom: 0.5rem !important;
          }
          .stats-section-subtitle {
            font-size: 0.95rem !important;
          }
        }
        /* TABLET */
        @media (min-width: 481px) and (max-width: 1024px) {
          .stats-section-main {
            padding: 2.5rem 1rem !important;
          }
          .stats-section-container {
            padding: 0 1.5rem !important;
            max-width: 98vw !important;
          }
          .stats-section-header {
            margin-bottom: 2.5rem !important;
          }
          .stats-section-title {
            font-size: 2rem !important;
            padding: 0.7rem 0 !important;
          }
          .stats-section-grid {
            gap: 2rem !important;
            padding: 1rem 0.5rem !important;
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          .stats-section-card {
            max-width: 45vw !important;
            min-width: 180px !important;
            padding: 2.2rem 1.2rem !important;
            font-size: 1rem !important;
            margin: 0.5rem !important;
            border-radius: 1.1rem !important;
          }
          .stats-section-icon {
            width: 4.5rem !important;
            height: 4.5rem !important;
            font-size: 2rem !important;
            margin-bottom: 1.2rem !important;
          }
          .stats-section-number {
            font-size: 3rem !important;
            margin-bottom: 0.7rem !important;
          }
          .stats-section-label {
            font-size: 1.2rem !important;
            margin-bottom: 0.7rem !important;
          }
          .stats-section-subtitle {
            font-size: 1rem !important;
          }
        }
        /* DESKTOP */
        @media (min-width: 1025px) {
          .stats-section-main {
            padding: 3% 0 !important;
          }
          .stats-section-container {
            padding: 0 5% !important;
            max-width: 75rem !important;
          }
          .stats-section-header {
            margin-bottom: 3rem !important;
          }
          .stats-section-title {
            font-size: 2.5rem !important;
            padding: 1rem 0 !important;
          }
          .stats-section-grid {
            gap: 3rem !important;
            padding: 1rem 2rem !important;
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          .stats-section-card {
            max-width: 340px !important;
            min-width: 220px !important;
            padding: 3rem 2rem !important;
            font-size: 1.1rem !important;
            margin: 1rem !important;
            border-radius: 1.25rem !important;
          }
          .stats-section-icon {
            width: 6.25rem !important;
            height: 6.25rem !important;
            font-size: 2.5rem !important;
            margin-bottom: 2rem !important;
          }
          .stats-section-number {
            font-size: 4.5rem !important;
            margin-bottom: 1rem !important;
          }
          .stats-section-label {
            font-size: 1.4rem !important;
            margin-bottom: 1rem !important;
          }
          .stats-section-subtitle {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}