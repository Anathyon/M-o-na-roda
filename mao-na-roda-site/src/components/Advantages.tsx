export default function AdvantagesSection() {
  return (
    <section
      id="sobre"
      className="advantages md:py-[100px] bg-white relative overflow-hidden top-[6rem] rounded-2xl md:rounded-full my-8 md:my-[5%] "
       style={{margin: "2.5rem 0"}}
     >
      <div className="container mx-auto flex flex-col text-center w-full md:px-[5%] relative right-80">
        <div className="section-header flex flex-col items-center w-full md:relative md:left-[30%]">
          <h2 className="section-title text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Uma plataforma, duas soluções
          </h2>
          <p className="section-subtitle text-base md:text-lg text-gray-500 max-w-full md:max-w-xl mx-auto mb-2 md:mb-0">
            Conectamos quem precisa com quem sabe fazer
          </p>
        </div>
      </div>
      <style>{`
       
        @media (max-width: 480px) {
                .advantages {
                  padding: 2rem 0.5rem !important;
                  border-radius: 2rem !important;
                  margin: 2rem 0 3rem 0 !important;
                }
                .advantages .container {
                  padding: 0 0.5rem !important;
                  width: 100vw !important;
                }
                .advantages .section-header {
                  left: 0 !important;
                  width: 100% !important;
                  padding: 0 !important;
                }
                .advantages .section-title {
                  font-size: 2rem !important;
                  margin-bottom: 0.8rem !important;
                }
                .advantages .section-subtitle {
                  font-size: 1rem !important;
                  max-width: 95vw !important;
                  margin-bottom: 1rem !important;
                }
        }
              
        @media (min-width: 481px) and (max-width: 1024px) {
                .advantages {
                  padding: 2.5rem 1rem !important;
                  border-radius: 3rem !important;
                  margin: 3rem 0 4rem 0 !important;
                }
                .advantages .container {
                  padding: 0 1rem !important;
                  width: 90vw !important;
                }
                .advantages .section-header {
                  left: 0 !important;
                  width: 100% !important;
                  padding: 0 !important;
                }
                .advantages .section-title {
                  font-size: 2.5rem !important;
                  margin-bottom: 1rem !important;
                }
                .advantages .section-subtitle {
                  font-size: 1.2rem !important;
                  max-width: 80vw !important;
                  margin-bottom: 1.2rem !important;
                }
       }
`}</style>
    </section>
  );
}