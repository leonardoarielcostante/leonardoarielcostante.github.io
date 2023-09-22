import { BsFillEnvelopeAtFill, BsGithub, BsLinkedin } from 'react-icons/bs'
import '../styles/Header.css'

function Presentacion () {
  return (
    <section id='inicio' className='presentacion'>
      <div className='divSize'>
        <div className='divTexto'>
          <p>Hola! me llamo <label className='nombre'>Leonardo</label></p>
          <p className='desarrollador'>DESARROLLADOR FRONTEND</p>
          <p className='texto'>Llevo 1 año especializandome en Js y sus frameworks.</p>
          <div className='contacto'>
            <p>Contacto:</p>
            <a href="https://www.linkedin.com/in/leonardo-ariel-costante/" target='_blank' rel='noreferrer'>
              <BsLinkedin />
            </a>
            <a href="https://github.com/leonardoarielcostante" target='_blank' rel='noreferrer'>
              <BsGithub />
            </a>
            <a href="mailto:leonardoarielcostante@gmail.com">
              <BsFillEnvelopeAtFill />
            </a>
          </div>
          <a href='https://drive.google.com/file/d/1GNUvaTqkDWj0De8TFpyeKSaBVgiQ_URy/view?usp=drive_link' target='_blank' rel='noreferrer' className='descargarCv'>Descargar Cv</a>
        </div>
        <div>
          <img className='imgHeader' src="./src/images/foto.png" />
        </div>
      </div>
    </section>
  )
}

export default Presentacion