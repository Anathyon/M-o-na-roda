export default function AdvantagesSection() {
  return (
    <section
      id="sobre"
      className="advantages-section"
    >
      <div className="advantages-container">
        <div className="advantages-header">
          <h2 className="advantages-title">
            Uma plataforma, duas soluções
          </h2>
          <p className="advantages-subtitle">
            Conectamos quem precisa com quem sabe fazer
          </p>
        </div>
      </div>
      <style>{`
        .advantages-section {
          background: #fff;
          border-radius: 2rem;
          margin: 2.5rem auto;
          padding: 3.5rem 0;
          position: relative;
          top: 6rem;
          max-width: 1200px;
          box-shadow: 0 2px 24px 0 rgba(30,121,247,0.06);
        }
        .advantages-container {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .advantages-header {
          width: 100%;
          text-align: center;
        }
        .advantages-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #212529;
          margin-bottom: 1rem;
        }
        .advantages-subtitle {
          font-size: 1.25rem;
          color: #6C757D;
          margin-bottom: 0;
        }
        /* Tablet */
        @media (max-width: 1024px) {
          .advantages-section {
            padding: 2.5rem 0.5rem;
            border-radius: 2rem;
            margin: 2rem 0 3rem 0;
            max-width: 98vw;
          }
          .advantages-title {
            font-size: 2rem;
          }
          .advantages-subtitle {
            font-size: 1.1rem;
          }
        }
        /* Mobile */
        @media (max-width: 600px) {
          .advantages-section {
            padding: 2rem 0.5rem;
            border-radius: 1.2rem;
            margin: 1.2rem 0 2rem 0;
            max-width: 100vw;
          }
          .advantages-container {
            padding: 0 0.5rem;
          }
          .advantages-title {
            font-size: 1.4rem;
            margin-bottom: 0.7rem;
          }
          .advantages-subtitle {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}