import { useEffect, useRef } from "react";

const stats = [
  {
    icon: "fas fa-users",
    number: 50000,
    label: "Clientes Atendidos",
    subtitle: "Famílias em São Paulo e região metropolitana",
    suffix: "K+",
  },
  {
    icon: "fas fa-user-check",
    number: 2000,
    label: "Profissionais",
    subtitle: "Com antecedentes e referências verificadas",
    suffix: "",
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
]

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
  const refs = [ref0, ref1, ref2, ref3];

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    stats.forEach((stat, i) => {
      const cleanup = animateCountUp(refs[i], stat.number, stat.suffix);
      cleanups.push(cleanup);
    });

    return () => cleanups.forEach((fn) => fn && fn());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="stats-section py-20 relative overflow-hidden top-[6.5rem] flex"
      style={{
        background: "linear-gradient(135deg, #f8faff 0%, #ffffff 100%)",
      }}
    >
      <div className="w-full mx-auto" style={{ maxWidth: "75rem", padding: "0 5%" }}>
        <div className="section-header text-center mb-12">
          <h2 className="section-title text-[2.5rem] font-extrabold text-gray-900 mb-2">
            Números que Impressionam
          </h2>
        </div>
        <div className="stats-grid flex flex-wrap justify-center gap-12 relative z-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stats-card flex-1 min-w-[200px] max-w-[280px] text-center relative"
              style={{
                background: "linear-gradient(135deg, rgba(30, 121, 247, 0.05), rgba(30, 121, 247, 0.1))",
                padding: "3rem 2rem",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(30, 121, 247, 0.15)",
              }}
            >
              <div
                className="stats-icon mx-auto mb-8 flex items-center justify-center"
                style={{
                  width: "100px",
                  height: "100px",
                  background: "white",
                  borderRadius: "50%",
                  fontSize: "2.5rem",
                  color: "#1E79F7",
                  boxShadow: "0 15px 35px rgba(30, 121, 247, 0.2)",
                }}
              >
                <i className={stat.icon}></i>
              </div>
              <div className="stats-content">
                <div
                  ref={refs[i]}
                  className="stats-number"
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
                  className="stats-label"
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
                  className="stats-subtitle"
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
    </section>
  );
}
