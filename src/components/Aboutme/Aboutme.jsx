import { FiUser } from "react-icons/fi";

const Aboutme = () => {
  return (
    <section id="aboutme" className="flex h-fit flex-col p-10 text-sm">
      <h2 className="flex pb-5 text-2xl font-bold md:text-4xl 2xl:text-5xl">
        <FiUser />
        &nbsp;Sobre mi
      </h2>
      <p className="text-lg 2xl:text-xl">
        Soy un desarrollador fullstack proactivo y autodidacta, con una sólida
        experiencia en el desarrollo de aplicaciones web utilizando tecnologías
        como React, Angular, Express y MySQL. Mi enfoque se centra en la
        creación de aplicaciones y SPA eficientes, combinando un profundo
        conocimiento técnico con una atención meticulosa al detalle en la
        experiencia del usuario.
        <br />
        Mi capacidad para aprender de forma independiente me ha permitido
        mantenerme actualizado con las últimas tendencias y mejores prácticas en
        el desarrollo frontend. Sin embargo, también estoy comprometido con mi
        crecimiento académico y actualmente estoy cursando la carrera de
        Analista Programador Universitario, lo que me permite fortalecer y
        complementar mis habilidades con fundamentos teóricos y prácticas en un
        entorno académico.
      </p>
    </section>
  );
};

Aboutme.propTypes = {};

export default Aboutme;
