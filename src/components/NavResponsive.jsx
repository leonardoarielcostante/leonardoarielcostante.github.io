import '../styles/NavResponsive.css'
import { BsList } from 'react-icons/bs'
import { useState } from 'react'

function NavResponsive () {
  const [isOpen, setIsOpen] = useState(false)

  const handleProyectosClick = () => {
    const proyectosSection = document.getElementById('proyectos');
    if (proyectosSection) {
      const offset = proyectosSection.offsetTop;
      window.scrollTo({ top: offset -60, behavior: 'smooth' });
    }
  };
  return (
    <nav className='responsiveNav'>
      <button onClick={() => setIsOpen(!isOpen)}><BsList /></button>
      <div className={`responsiveDivNav ${isOpen ? 'open' : ''}`}>
          <label className="responsiveLogo">
            <img width='100' src="./src/img/Logo.png" />
          </label>
        <div className='responsiveDivLista'>
          <ul className='responsiveLista'>
            <li><a href='#inicio' onClick={() => setIsOpen(false)}>Inicio</a></li>
            <li><a href='#sobreMi' onClick={() => setIsOpen(false)}>Sobre Mi</a></li>
            <li><a onClick={() => [setIsOpen(false), handleProyectosClick()]}>Proyectos</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavResponsive