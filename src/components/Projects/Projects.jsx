import ImgCard from "../ImgCard/ImgCard";

const Projects = () => {
  const ecommerce = ["React", "TypeScript", "TailWind"];
  const landing = ["Vite", "TailWind"];

  return (
    <section className="flex flex-col p-10">
      <h2 className="pb-5 text-4xl font-bold">✅ Proyectos</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ImgCard
          title="E-commerce profesional"
          description="E-commerce web, SPA, 100% responsive. Modelo minimalista con lista de productos y carrito funcional, utilizando Fake Store API."
          image="./images/ecommerce.webp"
          technologies={ecommerce}
        />
        <ImgCard
          title="Landing Page"
          description="Landing page con diseño profesional responsive, con ofrecimiento de planes y recomendaciones"
          image="./images/landing.webp"
          technologies={landing}
        />
      </div>
    </section>
  );
};

export default Projects;
