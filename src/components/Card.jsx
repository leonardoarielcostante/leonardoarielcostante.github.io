/* eslint-disable react/prop-types */
import '../styles/Card.css'

function Card ({ foto, titulo, pagina, iconos }) {
  return (
    <a className='aCard' target='_blank' rel="noreferrer" href={`https://leonardoarielcostante.github.io/${pagina}`}>
      <img className='cardImg' src={`./src/images/${foto}`} alt={foto} />
      <div className='cardContenido'>
        <p>{titulo}</p>
        <div className='iconosCard'>
          {iconos.map((icon) => (
              <span key={icon.key}>{icon}</span>
          ))}
        </div>
        <p className='verMas'>Ver mas...</p>
      </div>
    </a>
  )
}

export default Card