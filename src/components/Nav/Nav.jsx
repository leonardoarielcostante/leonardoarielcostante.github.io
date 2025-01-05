import { MyButton } from "../MyButton";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const Nav = () => {
  return (
    <aside className="sticky left-0 top-0 flex max-h-screen w-1/4 flex-col justify-between shadow shadow-black">
      <nav className="w-full px-6">
        <p className="py-5 text-3xl font-bold">Leonardo Costante</p>
        <ul className="flex flex-col space-y-1 font-light 2xl:text-xl">
          <li>
            <a href="#" className="underline-offset-4 hover:underline">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="underline-offset-4 hover:underline">
              Experiencia
            </a>
          </li>
          <li>
            <a href="#" className="underline-offset-4 hover:underline">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#" className="underline-offset-4 hover:underline">
              Sobre mi
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
