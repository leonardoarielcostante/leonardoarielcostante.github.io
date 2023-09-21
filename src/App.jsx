import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Proyectos from './components/Proyectos.jsx'
import SobreMi from './components/SobreMi.jsx'
import useScreen from './functions/useScreen.jsx'
import NavResponsive from './components/NavResponsive.jsx'

function App () {
  const tamaño = useScreen()
  return (
    <>
      {tamaño > 850 ? <Nav /> : <NavResponsive />}
      <Header />
      <SobreMi />
      <Proyectos />
    </>
  )
}

export default App
