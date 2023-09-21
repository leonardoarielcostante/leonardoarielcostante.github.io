import '../styles/SobreMi.css'

function SobreMi () {
  return (
    <section id='sobreMi' className='sobreMiSection'>
        <div className='linea-tiempo'>
          <div className='momento'>
            <h3>2023</h3>
            <div className='momentoDiv'>
              <p className='descripcion'>JRC Softcoding Solutions</p>
              <p className='momentoTexto'>
                Puesto como desarrollador frontend.<br />
                Tareas: Enmaquetado, logica,  mantenimiento, responsive. <br />
                Tecnologias utilizadas: Angular, Typescript e Ionic.<br />
                Metodoligia SCRUM.
              </p>
            </div>
          </div>
        </div>
        <div className='sobreMiTextos'>
          <p>
            Resido en Argentina, provincia de Buenos Aires, actualmente aspiro a convertirme en desarrollador full stack.
          </p>
          <p className='cualidades'>
            ATENTO - DEDICADO - ORGANIZADO
          </p>
          <p>
            No dudes en contactarme, estoy seguro que podemos realizar grandes proyectos.
          </p>
        </div>
    </section>
  )
}

export default SobreMi