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
    </section>
  );
}