import Card from "../Card/Card";
import { FiBriefcase } from "react-icons/fi";

const Experience = () => {
  const JRC = [
    "Desarrollo y mantenimiento de nuevas funcionalidades en una aplicación web y móvil de gestión de inventario.",
    "Desarrollo y mantenimiento de una aplicación para la gestión de portafolios.",
    "Algunas tecnologías utilizadas son Angular, Ionic y RxDb.",
  ];
  const SISTA = [
    "Diseño e implementación de flujos automatizados en n8n, integrando llamadas a APIs externas y modelos de IA.",
    "Desarrollo de scripts para carga y obtención de datos en sistemas tercerizados.",
    "Desarrollo de script con puppeteer para la obtención de datos y generación de reportes diarios.",
    "Desarrollo de consultas SQL en base de datos para importar información a un nuevo sistema.",
  ];

  const ZIRKEL = [
    "Desarrollo en curso de un sistema de monetización para una herramienta online, incluyendo gestión de usuarios, pagos y acceso a contenido.",
    "Creación de landing pages, sistemas de registro y login, y mantenimiento integral de sitios web.",
    "Utilizando ThreeJs se desarrolló un sistema con videos e imágenes para realizar presentaciones con la posibilidad de ingresar en diferentes salas.",
  ];

  return (
    <section id="experience" className="flex h-fit flex-col p-10">
      <h2 className="flex pb-5 text-2xl font-bold md:text-4xl 2xl:text-5xl">
        <FiBriefcase />
        &nbsp;Experiencia
      </h2>
      <div className="flex flex-col items-center justify-center space-y-3">
        <Card
          title="FullStack Developer"
          company="Zirkel | 2025 - Act"
          responsibilities={ZIRKEL}
        />
        <Card
          title="Automation Specialist"
          company="Sista SA. | 2020 - Act"
          responsibilities={SISTA}
        />
        <Card
          title="FullStack Developer"
          company="JRC SoftCoding Solutions. | 2023 - 2025"
          responsibilities={JRC}
        />
      </div>
    </section>
  );
};

export default Experience;
