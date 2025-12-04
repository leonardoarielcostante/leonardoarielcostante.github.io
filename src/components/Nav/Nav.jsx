import { MyButton } from "../MyButton";
import {
  FiLinkedin,
  FiGithub,
  FiCheckSquare,
  FiBriefcase,
  FiUser,
  FiTerminal,
} from "react-icons/fi";

const Nav = () => {
  return (
    <aside className="sticky left-0 top-0 flex max-h-screen w-12 flex-col justify-between shadow shadow-black transition-all ease-in-out md:w-1/4">
      <nav className="flex w-full justify-center pt-2 md:block md:px-6">
        <p className="hidden py-5 text-xl font-bold md:block xl:text-3xl">
          Leonardo Costante
        </p>
        <ul className="flex flex-col space-y-1 font-light xl:text-xl">
          <li>
            <a
              href="#home"
              className="flex w-fit items-center justify-center rounded-full p-2 hover:bg-gray-200"
            >
              <FiTerminal />
              <span className="hidden md:block">&nbsp;Inicio</span>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="flex w-fit items-center justify-center rounded-full p-2 hover:bg-gray-200"
            >
              <FiBriefcase />
              <span className="hidden md:block">&nbsp;Experiencia</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="flex w-fit items-center justify-center rounded-full p-2 hover:bg-gray-200"
            >
              <FiCheckSquare />
              <span className="hidden md:block">&nbsp;Proyectos</span>
            </a>
          </li>
          <li>
            <a
              href="#aboutme"
              className="flex w-fit items-center justify-center rounded-full p-2 hover:bg-gray-200"
            >
              <FiUser />
              <span className="hidden md:block">&nbsp;Sobre mi</span>
            </a>
          </li>
        </ul>
      </nav>
      <footer className="space-y-2 p-1 pb-2 md:m-6">
        <MyButton
          text={"Descargar CV"}
          link={
            "https://drive.google.com/file/d/1UjItX1NRUTk0Pib_z7VREZVqswTbawSu/view?usp=sharing"
          }
          className={"hidden hover:bg-gray-100 md:block 2xl:text-xl"}
        />
        <MyButton
          link={
            "https://drive.google.com/file/d/1UjItX1NRUTk0Pib_z7VREZVqswTbawSu/view?usp=sharing"
          }
          text={"CV"}
          className={"m-0 py-0 text-sm hover:bg-gray-100 md:hidden 2xl:text-xl"}
        />
        <div className="flex flex-col items-center justify-center space-y-2 text-xl md:flex md:flex-row md:space-x-2 md:space-y-0 2xl:text-2xl">
          <a
            href="https://www.linkedin.com/in/leonardo-ariel-costante/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
          <a href="https://github.com/leonardoarielcostante" target="_blank">
            <FiGithub />
          </a>
        </div>
      </footer>
    </aside>
  );
};

export default Nav;
