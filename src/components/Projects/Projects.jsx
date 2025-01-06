import ImgCard from "../ImgCard/ImgCard";
import { FiCheckSquare } from "react-icons/fi";

const Projects = () => {
  const ecommerce = ["React", "TypeScript", "TailWind"];
  const landing = ["Vite", "TailWind"];
  const tareitas = ["React", "Typescript", "Express", "MySQL", "Tailwind"];

  return (
    <section className="flex h-screen flex-col p-10">
      <h2 className="flex pb-5 text-4xl font-bold 2xl:text-5xl">
        <FiCheckSquare />
        &nbsp;Proyectos
      </h2>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <ImgCard
          title="E-commerce profesional"
          description="E-commerce web, SPA, 100% responsive. Modelo minimalista con lista de productos y carrito funcional, utilizando Fake Store API."
          image="./images/ecommerce.webp"
          technologies={ecommerce}
        />
        <ImgCard
          title="Landing Page"
          description="Landing page con diseño profesional responsive, con ofrecimiento de planes y recomendaciones."
          image="./images/landing.webp"
          technologies={landing}
        />
        <ImgCard
          title="Tareitas"
          description="App FullStack de gestion de tareas, destaca por calcular el tiempo que debes dedicar a cada tarea diariamente segun la fecha de finalizacion que desees, lo calcula igualmente si olvidas realizar la tarea diaria, tambien permite modificar tiempos anteriores."
          image="./images/tareitas.webp"
          technologies={tareitas}
        />
      </div>
    </section>
  );
};

export default Projects;
