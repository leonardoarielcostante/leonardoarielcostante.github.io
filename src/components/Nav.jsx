import '../styles/Nav.css'
import useWindowScrollPositions from '../functions/useWindowScrollPositions'

export default function Nav () {
  const posicion = useWindowScrollPositions()

  const navBar = document.querySelector('nav')
  if (navBar && posicion !== 0) {
    navBar.classList.add('scrollNav')
  } else {
    navBar.classList.remove('scrollNav')
  }

  const handleProyectosClick = () => {
    const proyectosSection = document.getElementById('proyectos');
    if (proyectosSection) {
      const offset = proyectosSection.offsetTop;
      window.scrollTo({ top: offset -60, behavior: 'smooth' });
    }
  };

  return (
    <nav className='nav'>
      <label className="logo">
        <img width='100' src="./src/img/Logo.png" />
      </label>
    <div className='divNav'>
      <ul className='lista'>
        <li><a href='#inicio'>Inicio</a></li>
        <li><a href='#sobreMi'>Sobre Mi</a></li>
        <li><a onClick={() => handleProyectosClick()}>Proyectos</a></li>
      </ul>
    </div>
    </nav>
  )
}