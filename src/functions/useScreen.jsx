import { useEffect, useState } from 'react'

function useScreen () {
  const [screenSize, setScreenSize] = useState(0)

  useEffect(() => {
    function updateSize () {
      setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return screenSize
}

export default useScreen