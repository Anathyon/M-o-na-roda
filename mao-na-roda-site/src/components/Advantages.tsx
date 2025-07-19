export default function AdvantagesSection() {
  return (
    <section
      id="sobre"
      className="advantages py-[100px] bg-white relative overflow-hidden top-[6rem] rounded-full" style={{margin:"5% 0 7% 0"}}
    >
      <div className="container mx-auto flex text-center w-auto" style={{ padding: "0 5%" }}>
        <div className="section-header flex flex-col items-center relative left-[30%]">
          <h2 className="section-title text-4xl font-extrabold text-gray-900 mb-2">
            Uma plataforma, duas soluções
          </h2>
          <p className="section-subtitle text-lg text-gray-500 max-w-xl mx-auto">
            Conectamos quem precisa com quem sabe fazer
          </p>
        </div>
      </div>
    </section>
  );
}