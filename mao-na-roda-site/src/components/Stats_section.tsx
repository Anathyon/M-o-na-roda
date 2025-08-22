import React, { useEffect, useRef, useState, useMemo } from "react";

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
    subtitle: "Avaliação 4.8/5 em plataformas",
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

function animateCountUp(el: HTMLElement, target: number, suffix: string) {
  let current = 0;
  const duration = 2000; // 2 seconds for a smoother animation
  const increment = target / (duration / 16);
  let frame: number;

  const step = () => {
    current += increment;
    if (current >= target) {
      current = target;
    }
    
    let displayValue: string;
    if (target >= 1000 && suffix.includes("K")) {
      displayValue = Math.floor(current / 1000) + suffix;
    } else {
      displayValue = Math.floor(current) + suffix;
    }
    el.textContent = displayValue;

    if (current < target) {
      frame = requestAnimationFrame(step);
    }
  };

  frame = requestAnimationFrame(step);
  return () => cancelAnimationFrame(frame);
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const refs = useMemo(() => Array.from({ length: stats.length }, () => React.createRef<HTMLDivElement>()), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const cleanups = stats.map((stat, i) => {
        const el = refs[i].current;
        if (el) {
          return animateCountUp(el, stat.number, stat.suffix);
        }
        return () => {};
      });
      return () => cleanups.forEach((fn) => fn());
    }
  }, [isVisible, refs]);

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">
            Números que <span className="stats-title-highlight">Impressionam</span>
          </h2>
          <p className="stats-subtitle">Nossa comunidade não para de crescer. Veja nossos resultados.</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={stat.label} className="stats-card">
              <div className="stats-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stats-content">
                <div ref={refs[i]} className="stats-number">0</div>
                <h3 className="stats-label">{stat.label}</h3>
                <p className="stats-card-subtitle">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .stats-section {
          padding: 5rem 0;
          position: relative;
          top: 6rem;
          background: #f8f9fa;
          overflow: hidden;
        }
        .stats-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .stats-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .stats-title {
          font-size: 2.2rem;
          font-weight: 900;
          color: #212529;
          margin-bottom: 0.5rem;
        }
        .stats-title-highlight {
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stats-subtitle {
          font-size: 1.1rem;
          color: #6C757D;
          max-width: 600px;
          margin: 0 auto;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .stats-card {
          background: #fff;
          padding: 2rem;
          border-radius: 1.25rem;
          box-shadow: 0 1rem 2.5rem rgba(30, 121, 247, 0.08);
          border: 1px solid #e9ecef;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .stats-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 1.5rem 3rem rgba(30, 121, 247, 0.15);
        }
        .stats-icon {
          width: 5rem;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1E79F7, #0D6EFD);
          border-radius: 50%;
          font-size: 2rem;
          color: #fff;
          box-shadow: 0 0.5rem 1.5rem rgba(30, 121, 247, 0.25);
          margin-bottom: 1.5rem;
        }
        .stats-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stats-number {
          font-size: 3rem;
          font-weight: 900;
          color: #2d5ed0;
          margin-bottom: 0.25rem;
        }
        .stats-label {
          font-size: 1.2rem;
          font-weight: 700;
          color: #343a40;
          margin-bottom: 0.5rem;
        }
        .stats-card-subtitle {
          font-size: 0.95rem;
          color: #6C757D;
          line-height: 1.5;
        }

        /* Small devices (sm) */
        @media (min-width: 576px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        /* Medium devices (md) */
        @media (min-width: 768px) {
          .stats-container { padding: 0 2rem; }
          .stats-title { font-size: 2.5rem; }
          .stats-card { padding: 2.5rem; }
        }

        /* Large devices (lg) */
        @media (min-width: 992px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .stats-number { font-size: 3.5rem; }
        }

        /* Extra large devices (xl) */
        @media (min-width: 1200px) {
          .stats-container { padding: 0 3rem; }
          .stats-title { font-size: 2.8rem; }
          .stats-grid { gap: 2rem; }
          .stats-icon { width: 5.5rem; height: 5.5rem; font-size: 2.2rem; }
          .stats-number { font-size: 4rem; }
        }
      `}</style>
    </section>
  );
}