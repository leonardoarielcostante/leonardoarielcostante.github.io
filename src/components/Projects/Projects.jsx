import ImgCard from "../ImgCard/ImgCard";
import { FiCheckSquare } from "react-icons/fi";

const Projects = () => {
  const ecommerce = ["React", "TypeScript", "TailWind"];
  const landing = ["Vite", "TailWind"];
  const tareitas = ["React", "Typescript", "Express", "MySQL", "Tailwind"];

  return (
    <section id="projects" className="flex h-fit flex-col p-10">
      <h2 className="flex pb-5 text-2xl font-bold md:text-4xl 2xl:text-5xl">
        <FiCheckSquare />
        &nbsp;Proyectos
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <ImgCard
          title="E-commerce profesional"
          description="E-commerce web, SPA, 100% responsive. Modelo minimalista con lista de productos y carrito funcional utilizando Fake Store API."
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
          description="App FullStack de gestión de tareas, destaca por calcular el tiempo que debes dedicar a cada tarea diariamente según la fecha de finalización que desees, lo calcula igualmente si olvidas realizar la tarea diaria, también permite modificar tiempos anteriores."
          image="./images/tareitas.webp"
          technologies={tareitas}
        />
      </div>
    </section>
  );
};

export default Projects;
