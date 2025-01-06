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
    <aside className="sticky left-0 top-0 flex max-h-screen w-1/4 min-w-36 flex-col justify-between shadow shadow-black">
      <nav className="w-full px-6">
        <p className="py-5 text-xl font-bold xl:text-3xl">Leonardo Costante</p>
        <ul className="flex flex-col space-y-1 font-light xl:text-xl">
          <li>
            <a
              href="#"
              className="flex w-fit items-center rounded-full p-2 hover:bg-gray-200"
            >
              <FiTerminal />
              &nbsp;Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex w-fit items-center rounded-full p-2 hover:bg-gray-200"
            >
              <FiBriefcase />
              &nbsp;Experiencia
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex w-fit items-center rounded-full p-2 hover:bg-gray-200"
            >
              <FiCheckSquare />
              &nbsp;Proyectos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex w-fit items-center rounded-full p-2 hover:bg-gray-200"
            >
              <FiUser />
              &nbsp;Sobre mi
            </a>
          </li>
        </ul>
      </nav>
      <footer className="m-6 space-y-2 pb-2">
        <MyButton
          text={"Descargar CV"}
          className={"hover:bg-gray-100 2xl:text-xl"}
        />
        <div className="xl flex justify-center space-x-2 text-xl 2xl:text-2xl">
          <a href="#">
            <FiLinkedin />
          </a>
          <a href="#">
            <FiGithub />
          </a>
        </div>
      </footer>
    </aside>
  );
};

export default Nav;
