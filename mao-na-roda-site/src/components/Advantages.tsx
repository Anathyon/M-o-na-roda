export default function AdvantagesSection() {
  return (
    <section id="sobre" className="advantages-section">
      <div className="advantages-container">
        <div className="advantages-header">
          <h2 className="advantages-title">Uma plataforma, duas soluções</h2>
          <p className="advantages-subtitle">
            Conectamos quem precisa com quem sabe fazer
          </p>
        </div>
      </div>
      <style>{`
        .advantages-section {
          background: #fff;
          border-radius: 1.5rem;
          margin: 2.5rem auto;
          padding: 3.5rem 2rem;
          position: relative;
          top: 6rem;
          max-width: 1140px;
          box-shadow: 0 4px 24px rgba(30, 120, 247, 0.459);
        }
        .advantages-container {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .advantages-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #212529;
          margin-bottom: 0.75rem;
        }
        .advantages-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          margin-bottom: 0;
        }

        /* Tablet */
        @media (max-width: 992px) {
          .advantages-section {
            margin: 2rem 1rem;
            padding: 2.5rem 1.5rem;
            top: 4rem;
          }
          .advantages-title {
            font-size: 2rem;
          }
          .advantages-subtitle {
            font-size: 1.1rem;
          }
        }

        /* Mobile */
        @media (max-width: 576px) {
          .advantages-section {
            padding: 2rem 1rem;
            margin-top: 5rem;
          }
          .advantages-title {
            font-size: 1.5rem;
          }
          .advantages-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}