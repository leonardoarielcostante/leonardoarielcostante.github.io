import '../styles/Proyectos.css'
import Card from './Card.jsx'
import { IoLogoIonic } from 'react-icons/io'
import { BiLogoReact, BiLogoTailwindCss, BiLogoAngular } from 'react-icons/bi'

function Proyectos () {
  return (
    <section id='proyectos' className='proyectos'>
      <div className='divProyectos'>
        <div className='divCardProyectos'>
          <Card foto='recetas.png' titulo='Web de recetas' iconos={[<BiLogoReact key='react' />, <BiLogoTailwindCss key='tailwind' />]} pagina='appderecetas' />
          <Card foto='formulario.png' titulo='Formulario' iconos={[<BiLogoAngular key='Angular' />, <IoLogoIonic key='Ionic' />]} pagina='FormularioAngular' />
          <Card foto='peliculas.png' titulo='Web de Peliculas' iconos={[<BiLogoReact key='react' />, <BiLogoTailwindCss key='tailwind' />]} pagina='buscadordepeliculas' />
          <Card foto='listaderegalos.png' titulo='Lista De Regalos' iconos={[<BiLogoReact key='react' />, <BiLogoTailwindCss key='tailwind' />]} pagina='carritodecompras' />
          <div className='horizontal'>
            <h3>Proyectos</h3>
          </div>
          <div className='vertical'></div>
        </div>
      </div>
    </section>
  )
}

export default Proyectos