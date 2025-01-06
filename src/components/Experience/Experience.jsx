import Card from "../Card/Card";
import { FiBriefcase } from "react-icons/fi";

const Experience = () => {
  const JRC = [
    "Desarrollo y mantenimiento de nuevas funcionalidades en una aplicación web y móvil de gestión de inventario.",
    "Desarrollo y mantenimiento de una aplicación para la gestión de portafolios.",
    "Algunas tecnologías utilizadas son Angular, Ionic y RxDb.",
  ];
  const SISTA = [
    "Desarrollo de scripts para carga y obtencion de datos en sistemas tercerizados.",
    "Desarrollo de script con puppeteer para la obtencion de datos y generacion de reportes diarios.",
    "Desarrollo de consultas SQL en base de datos para importar informacion a un nuevo sistema.",
  ];

  return (
    <section className="flex h-screen flex-col p-10">
      <h2 className="flex pb-5 text-4xl font-bold 2xl:text-5xl">
        <FiBriefcase />
        &nbsp;Experiencia
      </h2>
      <div className="flex flex-col items-center justify-center space-y-3">
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
